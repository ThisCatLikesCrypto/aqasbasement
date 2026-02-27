const messages = [
    "Website indev as hell",
    "All hail AQA",
    "Edexcel confusing everyone again",
    "OCR computer science > every other OCR subject",
    "<a href='https://www.youtube.com/thiscatlikescrypto'>GCSE Slander is more important than revising</a>",
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
    console.log("%chello everyone and welcome to aqa's basement :), how are you all doing today?", 'font-weight: bold; font-size: 40px; color: #3c3367ff;');
});

async function getAllContributors() {
    let page = 1;
    let allContributors = [];

    while (true) {
        console.log(`https://api.github.com/repos/ThisCatLikesCrypto/aqasbasement/contributors?per_page=100&page=${page}`)
        const url = `https://api.github.com/repos/ThisCatLikesCrypto/aqasbasement/contributors?per_page=100&page=${page}`;
        const res = await fetch(url);

        if (res.status === 429) {
            console.warn("Rate limit hit. Stopping further requests.");
            throw new Error("GitHub API rate limit exceeded. Please try again later.");
        }

        if (!res.ok) {
            console.error("GitHub API error:", res.status, res.statusText);
            throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) break;

        allContributors = allContributors.concat(data);
        page++;
    }

    const seen = new Set();
    const contributors = [];

    allContributors.forEach(c => {
        if (!c) return;

        if (!seen.has(c.login)) {
            seen.add(c.login);
            contributors.push({
                name: c.login,
                url: c.html_url
            });
        }
    });

    return contributors
}

async function getPathCommits(path) {
    let page = 1;
    let allCommits = [];

    while (true) {
        console.log(`https://api.github.com/repos/ThisCatLikesCrypto/aqasbasement/commits?path=${path}&per_page=100&page=${page}`)
        const url = `https://api.github.com/repos/ThisCatLikesCrypto/aqasbasement/commits?path=${path}&per_page=100&page=${page}`;
        const res = await fetch(url);

        if (res.status === 429) {
            console.warn("Rate limit hit. Stopping further requests.");
            throw new Error("GitHub API rate limit exceeded. Please try again later.");
        }

        if (!res.ok) {
            console.error("GitHub API error:", res.status, res.statusText);
            throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) break;

        allCommits = allCommits.concat(data);
        page++;
    }

    return allCommits;
}

async function getUniqueContributors(path) {
    console.log("Fetching commits for path:", path);
    let commits;

    try {
        commits = await getPathCommits(path);
    }
    catch (error) {
        console.error("Error fetching commits:", error); 
        return false;}

    console.log(commits.length, "commits fetched for path:", path);

    const seen = new Set();
    const contributors = [];

    commits.forEach(c => {
        if (!c.author) return;

        if (c.commit.message.toLowerCase().includes("#noattribution")) return;

        if (!seen.has(c.author.login)) {
            seen.add(c.author.login);
            contributors.push({
                name: c.author.login,
                url: c.author.html_url
            });
        }
    });

    console.log("Unique contributors:", contributors);

    return contributors;
}