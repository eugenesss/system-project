const getLS = (key: LocalStorageKeys) => {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  return item;
};

const setLS = (key: LocalStorageKeys, value: string) => {
  localStorage.setItem(key, value);
};

const removeLS = (key: LocalStorageKeys) => {
  localStorage.removeItem(key);
};

export const LocalStorageService = {
  getLS,
  setLS,
  removeLS,
};

export enum LocalStorageKeys {
  Token = "token",
}

// https://digitalfortress.tech/js/localstorage-with-ttl-time-to-expiry/

// function getWithExpiry(key) {
//   const itemStr = localStorage.getItem(key);
//   // if the item doesn't exist, return null
//   if (!itemStr) {
//     return null;
//   }
//   const item = JSON.parse(itemStr);
//   const now = new Date();
//   // compare the expiry time of the item with the current time
//   if (now.getTime() > item.expiry) {
//     // If the item is expired, delete the item from storage
//     // and return null
//     localStorage.removeItem(key);
//     return null;
//   }
//   return item.value;
// }

// function setWithExpiry(key, value, ttl) {
//   const now = new Date();

//   // `item` is an object which contains the original value
//   // as well as the time when it's supposed to expire
//   const item = {
//     value: value,
//     expiry: now.getTime() + ttl,
//   };
//   localStorage.setItem(key, JSON.stringify(item));
// }
