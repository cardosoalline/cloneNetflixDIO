$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function aperte(){
    window.open ("https://www.youtube.com/watch?v=oyxCU7jBKoE");
}

function info(){
    document.getElementById("textoinfo").classList.add('sinopse');
    document.getElementById("textoinfo").innerHTML = "Tyler Doherty (Tanner Maguire) é uma criança de 8 anos que sofre de câncer e todos em sua volta não acreditam em sua recuperação. Mas Tyler deposita sua esperança em Deus e acredita que este possa salva-lo. Sua fé faz com que ele escreva um diário sobre suas esperanças e espera por sua recuperação." ;
    document.getElementById("btnSinopse").setAttribute( "onClick", "fechar()" );
}

function fechar(){
   document.getElementById("textoinfo").classList.remove('sinopse');
   document.getElementById("textoinfo").innerHTML = "";
   document.getElementById("btnSinopse").setAttribute( "onClick", "info()" );

 }