//$("#main").append("Matthew Brown"); 

var name = "Matthew Brown";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = "916-835-8551";
var contactMobile = HTMLmobile.replace("%data%", mobile);

var email = "matt.eric.brown@gmail.com";
var contactEmail = HTMLemail.replace("%data%", email);

var git = "mattericbrown";
var contactGit = HTMLgithub.replace("%data%", git);

var local = "San Francisco";
var contactLocation = HTMLlocation.replace("%data%", local);

var pic = "images/golfchimp.jpg";
var profilePic = HTMLbioPic.replace("%data%", pic);


$("#header").append(contactMobile);
$("#header").append(contactEmail);
$("#header").append(contactGit);
$("#header").append(contactLocation);
$("#header").prepend(profilePic);

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
