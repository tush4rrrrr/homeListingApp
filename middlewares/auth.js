import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Access Denied, No Token Provided" });
    }

    try {
        //split functionlity employed while testing with POSTMAN
        //the authorization filed requires the vlaue as Bearer "_jwt_token"
        //here tokenParts[0] = "Bearer" & tokenParts[1] = _jwt_token
        const tokenParts = token.split(" ");
        if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
            return res.status(401).json({ error: "Invalid Token Format" });
        }

        const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid Token" });
    }
};

export default authMiddleware;
