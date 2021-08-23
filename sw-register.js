if ('serviceWorker' in navigator) {
  /* si service worker existant */
  /* lancer listener on load */
  window.addEventListener('load', ()=> {
    navigator.serviceWorker.register('sw.js')
    .then(function(reg){
      console.log(reg)
    })
    .catch(err => console.log(err))
  })
}