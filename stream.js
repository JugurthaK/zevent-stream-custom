var options = {
    width: 640,
    height: 360,
    channel: "jeremysadi",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["zevent.camille-bessancourt.fr"]
  };
  new Twitch.Player("streamZ", options)

  options.channel = "shock_rl"
  new Twitch.Player("stream", options)