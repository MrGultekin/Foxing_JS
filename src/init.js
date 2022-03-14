import gameState from "./gameState";
import {TICK_RATE} from "./constants";
import initButtons from "./buttons";
import game, {handleUserAction} from "./gameState";

//const TICK_RATE = 3000;
//It won't change so Capitalized

function init() {
    console.log('starting game');
    initButtons(handleUserAction);
    let nextTimeToTick = Date.now(); // let coz it ll be keep changing over the time

    function nextAnimationFrame() { //func in func is closure keep the time tracking // closure to encapsulate the state
        const now = Date.now();

        if (nextTimeToTick <= now) {
            gameState.tick();
            nextTimeToTick = now + TICK_RATE;
        }

        requestAnimationFrame(nextAnimationFrame);
    }

    requestAnimationFrame(nextAnimationFrame); // all browsers ve built in this func does typically JS animation
}

init(); // No problem No regeneratorRuntime is not defined It works for me