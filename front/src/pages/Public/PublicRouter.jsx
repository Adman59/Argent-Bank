import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/layout/Layout'
import User from '@/pages/Admin/User/User';
import { Home, Error, Login } from './index'

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user" element={<User />}/>
                {/** Retirer User une fois le style terminée, la page ne doit être accessible uniquement lorsque l'on est connecté */}
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
