let updateChat = () => {
    options.layout === "video" ? options.layout = "video-with-chat" : options.layout = "video"

    document.getElementById("stream").firstChild.remove()
    player = new Twitch.Embed("stream", options);
}

let hideChatBtn = document.getElementById("chat")

hideChatBtn.addEventListener("click", (e) => {
    updateChat()
    hideChatBtn.textContent.indexOf("Hide") > - 1 ? 
        hideChatBtn.textContent = "Display Chat" :
        hideChatBtn.textContent = "Hide Chat"

})