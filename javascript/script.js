const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'message One',
  'message Two',
  'message Three',
  'message Four',
]

const types = [
  'success',
  'error',
  'info',
]

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null){
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message :getRandomMessage()
  toasts.appendChild(notif)
  setTimeout(() => {
    notif.remove()
  }, 4000)
}

function getRandomMessage(){
  return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType(){
  return types[Math.floor(Math.random() * types.length)]
}