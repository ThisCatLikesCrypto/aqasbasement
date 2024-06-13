//Built with dreamland.js, version 0.0.21

var messages = [
    "Website indev as hell",
    "All hail AQA",
    "Edexcel confusing everyone again",
    "OCR computer science > every other OCR subject",
    "That one CCEA person",
    "Message @ThisCatLikesCrypto on discord to have your message added!"
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

function Header(){
    return html`
    <div id="headercontent">
        <div>
            <h1 class="rainbow"><a href="/index.html">AQA's Basement</a></h1>
            <p id="headmsg">Messages Loading...</p>
        </div>
        <div>
            <a href="https://discord.gg/4AW5qzUBrk"><img alt="Discord" src="/images/discord.png"></a>
        </div>
    </div>`
}

function Footer(){
    return html`
    <p>Site by <a href="https://wilburwilliams.uk">Wilbur Williams</a>. 
    This is not endorsed by AQA or any exam boards.</p>`
}

window.addEventListener('load', function(){
    document.getElementById("header").appendChild(h(Header));
    document.getElementById("footer").appendChild(h(Footer));
    msgs();
    setInterval(msgs, 10000);
});