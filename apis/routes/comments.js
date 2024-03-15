import Express from "express";
import { getComments } from "../controllers/comment.js";

const router = Express.Router();

router.get("/test", getComments);

export default router;