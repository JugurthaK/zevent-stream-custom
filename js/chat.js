let initChat = (streamer) => {
    let chat = document.getElementById("chat");

    let iframe = document.createElement("iframe")
    iframe.setAttribute('id', 'chatIframe');
    iframe.setAttribute('src', `https://www.twitch.tv/embed/${streamer}/chat?parent=zevent.camille-bessancourt.fr&darkpopout`)
    iframe.setAttribute('height', '720')
    iframe.setAttribute('width', '100%')

    chat.appendChild(iframe)
}

let updateChat = (streamer) => {
    let iframe = document.getElementById("chatIframe")
    iframe.setAttribute('src',`https://www.twitch.tv/embed/${streamer}/chat?parent=zevent.camille-bessancourt.fr&darkpopout`)
}

let hideChat = () => {
    let chat = document.getElementById("chat");
    let stream = document.getElementById("stream");

    let hidden = false
    if (chat.style.display === 'none')
        hidden = true

    hidden ? chat.style.display = 'block' : chat.style.display = 'none'
    hidden ? stream.classList.replace("col-10", "col-8") : stream.classList.replace("col-8", "col-10")
}

document.getElementById("buttonChat").addEventListener("click", e => {
    e.preventDefault()

    hideChat();
})