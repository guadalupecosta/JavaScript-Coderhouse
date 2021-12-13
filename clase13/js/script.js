$('#button').click(() => {
    $('.animado').animate({
        "border-radius": "10%",
        "width": "300px",
        "height": "300px"
    },"slow")
    .animate({
        "border-radius": "50%",
        "width": "200px",
        "height": "200px"
    },"slow")
    .animate({
        "border-radius": "25px%",
        "width": "150px",
    },"fast")
    .animate({
        "border-radius": "50%",
        "width": "200px",
    },"fast")
    .animate({
        "border-radius": "75%",
        "width": "250",
    },"fast")
    .animate({
        "border-radius": "100%",
        "width": "300px",
    })
    .fadeOut("fast")
    .slideDown("fast")
    .animate({
        "border-radius": "50%",
        "width": "50px",
        "height": "50px",
    })
    .slideUp("fast")
    .slideDown("fast")
    .animate({
        "border-radius": "50%",
        "width": "100px",
        "height": "100px",
    })
    .slideUp("slow")
    .fadeIn("slow")
    .animate({
        "border-radius": "50%",
        "width": "300px",
        "height": "100px",
    })
    .animate({
        "border-radius": "25px%",
        "height": "150px",
    })
    .animate({
        "border-radius": "50%",
        "height": "200px",
    })
    .animate({
        "border-radius": "75%",
        "height": "250",
    })
    .animate({
        "border-radius": "100%",
        "height": "300px",
    })
    .animate({
        "width": "450px",
        "height": "450px"
    })
    .animate({
        "border-radius": "10%",
        "width": "300px",
        "height": "300px"
    })
})