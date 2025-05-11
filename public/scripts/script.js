//navbar behave on mobile

const button_hidden = document.querySelector(".button_show");
const tops_navbar = document.querySelector(".tops_navbar");
const top_navbar = document.getElementById("top_navbar");

let isanimated = false;

button_hidden.addEventListener("click", () => {
    if (top_navbar.classList.contains("show")) {
        top_navbar.classList.remove("show");
        top_navbar.classList.add("hidden");
    } else {
        top_navbar.classList.remove("hidden");
        top_navbar.classList.add("show");
    }

    if (button_hidden.classList.contains("button_move_down")) {
        button_hidden.classList.remove("button_move_down");
        button_hidden.classList.add("button_move_up");
    } else {
        button_hidden.classList.remove("button_move_up");
        button_hidden.classList.add("button_move_down");
    }

    if (tops_navbar.classList.contains("animate_nav")) {
        tops_navbar.classList.remove("animate_nav");
        tops_navbar.classList.add("no_animate_nav");
    } else {
        tops_navbar.classList.remove("no_animate_nav");
        tops_navbar.classList.add("animate_nav");
    }
});

//navbar behave before change the pages on mobile

const home_li = document.querySelector(".home_li");

home_li.addEventListener("click", (e) => {
    e.preventDefault();
    top_navbar.classList.remove("show");
    top_navbar.classList.add("hidden");
    button_hidden.classList.remove("button_move_down");
    button_hidden.classList.add("button_move_up");
    tops_navbar.classList.remove("animate_nav");
    tops_navbar.classList.add("no_animate_nav");
    setTimeout(() => {
        window.location.href = "home";
    }, 300);
});

const login_li = document.querySelector(".login_li");

login_li.addEventListener("click", (e) => {
    e.preventDefault();
    top_navbar.classList.remove("show");
    top_navbar.classList.add("hidden");
    button_hidden.classList.remove("button_move_down");
    button_hidden.classList.add("button_move_up");
    tops_navbar.classList.remove("animate_nav");
    tops_navbar.classList.add("no_animate_nav");
    setTimeout(() => {
        window.location.href = "start";
    }, 300);
});

const store_li = document.querySelector(".store_li");

store_li.addEventListener("click", (e) => {
    e.preventDefault();
    top_navbar.classList.remove("show");
    top_navbar.classList.add("hidden");
    button_hidden.classList.remove("button_move_down");
    button_hidden.classList.add("button_move_up");
    tops_navbar.classList.remove("animate_nav");
    tops_navbar.classList.add("no_animate_nav");
    setTimeout(() => {
        window.location.href = "store";
    }, 300);
});

const profile_li = document.querySelector(".profile_li");

profile_li.addEventListener("click", (e) => {
    e.preventDefault();
    top_navbar.classList.remove("show");
    top_navbar.classList.add("hidden");
    button_hidden.classList.remove("button_move_down");
    button_hidden.classList.add("button_move_up");
    tops_navbar.classList.remove("animate_nav");
    tops_navbar.classList.add("no_animate_nav");
    setTimeout(() => {
        window.location.href = "profile";
    }, 300);
});
