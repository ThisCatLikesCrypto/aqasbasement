function Main(){
    return html`
    <div>
        <h1 class="rainbow">Welcome to the AQA's Basement website!</h1>
        <p>AQA's basement is a community of GCSE and A-Level students revolving around a discord server 
        who help each other revise and discuss their exams.</p>
        <p>This website is very much a basic layout/in-development website at the moment, so feel free to contribute!
        It has a long way to go and any help is appreciated.</p>
        <br><br>
        <h2 class="rainbow">Minecraft Server</h2>
        <p>We have a Minecraft server! The IP is mc.aqasbasement.uk</p>
        <img height=200px src="images/mcserver.png">
        <br><br>
        <h2 class="rainbow">WIP notes</h2>
        <p>I (Wilbur) am currently working on revision notes for GCSE OCR CS:</p>
        <a href="gcse/ocr/cs/index.html">GCSE/OCR/CS</a>
        <br><br>
    </div>
    `
}

window.addEventListener('load', function(){
    document.getElementById("main").appendChild(h(Main));
});