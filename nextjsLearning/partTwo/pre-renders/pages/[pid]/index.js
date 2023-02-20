import fs from 'fs/promises';
import path from 'path';

function productDetailPage(props) {
    if (!props.product) {
        return (
            <h2>Loading...</h2>
        );
    }
    return (
        <div>
            <h2>{props.product.title}</h2>
            <p>{props.product.price}</p>
        </div>
    );
}

export default productDetailPage;

async function getData() {
    const filrPath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = await fs.readFile(filrPath);
    return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const data = await getData();
    const product = data.products.find((item) => item.id === productId);
    return {
        props: { product }
    }
}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map((item) => item.id);
    const params = ids.map((item) => ({ params: { pid: item } }));
    return {
        paths: params,
        fallback: false
    }
}