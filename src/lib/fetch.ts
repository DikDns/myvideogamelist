export async function textFetch(
  url: RequestInfo | URL,
  { body, headers, ...options }: RequestInit
) {
  return await fetch(url, {
    headers: { "Content-Type": "text/plain", ...headers },
    cache: "force-cache",
    body,
    ...options,
  })
    .then((res: Response) => {
      if (res.ok) return res.json();
      return Promise.reject(res);
    })
    .then((data) => data);
}
