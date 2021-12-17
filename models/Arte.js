//---------------Artesanias MODELS---------------
//IMPORT
const mongoose          =require("mongoose")

//2.Schema
const arteSchema = mongoose.Schema(
  {
    arteTitle: {
      type: String,
      required: [true, "Titulo del producto es requerido 🎨 "],
    },
    arteUsername: {
      type: Schema.Types.ObjectId,
      ref: "User", //<---- one-to-one,
    },
    artePrice: {
      type: Number,
      required: [true, "Precio es requerido 💸 ."],
    },
    arteImage: {
      type: String,
      required: [true, "Foto de Artesania es requerida 🇲🇽 ."],
    },
    shortDescription: {
      type: String,
      required: [true, "Descripción es requerida 🇲🇽 ."],
    },
    arteHashTag: {
      type: [String],
    },
    arteFav: {
        type: [Number],
    },
    arteStock: {
        type: [Number],
    },
  },
  { timestamps: true }
);

// Model
const Arte = model("Arte", arteSchema);

// Export
module.exports = Arte;
