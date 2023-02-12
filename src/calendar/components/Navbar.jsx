import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CalendarIcon } from "../../ui/svg-icons/CalendarIcon"



const styles ={
  title:{
    fontSize:30,
    marginLeft:10
  }
}

export const Navbar = () => {
  const navigate= useNavigate()
  const [login , setLogin] = useState(false)

  const handleClick = ()=>{
    setLogin(!login)
    navigate('/register-login')
    setLogin(false)
  }

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
           {<CalendarIcon />}
            &nbsp;
            <b style={styles.title}>C</b>alendy
        </span>

        <button className="btn btn-outline-danger" onClick={handleClick}>
            <i className="fas fa-sign-out-alt"></i>
            <span>{login ? 'Salir' :' Iniciar Sesion'}</span>
        </button>
    </div>
  )
}
