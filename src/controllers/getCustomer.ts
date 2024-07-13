import {ObjectId} from 'mongodb'

export async function getCustomerController(req:any, res:any){
    try{
        const { db } = req.app;
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message: "Id's required"});
        }
        const result = await db.collection("customers").findOne({
            _id: new ObjectId(id)
        });
        if(!result){
            throw new Error("Customer not found...");
        }else{
            res.status(200).json({
                message: "Customer's retrieved",
                customer: result
            });
        }

    }catch(err){
        res.status(500).json({message: err.message})
    }
}