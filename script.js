const clock = () => {
    const rel = document.querySelector("h1");

    let data = new Date()

    let hh = data.getHours()
    let mm = data.getMinutes()
    let ss = data.getSeconds()

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let relogio = `${hh}:${mm}:${ss}`

    rel.innerText = relogio;
}

clock()
setInterval(clock, 1000)