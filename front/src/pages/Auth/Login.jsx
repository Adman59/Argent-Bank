import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './login.css'
import { useState, useEffect } from "react";
import auth_service from "@/_services/account.service";
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [password, setPassword] = useState(localStorage.getItem('password') || '');
    const [rememberMe, setRememberMe] = useState(localStorage.getItem('rememberMe') === 'true' || false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    const token= useSelector((state)=> state.login.token)
    const error= useSelector((state)=> state.login.error)
    
    const submitForm = (e) => {
        e.preventDefault();

        if (rememberMe) {
            // Sauvegardez l'e-mail, le mot de passe et la valeur "rememberMe" dans le localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('rememberMe', rememberMe);
        } else {
            // Si l'utilisateur ne veut pas garder ses informations stockées, supprimez les valeurs du localStorage
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('rememberMe');
        }

        dispatch(auth_service.login(email, password, rememberMe));
    }

    useEffect(()=>{
        if(token !== null || localStorage.getItem('token') !== null){
        navigate('/User')
        }
    },[token, navigate])

    return (
        <>
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign in</h1>
            <form onSubmit={(e)=>{submitForm(e)}}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value)}} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => { setRememberMe(e.target.checked) }}/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type='submit'>Sign In</button>
                {error !== null ? <label className='error'>{error}</label>:""}
            </form>
        </section>
        </>
    );
};

export default Login;
