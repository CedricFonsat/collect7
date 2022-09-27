
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
            searchResults.innerHTML = '<p>Sorry. Nothing Found.</p>';
            return;
        }
        payload.forEach((item, index)=> {
             if(index > 0) searchResults.innerHTML += '<hr>';

             let div = document.createElement('div')
             div.className = "data_collections"
             searchResults.appendChild(div)
             let title = document.createElement('p')
             title.textContent = item.nameCollection
             div.appendChild(title)
             title.style.color = "red"
             title.style.cursor = "pointeur"
             let a = document.createElement('a')
             a.innerText = "tyyyyyy"
             a.color = "red"
             div.appendChild(a)
             a.href = `/dashboardCollections/{{collections.id}}`

        });
        return;
    })
}

function meclick() {
    console.log("fhgjhvbhj");
}