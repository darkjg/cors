function getInfo() {
    const nameIn = document.getElementById("namein")
    const info = document.getElementById("Info")
    const nombre = nameIn.value.toLocaleLowerCase();
    fetch(`http://127.0.0.1:4000/characters/${nombre}`)
        .then(respo => respo.json())
        .then(data => {
            const { results: { 0: { name, status, species, gender, image, origin } } } = data
            const originNombre = origin.name;
            info.innerHTML = `
        <h2>${name}</h2>
        <img src="${image}" alt="${name}"/>
        <p>${status}</p>           
        <p>${species}</p> 
        <p>${gender}</p>
        `//
        console.log(originNombre)
            if (originNombre != "unknown") {
                info.innerHTML += `
            <p>${originNombre}</p> 
            `
            }

        }).catch(error => {
            info.innerHTML = `<p>imposible acceder al personaje</p>`
        })



}