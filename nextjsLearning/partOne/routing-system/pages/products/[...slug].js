import { useRouter } from 'next/router';

function Products() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h2>Products Page</h2>
        </div>
    );
}

export default Products;