import Link from 'next/link';
import { useRouter } from 'next/router';

function UserPage() {
    const users = [
        { username: 'masood', id: 1 },
        { username: 'admin', id: 2 }
    ]
    const router = useRouter();
    function showIdHandler(id) {
        router.push(`/users/${id}`);
    }
    return (
        <div>
            <h2>User Page</h2>
            <h2>ways:</h2>
            <ul>
                <li>1:</li>
                {
                    users.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <Link href={`/users/${item.id}`}>{item.username}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <ul>
                <li>2:</li>
                {
                    users.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <Link href={{ pathname: '/users/[id]', query: { id: item.id } }}>{item.username}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <div>
                <p>3:</p>
                {
                    users.map((item, index) => {
                        return (
                            <button key={item.id} style={{ display: 'block', margin: '10px' }} onClick={showIdHandler.bind(null, item.id)}>{item.username}</button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default UserPage;