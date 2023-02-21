import { MongoClientHandler } from '/util/mongoClientHandler';

async function handler(req, res) {
    const pid = req.query.productId;
    const db = await MongoClientHandler();
    const data = await db.collection('products').find().toArray();
    const product = data.find((item) => item._id.toString() === pid);
    res.json({ product })
}

export default handler;