import "./Footer.css";

const template = () => {
  return `
    <div class="address">
      <p>C/Fray Luis de León, 11</p>
      <p>28012 Madrid</p>
      <p>Tlf Centralita: 91 506 88 88</p>
      <p>Tlf DAE: 91 506 89 18 / 19</p>
      <p>Email: cursos.portalentodigital@fundaciononce.es</p>
    </div>
    <div class="moreinfo">
    <ul>
    <li><a href="https://portalentodigital.fundaciononce.es/accesibilidad" target="_blank">Accesibilidad</a></li>
    <li><a href="https://portalentodigital.fundaciononce.es/aviso-legal" target="_blank">Aviso legal</a></li>
    <li><a href="https://portalentodigital.fundaciononce.es/politica-de-privacidad" target="_blank">Política de privacidad</a></li>
    <li><a href="https://portalentodigital.fundaciononce.es/formulario-contacto" target="_blank">Contacto</a></li>
    <li><a href="https://portalentodigital.fundaciononce.es/politica-de-cookies" target="_blank">Politica de cookies</a></li>
    </ul>
    </div>
    <a href="https://generaciond.gob.es/" target="_blank"><img class="generaciond" src="./images/generaciond.png" alt="Foto logotipo Generacion D"></a>
  `;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
