const d = document;

window.addEventListener("scroll", () => {
    let windowHeight = window.innerHeight/1.3;
    let SectionSkill = d.querySelector("#habilidades").getBoundingClientRect().top;
    let aboutMe = d.querySelector("#acerca-de").getBoundingClientRect().top;

        if(SectionSkill <= windowHeight){

            /**barra del nivel */
            const lineHhtml = d.querySelector(".skill-level-html");
            const lineCss = d.querySelector(".skill-level-css");
            const lineJavascript = d.querySelector(".skill-level-javascript");
            const lineWebpack = d.querySelector(".skill-level-webpack");

            /**toolTip */
            const toolTipHtml = d.querySelector(".level-percentage-html")
            const toolTipCss = d.querySelector(".level-percentage-css");
            const toolTipJavascript = d.querySelector(".level-percentage-javascript");
            const toolTipWebpack = d.querySelector(".level-percentage-webpack");

                lineHhtml.style.animation="level-html 1.5s";
                toolTipHtml.style.animation="level-percentage-html 1.5s";

                lineCss.style.animation="level-css 1.5s";
                toolTipCss.style.animation="level-percentage-css 1.5s"; 

                lineJavascript.style.animation="level-javascript 1.5s";
                toolTipJavascript.style.animation="level-percentage-javascript 1.5s";

                lineWebpack.style.animation="level-webpack 1.5s";
                toolTipWebpack.style.animation="level-percentage-webpack 1.5s";
        }

        /**Seccion acerca de mi */
        if (aboutMe <= windowHeight) {
            let aboutMeText = d.querySelector(".acerca-de_text");
            let aboutMeImg = d.querySelector(".acerca-de_img");
            aboutMeText.classList.add("active")
            aboutMeImg.classList.add("active")
        }
})
