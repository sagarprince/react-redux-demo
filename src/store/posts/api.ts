export class PostsAPI {
    getPosts() {
        return new Promise((resolve, reject) => {
            return fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        resolve(json);
                    }, 4000);
                }).catch((err) => {
                    reject(err);
                })
        })
    }

    createPost(payload: any) {
        return new Promise((resolve, reject) => {
            return fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        resolve(json);
                    }, 2000);
                }).catch((err) => {
                    reject(err);
                })
        })
    }
}