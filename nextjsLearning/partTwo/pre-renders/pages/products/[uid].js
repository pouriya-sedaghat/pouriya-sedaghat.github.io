function UserIdPage({ id }) {
    return (
        <div>
            <h2>User Id - {id}</h2>
        </div>
    );
}

export default UserIdPage;

export async function getServerSideProps(contenxt) {
    const { params } = contenxt;
    const id = params.uid;
    return {
        props: { id }
    }
}