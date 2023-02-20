import fs from 'fs';
import path from 'path';

function ProductsPage(props) {
    return (
        <div>
            <h2>Products Page</h2>
            <ul>
                {
                    props.products.map((item, index) => {
                        return (
                            <li key={index.toString()}>Title: {item.title} & Price: {item.price}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ProductsPage;

export function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return {
        props: { products: data }
    }
}