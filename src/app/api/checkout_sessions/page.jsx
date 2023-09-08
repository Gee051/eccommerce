const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const items = req.body.cartItem

        const transformedItems = items.map((item) => ({
            price_data: {
                currency: "ngn",
                product_data: {
                    name: item.title,
                    images: [req.headers.origin+item.image],
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }))

    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      });
      res.json({"sessionURL": session.url});
    } catch (err) {
      console.log(err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}


// const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

// export default async (req, res)  => {
//     const { items } = req.body;

//     const modifiedItems = items.map((item) =>({
//         title: item.title,
//         quantity: item.quantity,
//         price_data: {
//             currency: 'ngn',
//             unit_amount: item.price * 100, 
//             product_data: {
//                 name: item.title,
//                 images: [item.images]
//               },
//             },
//     }));
//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: modifiedItems,
//         mode: 'payment',
//         success_url: `${process.env.HOST}/success`,
//         cancel_url:`${process.env.HOST}/`,
//       });

//       res.status(200).json({
//         id: session.id,
//       });
//     };
