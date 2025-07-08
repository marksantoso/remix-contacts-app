import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { createEmotionCache } from "~/emotion/emotion-cache";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  return new Promise<Response>((resolve, reject) => {
    try {
      const html = renderToString(
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
      );

      const chunks = extractCriticalToChunks(html);
      const styles = constructStyleTagsFromChunks(chunks);
      const fullHtml = `<!DOCTYPE html><html><head>${styles}</head><body>${html}</body></html>`;

      responseHeaders.set("Content-Type", "text/html");
      resolve(new Response(fullHtml, { status: responseStatusCode, headers: responseHeaders }));
    } catch (err) {
      reject(err);
    }
  });
}
