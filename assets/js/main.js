
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

const api = 'http://localhost:3000/';

function searchProduct() {
    let search = document.querySelector('#searchbar').value
    let divSearchProduct = document.querySelector("#displaySearchProducts")

    let parent= document.querySelector("#parent")
    let  listId = parent.getAttribute("data-list");
    fetch(api + 'product/findByName/' + search)
        .then(response => response.json())
        .then(response => {
            
            divSearchProduct.innerHTML = ''
            for (let i = 0; i < response.length; i++) {
                let data = response[i]
                console.log(data);
                let product = document.createElement("div")
                product.addEventListener('click',()=>{
                    addProduct(data,listId )
                })
                product.id = "product"
                divSearchProduct.appendChild(product)
                Object.entries(data).forEach(([key, value]) => {
                    if (key != "_id") {
                        product.innerHTML = value
                        
                    }
                    if (search = '') {
                        divSearchProduct.innerHTML = ''
                    }

                })
            }
        })
        .catch(err => console.error(err));



}