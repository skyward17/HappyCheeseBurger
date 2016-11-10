var bio = {
    "name": "Geoff",
    "role": "Front-End Web Developer (In Training)",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "this@that.com",
        "github": "https://github.com/skyward17",
        "location": "Milwaukee"
    },
    "welcomeMessage": "Hello and Welcome!",
    "skills": ["Basic Networking", "First Line Management",
        "Coaching and Development", "MySQL"
    ],
    "biopic": "images/me.jpg"
};


var work = {
    "jobs": [{
        "employer": "AT&T Inc.",
        "title": "ATO Development Coach",
        "location": "Waukesha, WI. US",
        "dates": "August 2014 - Current",
        "description": "Train and coach managers utilizing Management System and Operational Control (MSOC); support continuous performance improvement by collaborating with District team and guiding managers on development of organizational performance improvement plans; monitor compliance, report on results, and assist with action plan development; identify process improvement opportunities and promote use of MSOC and Six Sigma to act on opportunities.",
        "keyRoles": "Key Roles and Responsibilities: Ensures network process capability, control and improvement by training and coaching managers utilizing MSOC. Provides consultation on the use of MSOC to improve network process performance. Analyzes data to identify performance improvement opportunities then guides managers in developing action plans. Collaborates with District Management Team on developing Performance Improvement Plans, Training Development Plans, and Individual Development Plans to improve performance. Conduct MSOC Compliance Reviews, identify gaps, works with Directors and/or Area Managers to develop action plans. Facilitates the identification, analysis, development and documentation of network process improvements, network operational performance metrics, process control and results management identifying indicators for future network improvement opportunities. Responsible for analyzing, tracking and publishing network performance and process/quality indicators and results by constructing reports illustrative of the process trends and network performance. Defines network process flows, business rules and user requirements. Identifies network process improvement training needs."
    }, {
        "employer": "AT&T Inc.",
        "title": "Manager Network Services",
        "location": "Racine/Waukesha, WI. US",
        "dates": "February 2012 - July 2014",
        "description": "Manages crews of technicians who engage in installation and maintenance, provisioning, dispatch, and testing activities at the customer site or a company location for POTS, Special Services, Designed Services, Data Services, U-verse or related power equipment.",
        "keyRoles": "Key Roles and Responsibilities: Reviews technician performance and provides feedback and coaching to technicians designed to address performance issues. Conducts safety and quality inspections to ensure high quality and safe performance by technicians. Identifies and removes roadblocks to safe and efficient performance by technicians. Works with Dispatch to ensure that work is effectively assigned. Ensures that technician training is complete. Administers discipline to technicians and makes recommendations concerning long term suspensions or terminations of technicians. Addresses and resolves customer complaints or service issues. Receives technician grievances and resolves them at the step one level as appropriate. Handles other issues related to union matters, as necessary. Ensures that all functions are performed in a timely fashion to meet customer and company specifications. Responsible for planning, organizing, and directing all operations with respect to installation support, service and major moves, adds, and changes. Management of technicians may include responsibility for technician time reporting, payroll, and on-call or vacation scheduling. May be responsible for utilizing Management Systems & Operational Control (MSOC) techniques to manage employee efficiency, performance, and customer service. Typically reports to second or third level management.  "
    }, {
        "employer": "AT&T Inc.",
        "title": "Technical Support Rep, Tier 2",
        "location": "Milwaukee, WI. US",
        "dates": "September 2008 - January 2012",
        "description": "Conducts analysis and troubleshooting via telephone for customers' U-verse services.",
        "keyRoles": "Communicates with customers using in-depth interviews to solve U-verse service issues.  Process trouble reports using mechanized systems.  Coordinates the clearance/correction of trouble for IPTV, High Speed Internet Access, and  VoIP services.  Assists technicians with troubleshooting as required.  Multi-tasking between different systems.  Communicates with other departments and customers regarding disposition and status of  trouble.  Works with outside vendors and affiliated groups to trouble shoot and restore customer's Uverse."
    }, {
        "employer": "U.S. Army (Reserve)",
        "title": "Platoon Sergeant(E6)/Construction Supervisor(21N)",
        "location": "Milwaukee, WI. US/Denver, CO.",
        "dates": "November 1999 - November 2008",
        "description": "Job Description: Operation Iraqi Freedom 2003, Graduate PLDC & NCO Academy.",
        "keyRoles": "Supervises employment and maintenance activities related to lifting, general, and heavy construction equipment in support of construction operations. Estimates equipment and operator requirements for specific jobs. Assists in supervision of unit engaged in construction equipment operation. Organizes and directs well drilling operations. Directs combat engineering missions..  Devises network flow diagrams such as the critical path method and coordinates work activities of supporting units. Provides supervision over all engineer construction equipment operations. Develops and executes a quality control plan. Plans and organizes for combat engineering missions."
    }]
};

var education = {
    "schools": [{
        "name": "Marian University of Fond du Lac",
        "location": "Fond du Lac, WI. US",
        "degree": "B.A.",
        "majors": ["Marketing"],
        "dates": "2006-2007",
        "url": "https://www.marianuniversity.edu/"
    }, {
        "name": "Fox Valley Technical College",
        "location": "Appleton, WI. US",
        "degree": "A.A.S.",
        "majors": ["Marketing & Sales"],
        "dates": "2004-2006",
        "url": "https://www.fvtc.edu/"
    }, {
        "name": "Fox Valley Technical College",
        "location": "Appleton, WI. US",
        "degree": "Certificate",
        "majors": ["Small Business Operations"],
        "dates": "2004-2006",
        "url": "https://www.fvtc.edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com"
    }]
};


var projects = {
    "projects": [{
        "title": "Code Your Own Quiz",
        "dates": "10-10-2016",
        "description": "UDacity Project 2: Code Your Own Quiz.  The Legend of Zelda Quiz Game.",
        "images": ["images/project_1.jpg", "images/project_2.jpg"]
    }]
};


/////////////////////////////////BIO
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();


/////////////////////////////////WORK
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
        var formattedWorkRole = HTMLworkRole.replace("%data%", job.keyRoles);
        $(".work-entry:last").append(formattedWorkRole);
    });
};

work.display();


/////////////////////////////////PROJECTS
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (i = 0; i < projects.projects.length; i++) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

projects.display();


/////////////////////////////////EDUCATION
education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDegreeName = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedDegreeName);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolMajor);
        var formattedSchoolUrl = HTMLschoolURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedSchoolUrl);
    });

    $('#education').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};

education.display();


////////////////////////////////////GOOGLE MAP
$("#mapDiv").append(googleMap);
