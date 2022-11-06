import fs from 'fs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET() {
  const data = fs.readFileSync('src/data/example_summary.xml').toString()
  return new Response(data);
}
