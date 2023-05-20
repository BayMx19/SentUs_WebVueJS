const time = document.getElementById('time');
function refreshTime() {
    let date = new Date();
    let jam = `${("0" + date.getHours()).slice(-2)} : ${("0" + date.getMinutes()).slice(-2)} : ${("0" + date.getSeconds()).slice(-2)} WIB`
    date.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    time.innerHTML = jam;
}

setInterval(refreshTime, 1000);