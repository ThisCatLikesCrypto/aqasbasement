function Main(){
    return html`
    <div>
        <h1>Computer Science Resources</h1>
        <h2>OCR GCSE</h2>
        <p>
            <button><a href="https://www.ocr.org.uk/Images/558027-specification-gcse-computer-science-j277.pdf">Specification</a></button> 
            <button><a href="https://www.savemyexams.com/gcse/computer-science/ocr/22/">SaveMyExams</a></button>
        </p>
        <p>This might fill up with my notes if I can be bothered</p>
        <h3>1.1</h3>
        <a href="1.1/1.html">Page for 1.1.1 of the spec</a>
    </div>
    `
}

window.addEventListener('load', function(){
    document.getElementById("main").appendChild(h(Main));
});