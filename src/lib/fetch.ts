export async function postFetch(
  url: RequestInfo | URL,
  { body, headers }: RequestInit
) {
  return await fetch(url, {
    cache: "force-cache",
    method: "POST",
    body,
    headers,
  })
    .then((res: Response) => {
      if (!res.ok) return Promise.reject(res.status);
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
}
