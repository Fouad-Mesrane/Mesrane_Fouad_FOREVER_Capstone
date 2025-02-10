import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
    try {
        const {  token } = req.headers;
        if (!token) {
            return res.status(401).json({success: false, message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        next();
    } catch (error) {
        console.log(error); 
        res.status(401).json({ success: false, message: error.message });          
    }
};