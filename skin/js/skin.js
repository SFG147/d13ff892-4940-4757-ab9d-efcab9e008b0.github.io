
//TEXT - STRINGS

var app_title = "";

var copyright_text = "NAI Carolanitc 2017";

var heading_title = "";

var heading_info = '<img class="headImage" src="skin/img/header_image.svg" alt="">'+
    //'<b><font color="#03edff">32nd Annual</font></b> Triangle Commercial Real Estate Report<br><br>' +
    '<a class="btn btn-default" href="menu.html">CATEGORIES</a>' +
    '<a class="btn btn-default" href="about.html">ABOUT</a>' +
    '<a class="btn btn-primary btn-large" href="news.html">ANNOUNCEMENTS</a>';

var about_text = "<img class='headImage' src='skin/img/about_image.svg' alt=''>\
<span>Founded in 19xx, by Evangelist Doris Bethea, Faith and Truth Mission for Jesus Ministry began in a humble home. Since then it has developed into a Spirit-lead organization, focused on growing together in God. With a down-home atmosphere and free-flowing joyful mood, everyone gets an opportunity to praise and glorify God through songs, testimony and more!\
";


//NAVIGATION
var navigation_items = [
        {
            name: "Home",
            link: "home.html"
        },
        {
            name: "About",
            link: "about.html"
        },
        {
            name: "Categories",
            link: "menu.html" //galleries/index.html
        }
        /*,
        {
            name: "Locations",
            link: "locations.html"
        },
        {
            name: "Report",
            link: "images.html?galNum=8"
        }*/
        
];


//LOCATIONS
var locs = [
            {
                title: "NAI Carolantic Offices",
                address: "5121 Kingdom Way, Ste. 200, Raleigh NC 27607",
                phone: "",
                email: "",
                source: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.1065692096913!2d-78.728189!3d35.79731699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf414d391a2ff%3A0xbf0a090d20db3709!2s5121+Kingdom+Way+%23200%2C+Raleigh%2C+NC+27607!5e0!3m2!1sen!2sus!4v1487023846120",
                link: "https://www.google.com/maps/place/5121+Kingdom+Way+%23200,+Raleigh,+NC+27607/@35.797317,-78.728189,17z/data=!3m1!4b1!4m5!3m4!1s0x89acf414d391a2ff:0xbf0a090d20db3709!8m2!3d35.797317!4d-78.728189"
            }/*,
	        {
                title: "",
                address: "",
                phone: "",
                email: "",
                source: "",
		        link: ""
            }*/
];


//HOME FEATURES
var home_features = [
    
    
    {
        image: "",
        html: '<h1 id="leadTitle">Welcome</h1>\
               <center><video controls =""><source src="skin/video/Intro_Video_2.mp4" /></video></center>'
    },
    {
        image: "",
        html: '<h1 id="leadTitle">Weekly Services</h1>\
               <p><b>Sunday</b></p>\
               <p>Sunday School   : 10:00AM - 11:00AM </p>\
               <p>Morning Worship : 11:00AM</p>\
               <p><b>Wednesday</b></p>\
               <p>Bible Study   : 7:00PM - 9:00PM </p>\
               '
    },
    {
        image: "",
        html: '<h1 id="leadTitle">Travel Cards</h1>\
               <img class="headImage" src="skin/img/travel_cards.png" alt="">\
               <p>Travel with God\'s promises of protection. Visit us and receive a free pocket travel card as our gift to you!</p>\
               '
    },{
        image: "",
        html: '<h1 id="leadTitle">Map Us</h1>\
              <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.014417675194!2d-79.42090504863432!3d34.70481629040816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88552b03ee0be82b%3A0xd0b21a71094ab720!2s8981+Johns+Mill+Rd%2C+Maxton%2C+NC+28364!5e0!3m2!1sen!2sus!4v1504726801663" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe></p>\
              <p>\
              8981 Johns Mill Rd., Maxton, NC 28364\
              <br><a href="https://www.google.com/maps/place/8981+Johns+Mill+Rd,+Maxton,+NC+28364/@34.7048163,-79.420905,17z/data=!3m1!4b1!4m5!3m4!1s0x88552b03ee0be82b:0xd0b21a71094ab720!8m2!3d34.7048119!4d-79.418711" class="btn btn-default" >GPS with Google Maps</a></p>'
    }/*,
    {
        image: "",
        html: '<h1 id="leadTitle">Multimedia</h1>\
               <br><center><p>\
               <a href="https://twitter.com/NAICarolantic"><img  id="secondBtn" src="skin/img/Twitter_logo.png" ></a>\
               <a href="https://www.youtube.com/user/NAICarolanticRealty"><img  id="secondBtn" src="skin/img/youtube_logo.png" ></a>\
               <a href="http://www.linkedin.com/company/nai-carolantic-realty"><img  id="secondBtn" src="skin/img/LinkedIn_logo.png" ></a>\
               </p></center>'
    }*/
];


