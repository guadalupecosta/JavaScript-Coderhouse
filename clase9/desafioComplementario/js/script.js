const arraySimpson = [
    {img: 'multimedia/homero.jpg', nombre: "Homero", edad: 36},
    {img: 'multimedia/marge.png', nombre: "Marge", edad: 34},
    {img: 'multimedia/bart.png', nombre: "Bart", edad: 10},
    {img: 'multimedia/lisa.png', nombre: "Lisa  ", edad: 8},
    {img: 'multimedia/maggie.png', nombre: "Maggie", edad: 1},
]

const contenedorSimpson = document.getElementById('container-familia')

arraySimpson.forEach((persona) => {
    const div = document.createElement('div')
    div.className = "card-img-top text-center m-4"
    div.style = "width: 18rem"
    
    div.innerHTML = `
                    <img src=${persona.img} class="card-img-top" alt="lorem">
                    <div class="card-body">
                        <h5 class="card-title">${persona.nombre}</h5>
                        <p class="card-text">edad: ${persona.edad}</p>
                    </div>
                `
    
    contenedorSimpson.appendChild(div)
})