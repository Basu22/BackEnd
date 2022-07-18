const socket = io()
const fromMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagePool = document.querySelector('#messagePool')

fromMessage.addEventListener('submit', event=>{
        
        event.preventDefault()
        const email = usernameInput.value
        const mensaje = messageInput.value
        const hoy = Date.now()
        const fecha = new Date(hoy).toUTCString()
        if(email&&mensaje){
            console.log({ email,fecha,mensaje })
            socket.emit('cliente:mensaje', { email,fecha,mensaje })
            messageInput.value =""
        }
})

socket.on('server:mensaje', mensajes => {
    messagePool.innerHTML= ""
    mensajes.forEach(mensajesInfo=>{
        messagePool.innerHTML += `<li><span class="textoEmail">${mensajesInfo.email}</span> <span class="textoFecha">[ ${mensajesInfo.fecha} ]</span> <span class="textoMensaje">${mensajesInfo.mensaje}</span></li>`
    })
})