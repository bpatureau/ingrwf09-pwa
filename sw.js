const version = "0.1"

self.addEventListener("install", () => {
  console.log("install Service worker version " + version)
  return self.skipWaiting
})

self.addEventListener("activate", () => {
  console.log("Activate Service worker version " + version)
})

self.addEventListener("fetch", () => {

})

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

if(workbox) {
  console.log("yes")
  workbox.precaching.precacheAndRoute([
    { 
      "url" : "index.html"
    },
    /*{
      "url" : "style.css"
    }*/
  ])

  workbox.routing.registerRoute(
    /(.*)\.(?:png|gif|jpg|css)$/,
    new workbox.strategies.CacheFirst({
      cacheName: "design-cache",
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 30*24*60*60 //30 jours
        })
      ]
    })
  )
}