let initChat = (streamer) => {
    let chat = document.getElementById("chat");

    let iframe = document.createElement("iframe")
    iframe.setAttribute('id', 'chatIframe');
    iframe.setAttribute('src', `https://www.twitch.tv/embed/${streamer}/chat?parent=zevent.camille-bessancourt.fr`)
    iframe.setAttribute('height', '100%')
    iframe.setAttribute('width', '720')

    chat.appendChild(iframe)
}