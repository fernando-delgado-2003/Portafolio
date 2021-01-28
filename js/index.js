const d = document;

window.addEventListener("scroll", () => {
    let windowHeight = window.innerHeight/1.3;
    let SectionSkill = d.querySelector("#habilidades");
    let distancia = SectionSkill.getBoundingClientRect().top;

        const lineHhtml = d.querySelectorAll(".skill-level")[0];
        const lineCss = d.querySelectorAll(".skill-level")[1];
        const lineJavascript = d.querySelectorAll(".skill-level")[2];
        const lineWebpack = d.querySelectorAll(".skill-level")[3];
        if(distancia <= windowHeight){
            lineHhtml.style.animation="level-html 1.5s"
            lineCss.style.animation="level-css 1.5s"
            lineJavascript.style.animation="level-javascript 1.5s"
            lineWebpack.style.animation="level-webpack 1.5s"
        }
})