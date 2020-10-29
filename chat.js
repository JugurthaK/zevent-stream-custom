let updateChat = () => {
    options.layout === "video" ? options.layout = "video-with-chat" : options.layout = "video"
    player = new Twitch.Embed("stream", options);
}

document.getElementById("chat").addEventListener("click", (e) => updateChat())