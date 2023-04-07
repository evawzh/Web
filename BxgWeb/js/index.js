window.onload(bgimg());

function bgimg() {
    var i;
    for (i = 1; i < 5; i++) {
        var j = document.getElementById("bbmbox" + i);
        j.style.backgroundImage = "url('img/images/bgicon" + i + ".png')";
        j.style.backgroundPosition = "0px 15px";
        j.style.backgroundRepeat = "no-repeat";
    }
    for (i = 1; i < 7; i++) {
        var x = document.getElementById("box0" + i);
        x.style.backgroundImage = "url('img/images/lightning.png')"
    }


}

function overimg(n) {
    var a = document.getElementById("bbmbox" + n);
    // console.log(a);
    a.style.backgroundImage = "url('img/images/bgicon" + n + ".gif')";
}

function outimg(n) {
    var b = document.getElementById("bbmbox" + n);
    // console.log(b);
    b.style.backgroundImage = "url('img/images/bgicon" + n + ".png')";
}

function overbgimg(m) {
    var c = document.getElementById("box0" + m);
    c.style.backgroundImage = "url('img/images/lightning1.png')";
    var c1 = c.getElementsByTagName("div");
    console.log(c1);
    c1[0].style.display = "none";
    c1[1].style.display = "none";
    c1[2].style.display = "block";
}

function outbgimg(m) {
    var d = document.getElementById("box0" + m);
    var d1 = d.getElementsByTagName("div");
    d.style.backgroundImage = "url('img/images/lightning.png')";
    d1[0].style.display = "block";
    d1[1].style.display = "block";
    d1[2].style.display = "none";
}