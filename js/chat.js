let initChat = (streamer) => {
    let chat = document.getElementById("chat");

    let iframe = document.createElement("iframe")
    iframe.setAttribute('id', 'chatIframe');
    iframe.setAttribute('src', `https://www.twitch.tv/embed/${streamer}/chat?parent=zevent.camille-bessancourt.fr&theme=dark`)
    iframe.setAttribute('height', '720')
    iframe.setAttribute('width', '100%')

    chat.appendChild(iframe)
}

let updateChat = (streamer) => {
    let iframe = document.getElementById("chatIframe")
    iframe.setAttribute('src',`https://www.twitch.tv/embed/${streamer}/chat?parent=zevent.camille-bessancourt.fr&theme=dark`)
}