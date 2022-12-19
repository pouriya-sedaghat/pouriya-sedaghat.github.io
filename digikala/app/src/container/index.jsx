import Header from './../base/Header';
import Footer from './../base/Footer';
const Template = ({ children }) => {
    
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    );
}
export default Template;