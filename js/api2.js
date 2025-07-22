const URL = "https://fakestoreapi.com/users";

async function fetchUsers() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const ubicacion = document.getElementById("ubicacion");

        data.forEach(user => {
            const div = document.createElement("div");
            div.className = "card mb-3";
            div.style.width = "18rem";
            div.style.margin = "10px";
            div.innerHTML = `
                <img src="https://i.pravatar.cc/150?img=${user.id}" class="card-img-top" alt="User Avatar">
                <div class="card-body">
                    <h5 class="card-title">${user.name.firstname} ${user.name.lastname}</h5>
                    <p class="card-text"><strong>Username:</strong> ${user.username}</p>
                    <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                    <p class="card-text"><strong>City:</strong> ${user.address.city}</p>
                </div>
            `;
            ubicacion.appendChild(div)
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }     
}

fetchUsers(); // Llama a la función para cargar los usuarios
