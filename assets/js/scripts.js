/*-------------------------------------------------------------*/
/*         Project: Portfolio website - James Dev John         */
/*         Author: James Dev J (james.jdev@gmail.com)          */
/*         Initial version: May 2021                           */
/*-------------------------------------------------------------*/

$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        menuBar = $('.menuBar'),
        isClosed = false;


    trigger.click(function () {
        hamburger_cross();
    });

    overlay.click(function () {
        close_sideBar();
    });

    menuBar.click(function () {
        close_sideBar();
    });

    if (document.activeElement.className === 'nav-link1') {
        console.log('menu: ', menu);

        close_sideBar();

    }

    function hamburger_cross() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    function close_sideBar() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            $('#wrapper').toggleClass('toggled');
            isClosed = false;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});


const headings = [
    { id: 'about', name: 'About', icon: 'user' },
    { id: 'experience', name: 'Experience', icon: 'briefcase' },
    { id: 'skills', name: 'Skills', icon: 'stream' },
    // { id: 'education', name: 'Education', icon: 'graduation-cap' },
    // { id: 'projects', name: 'Projects', icon: 'project-diagram' },
    { id: 'android', name: 'Android Apps', icon: 'google-play', isBrand: true },
    { id: 'testimonials', name: 'Testimonials', icon: 'medal' },
    { id: 'contact', name: 'Contact', icon: 'address-card' },
    // { id: 'resume', name: 'Resume', icon: 'file-download' }
];

var menuBarContent = "", i;
for (i = 0; i < headings.length; i++) {
    menuBarContent = menuBarContent + `<div><li class="list-item padding-right-20 padding-10"><a class="nav-link1" href="#` + headings[i].id + `"><i class="` + (headings[i].isBrand ? 'fab' : 'fa') + ` fa-` + headings[i].icon + `"></i>
    <span class="padding-left-10">` + headings[i].name + `</span></a></li></div>`;
}


var experienceContent = "";
const experience = [
    {
        id: 1, role: 'Front End Developer', duration: 'January 2018 to April 2018', tenure: '4 Months', company: 'Infosys Limited, Mangalore', url: 'www.fiserv.com', imageUrl: 'assets/images/fiserv_logo.png'
    },
    {
        id: 2, role: 'Senior Software Developer', duration: 'May 2018 to Present', tenure: '3 Years', company: 'Centizen Inc, Tirunelveli', url: 'www.centizen.com', imageUrl: 'assets/images/Centizen_Logo_1.png'
    },
    // {
    //     id: 2, role: 'Senior Systems Engineer', duration: 'January 2018 to April 2018', tenure: '4 Months', company: 'Infosys Limited, Mangalore', url: 'www.infosys.com', imageUrl: 'assets/images/infosys_logo.png'
    // },
    {
        id: 3, role: 'Software Engineer', duration: 'May 2016 to December 2017', tenure: '1 Year 8 Months', company: 'Infosys Limited, Mangalore', url: 'www.pwc.com', imageUrl: 'assets/images/pwc_logo.png'
    },
    {
        id: 4, role: 'Software Engineer Trainee ', duration: 'December 2015 to April 2016', tenure: '5 Months', company: 'Infosys Limited, Mysore', url: 'www.infosys.com', imageUrl: 'assets/images/infosys_logo.png'
    }
]

// for (i = 0; i < experience.length; i++) {
//     experienceContent = experienceContent + `<div class="card1 padding-10 col-lg-3"><div class="row text-center">
//     <div class="padding-top-5"><img height="50" src="`+ experience[i].imageUrl + `"></div>
//     <div><strong>` + experience[i].role + `</strong></div>
//     <div><span class="badge rounded-pill bg-info-pill text-dark">` + experience[i].tenure + `</span></div>
//     <div><i class="fa fa-calendar-alt"></i> <span class="padding-horizantal-5">` + experience[i].duration + `</span> 
//     </div>
//     <div> <i class="fa fa-building"></i> <span class="padding-horizantal-5">`+ experience[i].company + `</span></div>
//     <div><a href="`+ experience[i].url + `">` + experience[i].url + `</a></div>
// </div></div><br>`;
// }

for (i = 0; i < experience.length; i++) {
    experienceContent = experienceContent + `<div class="card1 padding-10 col-lg-3"><div class="row text-center">
    <div class="padding-top-5"><img height="50" src="`+ experience[i].imageUrl + `"></div>
    <div class="padding-top-5"><i class="fa fa-laptop-code padding-right-5"></i><strong>` + experience[i].role + `</strong></div>
    <div><a href="`+ experience[i].url + `">` + experience[i].url + `</a></div>
</div></div><br>`;
}

var educationContent = "";
const education = [
    {
        id: 1, course: 'Bachelor of Engineering', duration: '2011 to 2015', marks: '77.0%', company: 'National Engineering College, Kovilpatti', stream: 'Electronics and Communication'
    },
    {
        id: 2, course: 'Higher Secondary', duration: '2009 to 2011', marks: '80.7%', company: 'HNUC Higher Secondary School, Puliangudi', stream: ''
    },
    {
        id: 3, course: 'SSLC', duration: '2009', marks: '91.6%', company: 'RC High School, Puliangudi', stream: ''
    }
]

