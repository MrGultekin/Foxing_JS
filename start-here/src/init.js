const TICK_RATE = 3000; // FROZEN wont be changed

function tick() {
    console.log('tick',Date.now());
}

async function init() {                         //starts program
    console.log('starting game')

    let nextTimeToTick = Date.now
// closure keeps time tracking here
    function nextAnimationFrame() {
        const now = Date.now()
        if (nextTimeToTick <=now) {
            tick()
            nextTimeToTick = now + TICK_RATE;
        }
    // Below code its provided by browser all browsers have built in then this function
        requestAnimationFrame(nextAnimationFrame)
    }
    requestAnimationFrame(nextAnimationFrame)
}
init();