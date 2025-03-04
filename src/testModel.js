import { A1 } from "./components/A1"
import { A2 } from "./components/A2"
import { B1 } from "./components/B1"
import { B2 } from "./components/B2"

export const model = {

    currentTest: {
        name: "hej",
        word: "hhh",
        component: null
    },

    userStats: {},

    startTime: 0,

    testsDone: 0,

    allTest: [
        {name: "A1", word: "BRIDGE", component:A1},
        {name: "A2", word: "CANDLE", component:A2},
        {name: "B1", word: "GLASS", component:B1},
        {name: "B2", word: "STONE", component:B2},
    ],

    startTimer(){ 
        this.startTime = Date.now();
    },

    stopTimer(){
        const endTime = Date.now()
        this.userStats[this.currentTest.name] = (endTime - this.startTime) / 1000;
        this.startTime = 0;
        console.log(this.userStats[this.currentTest.name])
    }, 

    getCurrentTest(){
        this.currentTest = this.allTest[this.testsDone];
    },

    finishTest(){
        this.testsDone += 1;
    }
}