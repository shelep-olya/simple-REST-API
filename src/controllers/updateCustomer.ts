import { ObjectId } from 'mongodb';

export async function updateCustomerController(req: any, res: any) {
    try {
        const { db } = req.app;
        const { id } = req.params;
        const updatedData = req.body;

        if (!id) return res.status(400).json({ message: "Id is required" });

        // Logging for debugging
        console.log(`Update request for customer with id: ${id}`);
        console.log(`Update data: ${JSON.stringify(updatedData)}`);

        const objectId = new ObjectId(id);
        const result = await db.collection("customers").findOneAndUpdate(
            { _id: objectId },
            { $set: updatedData },
            { returnOriginal: false }
        );

        if (!result) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({
            customer: result,
            message: "Customer updated successfully"
        });
    } catch (err) {
        console.error(err.message); // Logging for debugging
        res.status(500).json({ message: err.message });
    }
}
