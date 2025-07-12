interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const tom: Student = {
	firstName: "Tom",
	lastName: "Muriuki",
	age: 18,
	location: "Nairobi",
};

const moha: Student = {
	firstName: "Mohammed",
	lastName: "Ali",
	age: 16,
	location: "Mombasa",
};

const studentsList: Array<Student> = [];
studentsList.push(tom);
studentsList.push(moha);

console.log(studentsList);

const createTable = () => {
	return `<table>
  <th>FirstName</th>
  <th>Location</th>
${studentsList.map((student) => {
	return `<tr>
  <td>${student.firstName}</td>
  <td>${student.location}</td>
  </tr>`;
})}
  </table>`;
};

document
	.querySelector("body")
	.insertAdjacentHTML("beforeend", createTable());
