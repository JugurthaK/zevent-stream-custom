var options = {
    width: 1280,
    height: 720,
    channel: "jeremysadi",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["zevent.camille-bessancourt.fr"]
  };
let player = new Twitch.Player("stream", options)

document.getElementById("update").addEventListener('click', (e) => {
    e.preventDefault();

    let streamer = document.getElementById("streamSelector").value
    player.setChannel(streamer)
})