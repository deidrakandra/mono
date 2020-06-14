export const mockResponse = (result) => {
  return {
    toPromise: () => Promise.resolve(result)
  };
};
