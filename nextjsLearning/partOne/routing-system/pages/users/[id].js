import { useRouter } from 'next/router';

function UserId() {
    const router = useRouter();
    console.log(router.pathname, router.query);
    return (
        <div>
            <h2>User Id Page</h2>
        </div>
    );
}

export default UserId;