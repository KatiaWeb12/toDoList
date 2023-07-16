import { LOCALSTORAGEKEY } from "../constants";

export default function saveToLocalStorage(list) {
  console.log('save')
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(list));
}
