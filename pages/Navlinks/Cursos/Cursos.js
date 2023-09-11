import "./Cursos.css";

const template = () => {
  return `
  <h1>Fareh eres un crack</h1>
  `;
};
const Cursos = () => {
  document.querySelector("main").innerHTML = template();
};
export default Cursos;
