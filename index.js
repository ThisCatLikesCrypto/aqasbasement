function Main(){
    return html`
    <div>
        <h1 class="rainbow">Welcome to the AQA's Basement website!</h1>
        <p>AQA's basement is a community of GCSE and A-Level students revolving around a discord server 
        who help each other revise and discuss their exams.</p>
        <p>This website is very much a basic layout/in-development website at the moment, so feel free to contribute!
        It has a long way to go and any help is appreciated.</p>
    </div>
    `
}

window.addEventListener('load', function(){
    document.getElementById("main").appendChild(h(Main));
});