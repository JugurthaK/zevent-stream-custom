let favoriteStreamers = window.localStorage.getItem("fs") || [];

let height = 720
if ((window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ))
  height = 360

var options = {
    width: "100%",
    height: height,
    channel: favoriteStreamers[0] || "gotaga",
    parent: ["zevent.camille-bessancourt.fr"]
  };
let player = new Twitch.Player("stream", options)

document.getElementById("update").addEventListener('click', (e) => {
    e.preventDefault();

    let streamer = document.getElementById("streamerInput").value
    if (favoriteStreamers.indexOf(streamer) === -1)
    {
      favoriteStreamers.unshift(streamer);
      window.localStorage.setItem("fs", favoriteStreamers);
      generateList(streamer);
    }

    player.setChannel(streamer)
})



let generateList = (streamer) => {

  let list = document.getElementById("listFavStreamers");

  let a = document.createElement("a");
  a.innerText = streamer;
  a.classList = "list-group-item list-group-item-action text-capitalize";
  a.id = streamer;
  a.href = "#";
  a.onclick = player.setChannel(streamer);

  list.insertBefore(a, list.firstChild)

  a.addEventListener("click", e => player.setChannel(a.id));
}