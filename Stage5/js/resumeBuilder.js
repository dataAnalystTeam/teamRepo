var bio = {
    "name" : "Matthew Brown",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "916-835-8551",
        "email" : "matt.eric.brown@gmail.com",
        "github" : "mattericbrown",
        "location" : "San Francisco"
    },
    "welcomeMessage" : "lorem ipsum dolor",
    "skills" : ["HTML", "CSS", "JavaScript", "Ruby"],
    "bioPic" : "images/golfchimp.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

newformattedPic = formattedPic + formattedWelcome;

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGit);
$("#topContacts").append(formattedLocation);
$("#header").append(newformattedPic);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGit);
$("#footerContacts").append(formattedLocation);

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
}

var education = {
    "schools" : [{
        "name" : "Sierra College",
        "location" : "Rocklin, CA",
        "degree" : "AA",
        "majors" : ["CS"],
        "dates" : 2016,
    }, {
        "name" : "University of California Santa Cruz",
        "location" : "Santa Cruz, CA",
        "degree" : "BA",
        "majors" : ["Sociology"],
        "dates" : 2010,
    }],
    "onlineCourses" : [{
        "title" : "Intro to Programming Nanodegree",
        "school" : "Udacity",
        "dates" : 2016,
        "url" : "https:www.udacity.com/course/intro-to-programming-nanodegree--nd000",
    }]
}

var work = {
    "jobs" : [{
        "employer" : "Hanami",
        "title" : "Chef",
        "dates" : "March 2015-Present",
        "description" : "Head Chef at Hanami Sushi Restaurant",
        "location" : "Auburn, CA"
    }, {
        "employer" : "Mikuni Restaurant Group",
        "title" : "Chef",
        "dates" : "July 2014-January 2015",
        "description" : "Sushi Chef Helper",
        "location" : "Roseville, CA"
    }]
}

var projects = {
    "projects" : [{
        "title" : "About Me Page",
        "dates" : "2016",
        "description" : "Simple Biography web page.",
        "images" : ["http://i.imgur.com/sZCNqcU.png"]

    }]
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
    }
}

displayWork();

function displayProject() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }
    }
}

displayProject();

function displayEducation() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchool);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (school in education.onlineCourse) {
        var formattedOnline = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
        $(".education-entry:last").append(formattedOnline);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}

displayEducation();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}


$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

initializeMap(); 