const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    uploader: {
      type: String,
    },
    title: {
      type: String,
    },
    uploader_avatar: {
      type: String,
    },
    uploader_name: {
      type: String,
    },
    uploader_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", ImageSchema);
