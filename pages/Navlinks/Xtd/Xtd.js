import "./Xtd.css";

const template = () => {
  return `
  <h2>¿Qué es XTD?
  `;
};

const Xtd = () => {
  document.querySelector("main").innerHTML = template();
};

export default Xtd;
