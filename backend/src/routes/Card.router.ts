import express from "express";
import {
  createCard,
  getAllCards,
  getCardByTitle,
} from "../controllers/Card.controller";

const router = express.Router();

router.post("/", createCard);
router.get("/", getAllCards);
router.get("/:title", getCardByTitle);

export default router;
