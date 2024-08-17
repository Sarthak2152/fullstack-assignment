import mongoose from "mongoose";

export type CardType = mongoose.Document & {
  title: string;
  description: string;
};

const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Card = mongoose.model("Card", CardSchema);

export default Card;
