const cmstCourse = {
	id: "CMST 1315",
	title: "CMST 1315: Intorduction to Speech",
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
	title: "COSC 4335: Software Development",
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
	title: "MATH 3425: Foundation of Mathematics",
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


let data = [cmstCourse, coscCourse, mathCourse]


export default data
