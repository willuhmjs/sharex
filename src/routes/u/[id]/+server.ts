import type { RequestHandler } from './$types';
import Keyv from "keyv";

const keyv = new Keyv("sqlite://urls/urls.sqlite");

import { redirect } from '@sveltejs/kit';
export const GET: RequestHandler = async ({ params }) => {
    const url = await keyv.get(params.id);
    if (!url) return new Response("Not Found", { status: 404 });
    return redirect(301, url)
};