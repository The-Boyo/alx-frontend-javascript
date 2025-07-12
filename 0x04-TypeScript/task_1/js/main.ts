interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher1: Teacher = {
	firstName: "Kimani",
	lastName: "Rurii",
	fullTimeEmployee: true,
	location: "Eldoret",
	isMarried: true,
};

console.log(teacher1);

/* Number 2 - Extending the Teacher class*/

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: "John",
	lastName: "Doe",
	location: "London",
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1);

/* Number 3- Printing Teachers */

interface PrintTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (a: string, b: string): string => {
	return `${a.split("")[0]}. ${b}`;
};

console.log(printTeacher("Jacob", "Juma"));
