export async function getCustomersController(req:any, res:any){
try{
const {db} = req.app;
const result = await db.collection("customers").find().toArray();
if(!result){
    throw new Error("Something went wrong...");
}else{
    res.status(200).json({
        message: "Customers retrieved",
        customers: result
    });
}

}catch(err){
    res.status(500).json({error: err.message})
}
}