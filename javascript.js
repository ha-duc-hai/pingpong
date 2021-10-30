
x = 200;
y = 50;
x_change = 10;
y_change =  10;
function pingpong() {
    var pingpong = document.getElementsByClassName("circle")[0];
    var box = document.getElementsByClassName("box")[0];
    x = x + x_change;
    y = y + y_change;
    pingpong.style.top = String(x) + "px";
    pingpong.style.left = String(y) + "px";
    document.getElementById('x').innerHTML = String(x);
    document.getElementById('y').innerHTML = String(y);
    // alert('height'+ box.offsetHeight);
    if (x + pingpong.offsetHeight>= box.offsetHeight || x<0){
        x_change = -x_change;
    }
    if (y + pingpong.offsetWidth >= box.offsetWidth || y <0){
        y_change = -y_change;
    }
    loop = setTimeout('pingpong()', 50);
}