// wallet


document.querySelector("#btn_wallet").addEventListener('click', function () {
    console.log('hfihsifhi');
      document.querySelector("#wallet_modal").style.display = "block"
  })

  document.querySelector("#btnWallet").addEventListener('click', function () {
      document.querySelector("#wallet_modal").style.display = "block"
  })
  
  document.querySelector("#wallet_close").addEventListener('click', function () {
      document.querySelector("#wallet_modal").style.display = "none"
  })
  
  document.onclick = function (event) {
      if (event.target == document.querySelector("#wallet_modal")) {
          document.querySelector("#wallet_modal").style.display = "none"
      }
  }
  