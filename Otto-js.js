let backdrop;


function changeBackground(string) {
    if (string == 'stripes') {
        document.getElementById("1").style.backgroundImage = 'url(stripes.png)';
    } else {
        document.getElementById("1").style.backgroundColor = string;
        document.getElementById("1").style.backgroundImage = 'none';
    }
}