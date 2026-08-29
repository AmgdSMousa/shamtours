export default async function middleware(request) {
  const accept = request.headers.get('accept') || '';

  if (accept.includes('text/markdown')) {
    const url = new URL(request.url);
    url.pathname = '/llms-full.txt';

    const response = await fetch(url.toString());
    const markdown = await response.text();

    return new Response(markdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': '1250',
        'Vary': 'Accept',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }
}

export const config = {
  matcher: ['/', '/index.html']
};
