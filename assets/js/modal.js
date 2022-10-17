




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
    document.querySelector("#formLogin").addEventListener("submit",async(event)=>{
        
        event.preventDefault();
        let form = event.target
        let formdata = new FormData(form)
        let object = {};
        formdata.forEach(function(value, key){
            console.log(value);
            object[key] = value;
        });
        let json = JSON.stringify(object);
       let req = await fetch("/connection",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: json
          })
          res = await req.json()
          if (req.status == 500) {
              document.querySelector("#errorForm").innerHTML = res
          }else if(req.status == 200){
            if(res.userName == "admin"){
                window.location.href = "/dashboard"            
            }else{
                window.location.href = "/userOverview"
        }
          }
          console.log(test);
    })
})

document.querySelector("#connection_close").addEventListener('click', function () {
    document.querySelector("#connection_modal").style.display = "none"
})

window.onclick = function (event) {
    if (event.target == document.querySelector("#connection_modal")) {
        document.querySelector("#connection_modal").style.display = "none"
    }
}



