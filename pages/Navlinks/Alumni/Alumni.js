import "./Alumni.css";

const template = () => {
  return `
  <h2>Enhorabuena Gonzalo por ser nuestro Alumni ejemplar</h2>
  `;
};

const Alumni = () => {
  document.querySelector("main").innerHTML = template();
};

export default Alumni;
