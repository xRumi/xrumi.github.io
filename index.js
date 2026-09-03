window.onload = function() {
}

function alternateProjectBorder() {
    let projects = document.getElementsByClassName("project");
    let length = projects.length;
    let sides = ["left", "right"];
    for (let i = 0; i < length; i++)
        projects[i].setAttribute("style", `border-${sides[i % 2]}: solid 2px`);
}

function randomRGBcolorStr() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return  `rgb(${r}, ${g}, ${b})`;
}
