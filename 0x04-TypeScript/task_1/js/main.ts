interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmploy: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher1: Teacher = {
	firstName: "Kimani",
	lastName: "Rurii",
	fullTimeEmploy: true,
	location: "Eldoret",
	isMarried: true,
};

console.log(teacher1);
