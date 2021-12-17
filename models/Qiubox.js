//------------------MODEL Qiubox------------------
//IMPORT
const mongoose          =require("mongoose")

//2.Schema
const qiuboxSchema = mongoose.Schema(
  {
    qiuboxTitulo:{
        type: String,
        default: "QiuBox"
    },
    qiuboxPrice: {
        type: Number,
        required: [true, "Precio es requerido 💸 ."],
    },
    qiuboxImage: String,
    shortDescription: String,
    arte: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Arte",
        maxlength: 6,
        minlength: 5
    }], //<--- Tiene el ID de cada Artesania que crea / one-to-many/ SchemaType is then a configuration object for an individual property.
  },
  { timestamps: true }
);

// Model
const Qiubox = model("Qiubox", qiuboxSchema);

// Export
module.exports = Qiubox;
