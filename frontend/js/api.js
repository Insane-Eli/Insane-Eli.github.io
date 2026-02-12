// shoutout aiden 4tha code :fire:

function getSong() {
  fetch(
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Insane-eli&limit=1&api_key=15e7341c93b71276b3a3f0feb8e5cacf&format=json",
  )
    .then((response) => response.json())
    .then((data) => {
      var str = JSON.stringify(data).replace(/\@/g, "");
      var newData = JSON.parse(str);
      var nowPlaying = newData.recenttracks.track[0].attr
        ? "🎵 currently listening to"
        : "🎵 i was listening to";
      var artist = Object.values(data.recenttracks.track[0].artist)[1];
      var timeStatus = "";
      if (!newData.recenttracks.track[0].attr) {
        const date = new Date(0);
        date.setUTCSeconds(
          Object.values(data.recenttracks.track[0].date.uts).join(""),
        );
        let time = date.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        });
        var timeStatus = newData.recenttracks.track[0].attr ? "" : `at ${time}`;
      }
      document.getElementById("listening").innerHTML =
        `${nowPlaying} ${newData.recenttracks.track[0].name} by ${artist} ${timeStatus}`;
      document
        .getElementById("listening")
        .setAttribute("href", newData.recenttracks.track[0].url);
    });
}

getSong();
