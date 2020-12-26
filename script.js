const getStudyHours = (day) => {
	switch (day) {
		case 'Monday':
			return 8;
		case 'Tuesday':
			return 7;
		case 'Wednesday':
			return 6;
		case 'Thursday':
			return 7;
		case 'Friday':
			return 5;
		case 'Saturday':
			return 8;
		case 'Sunday':
			return 9;
	}
};

// console.log(getStudyHours('Friday'));

const getActualStudyHours = () =>
	getStudyHours('Monday') +
	getStudyHours('Tuesday') +
	getStudyHours('Wednesday') +
	getStudyHours('Thursday') +
	getStudyHours('Friday') +
	getStudyHours('Saturday') +
	getStudyHours('Sunday');

const getIdealStudyHours = () => {
	let idealHours = 7;

	return idealHours * 7;
};

const calculateStudyDebt = () => {
	let actualStudyHours = getActualStudyHours();
	let idealStudyHours = getIdealStudyHours();

	if (actualStudyHours == idealStudyHours) {
		console.log('You have studied perfect amount of time');
	} else if (actualStudyHours > idealStudyHours) {
		console.log(
			`You have studied ${
				actualStudyHours - idealStudyHours
			} hours more than ideal study time`,
		);
	} else {
		console.log(
			`You have studied ${
				idealStudyHours - actualStudyHours
			} hours less than ideal study hours. You should study more!!!`,
		);
	}
};

calculateStudyDebt();
