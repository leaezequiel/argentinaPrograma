//Boton de edicion ACERCA DE sacado de la masterclass
function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};
function myFunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
};


//COPIANDO PARTE DEL VIDEO:

//controla si se presiona enter
let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) => {
    logMessage('Key "${e.key}" released [event: keyup]');
    if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});
//carga el contenido de un archivo de texto y lo muestra en el parrafo:

