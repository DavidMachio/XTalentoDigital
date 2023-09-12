import "./Xtd.css";

const template = () => {
  return `
  <container class="xtd-page">
  <img class="xtdcover" src="./images/coverxtd.jpg"/>
  <h1>¿Qué es XTD?</h1>
  <div class="decoration-xtd"></div>
  <h2>¿Qué es el Programa Por Talento Digital?</h2>
  <p class="only">Por Talento Digital es un programa de formación permanente orientado a la mejora de los conocimientos y las competencias digitales y tecnológicas de las personas con discapacidad, y en consecuencia de su empleabilidad, a través de la formación.
  </p>
  <p class="only">
  Este programa se pone en marcha bajo la coordinación y financiación de la Fundación ONCE y de sus asociaciones Inserta Empleo e Inserta Innovación, y el apoyo del Fondo Social Europeo, con la convicción conjunta de esta apuesta por la formación en contenidos digitales y profesiones tecnológicas altamente demandadas en el mercado de trabajo presente y futuro.
  </p>
  <h2>Objetivos</h2>
  <ul>
    <li>
      <p>Favorecer el acercamiento de las personas con discapacidad a profesiones digitales y tecnológicas con alta demanda en el mercado de trabajo, multiplicando de esta forma sus perspectivas laborales.
      </p>
    </li>
    <li>
      <p>Promover la adquisición de conocimientos y competencias digitales con aplicación en un abanico amplio de empleos de corte digital con recorrido en el futuro.
      </p>
    </li>
    <li>
      <p>Promover el desarrollo personal y profesional de los participantes motivando su empoderamiento social y laboral.
      </p>
    </li>
    <li>
      <p>Posibilitar el desarrollo de habilidades emprendedoras que aumentan las opciones laborales por cuenta propia.
      </p>
    </li>
    <li>
      <p>Dotar de las competencias, destrezas, conocimientos y actitudes necesarios para enfrentarse exitosamente a los retos del mercado laboral actual y futuro (Competencias del Siglo XXI).
      </p>
    </li>
  </ul>
  <h2>Características y acciones contempladas</h2>
  <ul>
    <li>
      <p>
      Los alumnos (accesibilidad física, cognitiva, ayudas técnicas y apoyos personales).
      </p>
    </li>
    <li>
      <p>
      Modalidades de formación presencial, online y mixta.
      </p>
    </li>
    <li>
      <p>
      En todo el territorio nacional.
      </p>
    </li>
    <li>
      <p>
      Con un programa de ayudas que facilite la asistencia a los cursos de formación y un Programa de becas de formación individual.
      </p>
    </li>
    <li>
      <p>
      Las acciones formativas incluirán contenidos como marketing digital, e-commerce, programación web y aplicaciones móviles, robótica, drones, ciberseguridad, bigdata, inteligencia artificial, videojuegos, etc.
      </p>
    </li>
  </ul>
  <h2>Dónde estamos</h2>
  <p class="only">Realizamos formación presencial y virtual en todo el territorio español y noviembre de 2021 está abierto el primer centro de formación propio en Madrid que está situado en la zona de Embajadores, una de las mejor comunicadas y accesibles de la ciudad.</p>
  <p class="only">En concreto, el centro Por Talento Digital, está en la calle Fray Luis de León, 11, Madrid. Es un espacio polivalente de 1.800 m2 con, con 6 aulas, una zona de coworking y un HUB para eventos y para formación en materias del mundo audiovisual.</p>
  <p class="only">Nuestra sede está equipada tecnológicamente con todo lo necesario para el aprendizaje híbrido y colaborativo y el HUB cuenta con una gran pantalla que proporciona una calidad de imagen y sonido diferencial y una experiencia envolvente.</p>
  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4613.842315354124!2d-3.7007151829910905!3d40.40501348752975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sC.%20de%20Fray%20Luis%20de%20Le%C3%B3n%2C%2011%20C.%20de%20Fray%20Luis%20de%20Le%C3%B3n%2C%2011%2C%2028012%20Madrid!5e0!3m2!1ses!2ses!4v1694473059142!5m2!1ses!2ses" width="1900" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <p class="only">Si deseas cursar este tipo de formaciones digitales y tecnológicas y no lo encuentras en nuestro catálogo formativo, pincha en este <a class="linkform">formulario</a> y rellénalo para trasladarnos tu interés.</p>
  <section>
  <h2>¿Quieres recibir más información sobre los cursos y becas del Programa Por Talento Digital?</h2>
  <p class="only">Si quieres recibir información de interés sobre los cursos especializados y becas del Programa Por Talento Digital, o no has encontrado en esta web ninguna formación en contenidos digitales y tecnológicos que te interese, rellena el siguiente formulario y cuéntanos qué temática o profesión tecnológica te gustaría que nuestra oferta formativa incluyese.</p>
  <p class="only">Si eres una organización interesada en colaborar con el Programa Por Talento Digital de la Fundación ONCE, rellena el formulario de <a class="colabs">Colaboradores.</a></p>
  <div>
  <label id="lastname">Apellidos</label>
  <input id="lastname" type="text"></input>
  <label id="firsname">Apellidos</label>
  <input id="firstname" type="text"></input>
  <label id="email">Email</label>
  <input id="email" type="text"></input>
  <label id="forma-interes">Formación de interés</label>
  <input id="forma-interes" type="text"></input>
  <input type="radio">He leído y acepto la <a href="#null"class="politic">política de privacidad.</a></input>
  </div>
  </section>
  </container>
  `;
};

const Xtd = () => {
  document.querySelector("main").innerHTML = template();
};

export default Xtd;
