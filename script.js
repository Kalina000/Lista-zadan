const list = document.getElementById("list-task");
const input = document.getElementById("input-box");

function addTask() {
    if(input.value === ''){
        alert("Napisz zadanie!");
    }
        else {
            let li = document.createElement("li");
            li.innerHTML = input.value;
            list.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
    }

    list.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("done");
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }, false);