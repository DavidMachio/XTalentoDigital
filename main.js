import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cursos from "./pages/Navlinks/Cursos/Cursos";
import Becas from "./pages/Navlinks/Becas/Becas";
import Blog from "./pages/Navlinks/Blog/Blog";
import Alumni from "./pages/Navlinks/Alumni/Alumni";
import Colaboradores from "./pages/Navlinks/Colaboradores/Colaboradores";
import Xtd from "./pages/Navlinks/Xtd/Xtd";

Header();
Footer();
Home();

const xtd = document.querySelector("#xtd");
xtd.addEventListener("click", () => {
  Home();
});

const cursos = document.querySelector("#cursos");
cursos.addEventListener("click", () => {
  Home();
  const navlist = document.querySelector("#nav-list");
  navlist.classList.remove("visible");
});

const becas = document.querySelector("#becas");
becas.addEventListener("click", () => {
  Becas();
  const navlist = document.querySelector("#nav-list");
  navlist.classList.remove("visible");
});

const blog = document.querySelector("#blog");
blog.addEventListener("click", () => {
  Blog();
  const navlist = document.querySelector("#nav-list");
  navlist.classList.remove("visible");
});

const alumni = document.querySelector("#alumni");
alumni.addEventListener("click", () => {
  Alumni();
  const navlist = document.querySelector("#nav-list");
  navlist.classList.remove("visible");
});
const colaboradores = document.querySelector("#colaboradores");
colaboradores.addEventListener("click", () => {
  Colaboradores();
  const navlist = document.querySelector("#nav-list");
  navlist.classList.remove("visible");
});

const xtdnav = document.querySelector("#xtdnav");
xtdnav.addEventListener("click", () => {
  Xtd();
  const navlist = document.querySelector("#nav-list");
  navlist.classList.remove("visible");
});
