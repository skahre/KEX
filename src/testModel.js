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

    endTime: 0,

    testsDone: 0,

    allTests: [
        {name: "A1", word: "BRIDGE", component:A1},
        {name: "A2", word: "CANDLE", component:A2},
        {name: "B1", word: "GLASS", component:B1},
        {name: "B2", word: "STONE", component:B2},
    ],

    startTimer(){ 
        this.startTime = Date.now();
    },

    stopTimer(){
        this.endTime = Date.now()
        this.userStats[this.currentTest.name] = (this.endTime - this.startTime) / 1000;
        console.log(this.userStats[this.currentTest.name])
    }, 

    getCurrentTest(){
        this.startTime = 0;
        this.endTime = 0;
        this.currentTest = this.allTests[this.testsDone];
    },

    finishTest(){
        this.testsDone += 1;
    }
}