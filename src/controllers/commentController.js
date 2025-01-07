export const getComments = (req, res) => {
    return res.json(
        {
            message: "Welcome to the comment route v1"
        }
    );
}


export const getCommentById = (req, res) => {
    return res.json(
        {
            message: "Welcome to the comment route v1",
            id: req.params.id
        }
    );
}


export const createComment = (req, res) => {
    return res.json(
        {
            message: "Welcome to the comment route v1",
            body: req.body
        }
    );
}