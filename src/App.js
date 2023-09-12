import logo from './bigmelo_logo.jpg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showTermsModal, setShowTermsModal] = useState(false);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff5ebff',
  };

  const logoStyle = {
    height: '100px',
    marginBottom: '20px',
  };

  const linkStyle = {
    fontSize: '16px',
    color: '#007BFF',
    textDecoration: 'none',
    marginTop: '20px',
    cursor: 'pointer',
  };

  const termStyle = {
    width: '100%',
    backgroundColor: '#fff5ebff',
    display: 'block',
  };

  const termContainerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'left',
    padding: '0',
  };

  const closeButtonStyle = {
    cursor: 'pointer',
  }

  const footerStyle = {
    width: '100%',
    backgroundColor: '#fff5ebff',
    display: 'block',
    textAlign: 'center',
    padding: '100px 0 50px 0',
  };

  const scrollToTerms = () => {
    setShowTermsModal(true);setTimeout(() => {
      document.getElementById('terms').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const closeModal = () => {
    setShowTermsModal(false);
  };

  return (
      <div className="App" >
        <div style={containerStyle}>
          <img src={logo} alt="BigMelo" style={logoStyle} />
          <p style={linkStyle} onClick={scrollToTerms} >
            Términos y Condiciones
          </p>
        </div>
        {showTermsModal && (
          <div id="terms" style={termStyle}>
            <span style={closeButtonStyle} onClick={closeModal}>
              &times;
            </span>
            <h2>Términos y Condiciones</h2>

            <div style={termContainerStyle}>
              <h1>Estos términos y condiciones rigen el uso del servicio de chat en WhatsApp integrado con la
                inteligencia artificial proporcionado por BigMelo.</h1>
              <p>Al utilizar el Servicio, usted acepta cumplir con estos T&C.</p>
              <ol>
                <li>
                  <h2>Uso del Servicio</h2>
                  <ol>
                    <li>
                      <h3>Uso Aceptable:</h3>
                      <p>El Usuario se compromete a utilizar el Servicio de manera ética y legal. No se permite el
                        uso del Servicio para actividades ilegales, inmorales o que infrinjan los derechos de
                        terceros.</p>
                    </li>
                    <li>
                      <h3>Edad Mínima:</h3>
                      <p>El Servicio está destinado a personas mayores de 14 años. Al utilizar el Servicio, el
                        Usuario declara que cumple con este requisito de edad.</p>
                    </li>
                    <li>
                      <h3>Bigmelo no se descarga ni se instala en ningún equipo ya que funciona sobre una plataforma
                        instantánea de mensajería existente (whatsapp)</h3>
                    </li>
                  </ol>
                </li>
                <li>
                  <h2>Propiedad Intelectual</h2>
                  <ol>
                    <li>
                      <h3>Derechos de Autor:</h3>
                      <p>Todos los derechos de autor y otros derechos de propiedad intelectual relacionados con el
                        Servicio y su contenido pertenecen al Propietario o a sus licenciantes. El Usuario no tiene
                        derecho a copiar, modificar, distribuir o utilizar el contenido del Servicio de ninguna
                        manera que infrinja estos derechos.</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <h2>Privacidad de los Datos</h2>
                  <ol>
                    <li>
                      <h3>Recopilación de Datos:</h3>
                      <p>El Servicio puede recopilar y procesar datos personales del Usuario para mejorar la
                        experiencia del chat y proporcionar respuestas relevantes.</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <h2>Limitación de Responsabilidad</h2>
                  <ol>
                    <li>
                      <h3>Exactitud de las Respuestas:</h3>
                      <p>El Propietario se esfuerza por proporcionar respuestas precisas y útiles, pero no garantiza
                        la exactitud o la adecuación de las respuestas generadas por el Servicio.</p>
                    </li>
                    <li>
                      <h3>Daños y Perjuicios:</h3>
                      <p>En ningún caso el Propietario será responsable por daños directos, indirectos, especiales,
                        consecuentes o incidentales que puedan surgir del uso del Servicio.</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <h2>Cambios en los Términos y Condiciones</h2>
                  <ol>
                    <li>
                      <h3>Actualización de los T&C:</h3>
                      <p>El Propietario se reserva el derecho de modificar estos T&C en cualquier momento. Los
                        cambios se publicarán en el Servicio y se considerarán efectivos desde la fecha de
                        publicación. El uso continuado del Servicio después de la modificación constituirá la
                        aceptación de los nuevos T&C.</p>
                    </li>
                  </ol>
                </li>
              </ol>
              <h2>Término y Terminación</h2>
              <p>Al utilizar el Servicio, el Usuario acepta estos T&C. Si no está de acuerdo con alguno de los
                términos, no utilice el Servicio.</p>
            </div>

            <div style={footerStyle}><img height="80px" src={logo} alt="BigMelo" /></div>
          </div>
          )}
      </div>
  );
}

export default App;