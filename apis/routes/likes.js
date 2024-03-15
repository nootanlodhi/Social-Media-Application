import Express from "express";
import { getLikes } from "../controllers/like.js";

const router = Express.Router();

router.get("/test", getLikes);

export default router;