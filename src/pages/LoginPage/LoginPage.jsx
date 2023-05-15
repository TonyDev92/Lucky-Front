import { useForm } from "react-hook-form";
import "./LoginPage.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/auth.actions";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {

    const {register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handeLogin = async(formData) => {
        dispatch(userLogin(formData , navigate))
        
    }



return (
    <div className="login">
        <div className="login__header">
            <a href="http://localhost:3000/"><img className="login__header--img" src="/assets/img/logo/logo_titulo_junto.png"></img></a>
            <h3 className="login__header--title">¡Hola! para continuar, inicia sesión o crea una cuenta.</h3>
        </div>
        <form className="login__form" onSubmit={handleSubmit(handeLogin)}>
            <input placeholder="Email" className="login__form--input" type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}></input>
            {errors.email?.type === 'required' && "Email is required"}
            {errors.email?.type === 'pattern' && "Enter a valid email address: xxx@xxx.xx"}
            <input placeholder="Password" className="login__form--input" type="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}></input> {/* a capital letter, a minus letter, a number, a special character, min 8 characters */}
            {errors.password?.type === 'required' && "Password is required"}
            {errors.password?.type === 'pattern' && "Password must contain a capital letter, a minus letter, a number, a special character, min 8 characters"}
            <div className="login__form--div">
                <a className="login__form--div--a">¿Has olvidado tu contraseña?</a>
            </div>
            
            <div className="login__form--botones">
                <button className="login__form--botones--is" type="submit">Iniciar sesión</button>
                <a href="http://localhost:3000/register" className="login__form--botones--a">Crear cuenta</a>
                {/* <button className="padre__form--botones--cc">Crear cuenta</button> */}
            </div>
        </form>
    </div>
  )
}

export default LoginPage