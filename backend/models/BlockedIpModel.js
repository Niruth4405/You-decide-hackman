const mongoose=require('mongoose')

const blockedIPSchema = new mongoose.Schema({
  destination: { type: String, required: true, unique: true },
  campLocation: { type: String, required: true },
  source: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: String, required: true },
}, { timestamps: true });


const blockedIPS=mongoose.model("blockedIPS",blockedIPSchema);
module.exports=blockedIPS;

