

export async function requester<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options)
  return (await response.json())
}

