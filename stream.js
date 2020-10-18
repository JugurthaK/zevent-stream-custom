
let height = 720
if ((window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ))
{
  height = 360
  console.log("Is on mobile")
}
var options = {
    width: "100%",
    height: height,
    channel: "zerator",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["zevent.camille-bessancourt.fr"]
  };
let player = new Twitch.Player("stream", options)

document.getElementById("update").addEventListener('click', (e) => {
    e.preventDefault();

    let streamer = document.getElementById("streamerInput").value || document.getElementById("streamSelector").value

    console.log(streamer)
    player.setChannel(streamer)
})