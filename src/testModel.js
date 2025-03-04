import { A1 } from "./components/A1"
import { A2 } from "./components/A2"

export const model = {

    currentTest: {
        name: "hej",
        word: "hhh",
        component: null
    },

    userStats: {},

    timer: null,

    testsDone: 0,

    allTest: [
        {name: "A1", word: "BRIDGE", component:A1},
        {name: "A2", word: "CANDLE", component:A2}
    ],

    startTimer(){ 
        this.timer = 1  // Fett temporary funktion lol
    },

    stopTimer(){
        this.userStats[this.currentTest.name] = this.timer;
        this.timer = null;   // Yippie (det lär nog inte va så här lätt lolll)
    }, 

    getCurrentTest(){
        this.currentTest = this.allTest[this.testsDone];
    },

    finishTest(){
        this.testsDone += 1;
    }
}