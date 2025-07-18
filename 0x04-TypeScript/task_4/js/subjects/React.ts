/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}

	export class React extends Subject {
		getRequirements() {
			return ` Here is the list of requirements for React`;
		}

		getAvailableTeacher(teacher: Teacher) {
			if (!teacher.experienceTeachingReact) {
				return ` No available teacher`;
			}
			return `Available Teacher: ${teacher.firstName}`;
		}
	}
}
