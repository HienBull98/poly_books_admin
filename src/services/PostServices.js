import instance from "../actions/ApiClient";

export const getAllPosts = () => {
    return instance.get("/posts")
        .then(resp => resp)
        .catch(err => err)
}