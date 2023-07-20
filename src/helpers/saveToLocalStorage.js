import { LOCALSTORAGEKEY } from "../constants";

export default function saveToLocalStorage(list) {
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(list));
}
