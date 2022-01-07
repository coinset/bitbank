export type Reviver = Parameters<typeof JSON.parse>[1];

export async function jsonFetch<T>(
  url: RequestInfo,
  init?: RequestInit,
  options?: { parseJson: Reviver },
): Promise<T> {
  const res = await fetch(url, init);

  if (!res.ok) {
    throw Error(res.statusText);
  }

  const text = await res.text();

  return JSON.parse(text, options?.parseJson);
}
