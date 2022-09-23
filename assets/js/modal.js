




// Registration

document.querySelector("#create_registration").addEventListener('click', function () {
    document.querySelector("#connection_modal").style.display = "none"
    document.querySelector("#register_modal").style.display = "block"
})

document.querySelector("#btn_register").addEventListener('click', function () {
    document.querySelector("#register_modal").style.display = "block"
})

document.querySelector("#start").addEventListener('click', function () {
    document.querySelector("#register_modal").style.display = "block"
})

document.querySelector("#register_close").addEventListener('click', function () {
    document.querySelector("#register_modal").style.display = "none"
})

document.onclick = function (event) {
    if (event.target == document.querySelector("#register_modal")) {
        document.querySelector("#register_modal").style.display = "none"
    }
}


// Connection

document.querySelector("#connection_redirect").addEventListener('click', function () {
    document.querySelector("#register_modal").style.display = "none"
    document.querySelector("#connection_modal").style.display = "block"
})

document.querySelector("#btn_connection").addEventListener('click', function () {
    document.querySelector("#connection_modal").style.display = "block"
})

document.querySelector("#connection_close").addEventListener('click', function () {
    document.querySelector("#connection_modal").style.display = "none"
})

window.onclick = function (event) {
    if (event.target == document.querySelector("#connection_modal")) {
        document.querySelector("#connection_modal").style.display = "none"
    }
}



