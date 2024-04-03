import type { RequestHandler } from './$types';
import fs from "fs-extra";
import { API_KEY } from '$env/static/private';
import Keyv from "keyv";

fs.ensureFileSync("urls/urls.sqlite");
const keyv = new Keyv("sqlite://urls/urls.sqlite");

export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData()
    const api_key = formData.get('api_key');
    if (api_key !== API_KEY) return new Response("Unauthorized", { status: 401 });
    const rawURL = formData.get("url");
    try {
        const url = new URL(rawURL as string);
        const tail = Math.random().toString(36).substring(2);
        keyv.set(tail, url.toString());
        return new Response(new URL(request.url).origin + '/u/' + tail, { status: 201 })

    } catch (e) {
        return new Response("Invalid URL", { status: 400 });
    }
};