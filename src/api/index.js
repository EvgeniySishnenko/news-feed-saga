export const searchNews = async (search) => {
  const params = new URLSearchParams({ q: search });
  // const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}?${params}`);
  const response = await fetch(`http://localhost:7070/api/news`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
