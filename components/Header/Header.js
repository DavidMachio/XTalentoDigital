import "./Header.css";

const template = () => {
  return `
  <container class="header">
      <div class="logos">
        <a href="https://portalentodigital.fundaciononce.es/" target="_blank"><img class="xtd" src="./icons/xtd.png"/ alt="Logotipo de por talento digital"></a>
        <a href="https://gruposocialonce.com/" target="_blank"><img class="gso" src="./icons/gso.png"/ alt="Logotipo grupo social once"></a>
      </div>
    <nav class="links">
      <ul class="urls">
        <button class="abrir" id="abrir"><img src="icons/hamburguer.png"/></button>
        <li><a href="#null">¿Qué es XTD?</a></li>
        <li><a href="#null">Cursos</a></li>
        <li><a href="#null">Becas</a></li>
        <li><a href="#null">Blog</a></li>
        <li><a href="#null">Alumni</a></li>
        <li><a href="#null">Colaboradores</a></li>
      </ul>
      <ul class="rrss">
        <li><a href="https://www.facebook.com/fundaciononce" target="_blank"><img src="icons/facebook.png"></a></li>
        <li><a href="https://twitter.com/Fundacion_ONCE" target="_blank"><img src="icons/twitter.png"></a></li>
        <li><a href="https://www.youtube.com/user/FundacionONCE" target="_blank"><img src="icons/youtube.png"></a></li>
        <li><a href="https://www.instagram.com/fundaciononce/" target="_blank"><img src="icons/instagram.png"></a></li>
        <li><a href="https://www.linkedin.com/company/fundacion-once-inserta/" target="_blank"><img src="icons/linkedin.png"></a></li>
      </ul>
  </nav>
  </container>
  `;
};
const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;