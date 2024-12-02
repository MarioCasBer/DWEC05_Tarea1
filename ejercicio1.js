//1. Modifica el contenido del título, poniéndole tu nombre.
let titulo = document.getElementById("titulo");  //Localiza la etiqueta "titulo"
titulo.innerText = "Mario Casado Berenguer";

//2. Modifica la imagen que muestra el segundo artículo
let imagen2 = document.querySelector('img[src="noticia2.jpg"]');
imagen2.style.border = "solid 10px orange";

//3. Oculta el último articulo.
let articulo = document.querySelectorAll("article");  //Devuelve un array con todos los elementos encontrados
let ultimoArticulo = articulo[articulo.length -1];
ultimoArticulo.style.display = "none"; 

//4. Recorre los artículos y añade al inicio de la cabecera el número de noticia (1- Hospitalizado...)
let articulos = document.querySelectorAll("article");  //Devuelve NodeList
for (let i = 0; i < articulos.length; i++) {
    let titular = articulos[i].firstElementChild;  //Primer elemento HTML dentro de article
    let textoTitular = titular.textContent;
    titular.textContent = (i+1)+ "- " +textoTitular;
}

//5. Añade la clase cabecera (ya esta declarada en los estilos), al primer div de cada artículo.
    //Copio el ejercicio anterior y uso la NodeList ya guardada en "articulos"
for (let i = 0; i < articulos.length; i++) {
    let titular = articulos[i].firstElementChild;  //Primer elemento HTML dentro de article
    titular.classList.add("cabecera");
}
//6. Busca en todos los artículos donde aparece la cadena "Servicio Murciano de Salud", y sustitúyela por "S.M.S" 
//   (¿método replace de cadenas?).
let cuerpos = document.querySelectorAll('div.cuerpo');
//console.log(cuerpos);
for (let i = 0; i < cuerpos.length; i++) {
    let texto = cuerpos[i].textContent;
    cuerpos[i].textContent = texto.replace("Servicio Murciano de Salud", "S.M.S.");  //Devuelve el texto con los cambios
    //console.log(cuerpo);
}