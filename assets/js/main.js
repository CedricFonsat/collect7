
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