let favoriteStreamers = window.localStorage.getItem("fs") || [];


var options = {
    width: "100%",
    height: 720,
    channel: window.localStorage.getItem("fs") ? favoriteStreamers.split(",")[0] : "gotaga",
    parent: ["zevent.camille-bessancourt.fr"],
    theme: "dark",

  };
let player = new Twitch.Player("stream", options)
initChat(window.localStorage.getItem("fs") ? favoriteStreamers.split(",")[0] : "gotaga")

document.getElementById("update").addEventListener('click', (e) => {
    e.preventDefault();

    let streamer = document.getElementById("streamerInput").value
    if (streamer.indexOf("twitch.tv") > -1)
      streamer = streamer.split("/")[1];
    if (favoriteStreamers.indexOf(streamer) === -1)
    {
      favoriteStreamers.unshift(streamer);
      window.localStorage.setItem("fs", favoriteStreamers);
      generateList(streamer)
    }

    options.channel = streamer
    updateChat(streamer)
    player.setChannel(streamer)
})

let generateList = (streamer) => {
  let list = document.getElementById("listFavStreamers");
  let a = document.createElement("a");
  a.innerText = streamer + " ";
  a.id = streamer;
  a.href = "#";
  a.classList = "text-primary"
  a.onclick = player.setChannel(streamer);

  list.insertBefore(a, list.firstChild)

  a.addEventListener("click", e => player.setChannel(a.id));
}

document.getElementById("buttonClear").addEventListener("click", e => {
  e.preventDefault();

  let list = document.getElementById("listFavStreamers");
  list.childNodes.forEach(el => el.remove());

  window.localStorage.removeItem("fs");
})