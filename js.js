$("#burger").on("click",()=>{
    var toggle=$(".responsive li").css("display");
    if(toggle=="none")
    {
        $(".responsive li").fadeIn();
        $(".responsive li").fadeIn("slow");
        $(".menu-bar i").removeClass("fas fa-bars");
        $(".menu-bar i").addClass("fas fa-times");
    }
    else{
        $(".responsive li").fadeOut();
        $(".responsive li").fadeOut("slow");
        $(".menu-bar i").removeClass("fas fa-times");
        $(".menu-bar i").addClass("fas fa-bars");
        
    }
})