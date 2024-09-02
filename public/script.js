//Built with dreamland.js, version 0.0.20

var messages = [
    "Website indev as hell",
    "All hail AQA",
    "Edexcel confusing everyone again",
    "OCR computer science > every other OCR subject",
    "<a href='https://www.youtube.com/@texanspell'>GCSE Slander is more important than revising</a>",
    "That one CCEA person",
    "CIE = international nerds",
    "'I'm Cooked' - Everyone Ever",
    "<a href='https://discord.gg/XTvhaHYRBa'>Join the Discord!</a>"
];
  
var currentIndex = 0;
  
//This transition is so f-ing strange cuz its chatgpt lmao, i kept it anyway cuz funi
function msgs() {
    var headmsg = document.getElementById('headmsg');
    headmsg.classList.add('scroll-out');
    
    setTimeout(() => {
        headmsg.innerHTML = messages[currentIndex];
        currentIndex = (currentIndex + 1) % messages.length;
        headmsg.classList.remove('scroll-out');
        headmsg.classList.add('scroll-in');
    }, 1000); // Delay should match the transition duration in CSS

    setTimeout(() => {
        headmsg.classList.remove('scroll-in');
    }, 2000); // Ensure the class is removed after the animation completes
}

window.addEventListener('load', function(){
    msgs();
    setInterval(msgs, 10000);
});