var video_items = [
    
    {
        link: "skin/video/NAI_Global_Overview.mp4",
        html: '<p>NAI Global Overview</p>'
    }
];


//MENU NAVIGATION ITEMS
var menu_items = [
    {
        iconImage: "skin/img/icons/icon1.svg",
        title: "Announcements",
        link: "news.html"
    },
    {
        iconImage: "skin/img/icons/icon3.svg",
        title: "Sunday School Lesson",
        link: "lessons.html"
    },
    {
        iconImage: "skin/img/icons/icon2.svg",
        title: "Birthdays",
        link: "birthdays.html"
    },
    {
        iconImage: "skin/img/icons/icon4.svg",
        title: "Activity",
        link: "activity.html"
    },
    {
        iconImage: "skin/img/icons/icon5.svg",
        title: "Gallery",
        link: "images.html?galNum=9"
    },
    {
        iconImage: "skin/img/icons/icon7.svg",
        title: "St. Stephens Choir",
        link:"choir.html"
    },
    {
        iconImage: "skin/img/icons/icon8.svg",
        title: "",
        link:""
    },
    {
        iconImage: "skin/img/icons/icon6.svg",
        title: "",
        link: ""
    }
];



var galleries = [
    
    {//0
        title:"Forecast",
        location: "skin/galleries/images/forecast/",
        name: "forecast_Page_",
        quan: 7,
        type: ".jpg",
        link: ""
    },
    {//1
        title:"Office",
        location: "skin/galleries/images/office/",
        name: "office_Page_",
        quan: 26,
        type: ".jpg",
        link:""
    },
    {//2
        title:"Multi-Purpose",
        location: "skin/galleries/images/multipurpose/",
        name: "multi_Page_",
        quan: 30,
        type: ".jpg",
        link: ""
    },
    {//3
        title:"Retail",
        location: "skin/galleries/images/shopping/",
        name: "retail_Page_",
        quan: 21,
        type: ".jpg",
        link: ""
    },
    {//4
        title:"Residential",
        location: "skin/galleries/images/residential/",
        name: "Residential_Page_",
        quan: 2,
        type: ".jpg",
        link: ""
    },
    {//5
        title:"Hotel",
        location: "skin/galleries/images/hotel/",
        name: "hotel_Page_",
        quan: 3,
        type: ".jpg",
        link: ""
    },
    {//6
        title:"Presentation",
        location: "skin/galleries/images/presentation/",
        name: "sarah_Page_",
        quan: 47,
        type: ".jpg",
        link: ""
    },
    {//7
        title: "Triangle Map",
        location: "skin/galleries/images/map/",
        name: "TriangleMap",
        quan: 1,
        type: ".jpg",
        link: "http://www.carolantic.com/pdf/TriangleMap.pdf"
    },
    {//8
        title: "32 Annual Triangle Commercial Real Estate Report",
        location: "skin/galleries/images/report/",
        name: "NA_Page_",
        quan: 20,
        type: ".jpg",
        link: "http://www.carolantic.com/pdf/NAI_Report_2017_single_pages.pdf"
    },
    {//9
        title: "GALLERY",
        location: "skin/galleries/images/gallery/",
        name: "naiImg_",
        quan: 33,
        type: ".jpg",
        link: ""
    }
        
];




