// Registration

let register_modal = document.getElementById("register_modal");
let register_btn = document.getElementById("register");
let register_close = document.getElementsByClassName("register_close")[0];


// Connection

let connection_btn = document.getElementById("btn_connection");


// Registration

register_btn.onclick = function () {
    register_modal.style.display = "block";
}

register_close.onclick = function () {
    register_modal.style.display = "none";
}

document.onclick = function (event) {
    if (event.target == register_modal) {
        register_modal.style.display = "none";
    }
}


// Connection

connection_btn.onclick = function () {
    document.querySelector("#connection_modal").style.display = "block"
}

document.querySelector("#btn_close_connection").addEventListener('click', function () {
    console.log("gjch");
    document.querySelector("#connection_modal").style.display = "none"
})

window.onclick = function (event) {
    if (event.target == document.querySelector("#connection_modal")) {
        document.querySelector("#connection_modal").style.display = "none"
    }
}



