import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};

const anotherFUnction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
};

anotherFUnction(API);


// Problema

function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
      async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = response.json();
            return console.log(data);
        } catch(error) {
            throw new Error('API Not Found');
        }
        
      }
      fetchData(url);
  }

  runCode();

//otra solucion

async function runCode() {
    const url = 'https://domain-api-com';
    try {
      return await fetch(url);
    } catch {
      throw new Error('API Not Found');
    }
  }

  runCode();