for (i = 0; i < education.length; i++) {
    educationContent = educationContent + `<div class="card1 padding-10 col-lg-4"><div class="row text-center">
    <div><strong>` + education[i].course + `</strong></div><div>` + education[i].stream + `</div>
    <div><i class="fa fa-calendar-alt"></i> <span class="padding-horizantal-5">` + education[i].duration + `</span> <span class="badge rounded-pill bg-info-pill text-dark">` + education[i].marks + `</span>
    </div>
    <div> <i class="fa fa-university"></i> <span class="padding-horizantal-5">`+ education[i].company + `</span></div>
</div></div><br>`;
}

var frontEndTechContent = '';

const frontEndTech = [
    { id: 0, skill: '', imagePath: '' },
    { id: 1, skill: 'HTML', imagePath: './assets/images/html5.png' },
    { id: 2, skill: 'CSS', imagePath: './assets/images/css3.png' },
    { id: 3, skill: 'Sass', imagePath: './assets/images/sass.png' },
    { id: 4, skill: 'Bootstrap', imagePath: './assets/images/bootstrap.png' },
    { id: 5, skill: '', imagePath: '' },
]

for (i = 0; i < frontEndTech.length; i++) {
    frontEndTechContent = frontEndTechContent + `<div class="col-lg-2 col-md-2 col-sm-2 col-xs-4"><div><img src="` + frontEndTech[i].imagePath + `" height="50"></div>
    <div>`+ frontEndTech[i].skill + `</div></div>`;
}

var jsTechContent = '';

const jsTech = [
    { id: 1, skill: 'Javascript', imagePath: './assets/images/javascript.png' },
    { id: 2, skill: 'jQuery', imagePath: './assets/images/jquery.png' },
    { id: 3, skill: 'Node', imagePath: './assets/images/nodejs.png' },
    { id: 4, skill: 'Angular', imagePath: './assets/images/angular.png' },
    { id: 5, skill: 'Ionic', imagePath: './assets/images/ionic.png' },
    { id: 6, skill: 'React', imagePath: './assets/images/react.png' },
]

for (i = 0; i < jsTech.length; i++) {
    jsTechContent = jsTechContent + `<div class="col-lg-2 col-md-2 col-sm-2 col-xs-4"><div><img src="` + jsTech[i].imagePath + `" height="50"></div>
    <div>`+ jsTech[i].skill + `</div></div>`;
}

var backendTechContent = '';

const backendTech = [
    { id: 1, skill: '', imagePath: '' },
    { id: 2, skill: '', imagePath: '' },
    { id: 3, skill: 'SQL', imagePath: './assets/images/sql.png' },
    { id: 4, skill: 'MongoDB', imagePath: './assets/images/mongodb.png' },
    { id: 5, skill: '', imagePath: '' },
    { id: 6, skill: '', imagePath: '' },
]

for (i = 0; i < backendTech.length; i++) {
    backendTechContent = backendTechContent + `<div class="col-lg-2 col-md-2 col-sm-2"><div><img src="` + backendTech[i].imagePath + `" height="75"></div>
    <div>`+ backendTech[i].skill + `</div></div>`;
}

var otherTechContent = '';

const otherTech = [
    { id: 1, skill: '', imagePath: '' },
    { id: 2, skill: 'Figma', imagePath: './assets/images/figma.png' },
    { id: 3, skill: 'XD', imagePath: './assets/images/xd.png' },
    { id: 4, skill: 'Photoshop', imagePath: './assets/images/ps.png' },
    { id: 5, skill: 'Illustrator', imagePath: './assets/images/ai.png' },
    { id: 6, skill: '', imagePath: '' },
]

for (i = 0; i < backendTech.length; i++) {
    otherTechContent = otherTechContent + `<div class="col-lg-2 col-md-2 col-sm-2"><div><img src="` + otherTech[i].imagePath + `" height="50"></div>
    <div>`+ otherTech[i].skill + `</div></div>`;
}

var projectsContent = '';
const projectTech = [
    { id: 1, title: 'CONNECT - Audit Manager', company: 'Infosys Ltd', client: 'PwC', domain: 'Professional Services', duration: 'May 2016 to April 2018', role: 'Full Stack Developer', technology: 'Dot Net and Angular 4 frameworks, HTML5, CSS3, Typescript, Bootstrap and SQL Database', responsibilities: 'Requirement analysis, developing rich user interface, creating tables and stored procedures in SQL, writing API calls and business logic functions and unit testing' },
    { id: 2, title: 'APEX - Intelligent UX', company: 'Centizen Inc', client: 'Fiserv', domain: 'Banking', duration: 'May 2016 to Present', role: 'Front-End Enginner', technology: 'Angular 8+ frameworks, HTML5, CSS3, Typescript, Bootstrap', responsibilities: 'Requirement analysis, developing rich user interface, writing graphQL queries and services, unit testing.' }
];

