import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import './layout.css'

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout