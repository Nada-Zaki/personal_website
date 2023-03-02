
const addAnimation = () => {
    var content = document.querySelectorAll(".container");
    var profileImg = document.querySelector(".profile");
    let delay;
    for (var i = 0; i < content.length; i++) {
        delay = 0.3;
        var windowHeight = window.innerHeight;
        var bound = content[i].getBoundingClientRect();
        if((bound.top < windowHeight && bound.bottom > 0) ||
            (bound.top >= 0 && bound.bottom <= windowHeight)) {
            
            for(let elem of content[i].children) {
                elem.classList.add("animated");
                elem.style["animation-delay"] = `${delay}s`;
                elem.style["-webkit-animation-delay"] = `${delay}s`;
                elem.style["-moz-animation-delay"] = `${delay}s`;
                elem.style["-ms-animation-delay"] = `${delay}s`;
                elem.style["-o-animation-delay"] = `${delay}s`;
                delay+=0.1;
            }
            profileImg.classList.add("animated");
            profileImg.style["animation-delay"] = `${delay}s`;
            profileImg.style["-webkit-animation-delay"] = `${delay}s`;
            profileImg.style["-moz-animation-delay"] = `${delay}s`;
            profileImg.style["-ms-animation-delay"] = `${delay}s`;
            profileImg.style["-o-animation-delay"] = `${delay}s`;
        } else {
            console.log('else')
            for(let elem of content[i].children) {
                elem.classList.remove("animated");
            }
        }
    }
    }


const sendEmail = () => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

document.addEventListener("DOMContentLoaded", addAnimation)

window.addEventListener("scroll", addAnimation);


