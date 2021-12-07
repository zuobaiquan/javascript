class Person11 {
  name = 'zuobaiquan';
  getName() {
    return this.name;
  }
}

class Teacher11 extends Person11 {
  getTeacherName() {
    return 'Teacher';
  }
  getName() {
    // super父类
    return super.getName() + 'code';
  }
}

const teacher = new Teacher11();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
