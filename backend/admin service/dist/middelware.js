import axios from "axios";
import dotenv from "dotenv";
import multer from "multer";
dotenv.config();
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(" ")[1];
        if (!token) {
            res.status(400).json({ message: "Unauthorized!" });
            return;
        }
        const { data } = await axios.get(`${process.env.USER_URL}/api/v1/user/me`, {
            headers: {
                token,
            },
        });
        req.user = data;
        next();
    }
    catch (error) {
        res.status(400).json({
            message: "Unauthorized!",
        });
    }
};
// multer setup
const storage = multer.memoryStorage();
const uploadFile = multer({ storage }).single("file");
export default uploadFile;
