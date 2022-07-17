var socket = io()
const fromMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagePool = document.querySelector('#messagePool')

fromMessage.addEventListener('submit', event=>{
    event.preventDefault()
    const email = usernameInput.value
    const message = messageInput.valu
    
    socket.emit('cliente:mensaje', { email,message })
})

socket.on('server:mensaje', messagesArray => {
    messagePool.innerHTML= ""
    
    messagesArray.forEach(messageInfo=>{
        messagePool.innerHTML += `<li> ${messageInfo.email}: ${messageInfo.message} ${messageInfo.fecha} </li>`
    })
    
})