var rahees = {
    house: 'muyyoth',
    mobile: 9633093671,
    yob: 1995,
    job: 'Front End Developer'

};

var Person = function (house, mobile, yob, job){
   {
        this.house = house;
        this.mobile = mobile;
        this.yob = yob;
        this.job = job;
        this.calculateAge = function () {
            console.log(2021 - this.yob);
        };
    }
}

var rahees = new Person('muyyoth',9633093671, 1995, 'webdesigner');

rahees.calculateAge();

var rahil = new Person('muyyoth', 9633093671, 1997, 'accountent');

rahil.calculateAge();

