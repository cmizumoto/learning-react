// Instead putting another arrow to show TS what gets returned from this function, we can just put another ":"
// Since we don't know what we are getting back, we can use a Generic
export const getData = async (url: string): Promise<> => {
  const response = fetch(url);
  return (await response).json();
};
