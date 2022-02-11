//Boton de edicion ACERCA DE sacado de la masterclass
function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};
function myFunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
};

function logMessage(mensaje){ 
    console.log(mensaje+" ");
}

let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) => {
    logMessage('Key "${e.key}" released [event: keyup]');
    if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});
//Boton de edicion ACERCA DE sacado de la masterclass

//Progress Bar del header
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
//Progress Bar del header