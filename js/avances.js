const divsColores = document.getElementsByClassName("color-box");

for (const div of divsColores) {
    const color = div.firstChild.innerText;
    div.style.backgroundColor = color;
}
