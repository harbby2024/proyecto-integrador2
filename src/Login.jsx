import aprendeInglesDoIt from "./assets/LOGO-01-Aprende-ingles-.png"
import Boton from "./components/Boton"



const Login = () => {
  return (
    <><section className="contenedor">
        <img src={aprendeInglesDoIt} alt="" />
        <section className="botoneslanding">
        <Boton enlace= "src/Formulario.jsx" titulo="Iniciar sesión" />
          <button className="botonRegistro" type="botonRegistro">
            <a href="https://www.google.com/?hl=es">Registrarme</a>
          </button>
        </section>
      </section>
    </>
  )
}

export default Login
