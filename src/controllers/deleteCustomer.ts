import { ObjectId } from "mongodb";

export async function deleteCustomerController(req:any, res:any){
    try{
        const {db} = req.app;
        const {id} =req.params;

        if(!id) return res.status(400).json("Id is required");

        const result = await db.collection("customers").deleteOne({
            _id: new ObjectId(id)
        });
        if(!result){
            return res.status(404).json({message: "customer not found"})
        }
        res.status(200).json({
            customer: null,
            message: "success"
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}