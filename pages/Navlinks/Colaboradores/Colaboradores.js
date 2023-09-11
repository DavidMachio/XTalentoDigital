import "./Colaboradores.css";

const template = () => {
  return `
  <h2>¿Quieres saber quien colabora con XTalento Digital?
  `;
};

const Colaboradores = () => {
  document.querySelector("main").innerHTML = template();
};

export default Colaboradores;
