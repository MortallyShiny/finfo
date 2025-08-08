import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  phone: String,
  email: String
});

export default mongoose.model("Friend", friendSchema);
