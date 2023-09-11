import "./Becas.css";

const template = () => {
  return `
  <h2>Pero yo no me quedaré atrás</h2>
  `;
};

const Becas = () => {
  document.querySelector("main").innerHTML = template();
};
export default Becas;
