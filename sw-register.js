if ('serviceWorker' in navigator) {
  /* si service worker existant */
  /* lancer listener on load */
  window.addEventListener('load', ()=> {
    navigator.serviceWorker.register('serviceW.js')
    .then(function(reg){
      console.log(reg)
    })
    .catch(err => console.log(err))
  })
}