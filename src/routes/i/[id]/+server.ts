import fs from 'fs-extra';
import { lookup } from 'mime-types';
import type { RequestHandler } from './$types';
export const GET: RequestHandler = async ({ params }) => {
   try {
    const file = fs.readFileSync(`./files/${params.id}`);
    return new Response(file, { headers: { 'Content-Type': lookup(params.id) } });
   } catch {
    return new Response("Not Found", { status: 404 });
   }
};