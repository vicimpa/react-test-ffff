export const delay = (n = 0) => (
  new Promise(r => setTimeout(r, n))
);