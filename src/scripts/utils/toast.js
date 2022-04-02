function toast(text, type, time = 3000){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.classList.add("show", type);
    x.textContent = text;
    // After time seconds, remove the show class from DIV
    setTimeout(function(){
        x.classList.remove("show");
    }, time);
}

export default toast;