setTimeout(() => {
    const questionUser = confirm("¿Quieres ordenar la lista alfabéticamente?");
    if (questionUser) {
        const ul = document.getElementById("listaPalabras");
        const listaPalabras = document.querySelectorAll("#listaPalabras li");

        const palabras = Array.from(listaPalabras).map(li => li.textContent);
        palabras.sort();
        ul.innerHTML = "";

        palabras.forEach(palabra => {
            const li = document.createElement("li");
            li.textContent = palabra;
            ul.appendChild(li);
        });

    }
}, 3000);