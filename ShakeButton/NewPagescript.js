const elm = document.getElementById('ShakeButton');

elm.onclick = function() {
    elm.classList.remove('shakeactive');
    void elm.offsetWidth;
    elm.classList.add('shakeactive');
}