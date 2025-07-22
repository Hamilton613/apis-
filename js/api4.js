const URL = "https://hp-api.onrender.com/api/characters";
const defaultImage = "https://via.placeholder.com/250x300?text=No+Image";

async function fetchCharacters() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const ubicacion = document.getElementById("ubicacion");

        data.forEach(character => {
            // Si no hay imagen o está vacía, usa la imagen por defecto
            const imgSrc = character.image && character.image.trim() !== "" ? character.image : defaultImage;

            const div = document.createElement("div");
            div.className = "card mb-3";
            div.style.width = "18rem";
            div.style.margin = "10px";
            div.innerHTML = `
                <img src="${imgSrc}" class="card-img-top" alt="${character.name}" style="height: 250px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text"><strong>Casa:</strong> ${character.house || "Desconocida"}</p>
                    <p class="card-text"><strong>Especie:</strong> ${character.species}</p>
                    <p class="card-text"><strong>Actor:</strong> ${character.actor || "No disponible"}</p>
                </div>
            `;
            ubicacion.appendChild(div);
        });
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}

fetchCharacters();
