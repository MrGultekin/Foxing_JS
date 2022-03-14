const gameState = {
    current: "INIT",
    clock: 1,
    wakeTime: -1, // which currently not WORKING NEGATIVE -1
    tick() {
        this.clock++;
        console.log('clock', this.clock);

        if (this.clock === this.wakeTime) {
            this.wake()
        }
        
        return this.clock;
    },
    startGame() {
        console.log('HATCHING');
        this.current = "HATCHING";
        this.wakeTime = this.clock + 3
    },
    wake() {
        console.log('awoken');
        this.current = "IDLING";
        this.wakeTime = -1;
    },
    handleUserAction(icon) {
        if (
        ['SLEEP', 'FEEDING', 'CELEBRATING', 'HATCHING'].includes(this.current)) {
            // do nothi
            return;
        }



        if (this.current === 'INIT' || this.current === 'DEAD') {
            this.startGame();
            return;
        }
        // execute the currently selected action
        switch (icon) {
            case "weather":
                this.changeWeather();
                break;
            case "poop":
                this.cleanUpPoop();
                break;
            case "fish":
                this.feed();
                break;
        }
    },
    changeWeather() {
        console.log('changeWeather')
    },
    cleanUpPoop() {
        console.log('cleanUpPoop')
    },
    feed() {
        console.log('feed')
    }


};


export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;