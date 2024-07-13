export async function createCustomerController(req:any, res:any) {
try{
    const { db } = req.app;

    const {name, email, phone, address} = req.body;

    if(!name){
        return res.status(400).json({message: "name is required"});
    }
    if(!email){
        return res.status(400).json({message: "email is required"});
    }
    if(phone && phone.length < 10){
        return res.status(400).json({message: "phone number must have at least 10 digits"});
    }
    if(address && address.length < 10){
        return res.status(400).json({message: "address must have at least 10 digits"});
    }

    const customer = await db.collection("customers").findOne({email:email.toLowerCase()});
    if(customer){
        return res.status(400).json({message: "customer already exists"})
    }

    const result = await db.collection("customers").insertOne({
        name,
        email:email.toLowerCase(),
        phone,
        address,
    });
    console.log(result);
    res.status(200).json({message: "Customer created"})
}catch(err){
    res.status(500).json({error: err.toString()});
}
}