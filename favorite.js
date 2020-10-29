
let len = 0;

if (favoriteStreamers[0] !== undefined) {
    favoriteStreamers = favoriteStreamers.split(",")
    if (favoriteStreamers.length > 10)
        len = 10
    else
        len = favoriteStreamers.length

    let list = document.getElementById("listFavStreamers");

    for (let i = 0; i < len; ++i) {
        let a = document.createElement("a");
        a.innerText = favoriteStreamers[i];
        a.classList = "list-group-item list-group-item-action text-capitalize bg-transparent text-white";
        a.id = favoriteStreamers[i];
        a.href = "#"
        list.appendChild(a);

        a.addEventListener("click", e => player.setChannel(a.id));
    }
}

