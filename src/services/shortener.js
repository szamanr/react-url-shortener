import * as FirestoreService from "./firestore";

export function shorten(url) {
    const ref = FirestoreService.store(url);
    return ref.id;
}
