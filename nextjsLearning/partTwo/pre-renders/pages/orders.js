import { useState, useEffect } from "react";

function OrdersPage(props) {
    const [orders, setOrders] = useState(props.data);
    useEffect(() => {
        fetchOrders();
    })
    const fetchOrders = async () => {
        const response = await fetch('http://localhost:3030/orders');
        const responseData = await response.json();
        setOrders(responseData);
    }
    return (
        <ul>
            {
                orders.map((item) => {
                    return (
                        <li key={item.id}>Username: {item.username} & Amount: {item.amount}</li>
                    )
                })
            }
        </ul>
    );
}

export default OrdersPage;

export async function getStaticProps() {
    const response = await fetch('http://localhost:8080/orders');
    const responseData = await response.json();
    return {
        props: { data: responseData }
    }
}