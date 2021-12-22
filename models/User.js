//------------------MODEL USERS------------------
//IMPORT
const mongoose          =require("mongoose")

//2.Schema
const userSchema = mongoose.Schema(
  {
    nombre: {
        type: String,
        required: [true, "Nombre es requerido ☠️ "],
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
      required: [true, "Nombre de usuario es requerido 🚨 "],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Use un email valido 🧬 "],
      required: [true, "Nombre de usuario es requerido 🚨 "]
    },
    telefono:{
        type: String,
        match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Use un telefono valido 📱"],
        unique: true,
        default: "",
    },
    password: {
      type: String,
      required: [true, "Password is required 📢 ."],
    },
    userImage: {
      type: String,
      trim: true,
    },
    userShortBio: String,
    arte: [{ type: mongoose.Schema.Types.ObjectId, ref: "Arte" }], //<--- Tiene el ID de cada Artesania que crea / one-to-many/ SchemaType is then a configuration object for an individual property.
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("User", userSchema);

// Export
module.exports = User;
