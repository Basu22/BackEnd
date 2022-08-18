const socket = io()
const fromMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const nameInput = document.querySelector('#nameInput')
const lastnameInput = document.querySelector('#lastnameInput')
const ageInput = document.querySelector('#ageInput')
const aliasInput = document.querySelector('#aliasInput')
const avatarInput = document.querySelector('#avatarInput')
const messageInput = document.querySelector('#messageInput')
const messagePool = document.querySelector('#messagePool')

fromMessage.addEventListener('submit', event=>{
        event.preventDefault()
        const email = usernameInput.value
        const nombre = nameInput.value
        const apellido = lastnameInput.value
        const edad = ageInput.value
        const alias = aliasInput.value
        const avatar = avatarInput.value
        const mensaje = messageInput.value

        if(email&&mensaje){
            socket.emit('cliente:mensaje', { email,nombre,apellido,edad,alias,avatar,mensaje })
            messageInput.value =""
        }
})

socket.on('server:mensaje', mensajes => {
    messagePool.innerHTML= ""
    mensajes.forEach(mensajesInfo=>{
        console.log("desde front",mensajesInfo)
        messagePool.innerHTML += `<li><span class="textoEmail">${mensajesInfo.autor.id}</span> <span class="textoFecha">[  ]</span> <span class="textoMensaje">${mensajesInfo.mensaje}</span></li>`
    })
})