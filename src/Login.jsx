import aprendeInglesDoIt from "./assets/Aprende-ingles-LOGO 01.png"


function Boton (props){
  return <button className="botonInicio" type="">
    <a href={props.enlace}>{props.titulo}</a>
  </button>
}


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
