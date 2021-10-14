const date = new Date();

document.getElementById("date").innerHTML = `${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;

setInterval(() => {
  const date = new Date();
  document.getElementById(
    "time"
  ).innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}, 60);