//BROKER NAVIGATION ITEMS
var broker_items = [
    {
        iconImage: "skin/img/broker_images/Steve-Stroud.jpg",
        title: "E. Stephen Stroud SIOR, Chairman",
        link: "bio.html?bioNum=0"
    },
    {
        iconImage: "skin/img/broker_images/Jimmy-Barnes.jpg",
        title: "James M. Barnes SIOR, President",
        link: "bio.html?bioNum=1"
    },
    {
        iconImage: "skin/img/broker_images/Robin_Anders.jpg",
        title: "Robin Roseberry Anders SIOR",
        link: "bio.html?bioNum=2"
    },
    {
        iconImage: "skin/img/broker_images/tim-brent2.jpg",
        title: "Tim Brent Broker",
        link: "bio.html?bioNum=3"
    },
    {
        iconImage: "skin/img/broker_images/Ed_Brown.jpg",
        title: "Ed Brown SIOR, CCIM",
        link: "bio.html?bioNum=4"
    },
    {
        iconImage: "skin/img/broker_images/Whit_Brown.jpg",
        title: "Whit Brown Broker",
        link: "bio.html?bioNum=5"
    },
    {
        iconImage: "skin/img/broker_images/Joaquin-Canals.jpg",
        title: "Joaquin Canals Broker",
        link: "bio.html?bioNum=6"
    },
    {
        iconImage: "skin/img/broker_images/Gray-Creech.jpg",
        title: "Gray Creech Broker",
        link: "bio.html?bioNum=7"
    },
    {
        iconImage: "skin/img/broker_images/Scott_Hadley.jpg",
        title: "Scott Hadley Broker",
        link: "bio.html?bioNum=8"
    },
    {
        iconImage: "skin/img/broker_images/Daniel_Herring.jpg",
        title: "Daniel Herring Broker",
        link: "bio.html?bioNum=9"
    },
    {
        iconImage: "skin/img/broker_images/john-hibbits.jpg",
        title: "John Hibbits Broker",
        link: "bio.html?bioNum=10"
    },
    {
        iconImage: "skin/img/broker_images/Richard-Hibbits.jpg",
        title: "Richard Hibbits Broker",
        link: "bio.html?bioNum=11"
    },
    {
        iconImage: "skin/img/broker_images/Karah-Jennings.jpg",
        title: "Karah Jennings Broker",
        link: "bio.html?bioNum=12"
    },
    {
        iconImage: "skin/img/broker_images/Dee_Creech.jpg",
        title: 'Aldene "Dee" Creech Osborne SIOR',
        link: "bio.html?bioNum=13"
    },
    {
        iconImage: "skin/img/broker_images/Jake_Plotkin.jpg",
        title: "Jake Plotkin CCIM",
        link: "bio.html?bioNum=14"
    },
    {
        iconImage: "skin/img/broker_images/Hunter_Stewart.jpg",
        title: "Hunter Stewart MBA",
        link: "bio.html?bioNum=15"
    },
    {
        iconImage: "skin/img/broker_images/Russell_Stewart.jpg",
        title: "Russell Stewart, J.D., Broker",
        link: "bio.html?bioNum=20"
    },
    {
        iconImage: "skin/img/broker_images/Michael_Wallace.jpg",
        title: "Michael Wallace, Broker",
        link: "bio.html?bioNum=21"
    },
    {
        iconImage: "skin/img/broker_images/Jordan_Williams.jpg",
        title: "Jordan Williams Broker",
        link: "bio.html?bioNum=16"
    },
    {
        iconImage: "skin/img/broker_images/carson-wilson.jpg",
        title: "Carson Wilson Broker",
        link: "bio.html?bioNum=17"
    },
    {
        iconImage: "skin/img/broker_images/Moss_Withers.jpg",
        title: "Moss Withers MBA",
        link: "bio.html?bioNum=18"
    },
    {
        iconImage: "skin/img/broker_images/Hunt_Wyche.jpg",
        title: "Hunt Wyche Broker",
        link: "bio.html?bioNum=19",
        bio: 19
    }
];

var broker_bios = [
    {//0
        html: "<div id='middle'></div>"
    }
];





//COLORS
var locationBGColor = "e8e8ff";


skinApp();

