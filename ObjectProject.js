function ProgrammingTasks(startedAt, finishedAt, tasksGiven, tasksFinished, topic ) {
    this.startedAt= startedAt;
    this.finishedAt= finishedAt;
    this.totalTime= function() {
        return (finishedAt - startedAt) / 36e5;};
    this.studyTimeLevel = function (){
        if (this.totalTime() <= 2)
            return 'POOR';
        if (this.totalTime() <= 5)
            return 'MEDIUM';
        return 'GOOD';
    }
    this.tasksGiven= tasksGiven;
    this.tasksFinished= tasksFinished;
    this.tasksFinishedPrecent= function(){
        return ((tasksFinished/tasksGiven)*100)
    };
    this.tasksPercentLevel= function() {
        if(this.tasksFinishedPrecent() <= 50)
        return 'POOR';
        if(this.tasksFinishedPrecent() <= 75)
        return 'MEDIUM';
        return 'GOOD';
    }
    this.topic= topic;
}

let tasksConclusion= [];
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-20: 13:00"), 
new Date("2021-01-20: 19:00"), 10, 9, 'HTML'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-20: 10:00"), 
new Date("2021-01-20: 20:00"), 13, 8, 'JavaScript'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-20: 06:00"), 
new Date("2021-01-20: 22:00"), 20, 14, 'CSS'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-20: 14:30"), 
new Date("2021-01-20: 20:00"), 7, 5, 'Github'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-21: 09:00"), 
new Date("2021-01-21: 19:30"), 9, 8, 'loops'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-20: 08:00"), 
new Date("2021-01-20: 21:00"), 18, 13, 'arrays'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-19: 19:00"), 
new Date("2021-01-19: 23:30"), 11, 8, 'objects'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-14: 10:00"), 
new Date("2021-01-14: 19:30"), 14, 10, 'values'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-12: 08:00"), 
    new Date("2021-01-12: 12:00"), 15, 8, 'functions'));
tasksConclusion.push(new ProgrammingTasks(new Date("2021-01-13: 07:00"), 
    new Date("2021-01-13: 18:00"), 20, 18, 'strings'));
   
console.log(tasksConclusion);
