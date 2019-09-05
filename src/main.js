import App from './components/App.svelte'

window.addEventListener('load', () => {
	registerSW()
});

async function registerSW() {
	if('serviceWorker' in navigator){
	  navigator.serviceWorker.register('sw.js')
	  .then((reg) => console.log('service worker registered', reg))
	  .catch((err) => console.log('service worker not registered', err))
	}
}
const app = new App({
	target: document.body,
})

export default app
