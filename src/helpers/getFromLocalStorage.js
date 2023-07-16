import { LOCALSTORAGEKEY } from "../constants";

export default function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));
}
