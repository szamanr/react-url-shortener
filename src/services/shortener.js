import * as FirestoreService from "./firestore";

/**
 * shortens url. for now, just uses firestore document id
 *
 * @param url
 * @returns string
 */
export function shorten(url) {
    const ref = FirestoreService.store(url);
    return ref.id;
}
