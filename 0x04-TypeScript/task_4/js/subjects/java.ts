/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}

	export class Java extends Subject {
		getRequirements() {
			return ` Here is the list of requirements for Java`;
		}

		getAvailableTeacher(teacher: Teacher) {
			if (!teacher.experienceTeachingJava) {
				return ` No available teacher`;
			}
			return `Available Teacher: ${teacher.firstName}`;
		}
	}
}
