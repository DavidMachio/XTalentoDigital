import "./Home.css";
import courses from "../../Data/courses";
import alumnis from "../../Data/alumnis";

const template = () => {
  return `
  <img class="cover" src="./images/programadores.jpg"/>
  <container class="info-xtd">
  <div class="info-programa">
    <h1>¿Qué es el Programa Por Talento Digital?</h2>
      <p><span><span class="bold">Por Talento Digital es un programa de formación permanente en competencias digitales y profesiones tecnológicas de la <a href="https://www.fundaciononce.es/es" class="fundao" target="_blank">Fundación ONCE</a></span> orientado a la adquisición de conocimientos y cualificación tecnológica y digital de las personas con discapacidad para favorecer así su inclusión laboral en profesiones con alta demanda en el mercado de trabajo, multiplicando de esta forma sus perspectivas profesionales.</span></p>
  </div>
  <div class="info-becas">
      <div class="text-becas">
      <h3>II Convocatoria de becas</h3>
      <p>¡Ya se ha abierto la II Convocatoria de becas de formación individual. No pierdas la oportunidad!</p>
      </div>
    <img src="./images/banner_home.png"/>
  </div>
  </container>
  <h2>Cursos de formación</h1>
  <div class="decoration"></div>
  <section id="course-group" class="course-group"></section>
  <div class="divider"></div>
  <h2>Alumni</h1>
  <div class="decoration"></div>
  <section id="alumnis-group" class="alumnis-group"></section>
  <div class="divider"></div>
  `;
};

const printCourses = () => {
  const courseGroup = document.querySelector("#course-group");
  for (const course of courses) {
    const article = document.createElement("article");
    article.innerHTML = `
    <article class="course">
             <ul class="date-inscription">
               <li class="inscription">Inscripción hasta el</li>
               <li class="day">${course.day}</li>
               <li class="month-age">${course.month} ${course.age}</li>
             </ul>
           <container class="information">
             <section class="title">
               <h3><a href=${course.url}target="_blank">${course.title}</a></h3>
               <button class="subscribe" href= >Inscríbete</button>
             </section>
             <section class="place">
               <div>
                 <span>
                   <h4>Lugar:</h4>
                   <p class="site">${course.place}</p>
                 </span>
                 <span class="duration">
                   <h4>Duración:</h4>
                   <p>${course.duration}</p>
                 </span>
               </div>
               <div>
                 <span class="seats">
                   <h4>Plazas:</h4>
                   <p>${course.seats}</p>
                 </span>
                 <span class="type">
                   <h4>Modalidad:</h4>
                   <p>${course.type}</p>
                 </span>
               </div>
             </section>
             <div class="solid"></div>
             <section class="requisites">
               <span>
                 <h4>Requisitos:</h4>
                 <p>${course.requisites}</p>
                 <h4>Descripción:</h4>
                 <p>${course.description}</p>
               </span>
               <img
                 class="photo-course"
                 src=${course.img} alt="${course.alt}"
               />
             </section>
           </container>
           </section>

    `;
    courseGroup.appendChild(article);
  }
};
const printAlumnis = () => {
  const alumnisGroup = document.querySelector("#alumnis-group");
  for (const alumni of alumnis) {
    const articlea = document.createElement("article");
    articlea.innerHTML = `
    <container class="alumni-file">
    <img src="${alumni.img}" alt="${alumni.alt}" class="photoAlumni"/>
    <h3 class="name">${alumni.fullName}</h3>
    <p class="preHistory">${alumni.prehistory}</p>
    </container>
    
    `;
    alumnisGroup.appendChild(articlea);
  }
};
const Home = () => {
  document.querySelector("main").innerHTML = template();
  printCourses();
  printAlumnis();
};

export default Home;
