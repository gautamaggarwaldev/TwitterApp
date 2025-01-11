export const validate = (schema) => {
    //it returns a validate middleware
    return async function middleware(req, res, next) {
        try{
            console.log(req.body);
            schema.parse(req.body);
            next();
        }
        catch(error) {
            return res.json(
                {
                    error: error.errors,
                    success: false,
                    message: "Validation failed"
                }
            )

        }
    }
}