var options = {
    width: 1280,
    height: 720,
    channel: "jeremysadi",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["zevent.camille-bessancourt.fr"]
  };
  new Twitch.Player("stream", options)