function skinApp() {
    //Load Bio
    if (document.getElementById("bioCard")) { loadBio();}else{}
    //List Galleries
    if (document.getElementById("image-gallery-1")) { listImages(); } else { }
    //List Videos
    if (document.getElementById("videoList")) { listVideos(); } else { }
    //Launch Online
    if (document.getElementById("onlineWindow")) { launchOnlineURL(); } else { }
    //About Text
    if (document.getElementById("aboutText")) { document.getElementById("aboutText").innerHTML = about_text; } else { }
    //List Locations
    if (document.getElementById("locationList")) { listLocations(); } else { }
    //Menu Navigation
    if (document.getElementById("menuNav")) { listNavigation(); } else { }
    //List Categories
    if (document.getElementById("menuItems")) { listCategories(); } else { }
    //List Brokers
    if (document.getElementById("brokerItems")) { listBrokers(); } else { }
    //App Title
    document.getElementById("appTitle").innerHTML = app_title;
    //App Header
    document.getElementById("compassHeading").innerHTML = heading_title;
    //App Info
    document.getElementById("compassInfo").innerHTML = heading_info;
    //Copyright Text
    //document.getElementById("copyrightText").innerHTML = copyright_text;
    //List Features
    if (document.getElementById("homeFeatures")) { listFeatures(); } else { }
    
    
}


//=== Helper Functions ==========================================================================================================================================

function createStringFromTemplate(template, variables) {
    return template.replace(new RegExp("\{([^\{]+)\}", "g"), function (_unused, varName) {
        return variables[varName];
    });
}








//=== Skin Functions ============================================================================================================================================



//NAVIGATION ==================================================================================================
function listNavigation() {
    var menu_navigation = "<ul class='nav navbar-nav'>";

    for (var i = 0; i < navigation_items.length; i++) {
        var new_li = createStringFromTemplate("<li><a href='{link}'>{name}</a></li>", navigation_items[i]);
        menu_navigation = menu_navigation + new_li;
    }

    menu_navigation = menu_navigation + "</ul>";

    document.getElementById("menuNav").innerHTML = menu_navigation;
}
// ============================================================================================================











//LOCATION ==================================================================================================
function listLocations() {
    for (var i = 0; i < locs.length; i++) {
        var newLine = createStringFromTemplate('<div class="thumbnail" id="locationCard" >\
                                <iframe src="{source}" width="800" height="800" id="mapFrame" allowfullscreen style="height:200px" ></iframe>\
                                <div class="caption">\
                                    <h4 id="locTitle">{title}</h4>\
                                    <p>{address}</p>\
                                    <p>', locs[i]);
                           
        if (locs[i].link.length > 2) { newLine = newLine + createStringFromTemplate('<a href="{link}" target="_blank" class="btn btn-primary" id="btn-location">Map</a>', locs[i]) }
        if (locs[i].phone.length > 2) { newLine = newLine + createStringFromTemplate('<a href="tel:{phone}" class="btn btn-primary" id="btn-location">Call</a>', locs[i]) }
        if (locs[i].email.length > 2) { newLine = newLine + createStringFromTemplate('<a href="mailto:{email}?Subject=RCC@{title}" target="_top" class="btn btn-primary" id="btn-location">Email</a>', locs[i]) }

        newLine = newLine + '</p></div></div>';

        document.getElementById("locationList").innerHTML = document.getElementById("locationList").innerHTML + newLine;
        }
}
// ============================================================================================================











//FEATURES ==================================================================================================
function listFeatures() {

    for (var i = 0; i < home_features.length; i++) {
        //var newLine = '<div class="col-lg-12 hero-feature"><div class="thumbnail">';
        var newLine = '<div class="thumbnail" id="locationCard">';
        

        if(home_features[i].image.length > 2){
            newLine = newLine + createStringFromTemplate('<center><img src="{image}" alt=""></center>', home_features[i]);
        }

        if(home_features[i].html.length > 2){
            newLine = newLine + createStringFromTemplate('<div class="caption">{html}</div>',home_features[i]);
        }
        
        newLine = newLine + '</div></div>';
                
        document.getElementById("homeFeatures").innerHTML = document.getElementById("homeFeatures").innerHTML + newLine;
    }
}
// ============================================================================================================











//CATEGORIES ====================================================================================================
function listCategories() {

    var newLine = '';

    for (var i = 0; i < menu_items.length; i++) {
        newLine = newLine + '<div id="iconContainer">';
        if (menu_items[i].iconImage.length > 2) {
            newLine = newLine + createStringFromTemplate('<a href="{link}"><img id="iconImage" src="{iconImage}" /><a />', menu_items[i]);
        }

        if(menu_items[i].title.length > 1){
            newLine = newLine + createStringFromTemplate('<p id="iconText">{title}</p>', menu_items[i]);
        }
        newLine = newLine + '</div>';
    }

    document.getElementById("menuItems").innerHTML = document.getElementById("menuItems").innerHTML + newLine;
}
// ============================================================================================================













