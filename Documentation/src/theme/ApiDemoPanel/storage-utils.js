import crypto from "crypto-js";
export function hashArray(arr) {
  function hash(message) {
    return crypto.SHA1(message).toString();
  }
  const hashed = arr.map((item) => hash(item));
  hashed.sort();
  const res = hashed.join();
  return hash(res);
}
export function createStorage(persistance) {
  if (persistance === false) {
    return {
      getItem: () => null,
      setItem: () => {},
      clear: () => {},
      key: () => null,
      removeItem: () => {},
      length: 0,
    };
  }
  if (persistance === "sessionStorage") {
    return sessionStorage;
  }
  return localStorage;
}
