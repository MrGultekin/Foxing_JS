export const ICONS = ["fish", "poop", "weather"];
export const SCENES = ["day", "rain"];
export const TICK_RATE = 3000;
export const RAIN_CHANCE = 0.2; // 20% Rain 80 % Sunny ll be
export const DAY_LENGTH = 6;
export const NIGHT_LENGTH = 5;
export const getNextHungerTime = (clock) =>
    Math.floor(Math.random() * 3) + 8 + clock;
export const getNextDieTime = (clock) =>
    Math.floor(Math.random() * 3) + 3 + clock;
export const getNextPoopTime = (clock) =>
    Math.floor(Math.random() * 3) + 8 + clock;
