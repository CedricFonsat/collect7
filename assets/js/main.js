
function sendData(e) {
    const searchResults = document.querySelector('#searchResults')
    fetch('getCollections', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({payload: e.value})
    }).then(res => res.json()).then(data => {
        let payload = data.payload;
        searchResults.innerHTML = "";
        if (payload.length < 1) {
            let div = document.createElement('div')
            let div1 = document.createElement('div')
            let p1 = document.createElement('p')

            searchResults.appendChild(div)
            div.appendChild(div1)
            div1.appendChild(p1)

            p1.style.marginLeft = "40px"
            p1.textContent = "Sorry. Nothing Found."
            return;
        }
        payload.forEach((item, index)=> {

             let div = document.createElement('div')
             let div1 = document.createElement('div')
             let div2 = document.createElement('div')
             let p1 = document.createElement('p')
             let p2 = document.createElement('p')

             div.className = "data_users_home"

             searchResults.appendChild(div)
             div.appendChild(div1)
             div.appendChild(div2)
             div1.appendChild(p1)
             div2.appendChild(p2)

             p1.textContent = item.userName
             p2.textContent = item.mail

             div1.style.border = "none"
             div2.style.border = "none"

        });
        return;
    })
}

///////////////////-----------------------------------------

function dataUsers(e) {
  const searchResults = document.querySelector('#searchResults')
  fetch('getCollections', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({payload: e.value})
  }).then(res => res.json()).then(data => {
      let payload = data.payload;
      searchResults.innerHTML = "";
      if (payload.length < 1) {
          let div = document.createElement('div')
          let div1 = document.createElement('div')
          let p1 = document.createElement('p')

          searchResults.appendChild(div)
          div.appendChild(div1)
          div1.appendChild(p1)

          p1.style.marginLeft = "40px"
          p1.textContent = "Sorry. Nothing Found."
          return;
      }
      payload.forEach((item, index)=> {

           let div = document.createElement('div')
           let div1 = document.createElement('div')
           let div2 = document.createElement('div')
           let div3 = document.createElement('div')
           let p1 = document.createElement('p')
           let p2 = document.createElement('p')
           let sup = document.createElement('a')
           let imgSup = document.createElement('img')

           div.className = "data_users_home"

           searchResults.appendChild(div)
           div.appendChild(div1)
           div.appendChild(div2)
           div.appendChild(div3)
           div1.appendChild(p1)
           div2.appendChild(p2)
           div3.appendChild(sup)
           sup.appendChild(imgSup)

           p1.textContent = item.userName
           p2.textContent = item.mail
           imgSup.src = "./img/svg/delete.svg"

           console.log(item._id);
           sup.href = `/dashboardUsers/${item._id}`

           div1.style.border = "none"
           div2.style.border = "none"

      });
      return;
  })
}

//////////////////////////////////////________________________

let acc = document.querySelector(".accordion");
let cVsJ = false

  acc.addEventListener("click", function() {
    cpuVsJoueur() 
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });



  
function cpuVsJoueur() {
    if (cVsJ == false) {
        document.querySelector(".cover_data_users_home").style.height = "0px"
        document.querySelector(".head_data_users_home").style.display = "none"
      cVsJ = true
  }else{
    document.querySelector(".cover_data_users_home").style.height = "450px"
    document.querySelector(".head_data_users_home").style.display = "flex"
      cVsJ = false
  }
  }

  let acc2 = document.querySelector(".accordion2");
  
    acc2.addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
