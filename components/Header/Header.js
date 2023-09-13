import "./Header.css";

const template = () => {
  return `
  <container class="header">
      <div class="logos">
        <img class="xtd" id="xtd" src="./icons/xtd.png"/ alt="Logotipo de por talento digital">
        <a href="https://gruposocialonce.com/" target="_blank"><img class="gso" src="./icons/gso.png"/ alt="Logotipo grupo social once"></a>
      </div>
    <nav id="nav"class="nav">
    <button class="abrir-menu" id="abrir"><img src="icons/hamburguer.png"/></button>
      <ul class="nav-list" id="nav-list">
      <button class="cerrar-menu" id="cerrar"><img src="icons/cerrar.png"/></button>
        <li><a href="#null" id="xtdnav">¿Qué es XTD?</a></li>
        <li><a href="#null" id="cursos">Cursos</a></li>
        <li><a href="#null" id="becas">Becas</a></li>
        <li><a href="#null" id="blog">Blog</a></li>
        <li><a href="#null" id="alumni">Alumni</a></li>
        <li><a href="#null"id="colaboradores">Colaboradores</a></li>
      </ul>
      <ul class="rrss">
        <li><a href="https://www.facebook.com/fundaciononce" target="_blank"><img src="icons/facebook.svg"></a></li>
        <li><a href="https://twitter.com/Fundacion_ONCE" target="_blank"><img src="icons/twitter.png"></a></li>
        <li><a href="https://www.youtube.com/user/FundacionONCE" target="_blank"><img src="icons/youtube.svg"></a></li>
        <li><a href="https://www.instagram.com/fundaciononce/" target="_blank"><img src="icons/instagram.svg"></a></li>
        <li><a href="https://www.linkedin.com/company/fundacion-once-inserta/" target="_blank"><img src="icons/linkedin.svg"></a></li>
      </ul>
  </nav>
  </container>
  `;
};
const Header = () => {
  document.querySelector("header").innerHTML = template();

  const navList = document.querySelector("#nav-list");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");

  abrir.addEventListener("click", () => {
    navList.classList.add("visible");
  });
  cerrar.addEventListener("click", () => {
    navList.classList.remove("visible");
  });
};

export default Header;
