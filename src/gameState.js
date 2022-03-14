import {modFox, modScene} from "./ui";
import {DAY_LENGTH, getNextDieTime, getNextHungerTime, NIGHT_LENGTH, RAIN_CHANCE, SCENES,} from "./constants";

const gameState = {
    current: "INIT",
    clock: 1,
    wakeTime: -1, // which currently not WORKING NEGATIVE -1
    sleepTime: -1,
    hungryTime: -1,
    dieTime: -1,
    timeToStartCelebrating: -1,
    timeToEndCelebrating: -1,

    tick() {
        this.clock++;
        console.log('clock', this.clock);

        if (this.clock === this.wakeTime) {
            this.wake()
        } else if (this.clock === this.sleepTime) {
            this.sleep();
        } else if (this.clock === this.hungryTime) {
            this.getHungry()
        } else if (this.clock === this.dieTime) {
            this.die()
        } else if (this.clock === this.timeToStartCelebrating) {
            this.startCelebrating();
        } else if (this.clock === this.timeToEndCelebrating) {
            this.endCelebrating(); // Has problem with feeding and celebration

        }
            return this.clock;
        }
    ,
        startGame()
        {
            console.log('HATCHING');
            this.current = "HATCHING";
            this.wakeTime = this.clock + 3
            modFox('egg');
            modScene('day');
        }
    ,
        wake()
        {
            console.log('awoken');
            this.current = "IDLING";
            this.wakeTime = -1;
            // modFox('idling'); bcoz  this.determineFoxState() geldi.
            this.scene = Math.random() > RAIN_CHANCE ? 0 : 1;
            modScene(SCENES[this.scene]);
            this.sleepTime = this.clock + DAY_LENGTH;
            this.hungryTime = getNextHungerTime(this.clock);
            this.determineFoxState();
        }
    ,
        sleep()
        {
            this.state = 'SLEEP';
            modFox('sleep');
            modScene('night');
            this.wakeTime = this.clock + NIGHT_LENGTH;
        }
    ,
        getHungry()
        {
            this.current = "HUNGRY";
            this.dieTime = getNextDieTime(this.clock);
            this.hungryTime = -1;
            modFox("hungry");
        }
    ,
        die()
        {
            console.log('Dieing')
        }
    ,
        startCelebrating()
        {
            this.current = "CELEBRATING";
            modFox("celebrate");
            this.timeToStartCelebrating = -1;
            this.timeToEndCelebrating = this.clock + 2;
        }
    ,
        endCelebrating()
        {
            this.timeToEndCelebrating = -1;
            this.current = "IDLING";
            this.determineFoxState();
            // togglePoopBag(false);
        }
    ,
        //if it comes from celebration and it is raining HAVE to go back to looking away camera,if it is idling and daytime looks at the camera
        determineFoxState()
        {
            if (this.current === "IDLING") {
                if (SCENES[this.scene] === "rain") {
                    modFox("rain");
                } else {
                    modFox("idling");
                }
            }
        }
    ,

        handleUserAction(icon)
        {
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
        }
    ,
        changeWeather()
        {
            console.log('changeWeather')
        }
    ,
        cleanUpPoop()
        {
            console.log('cleanUpPoop')
        }
    ,
        feed()
        { // can only feed when hungry
            if (this.current !== 'HUNGRY') {
                return;
            }
        }


    };


    export const handleUserAction = gameState.handleUserAction.bind(gameState);
    export default gameState;