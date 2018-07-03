
window.onload = function(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var prev = document.getElementById('tri1');
    var next = document.getElementById('tri2');
    var index = 1;
    var len = 6;
    var animated = false;
    var interval = 3000;
    var timer;
    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;

        var go = function (){
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + 'px';
                if(left>-200){
                    list.style.left = -600 * len + 'px';
                }
                if(left<(-600 * len)) {
                    list.style.left = '-600px';
                }
                animated = false;
            }
        }
        go();
        function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
        function stop() {
                clearTimeout(timer);
        }
        next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-600);
                showButton();
            }
        prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(600);
                showButton();
        }



    container.onmouseover = stop;
    container.onmouseout = play;
}
