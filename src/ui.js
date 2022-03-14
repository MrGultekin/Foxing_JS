export const modFox = function modFox(state) { // modFox repetition is optional 4 debug purpose
    document.querySelector('.fox').className = `fox fox-${state}`;
}

export const modScene = function modScene(state) {
    document.querySelector('.game').className = `game ${state}`;
}

export const togglePoopBag = function togglePoopBag(show) {
    document.querySelector(".poop-bag").classList.toggle("hidden", !show);//if u show remove hidden class
    // if u NOT showing add the hidden class ! means over HERE HARIKA
};