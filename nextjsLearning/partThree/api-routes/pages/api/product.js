import fs from 'fs';
import path from 'path';

function handler(req, res) {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    if (req.method === 'POST') {
        const { title, price } = req.body;
        const newProduct = { title, price };
        data.push(newProduct);
        fs.writeFileSync(filePath, JSON.stringify(data));
    }
    else {
        res.json({ products: data })
    }
}

export default handler;