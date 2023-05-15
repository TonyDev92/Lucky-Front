import { useForm } from "react-hook-form";
import "./RegisterPage.css"
import React from 'react'
import { useDispatch } from "react-redux";
import { handleRegister } from "../../redux/actions/auth.actions";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const userRegister =  async (formData) => {
      dispatch(handleRegister(formData , navigate))
      console.log(formData);
    }
    
  return (
    <div className="father">
        <div className="father__header">
            <a href="http://localhost:3000/"><img className="father__header--img" src="/assets/img/logo/logo_titulo_junto.png"></img></a>
            <h3 className="father__header--title">¡Hola! para continuar, necesitas crear una cuenta.</h3>
        </div>
        <form className="father__form" onSubmit={handleSubmit(userRegister)}>
            <input className="father__form--input" type="text" {...register("name")} placeholder="Name"/>
            <input className="father__form--input" type="text" {...register("surname")} placeholder="SurName"/>
            <input placeholder="Email" className="father__form--input" type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}></input>
            {errors.email?.type === 'required' && "Email is required"}
            {errors.email?.type === 'pattern' && "Enter a valid email address: xxx@xxx.xx"}
            <input placeholder="Password" className="father__form--input" type="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}></input> {/* a capital letter, a minus letter, a number, a special character, min 8 characters*/}
            {errors.password?.type === 'required' && "Password is required"}
            {errors.password?.type === 'pattern' && "Password must contain a capital letter, a minus letter, a number, a special character, min 8 characters"}
            <div className="father__form--botones">
                <button className="father__form--botones--is">Crear cuenta</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterPage