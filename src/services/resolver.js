import * as FirestoreService from "./firestore";

/**
 * resolves slug to original url
 *
 * @param slug
 * @param observer
 */
export const resolve = (slug, observer) => {
    FirestoreService.get('urls', slug).then((snapshot) => {
        observer(snapshot.get('original'));
    }).catch((error) => {
        console.error(error);
    });
}

