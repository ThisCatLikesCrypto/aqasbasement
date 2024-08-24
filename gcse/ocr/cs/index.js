function Main(){
    return html`
    <div>
        <h1>Computer Science Resources</h1>
        <h2>OCR GCSE</h2>
        <p>
            <button><a href="https://www.ocr.org.uk/Images/558027-specification-gcse-computer-science-j277.pdf">Specification</a></button> 
            <button><a href="https://www.savemyexams.com/gcse/computer-science/ocr/22/">SaveMyExams</a></button>
        </p>
        <h2>Revision notes</h2>
        <h3>Paper 1</h3>
        <a href="1/1.html">1.1</a>
        <br>
        <a href="1/2_1.html">1.2 Part 1</a>
        <br>
        <a href="1/2_2.html">1.2 Part 2</a>
        <br>
        <a href="1/2_3.html">1.2 Part 3</a>
        <br>
        <a href="1/3_1.html">1.3 Part 1</a>
        <br>
        <a href="1/3_2.html">1.3 Part 2</a>
        <br>
        <a href="1/4.html">1.4</a>
        <br>
        <a href="1/5.html">1.5</a>
    </div>
    `
}

window.addEventListener('load', function(){
    document.getElementById("main").appendChild(h(Main));
});