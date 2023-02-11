import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Navbar = () => {
  const navigate= useNavigate()
  const [login , setLogin] = useState(false)

  const handleClick = ()=>{
    setLogin(!login)
    console.log(login)
    navigate('/register')
    setLogin(false)
  }

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            Calendy
        </span>

        <button className="btn btn-outline-danger" onClick={handleClick}>
            <i className="fas fa-sign-out-alt"></i>
            <span>{login ? 'Salir' :' Iniciar Sesion'}</span>
        </button>
    </div>
  )
}
