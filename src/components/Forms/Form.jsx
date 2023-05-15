import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Form.css'
import ProgressBar from '../ProgressBar/ProgressBar';
import FormConfirm from '../FormConfirm/FormConfirm';


const Form = (props) => {
    const [part, setPart] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({
        Datos: {
            NombreApellidos: "",
            Email: "",
            Telefono: "",
            DNI: "",
            CalleNumeroPiso: "",
            CodigoPostal: "",
            Ciudad: "",
            Usuario: "6455351f4ceea66c37a222b6", //RECOGER ID USUARIO DE PERFIL ANIMAL
        },
        Mascota: {
            OtrosAnimales: false,
            CualesAnimales: "",
            SeLlevaBien: "",
            PorQueAdpotar: "",
            NecesidadesAnimal: "",
            Gastos: "",
            Alimentacion: "",
            Animales: "645691a200cf09d6b0fdf3c1" //Recoger ID ANIMAL DE PERFIL ANIMAL
        },
        FamiliaHogar: {
            DondeVives: "",
            Alquiler: false,
            CaseroAnimales: false,
            MudartePronto: false,
            Jardin: false,
            OtrasPersonas: false,
            TodosDeAcuerdo: false,
            VisitarCasa: false
        }
    });
    console.log(data.Datos);
    console.log(data.FamiliaHogar);
    console.log(data.Mascota);
    const { register, watch } = useForm({ defaultValues: data });

    const handleContinue = () => {
        setPart(part + 1);
    }
    const handleBack = () => {
        setPart(part - 1);
    }
    const onChange = (e) => {
        setData({ ...watch(), [e.target.name]: e.target.value });
    }
    const handleSubmit = ($event) => {
        setShowModal(true)
        $event.preventDefault();
        axios.post("http://localhost:5000/adopcion", data).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    return (
        <form>
            {part === 1 && (
                <div className='partone'>
                    <div className='title__Form'>
                        <h3 >Formulario de adopción</h3>
                    </div>
                    <ProgressBar bgcolor="#FA9C93" progress={30} width={90} height={8}></ProgressBar>
                    <h3 className='partone__labels'>Tus Datos</h3>
                    <input type='text' className='partone__labels__inp' {...register("Datos.NombreApellidos")} onChange={onChange} placeholder='Nombre y Apellidos' />
                    <input type='text' className='partone__labels__inp' {...register("Datos.Email")} onChange={onChange} placeholder='Email' />
                    <input type='text' className='partone__labels__inp' {...register("Datos.Telefono")} onChange={onChange} placeholder='Teléfono' />
                    <input type='text' className='partone__labels__inp' {...register("Datos.DNI")} onChange={onChange} placeholder='DNI' />
                    <h3 className='partone__labels'>Dirección</h3>
                    <input className='partone__labels__inp' type='text' {...register("Datos.CalleNumeroPiso")} onChange={onChange} placeholder='Calle , número, piso' />
                    <input className='partone__labels__inp' type='text' {...register("Datos.CodigoPostal")} onChange={onChange} placeholder='Código Postal' />
                    <input className='partone__labels__inp' type='text' {...register("Datos.Ciudad")} onChange={onChange} placeholder='Ciudad' />

                    <div className='condition'>
                        <input className='partone__labels__inpCheck' type='checkbox' value="aceptar" required={true} name='terms' />
                        <label htmlFor='terms'>Acepto los términos y cóndiciones de la adopción</label>
                    </div>
                    <div className='content'>
                        <button type='button' className='content__btn' onClick={handleContinue}>Continuar</button>
                    </div>

                </div>
            )}
            {part === 2 && (
                <div className='partone'>
                    <div className='head'>
                        <img className='head__img' src="./assets/img/logo/back.png" onClick={handleBack} alt='logoBack'></img>
                        <h3 className='head__title'>Formulario de adopción</h3>
                    </div>
                    <ProgressBar bgcolor="#FA9C93" progress={50} width={90} height={8}></ProgressBar>
                    <h3 className='partone__pets'>Sobre las mascotas</h3>
                    <div className='another'>
                        <label className='another__animals'>¿Tienes otros animales?</label>
                        <div className='another__check' id='a'>
                            <label className='another__txt' htmlFor='y1'>Sí</label>
                            <input className='another__inp' type='radio' id='y1' {...register("Mascota.OtrosAnimales")} onChange={onChange}  value="true" />
                        </div>
                        <div className='another__check' id='b'>
                            <label className='another__txtn' htmlFor='n1'>No</label>
                            <input className='another__inp' id='n1' type='radio'{...register("Mascota.OtrosAnimales")} onChange={onchange} value="false" />
                        </div>
                    </div>
                    <input className='partwo__labels__inp' type='text' {...register("Mascota.CualesAnimales")} onChange={onChange} placeholder='¿Cuáles?' />
                    <input className='partwo__labels__inp' type='text' {...register("Mascota.SeLlevaBien")} onChange={onChange} placeholder='¿Se lleva bien con otros animales?' />
                    <label className='labelinp' htmlFor='da1'>¿Por qué has elegido adoptar?</label>
                    <input className='partwo__labels__inp' type='text' name='da1' {...register("Mascota.PorQueAdpotar")} onChange={onChange} />
                    <label className='labelinp' htmlFor='da2'>¿Conoces las necesidades del animal?</label>
                    <input className='partwo__labels__inp' type='text' {...register("Mascota.NecesidadesAnimal")} onChange={onChange}  />
                    <label className='labelinp' htmlFor='da3'>¿Conoces sus gastos?</label>
                    <input className='partwo__labels__inp' type='text' {...register("Mascota.Gastos")} onChange={onChange}  />
                    <label className='labelinp' htmlFor='da4'>¿Conoces su alimentación?</label>
                    <input className='partwo__labels__inp' type='text' {...register("Mascota.Alimentacion")} onChange={onChange}  />
                    
                    <div className='content'>
                        <button type='button' className='content__btn' onClick={handleContinue}>Continuar</button>
                    </div>

                </div>
            )}
            {part === 3 && (
                <div>
                    <div className='head'>
                        <img className='head__img' src="./assets/img/logo/back.png" onClick={handleBack} alt='logoBack'></img>
                        <h3 className='head__title'>Formulario de adopción</h3>
                    </div>
                    <ProgressBar bgcolor="#FA9C93" progress={100} width={90} height={8}></ProgressBar>
                    <h3 className='partTrhee__labels'>Familia y hogar</h3>
                    <label className='partTrhee__head' htmlFor='casa'>¿Dónde vives?</label>
                    <input className='partTrhee__labels__inp' type='text' {...register("FamiliaHogar.DondeVives")} onChange={onChange} placeholder='Piso , casa , chalet...' />
                    <div className='another'>
                        <h3 className='partTrhee__labels__tag'>¿Vives de alquiler?</h3>
                        <div className='another__check'>
                            <label className='another__txt' htmlFor='ds1'>Sí</label>
                            <input className='ds1' {...register("FamiliaHogar.Alquiler")} onChange={onChange} value="true" type='radio' />
                        </div>
                        <div className='another__check' >
                            <label htmlFor='dn1'>No</label>
                            <input type='radio' {...register("FamiliaHogar.Alquiler")} className='dn1' value="false" />
                        </div>
                    </div>
                    <div className='another'>
                        <h3 className='partTrhee__labels__tag'>¿Tu casero permite animales?</h3>
                        <div className='another__check'>
                            <label className='another__txt' htmlFor='ds2'>Sí</label>
                            <input type='radio' {...register("FamiliaHogar.CaseroAnimales")} onChange={onChange} className='ds2' value="true" />
                        </div>
                        <div className='another__check'>
                            <label htmlFor='dn2'>No</label>
                            <input type='radio' {...register("FamiliaHogar.CaseroAnimales")} onChange={onChange} className='dn2' value="false" />
                        </div>
                    </div>
                    <div className='another'>
                        <h3 className='partTrhee__labels__tag'>¿Crees que podrías mudarte pronto?</h3>
                        <div className='another__check'>
                            <label className='another__txt' htmlFor='ds3'>Sí</label>
                            <input type='radio' {...register("FamiliaHogar.MudartePronto")} onChange={onchange} className='ds3' value='true' />
                        </div>
                        <div className='another__check'>
                            <label htmlFor='dn3'>No</label>
                            <input type='radio' {...register("FamiliaHogar.MudartePronto")} onChange={onChange} className='dn3' value='false' />
                        </div>
                    </div>
                    <div className='another'>
                        <h3 className='partTrhee__labels__tag'>¿Tiene jardin?</h3>
                        <div className='another__check'>
                            <label className='another__txt' htmlFor='ds4'>Sí</label>
                            <input type='radio' {...register("FamiliaHogar.Jardin")} onChange={onChange} className='ds4' value='true' />
                        </div>
                        <div className='another__check'>
                            <label htmlFor='ds5'>No</label>
                            <input type='radio' {...register("FamiliaHogar.Jardin")} onChange={onChange} className='ds5' value='false' />
                        </div>
                    </div>
                    <div className='another'>
                        <h3 className='partTrhee__labels__tag'>¿Vives con otras personas?</h3>
                        <div className='another__check'>
                            <label className='another__txt' htmlFor='ds5'>Sí</label>
                            <input type='radio' {...register("FamiliaHogar.OtrasPersonas")} onChange={onChange} className='ds5' value='true' />
                        </div>
                        <div className='another__check'>
                            <label htmlFor='dn5'>No</label>
                            <input type='radio' className='dn5' {...register("FamiliaHogar.OtrasPersonas")} onChange={onChange} value='false' />
                        </div>
                    </div>
                    <div className='another'>
                        <h3 className='partTrhee__labels__tag'>¿Están todos de acuerdo con la adopción?</h3>
                        <div className='another__check'>
                            <label className='another__txt' htmlFor='ds6'>Sí</label>
                            <input type='radio' className='ds6' {...register("FamiliaHogar.TodosDeAcuerdo")} onChange={onChange} value='true' />
                        </div>
                        <div className='another__check'>
                            <label htmlFor='dn7'>No</label>
                            <input type='radio' className='dn7' {...register("FamiliaHogar.TodosDeAcuerdo")} onChange={onChange} value='false' />
                        </div>
                    </div>
                    <div className='another'>
                        <h3 className='partTrhee__labels__tag'>¿Estás de acuerdo con que visitemos tu casa?</h3>
                        <div className='another__check'>
                            <label className='another__txt' htmlFor='ds7'>Sí</label>
                            <input type='radio' {...register("FamiliaHogar.VisitarCasa")} onChange={onchange} value="true" className='ds7' />
                        </div>
                        <div className='another__check'>
                            <label htmlFor='dn7'>No</label>
                            <input type='radio' {...register("FamiliaHogar.VisitarCasa")} onChange={onChange} value="false" className='dn7' />
                        </div>
                    </div>
                    <div className='content'>
                        <button type='submit' className='content__btn'  onClick={handleSubmit}>Enviar</button>
                    </div>
                    {showModal && (
          <div className="modal" onClick={props.onApply}>
            <FormConfirm />
          </div>
        )}
            </div>
            )}
        </form>
    )
}

export default Form;
