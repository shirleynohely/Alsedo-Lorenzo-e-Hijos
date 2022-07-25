/* ANIMACIÓN MENU HAMBURGUESA */

const links = document.querySelector(".nav-links");
const list = document.querySelector(".image-list");

list.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

/* FILTRAR PRODUCTOS POR CATEGORÍA */

const categories = document.querySelectorAll(".categories");
const product = document.querySelectorAll(".product");
const recipe = document.querySelectorAll(".recipe");


for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", (e) => {
    e.preventDefault();

    changeActive(e.target);
    const filter = e.target.id;
   
    product.forEach((p) => {
      if (filter == "todos") {
        p.style.display = "block";
      } else {
        if (p.classList.contains(filter)) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      }
    });
  });
}

const changeActive = (item) => {
  for(let i=0; i< categories.length; i++) {
    categories[i].classList.remove("active");
  }
  item.classList.add("active");
}

/* FILTRAR RECETAS*/

for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", (e) => {
    e.preventDefault();

    changeActive(e.target);
    const filter = e.target.id;
   
    recipe.forEach((r) => {
      if (filter == "todos") {
        r.style.display = "block";
      } else {
        if (r.classList.contains(filter)) {
          r.style.display = "block";
        } else {
          r.style.display = "none";
        }
      }
    });
  });
}
