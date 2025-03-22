import Boton from "./Boton"


export default function Formulario() {
  return (
    <section className="formulario-inicio-sesion">
          <img src="src/assets/01 Welcome-to-Doit.png" alt="" />
          <h1>Iniciar de sesión</h1>
          <h2>¿Aún no te has registrado <a href="">Registrarme</a></h2>
          <img src="" alt="" srcset="" />
        <form className="formInicioDeSesion"action="">
           <h3>Email</h3>
          <input 
          type= "email" />
          <h3>Contraseña</h3>
          <input 
          type="password" />
          <a href="">¿Olvidaste tu contraseña?</a>
        </form>
        <Boton enlace= "" titulo="Iniciar sesión"/>
        
    </section>
  )
}

