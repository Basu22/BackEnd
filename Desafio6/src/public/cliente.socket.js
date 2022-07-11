const socket = io()
const fromMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagePool = document.querySelector('#messagePool')

fromMessage.addEventListener('submit', event=>{
    event.preventDefault()

    const message = messageInput.value
    const username = usernameInput.value
    /* console.log(`Mensaje: ${message} - Username: ${username}`) */
    socket.emit('cliente:mensaje', { username, message })
})

socket.on('server:mensaje', messagesArray => {
    
    messagePool.innerHTML= ""

    messagesArray.forEach(messageInfo=>{
        messagePool.innerHTML += `<li> ${messageInfo.username}: ${messageInfo.message} </li>`
    })

})



function renderProductos (productos){
    
}