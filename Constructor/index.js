class RailwayForm {
    constructor(Name, TrainNo) {
        this.YourName = Name;
        this.TrainNo = TrainNo;
        console.log("Constructor Called....")
    }

    submit() {
        alert(` ${this.YourName} Your Form Is Submitted For Train ${this.TrainNo}`);
    }

    cancel() {
        alert(` ${this.YourName} Your Form Is Canceled For Train  ${this.TrainNo}`);

    }
}

// create instance(object) of class with new keyword

let kajalForm = new RailwayForm("Kajal", 556677);
let ShivanshForm = new RailwayForm("Kajal", 556677);
kajalForm.submit();
kajalForm.cancel();