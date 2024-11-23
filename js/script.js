if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hex").on("click", function () {
        removeall();
        $("#hex").css("border", "2px solid whitesmoke");
        $("#hex").css("border-radius", "20px");
    });
}

// Adicionar borda ao passar o mouse em "contribution"
$("#contribution").on("mouseover", function () {
    introAboutLogoTransition();
});



// Slider
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Incrementa o índice e reinicia quando chega ao total
    document.getElementById(`radio${currentIndex + 1}`).checked = true; // Marca o botão de rádio correspondente
}, 5000); // Altera o slide a cada 5 segundos


window.addEventListener("scroll", updateNav);
