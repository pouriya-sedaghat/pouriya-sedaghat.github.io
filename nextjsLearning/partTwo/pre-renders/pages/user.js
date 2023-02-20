function UserPage({ username }) {
    return (
        <div>
            <h2>{username}</h2>
        </div>
    );
}

export default UserPage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    console.log(req,res);
    return {
        props: { username: 'masood' }
    }
}