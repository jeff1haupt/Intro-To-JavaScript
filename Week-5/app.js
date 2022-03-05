class Students {
    constructor(name, gradeLevel, phone) {
        this.name = name; // grab it for a specific instance of the Students class (i.e. student1 name = "Jeff")
        this.gradeLevel = gradeLevel;
        this.phone = phone;
        this.mathGrade = 0;
    }

    describe() {
        return `${this.name} is a ${this.gradeLevel} and can be reached at ${this.phone}.` // don't forget this keyword
    }

    getMathGrade(initialGrade) {
        return this.mathGrade = initialGrade * 1.1; // gives a 10% curve 
    }

}

const student1 = new Students("Jeff", "Senior", "555-555-5555");
const student2 = new Students("Joe", "Junior", "444-444-4444");
const student3 = new Students("Amy", "Senior")
console.log(student1);
console.log(student2);
console.log(student3);

console.log(student1.describe());
student2.getMathGrade(85);
console.log(student2.mathGrade);
console.log(student1.mathGrade);

student3.phone = "777-777-7777" // dot.notation 
console.log(student3)
student3["mathGrade"] = 95; // bracket notation 
console.log(student3["mathGrade"])
