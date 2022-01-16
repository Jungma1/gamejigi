export function getStorageItem(key: string) {
  const data = localStorage.getItem(key);

  try {
    if (!data) return null;

    return JSON.parse(data);
  } catch (e) {
    localStorage.removeItem(key);
    return null;
  }
}

export function setStorageItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeStorageItem(key: string) {
  localStorage.removeItem(key);
}

export const STORAGE_KEY = 'USER';