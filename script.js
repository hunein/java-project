const dark = document.getElementById("dark");
dark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        dark.src = "moon.png"
    } else {
        dark.src = "sun.png"

    }

})