for (i = 0; i < projectTech.length; i++) {
    projectsContent = projectsContent + `
    <div class="projectBox">
                                <h6 class="text-center">#<span>`+ projectTech[i].id + `</span>` +
        ` ` + projectTech[i].title + `</h6>
                                <div class="project-content">
                                    <div class="row">
                                        <div class="col-3 text-end fst-italic"> Company </div>
                                        <div class="col-9"> `+ projectTech[i].company + ` </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3 text-end fst-italic"> Client </div>
                                        <div class="col-9">`+ projectTech[i].client + `</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3 text-end fst-italic"> Domain </div>
                                        <div class="col-9">`+ projectTech[i].domain + `</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3 text-end fst-italic"> Duration </div>
                                        <div class="col-9">`+ projectTech[i].duration + `</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3 text-end fst-italic"> Role </div>
                                        <div class="col-9">`+ projectTech[i].role + `</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3 text-end fst-italic"> Technologies </div>
                                        <div class="col-9">`+ projectTech[i].technology + `</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3 text-end fst-italic"> Responsibilities </div>
                                        <div class="col-9">`+ projectTech[i].responsibilities + `</div>
                                    </div>
                                </div>
                            </div>
    `;
}

var androidAppsContent = '';

const androidApp = [
    { id: 1, title: 'TEDx Kanniyakumari', appURL: 'https://play.google.com/store/apps/details?id=com.jcd.tedxkk', iconName: 'app1' },
    { id: 2, title: 'Money Manager', appURL: 'https://play.google.com/store/apps/details?id=com.jcdcreations.moneymanager', iconName: 'app2' },
    { id: 3, title: 'Bible in Tamil', appURL: 'https://play.google.com/store/apps/details?id=com.jcdcreations.tamilCatholicBible', iconName: 'app3' },
    { id: 4, title: 'Prayers in Tamil', appURL: 'https://play.google.com/store/apps/details?id=jcdcreations.tamlchristianprayers', iconName: 'app4' },
    { id: 5, title: 'Thirukural', appURL: 'https://play.google.com/store/apps/details?id=com.jcdcreations.thirukkuraltamil', iconName: 'app5' },
];

for (i = 0; i < androidApp.length; i++) {
    androidAppsContent = androidAppsContent + `
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-4">
        <div class="app-card">
            <a href="`+ androidApp[i].appURL + `"><img src="./assets/images/` + androidApp[i].iconName + `.png" alt="` + androidApp[i].iconName + `" class="app-card-image"></a>
            <p class="app-card-name text-center"><strong>`+ androidApp[i].title + `</strong></p>
        </div>
    </div>
    `;
}

var socialLinksContent = `
<h5>
    <a class="contact-link padding-10" href="https://www.linkedin.com/in/jamesdevj/"
        target="_blank"><i class="fab fa-linkedin"></i></a>
    <a class="contact-link padding-10" href="https://www.behance.net/JDcreations"
        target="_blank"><i class="fab fa-behance-square"></i></a>
    <a class="contact-link padding-10" href="https://github.com/the-jd" target="_blank"><i
            class="fab fa-github"></i></a>
    <a class="contact-link padding-10" href="https://www.instagram.com/jamesdevj/"
        target="_blank"><i class="fab fa-instagram"></i></a>
    <a class="contact-link padding-10" href="https://www.facebook.com/jamesdevj/"
        target="_blank"><i class="fab fa-facebook"></i></a>
    <a class="contact-link padding-10" href="https://twitter.com/jmsdevj" target="_blank"><i
            class="fab fa-twitter"></i></a>
</h5>
`;

var introContent = `
<div class="my-block">
    <div class="fst-italic">
        <strong>I love designing and developing</strong>
    </div>
    <div><span class="fa fa-laptop-code card-headline padding-right-5"></span> Web
        applications and software products</div>
    <div><span class="fa fa-mobile-alt card-headline padding-right-5"></span> Android
        applications</div>
    <div><span class="fa fa-photo-video card-headline padding-right-5"></span> Digital
        contents for social media</div>
    <div><span class="fa fa-magic card-headline padding-right-5"></span> Logos and
        branding materials</div>
</div>
`;


window.onload = function () {
    document.getElementById("introContent").innerHTML = introContent;
    document.getElementById("socialLinksContent").innerHTML = socialLinksContent;
    document.getElementById("menuBar").innerHTML = menuBarContent;
    document.getElementById("experienceContent").innerHTML = experienceContent;
    // document.getElementById("educationContent").innerHTML = educationContent;
    document.getElementById("frontEndTechContent").innerHTML = frontEndTechContent;
    document.getElementById("jsTechContent").innerHTML = jsTechContent;
    document.getElementById("backendTechContent").innerHTML = backendTechContent;
    document.getElementById("otherTechContent").innerHTML = otherTechContent;
    // document.getElementById("projectsContent").innerHTML = projectsContent;
    document.getElementById("androidAppsContent").innerHTML = androidAppsContent;
    document.getElementById("contactsocialLinks").innerHTML = socialLinksContent;
}

