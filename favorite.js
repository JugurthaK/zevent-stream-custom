
let len = 0;

if (favoriteStreamers[0] !== undefined) {
    favoriteStreamers = favoriteStreamers.split(",")
    if (favoriteStreamers.length > 10) {
        favoriteStreamers.slice(0, 10);
        len = 10
    }
    else
        len = favoriteStreamers.length

    let list = document.getElementById("listFavStreamers");

    for (let i = 0; i < len; ++i) {
        let a = document.createElement("a");
        a.innerText = favoriteStreamers[i];
        a.classList = "list-group-item list-group-item-action text-capitalize";
        a.id = favoriteStreamers[i];
        a.href = "#"
        list.appendChild(a);

        a.addEventListener("click", e => player.setChannel(favoriteStreamers[i]));
    }
}

