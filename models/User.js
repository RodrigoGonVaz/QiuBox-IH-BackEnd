//------------------MODEL USERS------------------
//IMPORT
const mongoose          =require("mongoose")

//2.Schema
const userSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Name is required ☠️ "],
    },
    apellido:{
        type: String,
        default: ""
    },
    estadoMx:{
        type: String,
        default: ""
    },
    userName: {
      type: String,
      trim: true,
      required: [true, "User name is required 🚨 "],
    },
    userEmail: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Use a valid email 🧬 "],
    },
    telefono:{
        type: Number,
        unique: true,
        default: "",
        min: 10, 
        max: 10
    },
    password: {
      type: String,
      required: [true, "Password is required 📢 ."],
    },
    userImage: String,
    userShortBio: String,
    arte: [{ type: Schema.Types.ObjectId, ref: "Arte" }], //<--- Tiene el ID de cada Artesania que crea / one-to-many/ SchemaType is then a configuration object for an individual property.
  },
  { timestamps: true }
);

// Model
const User = model("User", userSchema);

// Export
module.exports = User;
