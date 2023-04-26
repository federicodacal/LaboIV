// Array
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

// forEach
students.forEach((student, index) => {
    console.log(index);
    console.log(student);
});

const names = [];

students.forEach(student => {
    names.push(student.name + ' ' + student.lastname);
});

console.log(names);

// map 
const result = students.map(student => {
    return student;
});

const ages = students.map(student => {
    return student.age;
});

const fullnames = students.map(student => student.name + ' ' + student.lastname);

const newObjects = students.map(student => {
    return {
        fullname: student.name + ' ' + student.lastname,
        age: student.age
    }
});

const newObjects2 = students.map(student => {
    return {
        ...student,
        title: `${student.name} - ${student.course}`
    }
});

// filter
const developers = students.filter(student => {
    if(student.course === 'Web Development') 
    {
        return true;
    }
});

const developers2 = students.filter(student => student.course === 'Web Development');

// reduce 
const ageSum = students.reduce((total, student) => {
    return total + student.age;
}, 0); // 0 indica el valor inicial del acumulador 'total'

const ageSum2 = students.reduce((total, student) => total + student.age, 0);

const developers3 = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "Javascript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

// Obtener skills sin repetir 
const skills = developers.reduce((allSkills, student) => {
    return Array.from(new Set([...allSkills, ...student.skills]));
}, []);

// sort
const sortedStudents = students.sort((a, b) => {
    if(a.age > b.age) 
    {
        return 1;
    }
    else 
    {
        return -1;
    }
});

const sortedStudents2 = students.sort((a, b) => a.age - b.age);

// find
const john = students.find(student => student.name === 'John');

// some (retorna true o false)
const res = students.some(student => student.age > 24);

// combinar






