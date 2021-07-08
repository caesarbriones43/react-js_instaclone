const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schemaOptions = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const UserSchema = Schema(
  {
    name: {
      require: true,
      type: String,
    },
    username: {
      require: true,
      trim: true,
      unique: true,
      type: String,
    },
    email: {
      required: true,
      trim: true,
      unique: true,
      type: String,
    },
    avatar: {
      trim: true,
      type: String,
    },
    siteWeb: {
      trim: true,
      type: String,
    },
    description: {
      trim: true,
      type: String,
    },
    password: {
      required: true,
      trim: true,
      type: String,
    },
  },
  schemaOptions
);

module.exports = mongoose.model("User", UserSchema);
