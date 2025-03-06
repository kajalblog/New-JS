class RailwayForm {

    submit() {
        alert(` ${this.yourName} Your Form Is Submitted For Train ${this.trainNo}`);
    }
    fill(firstName, trainNo) {
        // this is instance eof object
        this.yourName = firstName;
        this.trainNo = trainNo;
        // alert(`${firstName} Your Form Is Filled`);

    }
    cancel() {
        alert(` ${this.yourName} Your Form Is Canceled For Train  ${this.trainNo}`);

    }
}

// create instance(object) of class with new keyword

let kajalForm = new RailwayForm();
kajalForm.fill("Kajal", 556677);
kajalForm.submit();
kajalForm.cancel();