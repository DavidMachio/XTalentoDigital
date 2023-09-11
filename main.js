import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cursos from "./pages/Cursos/Cursos";

Header();
Footer();
Home();

const xtd = document.querySelector("#xtd");
xtd.addEventListener("click", () => {
  Home();
});

const cursos = document.querySelector("#cursos");
cursos.addEventListener("click", () => {
  Cursos();
});
