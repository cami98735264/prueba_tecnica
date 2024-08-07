import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
const Layout = ({ children }) => {
    return (
        <div>
        <Navbar />
        {children}
        <Footer />
        </div>
    );
    }

export default Layout;