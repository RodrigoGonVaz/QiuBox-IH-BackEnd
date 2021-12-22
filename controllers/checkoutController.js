// ./server/controllers/checkoutController.js
const stripe = require('stripe')(process.env.STRIPE_SK);
//STRIPE_SK - https://stripe.com/docs/api/products/create


exports.createCheckoutSession = async (req, res) => {

    const { cart } = req.body


	// CREAR UNA SESIÓN DE CHECKOUT DE STRIPE
	const session = await stripe.checkout.sessions.create({
		// CARRITO DE COMPRAS
		line_items: cart,
		mode: "payment",
		success_url: "http://localhost:3000/?success=true",
		cancel_url: "http://localhost:3000/?canceled=true",
	})


	res.json({
		session: session
	})

}




//price: "price_1K9DB1JP1O83madkeryXuOEz",