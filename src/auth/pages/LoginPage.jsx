import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { LeftArrow } from '../../ui/svg-icons/LeftArrow';
import{useAuthStore} from '../../hooks/useAuthStore'
import './LoginPage.css';




const styles ={
    backButton:{
        marginTop:10,
        borderRadius:90,
        color:'white'
    },
    p:{
        color:'red',
        marginLeft: 10,
        marginTop: 3,
    }
}


const loginFormFields ={
    loginEmail:'',
    loginPassword: ''
}

const registerFormFields ={
    registerName:'',
    registerEmail:'',
    registerPassword: '',
    registerPasswordConfirm:''
}

export const LoginPage = () => {
    const navigate = useNavigate()
    const handleBack =()=>{ navigate(-1)}
    const [errorEmailLogin, setErrorEmailLogin] = useState(false)
    const [errorPasswordLogin, setErrorPasswordLogin] = useState(false)

    const [errorNameRegister, setErrorNameRegister] = useState(false)
    const [errorEmailRegister, setErrorEmailRegister] = useState(false)
    const [errorPassRegister, setErrorPassRegister] = useState(false)
    const [errorPassRegister2, setErrorPassRegister2] = useState(false)

    const {loginEmail,loginPassword,onInputChange:onLoginInputChange} = useForm(loginFormFields)
    const {registerEmail,registerPassword,registerName,registerPasswordConfirm,onInputChange:onRegisterInputChange} = useForm(registerFormFields)


    const {} = useAuthStore()
    const loginSubmit =(e)=>{
        e.preventDefault()

            if (!loginEmail.includes('@')){
                setErrorEmailLogin(true)
                setTimeout(()=>setErrorEmailLogin(false),2000)
            }
            else if(loginEmail.length < 2){
                setErrorEmailLogin(true)
                setTimeout(()=>setErrorEmailLogin(false),2000)
            }
            else if(loginPassword.length < 8){
                setErrorPasswordLogin(true)
                setTimeout(()=>setErrorPasswordLogin(false),2000)
            }
            else{
                console.log(loginEmail,loginPassword)
            }
         
    }

    const registerSubmit =(e)=>{
        e.preventDefault()
        console.log(registerEmail,registerPassword,registerName,registerPasswordConfirm)

        if(registerName.length < 2){
            setErrorNameRegister(true)
            setTimeout(()=>setErrorNameRegister(false),2000)
        }
        else if(!registerEmail.includes('@')){
            setErrorEmailRegister(true)
            setTimeout(()=>setErrorEmailRegister(false),2000)
        }
        else if(registerEmail.length < 3){
            setErrorEmailRegister(true)
            setTimeout(()=>setErrorEmailRegister(false),2000)
        }
        else if(registerPassword.length < 8){
            setErrorPassRegister(true)
            setTimeout(()=>setErrorPassRegister(false),2000)
        }
        else if(registerPasswordConfirm !== registerPassword){
            setErrorPassRegister2(true)
            setTimeout(()=>setErrorPassRegister2(false),2000)
        }
    }


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input 
                                style={errorEmailLogin ? {borderColor:'red'} : {borderColor:''}}
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='loginEmail'
                                onChange={onLoginInputChange}
                            />
                            <p style={styles.p}>{errorEmailLogin ? ' El correo electronico que has introducido esta vacio o no contiene @': ''}</p>
                        </div>
                        <div className="form-group mb-2">
                            <input
                                style={errorPasswordLogin ? {borderColor:'red'} : {borderColor:''}}
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='loginPassword'
                                onChange={onLoginInputChange}
                            />
                             <p style={styles.p}>{errorPasswordLogin ? 'Password tiene que tener al menos 8 caracteres': ''}</p>
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                style={errorNameRegister ? {borderColor:'red'} : {borderColor:''}}
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='registerName'
                                onChange={onRegisterInputChange}
                            />
                            <p style={styles.p}>{errorNameRegister ? 'El nombre no puede estar vacio' : ''}</p>
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='registerEmail'
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name='registerPassword'
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name='registerPasswordConfirm'
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
                
            </div>
            <button style={styles.backButton}className='btn btn-primary'onClick={handleBack}>{<LeftArrow />} Volver Atras</button>
        </div>
    )
}