import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './login.css'
import { useState } from "react";

const Login = () => {

    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');

    const [credentials, setCredentials] = useState({
        username: 'marcel',
        password: 'roger'
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
    }
    
    return (
        <>
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign in</h1>
            <form onSubmit={onSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={credentials.username} onChange={onChange} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={credentials.password} onChange={onChange} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button">Bouton test</button>
                <Link className="sign-in-button" to="/User"> Sign in </Link>
            </form>
        </section>
        </>
    );
};

export default Login;