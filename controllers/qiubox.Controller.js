//Import
const Arte = require("./../models/Arte")
const User = require("./../models/User")
const Qiubox = require("./../models/Qiubox")
const stripe = require('stripe')(process.env.STRIPE_SK);


//---------------------CREAR ARTESANIA------------------//
exports.create = async (req,res) =>{
    
    //Del form - creamos variables y asignamos valores.
    const { 
        qiuboxTitulo,
        qiuboxPrice,
        qiuboxImage,
        shortDescription,
        arte,
     } = req.body

    // 1. STRIPE
	// NUEVO PRODUCTO
	const newProductStripe = await stripe.products.create({
		name: qiuboxTitulo,
		description: shortDescription,
		images: [qiuboxImage],
		metadata: {
            "arte": arte,
            "qiuboxPrice": qiuboxPrice
		}
	  })

    // NUEVO PRECIO
	const newProductStripeID 			= newProductStripe.id
	const newProductStripeQiuboxTitulo			= newProductStripe.name
	const newProductStripeDescription	= newProductStripe.description
	const newProductStripeMetadataArte = newProductStripe.metadata.arte
    const newProductStripeMetadataQiuboxPrice = newProductStripe.metadata.qiuboxPrice
    
    console.log(qiuboxPrice)

	const price = await stripe.prices.create({
		unit_amount: qiuboxPrice,
		currency: 'usd',
		product: newProductStripeID,
		nickname: newProductStripeDescription
	});

    const newProductPriceID = price.id

	// 2. MONGODB
	// GUARDAR PRODUCTO EN BASE DE DATOS (YA CON DATOS DE STRIPE)
    console.log("hola", newProductStripeQiuboxTitulo)
	const newBox = await Qiubox.create({
		qiuboxTitulo: newProductStripeQiuboxTitulo,
		arte: newProductStripeMetadataArte,
        qiuboxPrice: newProductStripeMetadataQiuboxPrice,
		shortDescription: newProductStripeDescription,
		precioID: newProductPriceID,
		productoID: newProductStripeID,
		qiuboxImage
	})

    console.log("Qiubox creados en MONGODB:", newBox)

	res.json({
		msg: "Box creados con éxito",
		data: newBox
	})

    //  //Crear Artesania en BD
    //  try{
    //     const newBox = await Qiubox.create({
    //         qiuboxTitulo,
    //         qiuboxPrice,
    //         qiuboxImage,
    //         shortDescription,
    //         arte,
    //     })

    //     //Devolver una respuesta en un formato json
    //     res.json({
    //         msg: "Qiubox creada con exito 🎨",
    //         data: newBox
    //     })

    //  }catch (error){
    //     res.status(500).json({
    //         msg: "Hubo un error creando la Qiubox 💀",
    //         error
    //     })
    //     console.log(error)
    //  }

}

//---------------------LEER ARTESANIAS------------------//
exports.readAll = async (req, res) => {

	try {
		
		const qiuboxs = await Qiubox.find({})

		res.json({
			msg: "Qiuboxes obtenidas con éxito. 🎨",
			data: qiuboxs
		})

	} catch (error) {
		
		res.status(500).json({
	 		msg: "Hubo un error obteniendo los datos qiubox 💀",
			error: error
		})
	}
}

//---------------------LEER UNA ARTESANIA------------------//
exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		
		const qiubox = await Qiubox.findById(id)

		res.json({
			msg: "Qiubox obtenida con éxito. 🎨",
			data: qiubox
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error obteniendo los datos Qiubox 💀",
			error: error
		})
	}

}

//---------------------UPDATE UNA ARTESANIA------------------//
exports.edit = async (req, res) => {

    const { id } = req.params

    const { 
        qiuboxTitulo,
        qiuboxPrice,
        qiuboxImage,
        shortDescription,
        arte,
     } = req.body

     try {
        const editarBox = await Qiubox.findByIdAndUpdate(
            id, 
        {
            qiuboxTitulo,
            qiuboxPrice,
            qiuboxImage,
            shortDescription,
            arte,
        },
            {new: true}
        )
        
        res.json({
            msg: "Qiubox actualizada con exito 🎨",
            data: editarArte
        })

     } catch (error) {
        res.status(500).json({
			msg: "Hubo un error obteniendo los datos. 💀",
			error: error
		})
        
     }
}

//---------------------DELETE UNA ARTESANIA------------------//
exports.delete = async (req, res) => {

	const { id } = req.params

	try {
		
		const borrarBox = await Qiubox.findByIdAndRemove({_id: id})

		res.json({
			msg: "Qiubox borrada con éxito. 🎨",
			data: borrarBox
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error borrando la Artesania. 💀",
			error: error
		})
	}

}