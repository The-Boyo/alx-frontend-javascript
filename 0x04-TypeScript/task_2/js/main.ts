interface DirectorTeacherFunctions {
	workFromHome(): string;
	getCoffeeBreak(): string;
}

interface DirectorInterface extends DirectorTeacherFunctions {
	workDirectorTasks(): string;
}

interface TeacherInterface extends DirectorTeacherFunctions {
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	constructor() {}

	workFromHome() {
		return "Working from Home";
	}

	getCoffeeBreak() {
		return "Getting a coffee break";
	}

	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	constructor() {}

	workFromHome() {
		return "Cannot work from Home";
	}

	getCoffeeBreak() {
		return "Cannot have a break";
	}

	workTeacherTasks() {
		return "Getting to work";
	}
}

const createEmployee = (salary: string | number) => {
	if (typeof salary === "number") {
		if (salary < 500) {
			return new Teacher();
		} else {
			return new Director();
		}
	} else {
		const salo: Array<string | undefined> = [];
		salary.split("").forEach((sal) => {
			if (!isNaN(parseInt(sal))) {
				salo.push(sal);
			}
		});

		if (parseInt(salo.join("")) < 500) {
			return new Teacher();
		} else {
			return new Director();
		}
	}
};

/**Number 6- Functions Specific to employees */
const isDirector = (employee: Director | Teacher): employee is Director => {
	return (employee as Director).workDirectorTasks !== undefined;
};

const executeWork = (employee: Director | Teacher): string => {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
};

/** Number 7 */

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
	if (todayClass === "Math") return "Teaching Math";
	return "Teaching History";
};
