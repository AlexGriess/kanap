// Selection de l'ID html dans lequel seront créer les fiches produits
const sectionItems = document.querySelector('#items');
// Récupération des données de l'API dans une constante listeproducts
fetch('http://localhost:3000/api/products')
  .then((response) => response.json())
  .then((data) => {
    for (const listProducts of data) {
      console.log(listProducts);
      // on créer les éléments html manquants de la page index.html et on y insère les données de l'api
      let linkProduct = document.createElement('a');
      linkProduct.setAttribute('href', `./product.html?id=${listProducts._id}`);
      sectionItems.appendChild(linkProduct);

      let articleProduct = document.createElement('article');
      articleProduct.appendChild(articleProduct);

      let imgProduct = document.createElement('img');
      imgProduct.src = listProducts.imageUr;
      imgProduct.setAttribute('alt', listProducts.altTxt);
      newArticle.appendChild(imgProduct);

      let titleProduct = document.createElement('h3');
      titleProduct.innerText = listProducts.name;
      newArticle.appendChild(titleProduct);

      let descriptionProduct = document.createElement('p');
      descriptionProduct.innerText = listProducts.description;
      newArticle.appendChild(descriptionProduct);
    }
  });
