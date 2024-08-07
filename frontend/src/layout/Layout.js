import Navbar from '../components/Navbar/Navbar.js';
const Layout = ({ children }) => {
    return (
        <div>
        <Navbar />
        {children}
        </div>
    );
    }

export default Layout;