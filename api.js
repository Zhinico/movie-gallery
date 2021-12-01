
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () =>{
    if(pagina < 1000 ){
        pagina += 1;
        pelis();
    }
   
});
btnAnterior.addEventListener('click', () =>{
    if(pagina > 1 ){
        pagina -= 1;
        pelis();
    }
   
});





const pelis = async () =>{

    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9b0f45c4d75c3e29a38e1f09cb56faef&language=es-MX&page=${pagina}`)


        console.log(respuesta);

//si es correcta la respuesta
        if(respuesta.status === 200){
            const datos = await respuesta.json()



let peliculas= '';
datos.results.forEach(pelicula =>{
    peliculas +=  `
    <div class="pelicula">
    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
    <h3 class="titulo">${pelicula.title}</h3>
    </div>  `;
});

 document.getElementById("contenedor").innerHTML=peliculas;

            datos.results.forEach(pelicula => {
                console.log(pelicula.title)
            });
        }else if(respuesta.status=== 401){
            console.log("escribiste mal");
        }else if(respuesta.status=== 404){
            console.log("la peli no existe")
        }
    
    }
    catch(error){
        console.log(error);
    }


}

pelis();