function changeClass(){

    const BODY = document.getElementsByTagName("body")[0];
    const H1 = document.getElementsByTagName("h1")[0];

    if(!BODY.classList.contains("light-mode")){
        H1.textContent = "Light Mode ON"
        BODY.classList.replace('dark-mode', 'light-mode');
    }else{
        H1.textContent = "Dark Mode ON"
        BODY.classList.replace('light-mode', 'dark-mode');
    }
}

const BUTTON = document.getElementById("toogle-mode");
BUTTON.addEventListener('click', changeClass);


