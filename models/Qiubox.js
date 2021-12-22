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
    },
    precioID: {
      type: String,
      required: true
    },
    productoID: {
      type: String,
      required: true
    },
    qiuboxImage: String,
    shortDescription: String,
    arte: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Arte",
        maxlength: 6,
    }], //<--- Tiene el ID de cada Artesania que crea / one-to-many/ SchemaType is then a configuration object for an individual property.
  },
  { timestamps: true }
);

// Model
const Qiubox = mongoose.model("Qiubox", qiuboxSchema);

// Export
module.exports = Qiubox;


/*
    "nombre": "Lentes para sol",
    "color": "rojos",
    "descripcion": "Muy grandes",
    "img": "https://images.unsplash.com/photo-1582143434535-eba55a806718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "precio": 9200
*/