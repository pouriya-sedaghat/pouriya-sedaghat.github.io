import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h2>Home Page</h2>
            <ul>
                <li>
                    <Link href='/blog/posts'>Post Page</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;