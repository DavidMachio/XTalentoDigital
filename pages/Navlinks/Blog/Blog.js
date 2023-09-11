import "./Blog.css";

const template = () => {
  return `
  <h2>Dime sobre que quieres que escribamos</h2>
  `;
};

const Blog = () => {
  document.querySelector("main").innerHTML = template();
};

export default Blog;
