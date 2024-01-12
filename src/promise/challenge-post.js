import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response;
};

const data = {
    "title": "56",
    "price": 56,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))

  // ACTUALIZAR UN PRODUCTO

  function updateData(urlAPI, data,) {
    const response = fetch(urlAPI, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response;
  };

  const newData = {
    title: "updatedTitle",
    price: 5678,
  };

  updateData(${API}/products/55, newData)
  .then(response => response.json())
  .then(data => console.log(data))

  // ELIMINAR UN PRODUCTO

  function deleteData (urlAPI) {
    const response = fetch(urlAPI, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
  };

  deleteData(`${API}/products/55`)
  .then(data => data.json())
  .then(res => console.log(res))