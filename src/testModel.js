export const model = {

    currentTest: {
        name: "",
        word: "",
        component: null
    },

    userStats: {},

    timer: null,

    startTimer(){ 
        this.timer = 1  // Fett temporary funktion lol
    },

    stopTimer(){
        this.userStats[this.currentTest.name] = this.timer
        this.timer = null   // Yippie (det lär nog inte va så här lätt lolll)
    }

}