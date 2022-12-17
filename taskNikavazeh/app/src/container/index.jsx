import Header from './../base/Header';
const Template = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
export default Template;