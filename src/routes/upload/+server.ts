import type { RequestHandler } from './$types';
import { API_KEY } from '$env/static/private';
import fs from "fs-extra";

export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData();
    const api_key = formData.get('api_key');
    if (api_key !== API_KEY) return new Response("Unauthorized", { status: 401 });
    const file: File = (formData.get('file') as File);
    fs.outputFileSync(`./files/${file.name}`, Buffer.from(await file.arrayBuffer()));
    return new Response(new URL(request.url).origin + '/' + file.name, { status: 201 })
};