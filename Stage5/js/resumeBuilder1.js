//$("#main").append("Matthew Brown"); 

var name = "Matthew Brown";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Matt Brown",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "916-835-8551",
		"email": "matt.eric.brown@gmail.com",
		"github": "mattericbrown",
		"twitter": "@mattericbrown",
		"location": "San Francisco"
	},
	"skills": [
		"Full Stack", "Ruby on Rails", "JavaScript", "HTML", "CSS"
	],
	"bioPic": "/images/profile.jpg"
}
var contactMobile = HTMLmobile.replace("%data", mobile);

$("#header").append(contactMobile);

$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.contacts.mobile);
$("#header").append(bio.contacts.email);
$("#header").append(bio.contacts.github);
$("#header").append(bio.contacts.location);
$("#header").append(bio.skills);
$("#header").append(bio.bioPic);

var work = {};
work.position = "Sushi Chef";
work.employer = "Hanami Restaurant";
work.years =  "1";

var education = {};
education["name"] = "University of California Santa Cruz";
education["years"] = "2006-2010";
education["city"] = "Santa Cruz, CA";

$("#main").append(work.position);
$("#main").append(work.employer);
$("#main").append(work.years);
$("#main").append(education.name);


for (job in work.jobs) {
	$("workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmpoyer.replace
		("%data", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace
		("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(
		formattedEmployerTitle);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%dtat%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(
		formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
