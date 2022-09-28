let min = 10
let H = 12
let days = 30
function displayTIme(rebour) {
    document.querySelector("#chrono").innerText = rebour
}

function updateTime() {
    if (min > 0) {
        setTimeout(function () {
            min--
            displayTIme(min)
            updateTime()
            if (min <= 0) {
              H--
             let min = 60
              if (H <= 0) {
                days--
               let H = 24
              }
            } 
        }, 1000)
        
}
}
displayTIme(days, H, min)
updateTime()