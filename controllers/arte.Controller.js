//Import
const Arte = require("./../models/Arte")


//---------------------CREAR ARTESANIA------------------//
exports.create = async (req,res) =>{
    
    //Del form - creamos variables y asignamos valores.
    const { 
        arteTitle,
        arteUsername,
        artePrice,
        arteImage,
        shortDescription,
        arteHashTag,
        arteFav,
        arteStock,
     } = req.body

     //Crear Artesania en BD
     try{
        const newArte = await Arte.create({
            arteTitle,
            arteUsername,
            artePrice,
            arteImage,
            shortDescription,
            arteHashTag,
            arteFav,
            arteStock,
        })

        //Devolver una respuesta en un formato json
        res.json({
            msg: "Artesania creada con exito 🎨",
            data: newArte
        })

     }catch (error){
        res.status(500).json({
            msg: "Hubo un error creando la Artesania 💀",
            error
        })
     }

}

//---------------------LEER ARTESANIAS------------------//
exports.readAll = async (req, res) => {

	try {
		
		const artesanias = await Arte.find({})

		res.json({
			msg: "Artesanias obtenidas con éxito. 🎨",
			data: artesanias
		})

	} catch (error) {
		
		res.status(500).json({
	 		msg: "Hubo un error obteniendo los datos 💀",
			error: error
		})
	}
}

//---------------------LEER UNA ARTESANIA------------------//
exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		
		const artesania = await Arte.findById(id)

		res.json({
			msg: "Artesania obtenida con éxito. 🎨",
			data: artesania
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error obteniendo los datos 💀",
			error: error
		})
	}

}

//---------------------UPDATE UNA ARTESANIA------------------//
exports.edit = async (req, res) => {

    const { id } = req.params

    const { 
        arteTitle,
        arteUsername,
        artePrice,
        arteImage,
        shortDescription,
        arteHashTag,
        arteFav,
        arteStock,
     } = req.body

     try {
        const editarArte = await Arte.findByIdAndUpdate(
            id, 
        {
            arteTitle,
            arteUsername,
            artePrice,
            arteImage,
            shortDescription,
            arteHashTag,
            arteFav,
            arteStock,
        },
            {new: true}
        )
        
        res.json({
            msg: "Artesania actualizada con exito 🎨",
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
		
		const borrarArte = await Arte.findByIdAndRemove({_id: id})

		res.json({
			msg: "Artesania borrada con éxito. 🎨",
			data: borrarArte
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error borrando la Artesania. 💀",
			error: error
		})
	}

}