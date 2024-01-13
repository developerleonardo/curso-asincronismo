function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value); 
console.log(g.next().value); 
console.log(g.next().value); 

function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(["oscar", "omar", "ana", "lucia", "juan"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


//challenge

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function* fetchData(urlApi) {
    const response = await fetch(urlApi);
    yield await response.json();
};

fetchData(`${API}/products`).next().then(({ value, done }) => {
        	
    console.log(value); 
})