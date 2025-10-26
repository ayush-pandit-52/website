let checkBox = document.getElementById("checkMenu");
let navMenu = document.getElementById("navMenu");
checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
        navMenu.style.top = "75px";
        console.log(document.getElementById("headTxt"));
        document.getElementById("headTxt").classList.add("filter")
    }
    else {
        navMenu.style.top = "-400px";
        document.getElementById("headTxt").classList.remove("filter");

    }
});

const data = ["2D ARRAYS", "APPLETS", "BASIC PROGRAMMING CONSTRUCTS", " DATA CONVERSION", "DELEGATION EVENT MODEL", "EXCEPTION HANDLING", "FUNCTIONS", "GRAPHICAL USER INTERFACE (AWT)",
    "GRAPHICAL USER INTERFACE (SWINGS)", "INHERITANCE", "INPUT/OUTPUT", "INTERFACES", "JAVA DATABASE CONNECTIVITY", "MULTITHREADING", "OBJECT ORIENTED PROGRAMMING",
    "PACKAGES", "SINGLE DIMENSION ARRAYS", "STRINGS"]

let menu = document.getElementById("selectTopic");
let quesMenu = document.getElementById("selectQues");
let difficultyMenu = document.getElementById("selectdifficulty");

menu.innerHTML = "";

for (let index = 0; index < data.length; index++) {
    menu.innerHTML += `<option value="${index}">${data[index]}</option>`;
}
createQues(0, "mix");
changeProgram(quesData.questions[0].solution.code, quesData.questions[0].sample_output, quesData.questions[0].sample_input, quesData.questions[0].solution.explanation);

menu.addEventListener("change", () => {
    createQues(menu.selectedIndex, difficultyMenu.options[difficultyMenu.selectedIndex].value);
    changeProgram(quesData.questions[quesMenu.options[0].value].solution.code, quesData.questions[quesMenu.options[0].value].sample_output, quesData.questions[quesMenu.options[0].value].sample_input, quesData.questions[quesMenu.options[0].value].solution.explanation);
});
difficultyMenu.addEventListener("change", () => {
    createQues(menu.selectedIndex, difficultyMenu.options[difficultyMenu.selectedIndex].value);
    changeProgram(quesData.questions[quesMenu.options[0].value].solution.code, quesData.questions[quesMenu.options[0].value].sample_output, quesData.questions[quesMenu.options[0].value].sample_input, quesData.questions[quesMenu.options[0].value].solution.explanation);
});
function createQues(index, mode) {
    quesMenu.innerHTML = "";
    quesMenu.disabled = false;
    for (let i = 0; i < quesData.questions.length; i++) {
        if (index == quesData.questions[i].topic) {
            if (mode == "mix") {
                quesMenu.innerHTML += `<option value="${quesData.questions[i].id}">${quesData.questions[i].description}</option>`;
            }
            else {
                if (mode == quesData.questions[i].difficulty) {
                    quesMenu.innerHTML += `<option value="${quesData.questions[i].id}">${quesData.questions[i].description}</option>`;
                }
            }
        }
    }
    if(quesMenu.childNodes.length == 0){
        quesMenu.innerHTML += `<option>No Questions Available</option>`;
        quesMenu.disabled = true;
    }
}

quesMenu.addEventListener("change", () => {
    changeProgram(quesData.questions[quesMenu.options[quesMenu.selectedIndex].value].solution.code, quesData.questions[quesMenu.options[quesMenu.selectedIndex].value].sample_output, quesData.questions[quesMenu.options[quesMenu.selectedIndex].value].sample_input, quesData.questions[quesMenu.options[quesMenu.selectedIndex].value].solution.explanation);
});

function changeProgram(code, output, input, notes) {
    let a = document.querySelectorAll(".inputstyle");
    console.log(a);
    if (input != null) {
        a.forEach((element) => {
            element.style.display = "block";
        });
        a[1].innerHTML = input;
    }
    else {
        a.forEach((element) => {
            element.style.display = "none";
        });
    }
    document.getElementById("code").innerHTML = code;
    document.getElementById("output").innerHTML = output;
    document.querySelector(".explanationSection").innerHTML = `<section class="prehead inputstyle">Explanation</section><p>${notes}</p>`;
}

function copyCode(){
    let code = document.getElementById("code").innerText;
    navigator.clipboard.writeText(code) 
    .then(() => {
        document.getElementById("copybtn").innerHTML = "Copied";
        setTimeout(()=>{
            document.getElementById("copybtn").innerHTML = "Copy"
        }, 5000);
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
function phpShowMenu(){
    let phpcheckBox = document.getElementById("phpshowmenu");
    let sideMenu = document.getElementById("phpsidemenu");
    if (phpcheckBox.checked) {
        sideMenu.style.display = "block";
    }
    else {
        sideMenu.style.display = "none";
    }

}
