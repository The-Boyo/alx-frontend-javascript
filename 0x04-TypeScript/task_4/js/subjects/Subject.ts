/// <reference path="./Teacher.ts" />

namespace Subjects {
	export class Subject {
		private _teacher: Teacher;

		constructor(teacher: Teacher) {
			this._teacher = teacher;
		}

		set setTeacher(teacher: Teacher) {
			this._teacher = teacher;
		}
	}
}