//BROKERS ====================================================================================================
function listBrokers() {

    var newLine = '';

    for (var i = 0; i < broker_items.length; i++) {
        newLine = newLine + '<div id="iconContainer">';
        if (broker_items[i].iconImage.length > 2) {
            newLine = newLine + createStringFromTemplate('<a href="bio.html?bioNum='+i+'"><img id="iconImage" src="{iconImage}" /><a />', broker_items[i]);
        }

        if (broker_items[i].title.length > 1) {
            newLine = newLine + createStringFromTemplate('<p id="iconText">{title}</p>', broker_items[i]);
        }
        newLine = newLine + '</div>';
    }

    document.getElementById("brokerItems").innerHTML = document.getElementById("brokerItems").innerHTML + newLine;
}
// ============================================================================================================














//ONLINE LINKS ================================================================================================
function launchOnlineURL() {

    var url = window.location.href;

     var queryString = url ? url.split('online.html?dest=')[1] : window.location.search.slice(1);

     var item = '<iframe src=';

     item = item + '"' + queryString + '" '; //"http://carolantic.com/"

     item = item + 'style="border:0px;background-color:#fff;overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>';

     document.getElementById("onlineWindow").innerHTML = item;

     //alert(item);

 }
// ============================================================================================================











//VIDEOS ==================================================================================================
function listVideos() {
    for (var i = 0; i < video_items.length; i++) {
        var newLine = '<div class="thumbnail" id="locationCard" >';
                           
        if (video_items[i].link.length > 2) { newLine = newLine + createStringFromTemplate('<video controls> <source src="{link}" > </video >', video_items[i]) }
        if (video_items[i].html.length > 2) { newLine = newLine + createStringFromTemplate('<div id="homeFeatures">{html}</div>', video_items[i]) }

        newLine = newLine + '</div>';

        document.getElementById("videoList").innerHTML = document.getElementById("videoList").innerHTML + newLine;
        }
}
// ============================================================================================================











//IMAGES =======================================================================================================================
function listImages(){

    var url = window.location.href;
    var dirNum = url ? url.split('images.html?galNum=')[1] : window.location.search.slice(1);
    var num = 1;
    var newLine = "";
    if (galleries[dirNum].link == "") {

    } else {
        //newLine = '<div><a class="btn btn-primary btn-large" href="' + galleries[dirNum].link + '">DOWNLOAD</a></div><br /><br />';
    }
    var title = "";

    for (var i = 0; i< galleries[dirNum].quan; i++){

        var link = String(galleries[dirNum].location + galleries[dirNum].name + num + galleries[dirNum].type);

        newLine = newLine + '<img id="pdfImg" src="'+link+'" data-high-res-src="'+link+'" alt="" class="gallery-items">';
 
        if(num +1 != galleries[dirNum].quan + 1){ num++;}

        title = galleries[dirNum].title;

    }

    document.getElementById("setTitle").innerHTML = title;

    document.getElementById("image-gallery-1").innerHTML = document.getElementById("image-gallery-1").innerHTML + newLine;
    
}
//================================================================================================================================











//IMAGES ===============================================================================================================================
function loadBio() {

    var url = window.location.href;
    var dirNum = url ? url.split('bio.html?bioNum=')[1] : window.location.search.slice(1);
    //var dirImg = broker_items[dirNum].link.split("bio.html?bioNum=")[1];
    //var num = 1;

    document.getElementById("nameTxt").innerHTML = broker_items[dirNum].title;
    document.getElementById("portraitTxt").innerHTML = '<img id="bioImage" src="' + broker_items[dirNum].iconImage + '" />';
    document.getElementById("bioTxt").innerHTML = broker_bios[dirNum].html;


}
//======================================================================================================================================




/*
if (document.getElementById("splashScreen")) {
    setTimeout(function () {
        $('#splashScreen').fadeOut('fast');
        window.location.href = "home.html";
    }, 2000); // <-- time in milliseconds
}else{}
*/
