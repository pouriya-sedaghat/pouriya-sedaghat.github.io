import fs from 'fs';
import path from 'path';

function handler(req, res) {
    const pid = req.query.productId;
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    const product = data.find((item) => item.id === pid);
    res.json({ product });
}

export default handler;