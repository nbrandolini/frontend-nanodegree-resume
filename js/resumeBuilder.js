

var bio = {
    "name": "Nicoleta Brandolini",
    "role": "Front-End Developer",
    "contacts": {
        "email": "nicoletabrandolini@gmail.com",
        "mobile": "407-000-0000",
        "github": "nbrandolini",
        "twitter": "@nbrandolini",
        "location": "Orlando, Florida"
    },
    "skills": ["accounting", "teaching", "programming", "fast-learning", "enthusiastic", "fun"],
    "picture": "images/me.jpg",
    "welcomeMessage": "Hey, I am Nicoleta, welcome to my online resume! I am changing careers and learning to create friendly websites."
};

bio.display = function() {

    var data = "%data%";
    var role = bio.role;
    var formattedRole = HTMLheaderRole.replace(data, role);
    $("#header").prepend(formattedRole);

    var name = bio.name;
    var formattedName = HTMLheaderName.replace(data, name);
    $("#header").prepend(formattedName);

    var pic = bio.picture;
    var formattedPic = HTMLbioPic.replace(data, pic);
    $("#header").append(formattedPic);

    var welcome = bio.welcomeMessage;
    var formattedWelcome = HTMLwelcomeMsg.replace(data, welcome);
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var skill_i = HTMLskills.replace(data, bio.skills[skill]);
        $("#skills").append(skill_i);
    }

    var location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace(data, location);
    // $("#topContacts, #footerContacts").append(formattedLocation);

    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace(data, mobile);
    // $("#topContacts, #footerContacts").append(formattedMobile);

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace(data, email);
    // $("#topContacts, #footerContacts").append(formattedEmail);

    var twitter = bio.contacts.twitter;
    var formattedTwitter = HTMLtwitter.replace(data, twitter);

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace(data, github);


    $("#topContacts, #footerContacts").append(formattedLocation, formattedMobile, formattedEmail, formattedTwitter, formattedGithub);
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Valencia College",
        "title": "Director, Budget and Analysis",
        "location": "Orlando, Florida",
        "dates": "2003-2013",
        "description": "Managed, analyzed, monitor and balanced the budget of the college "
    }, {
        "employer": "United Healthcare",
        "title": "Billing and Reconciliation Coordinator",
        "location": "Lake Mary, Florida",
        "dates": "2001-2003",
        "description": "Timely and accurate billing reconciliation of accounts "
    }, {
        "employer": "Minister of Finance",
        "title": "Tax Accountant",
        "location": "Galati, Romania",
        "dates": "1990--1997",
        "description": "Complete financial and tax audits for all type of businesses from small firms to large companies "
    }]
};
work.display = function() {
    work.jobs.forEach(function(j) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", j.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", j.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", j.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", j.location);
        var formattedDatesLocation = formattedDates + formattedWorkLocation;
        $(".work-entry:last").append(formattedDatesLocation);

        var formattedWorkDescription = HTMLworkDescription.replace("%data%", j.description);
        $(".work-entry:last").append(formattedWorkDescription);
    });
};
work.display();



var projects = {
    "projects": [{
        "title": "Banner Xtender Implementation",
        "dates": "2007",
        "description": "implementation of application allowing on screen viewing of all invoices and supporting documentation",
        "images": ["images/ada.jpg"]
    }, {
        "title": "Online Portfolio",
        "dates": "2017",
        "description": "project for the Udacity class",
        "images": ["images/wisteria.jpg"]
    }]
};

projects.display = function() {
    if(projects.projects.length > 0) {
        for(var i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(var img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
};

projects.display();



var education = {
    "schools": [{
        "name": "University of Dunarea de Jos",
        "url": "http://www.udunareadejos.edu/",
        "degree": "Bachelor of Science",
        "dates": "1989-1993",
        "majors": ["Economics", " Accounting"],
        "location": "Galati, Romania"
    }, {
        "name": "Columbia College",
        "url": "http://www.columbiacollege.edu/",
        "degree": "Bachelor of Science",
        "dates": "2002-2009",
        "majors": ["Business Administration", " Accounting"],
        "location": "Columbia, Missouri"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "06/2017-present",
        "url": "https://www.udacity.com/nanodegree"
    }, {
        "title": "Introduction to Computer Science and Programming in Python",
        "school": "MIT",
        "dates": "07/2016",
        "url": "https://ocw.mit.edu/courses"
    }]
};

education.display = function() {
    education.schools.forEach(function(s) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", s.name).replace("#", s.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", s.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", s.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajor = HTMLschoolMajor.replace("%data%", s.majors[0] + s.majors[1]);
        $(".education-entry:last").append(formattedMajor);

        var formattedSchooLocation = HTMLschoolLocation.replace("%data%", s.location);
        $(".education-entry:last").append(formattedSchooLocation);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(o) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", o.title).replace("#", o.url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", o.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", o.dates);
        $(".education-entry:last").append(formattedDates);

        // Append this empty line to keep the format. URL is contained within formattedTitle.
        var formattedUrl = HTMLonlineURL.replace("%data%", " ");
        $(".education-entry:last").append(formattedUrl);
    });
};
education.display();

//tracks clicks

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

//internationalize button
$("#main").append(internationalizeButton);

//google map

function displayMap() {

$("#mapDiv").append(googleMap);

}

displayMap();
