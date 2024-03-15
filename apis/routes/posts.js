import Express from "express";
import { getPost } from "../controllers/post.js";

const router = Express.Router();

router.get("/test", getPost);

export default router;