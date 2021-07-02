import { Router, json, urlencoded } from "express";
import cors from "cors";
import { productRouter } from "./product";

const router = Router();

router.use(cors());
router.use(json());
router.use(urlencoded({ extended: true }));

router.use("/product", productRouter);

export { router };
