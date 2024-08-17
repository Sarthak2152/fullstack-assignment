import { Request, Response } from "express";
import Card from "../models/Card";

export const createCard = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const newCard = await Card.create({ title, description });
    res.status(201).json(newCard);
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export const getAllCards = async (req: Request, res: Response) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getCardByTitle = async (req: Request, res: Response) => {
  try {
    const { title } = req.params;
    const card = await Card.find({ title: { $regex: new RegExp(title, "i") } });
    if (!card.length) {
      res.status(404).json({ message: "No cards found with given query" });
    } else {
      res.json(card);
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
