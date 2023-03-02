
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
            for(let elem of content[i].children) {
                elem.classList.remove("animated");
            }
        }
    }
    }

document.addEventListener("DOMContentLoaded", addAnimation)

window.addEventListener("scroll", addAnimation);

document.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitBtn = document.querySelector('.contact button');
    submitBtn.innerHTML = 'Submitting...';
	const response = await fetch('https://email-sender-api-kohl.vercel.app/contact', {
		method: 'POST',
		body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
        headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	});
    submitBtn.innerHTML = 'Submit';
    event.target.reset();
    if (response.ok) {
        alert('Message sent sucessfully');
    } else {
        console.warn('Failed to send message');
    }  
	});



