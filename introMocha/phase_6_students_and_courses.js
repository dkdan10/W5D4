function Student (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
} 

Student.prototype.name = function () {return `${this.fname} ${this.lname}`};

Student.prototype.enroll = function (course) {
  if (!this.course.includes(course)) {
    this.courses.forEach(function(singleCourse){
      if (course.conflictsWith(singleCourse)) throw 'conflicts with class!!!!!!?' 
    });
    this.courses.push(course); 
    course.addStudent(this);
  }
};

Student.prototype.courseLoad = function () {
  return 
}

function Course (name, department, numCredits, timeBlock, daysOfTheWeek) {
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.timeBlock = timeBlock;
  this.daysOfTheWeek = daysOfTheWeek;
  this.students = [];
}

Course.prototype.addStudent = function (student) {
  this.students.push(student)
}

Course.prototype.conflictsWith = function(course) {
  if (this.timeBlock !== course.timeBlock) return false;
  course.daysOfTheWeek.forEach(function(day) {
    if (this.daysOfTheWeek.includes(day)) return true;
  });
  return false;
}

let daniel = new Student("Daniel", "Margot Robbie");
