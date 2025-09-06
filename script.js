/* ==============================
   Page Setup
============================== */
function setUpPage() {
    if (window.innerWidth !== 600 && window.innerHeight !== 500) {
        // window.open("https://www.khanacademy.org/computer-programming/team-okapacki/5843391819497472?width=600&height=500&editor=no");
    }
}

/* ==============================
   Page Switching
============================== */
var pages = document.getElementsByClassName("page");

function pageSwitch(index) {
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    pages[index - 1].style.display = 'block';
    window.scroll(0, 0);
}

// Initialize first page
pageSwitch(1);

/* ==============================
   About Page Stats
============================== */
function updateAboutPageStats() {
    var htmlDevNumText = document.getElementById("htmlDevNum");
    var htmlDevNum = document.getElementsByClassName("htmlDev");
    htmlDevNumText.textContent = htmlDevNum.length + " - HTML Developers";

    var jsDevNumText = document.getElementById("jsDevNum");
    var jsDevNum = document.getElementsByClassName("jsDev");
    jsDevNumText.textContent = jsDevNum.length + " - JS Developers";

    var graphicDevNumText = document.getElementById("graphicDevNum");
    var graphicDevNum = document.getElementsByClassName("graphicDev");
    graphicDevNumText.textContent = graphicDevNum.length + " - Graphic (Artist) Designers";

    var deBugDevNumText = document.getElementById("deBugDevNum");
    var deBugDevNum = document.getElementsByClassName("deBugDev");
    deBugDevNumText.textContent = deBugDevNum.length + " - Program Debuggers";

    var grammerChNumText = document.getElementById("grammerChNum");
    var grammerChNum = document.getElementsByClassName("grammerCh");
    grammerChNumText.textContent = grammerChNum.length + " - Grammar Checkers";

    var gameTestNumText = document.getElementById("gameTestNum");
    var gameTestNum = document.getElementsByClassName("gameTest");
    gameTestNumText.textContent = gameTestNum.length + " - Program Testers";
}

// Run once on page load
updateAboutPageStats();

/* ==============================
   Members Page Stats
============================== */
function updateMembersCount() {
    var teamMembersCount = document.getElementById("teamMembersCount");
    var teamMembersCountNum = document.getElementsByClassName("members");
    teamMembersCount.textContent = "Team Okapack has " + teamMembersCountNum.length + " members, will you be the next?";
}

// Run once on page load
updateMembersCount();

/* ==============================
   Join Page Form
============================== */
function submitJoinForm() {
    var copyForm = document.getElementById("copyForm");
    copyForm.style.display = "block";

    var getUserName = document.getElementById("getUserName").value;
    var getUserNameT = document.getElementById("getUserNameT");
    getUserNameT.textContent = "1) " + getUserName;

    var getPositions = document.getElementById("getPositions").value;
    var getPositionsT = document.getElementById("getPositionsT");
    getPositionsT.textContent = "2) " + getPositions;

    var getExperienceLvl = document.getElementById("getExperienceLvl").value;
    var getExperienceLvlT = document.getElementById("getExperienceLvlT");
    getExperienceLvlT.textContent = "3) " + getExperienceLvl;

    var timeOnKhan = document.getElementById("timeOnKhan").value;
    var timeOnKhanT = document.getElementById("timeOnKhanT");
    timeOnKhanT.textContent = "4) " + timeOnKhan;

    var getBestProgram = document.getElementById("getBestProgram").value;
    var getBestProgramT = document.getElementById("getBestProgramT");
    getBestProgramT.textContent = "5) " + getBestProgram;

    var getSubPage = document.getElementById("getSubPage").value;
    var getSubPageT = document.getElementById("getSubPageT");
    getSubPageT.textContent = "6) " + getSubPage;
}

/* ==============================
   Tutorial Page Search
============================== */
function searchTutorials() {
    var input = document.getElementById("tutorialSearchBar");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("theTutorials");
    var li = ul.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/* ==============================
   Navigation Button
============================== */
var navBtnClicked = false;

function navBtn(clicked) {
    clicked.classList.toggle("change");

    if (!navBtnClicked) {
        navBtnClicked = true;
        document.getElementById("theNav").style.width = "100%";
    } else {
        navBtnClicked = false;
        document.getElementById("theNav").style.width = "0%";
    }
}