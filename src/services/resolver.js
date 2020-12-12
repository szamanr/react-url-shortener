import * as FirestoreService from "./firestore";

/**
 * resolves slug to original url
 *
 * @param slug
 * @param resolve
 * @param reject
 */
export const resolve = (slug, resolve, reject) => {
    FirestoreService.get('urls', slug).then((snapshot) => {
        if (!snapshot.exists) {
            reject(`URL ${slug} not found in db.`);
            return;
        }

        resolve(snapshot.get('original'));
    }).catch((error) => {
        reject(error);
    });
}

