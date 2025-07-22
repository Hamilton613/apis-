const URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const ubicacion = document.getElementById("ubicacion")
        data.forEach(product => {
            const div = document.createElement("div");
            div.className = "card mb-3";
            div.style.width = "18rem";
            div.style.margin = "10px";
            div.innerHTML = `
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Price: $${product.price}</strong></p>
                </div>
            `;
            ubicacion.appendChild(div);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }     
}

fetchProducts(); // Llama a la función para cargar los productos
