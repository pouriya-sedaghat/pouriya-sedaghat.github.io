import Header from '/components/Header';
import Footer from '/components/Footer';

function LayOut({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default LayOut;