import { secrets } from "./secrets";

export const config = {
    db: {
        url: secrets.url,
        name: "oEsporte",
        collections: {
            localItems: "local-items",
            sequences: "sequences",
            userItems: "users"
        }, 
        sequences: {
            localItemId: 'local-item-id'
        }
    },
    auth: {
        secret: secrets.secret
    }
}