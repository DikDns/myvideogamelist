export async function postFetch(url: URL, { body, headers }: RequestInit) {
  return await fetch(url, { method: "POST", body, headers })
    .then((res: Response) => {
      if (!res.ok) return Promise.reject(res.status);
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
}
