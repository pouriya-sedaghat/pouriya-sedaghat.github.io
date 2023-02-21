import { MongoClientHandler } from '/util/mongoClientHandler';

async function handler(req, res) {
    const { title, price } = req.body;
    const db = await MongoClientHandler();
    if (req.method === 'POST') {
        await db.collection('products').insertOne({ title, price });
    }
    else {
        const data = await db.collection('products').find().toArray();
        res.json({ products: data })
    }
}

export default handler;