function copyKono() {
    navigator.clipboard.writeText("._.kono._.");
    alert("Copied.");
}

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
        <p>We have a Minecraft server! The IP is mc.aqasbasement.uk, but you will need to message Kono 
        (@<span title="click to copy" onclick="copyKono()">._.kono._.</span>) on Discord to be whitelisted.</p>
    </div>
    `
}

window.addEventListener('load', function(){
    document.getElementById("main").appendChild(h(Main));
});