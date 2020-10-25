const cmstCourse = {
	id: "CMST 1315",
	name: "CMST 1315: Intorduction to Speech",
	courseNumber: 1315,
	tags: [
		{ name: "Prerequisite: Unsatisfied", color: "#FF0000" },
		{
			name: "Speech Comunication",
			color: "#E55204",
		},
		{
			name: "Lower Level",
			color: "#494949",
		},
	],
	labels: [{ name: "Fall 2020", color: "#F44646" }],
};

const coscCourse = {
	id: "COSC 4335",
	name: "COSC 4335: Software Development",
	courseNumber: 4335,
	tags: [
		{ name: "Prerequisite: Satisfied", color: "#429E16" },
		{
			name: "Computer Science",
			color: "#E55204",
		},
		{
			name: "Upper Level",
			color: "#E59804",
		},
	],
	labels: [{ name: "Fall 2020", color: "#F44646" }],
};

const mathCourse = {
	id: "MATH 3425",
	name: "MATH 3425: Foundation of Mathematics",
	courseNumber: 3425,

	tags: [
		{ name: "Prerequisite: Satisfied", color: "#429E16" },
		{
			name: "Mathematics",
			color: "#E55204",
		},
		{
			name: "Upper Level",
			color: "#E59804",
		},
	],
	labels: [{ name: "Fall 2020", color: "#F44646" }],
};

const temp1 = { ...mathCourse, id: "temp1" };
const temp2 = { ...mathCourse, id: "temp2" };
const temp3 = { ...mathCourse, id: "temp3" };

let data = [cmstCourse, coscCourse, mathCourse, temp1, temp2, temp3];

export default data;
