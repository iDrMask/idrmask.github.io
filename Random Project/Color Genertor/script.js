let abc = document.getElementById('output');
let def = document.getElementById('hello');
let ghi = document.getElementById('hi');

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

function randomRGB(){
    let random = Math.random() * 255;
    return Math.floor(random);
}

function hello(){
    let randomRed = randomRGB();
    let randomBlue = randomRGB();
    let randomGreen = randomRGB();

    abc.style.backgroundColor = `rgb(${randomRed},${randomBlue},${randomGreen})`;
    def.innerHTML = `rgb(${randomRed},${randomBlue},${randomGreen})`;
    ghi.innerHTML = `${rgbToHex(randomRed,randomBlue,randomGreen)}`;

}
