//?Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//! Scroll Section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');  
    navbar.classList.remove('active');
};

//! Input&output Email
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `
        Name: ${fullName.value} <br/>
        Email: ${email.value} <br/>
        Phone: ${phone.value} <br/>
        Message: ${mess.value}`;

//! Smtpjs.com
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "armanulf009@gmail.com",
        Password: "C0F34015800AA4796E9D01A1A900814F2D19",
        To: 'armanulf009@gmail.com',
        From: "armanulf009@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Terima Kasih!",
                    text: "Email Terkirim!",
                    icon: "Succes"
                });
            }
        }   
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
