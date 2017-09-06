
//TEXT - STRINGS

var app_title = "";

var copyright_text = "NAI Carolanitc 2017";

var heading_title = "";

var heading_info = '<img class="headImage" src="skin/img/header_image.svg" alt="">'+
    //'<b><font color="#03edff">32nd Annual</font></b> Triangle Commercial Real Estate Report<br><br>' +
    '<a class="btn btn-default" href="menu.html">CATEGORIES</a>' +
    '<a class="btn btn-default" href="about.html">ABOUT</a>' +
    '<a class="btn btn-primary btn-large" href="images.html?galNum=8">ANNOUNCEMENTS</a>';

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
               <center><video controls =""><source src="skin/video/2017-NAI-ConferenceOpener.mp4" /></video></center>'
    },
    {
        image: "",
        html: '<h1 id="leadTitle">Weekly Services</h1>\
               <p><b>Sunday</b></p>\
               <p>Sunday School   : 10:00AM-11:00AM </p>\
               <p>Morning Worship : 11:00AM</p>\
               <p><b>Wednesday</b></p>\
               <p>Bible Study   : 7:00am-9:00PM </p>\
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
    },
    {
        link: "skin/video/NAI_Carolantic_Overview.mp4",
        html: '<p>NAI Carolantic Overview</p>'
    }/*,
    {
        link: "skin/video/2016-NAI-Carolantic-Conference.mp4",
        html: '<p>NAI Carolantic Conference</p>'
    }*/,
    {
        link: "skin/video/2017-NAI-Brokers.mp4",
        html: '<p>NAI Brokers</p>'
    },
    {
        link: "skin/video/2017-NAI-Sponsor-Reel.mp4",
        html: '<p>2017 NAI Sponsor Reel</p>'
    },
    {
        link: "",//"skin/video/2017-Dee-Creech-Osborne.mp4",
        html: '<center><br/><p>Dee Creech-Osborne</p><div><a class="btn btn-primary btn-large" href="http://www.carolantic.com/videos/2017-Dee-Creech-Osborne.mp4">GO TO ONLINE VIDEO</a></div></center><br/>'
    },
    {
        link: "",//"skin/video/2017-Ed-Brown.mp4",
        html: '<center><br/><p>Ed Brown</p><div><a class="btn btn-primary btn-large" href="http://www.carolantic.com/videos/2017-Ed-Brown.mp4">GO TO ONLINE VIDEO</a></div></center><br/>'
    },
    {
        link: "", //"skin/video/2017-Hunter-Stewart.mp4",
        html: '<center><br/><p>Hunter Stewart</p><div><a class="btn btn-primary btn-large" href="http://www.carolantic.com/videos/2017-Hunter-Stewart.mp4">GO TO ONLINE VIDEO</a></div></center><br/>'
    },
    {
        link: "",//"skin/video/2017-Moss-Withers.mp4",
        html: '<center><br/><p>Moss Withers</p><div><a class="btn btn-primary btn-large" href="http://www.carolantic.com/videos/2017-Moss-Withers.mp4">GO TO ONLINE VIDEO</a></div></center><br/>'
    },
    {
        link: "", //"skin/video/2017-Robin-Roseberry-Anders.mp4",
        html: '<center><br/><p>Robin Roseberry-Anders</p><div><a class="btn btn-primary btn-large" href="http://www.carolantic.com/videos/2017-Robin-Roseberry-Anders.mp4">GO TO ONLINE VIDEO</a></div></center><br/>'
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
        iconImage: "skin/img/icons/icon2.svg",
        title: "Sunday School Lesson",
        link: "lessons.html"
    },
    {
        iconImage: "skin/img/icons/icon3.svg",
        title: "Birthdays",
        link: "birthdays.html"
    },
    {
        iconImage: "skin/img/icons/icon4.svg",
        title: "Activity",
        link: "http://carolantic.com/featured-properties.html"
    },
    {
        iconImage: "skin/img/icons/icon5.svg",
        title: "Gallery",
        link: "images.html?galNum=9"
    },
    {
        iconImage: "skin/img/icons/icon6.svg",
        title: "",
        link:"http://carolantic.com/press-releases.html"
    },
    {
        iconImage: "skin/img/icons/icon6.svg",
        title: "",
        link:"brokers.html"
    },
    {
        iconImage: "skin/img/icons/icon6.svg",
        title: "",
        link: "images.html?galNum=9"
    }/*,
    {
        iconImage: "skin/img/icons/video.svg",
        title: "32nd Annual Videos",
        link:"videos.html"
    },
    {
        iconImage: "skin/img/icons/forecast.svg",
        title: "32nd Annual Forecast", 
        link: "images.html?galNum=0"
    },
    {
        iconImage: "skin/img/icons/presentation.svg",
        title: "32nd Annual Presentation",
        link:"images.html?galNum=6"
    },
    {
        iconImage: "skin/img/icons/office.svg",
        title: "Office<br>",
        link:"images.html?galNum=1"
    },
    {
        iconImage: "skin/img/icons/multipurpose.svg",
        title: "Multipurpose",
        link:"images.html?galNum=2"
    },
    {
        iconImage: "skin/img/icons/retail.svg",
        title: "Retail", 
        link: "images.html?galNum=3"
    },
    {
        iconImage: "skin/img/icons/residential.svg",
        title: "Residential", 
        link: "images.html?galNum=4"
    },
    {
        iconImage: "skin/img/icons/hotel.svg",
        title: "Hotel", 
        link: "images.html?galNum=5"
    }*/
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
        html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' --><span class='copy_header2'>E. Stephen Stroud, SIOR, Chairman</span><br />\
                <span class='body_copy'><a href='mailto:sstroud@naicarolantic.com' class='in_copy_link'>sstroud@naicarolantic.com</a></span><br />\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>One of the most highly regarded commercial real estate professionals in North Carolina, Steve Stroud began his real estate career in 1965, primarily brokering commercial/industrial land and buildings. His list of developments include the expansive Highwoods Office Park, the Arbors Complex, One North Commerce Center, the Rex Drive Office Complex, the Crossroads Complex in Cary and the original assemblage of property around RDU Airport.</p>\
                <p class='body_copy'>While assembling and developing major industrial and office tracts in Wake County, Mr. Stroud founded Carolantic Realty over forty years ago, and has since built a diverse team of professionals providing all the specialties of a full-service real estate company. Mr. Stroud’s expertise as a real estate broker and developer has now helped make NAI Carolantic the “most called and most quoted” brokerage firm in the commercial real estate marketplace. The legal, financial, journalism, accounting and real estate communities all look to NAI Carolantic for advice and information.</p>\
                <p class='body_copy'>In addition to Mr. Stroud’s real estate activities, he is active in various civic, business and community development activities. A close friend has said of him, “What makes him unique is his unwavering effort to give back to the community.”</p>\
                <p class='body_copy'>In 1987, Mr. Stroud became President of the North Carolina Railroad Company. At that time the major spine railroad was divided into two ownerships: the North Carolina Railroad and the Atlantic and North Carolina Railroad. For over 100 years people have recognized the importance of merging the two railroads, but without any success. However, during Stroud’s tenure as President, the merger was finally accomplished for the benefit of all citizens in North Carolina. Mr. Stroud has always been an avid supporter of NC State, recognizing its importance to the Triangle community and the State of North Carolina. In addition to being past-president of the Wolfpack Club, Mr. Stroud was a founding member of the Board of Advisors for the newly formed College of Management for NC State. This college has grown very quickly both in student population and stature and is now ranked among the top business schools in North Carolina and the Nation.</p>\
                <p class='body_copy'>In 1985, Mr. Stroud was asked to be Chairman of the Coliseum Committee to study the feasibility of a major events facility in Raleigh. Many would have given up after that experience, but his unwavering commitment to the community led to the creation of the Centennial Authority, which was established by the NC Legislature. In 1995, Mr. Stroud was elected as Chairman of the Authority with the mandate to design and build what was to be known as the Raleigh Entertainment and Sports Arena. He was also instrumental in attracting and convincing the Hartford Whalers, now known as the Carolina Hurricanes, to relocate to this area.</p>\
                <p class='body_copy'>Now completed, the newly named PNC Arena is home to the NC State basketball program, and the NHL hockey team, the Carolina Hurricanes. This facility’s success has exceeded the dreams of those who supported it. Few would have been willing to take on the task of leading this 13-year effort, but Mr. Stroud did, managing to pull off the deal which will forever change the face of the Triangle area, boosting economic development for years to come. </p>\
                <p class='copy_subhead_red'>Professional Designations:</p>\
                <p class='body_copy'><strong>Society of Industrial &amp; Office Realtors (SIOR): </strong>The SIOR designation is awarded to individuals who have met rigorous requirements based on their outstanding knowledge of the commercial real estate industry, professional and educational background and adherence to ethical standards. There are 2,830 active SIOR members in the US, of which 92 are in North Carolina.</p>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <p class='body_copy'><strong>CoreNet Global:</strong> CoreNet Global is a dynamic, fully developed global network of professionals who create strategic value for their enterprises by advancing knowledge, connecting people and promoting personal excellence. </p>\
                <p class='copy_subhead_red'>Awards and Recognition (partial listing):</p>\
                <p class='body_copy'><strong>2016 CEO of the Year</strong>,  selected as one of 20 top CEOs in the Triangle by Triangle Business Journal.</p>\
                <p class='body_copy'><strong>2012 Triangle’s 100 Most Influential Business Leaders</strong>,  as selected by Triangle Business Journal.</p>\
                <p class='body_copy'><strong>2011 NAI Global Deal of the Year:</strong> Presented to Mr. Stroud and the Special Assets team for selling over $600 million in notes for the year for a major NC bank.</p>\
                <p class='body_copy'><strong>2012 and 2011 NAI Global Elite:</strong> Awarded for being a top performer and top producer based on production.</p>\
                <p class='body_copy'><strong>2011 &amp; 2010 NAI Global Eagle Award</strong>:  Presented in recognition of performance that best exemplified the “Right Stuff”: a combination of leadership, capital and resources; commitment to quality; the desire and energy to grow; and share the NAI Global vision for excellence in commercial real estate services.</p>\
                <p class='body_copy'><strong>2011 Trendsetter Award:</strong> Presented by the Triangle Commercial Real Estate Women (TCREW) at the Champion Awards to a company who has taken a risk in commercial real estate in an innovative way which was later adopted by many others - the Annual Triangle Commercial Real Estate Conference. The event has spawned many smaller events by competitors and business partners.</p>\
                <p class='body_copy'><strong>2010 Legacy Leader Award:</strong> Presented by Triangle Business Journal. Part of the inaugural class of 15 award winners.</p>\
                <p class='body_copy'><strong>2010 Powerhouse Award:</strong> Presented by the Triangle Commercial Real Estate Women (TCREW) at the Champion Awards to an individual who has demonstrated extraordinary leadership and/or achieved extraordinary work volume or value.</p>\
                <p class='body_copy'><strong>2010 Largest Land Deal of the Decade:</strong> Presented by Triangle Business Journal at their annual Space Awards.</p>\
                <p class='body_copy'><strong>2010 Top 50 Entrepreneurs in the Triangle:</strong> Presented by Business Leader Media.</p>\
                <p class='body_copy'><strong>2009 Mover &amp; Shaker:</strong> Presented by Business Leader magazine honoring rising leaders in the Triangle.</p>\
                <p class='body_copy'><strong>2008 Realtor of the Year:</strong> Presented by the Triangle Commercial Association of Realtors at the Frontier Awards.</p>\
                <p class='body_copy'><strong>Triangle Business Leader Magazine Impact Leader Award 2008:</strong> Presented for Triangle leadership.</p>\
                <p class='body_copy'>R<strong>aleigh Downtown Magazine’s 32 Most Influential People 2008:</strong> Leaders chosen for their vision and commitment to improving the Downtown Raleigh area.</p>\
                <p class='body_copy'><strong>Patrick Henry Award 2006:</strong> Award presented to individuals in positions of great responsibility who have distinguished themselves with outstanding and exceptional service, presented by the National Guard Association.</p>\
                <p class='body_copy'><strong>Pillar Award 2006:</strong> Award presented to an Outstanding Commercial Real Estate Broker, presented by the Triangle Business Journal at their Annual Space Awards.</p>\
                <p class='body_copy'><strong>Chairman’s Community Impact 2006</strong>: Award given to an individual whose efforts have had a lasting impact on the Triangle sports community, presented by the Sports Council at the Evening of Champions.</p>\
                <p class='body_copy'><strong>Pinnacle Award 2004: </strong>Presented to NAI Carolantic Realty, Inc. &amp; Steve Stroud for Staying Power, Business Growth, Community Involvement, and Innovation, presented by the Greater Raleigh Chamber of Commerce.</p>\
                <p class='body_copy'><strong>A.E. Finley Award given for Distinguished Community Service 2001:</strong> Presented by the Greater Raleigh Chamber.</p>\
                <p class='body_copy'><strong>Impact Award 2000: </strong>Given to a professional who has made the greatest contribution to or influence on the commercial real estate industry, presented by Triangle Commercial Real Estate Women (TCREW).</p>\
                <p class='body_copy'><strong>Order of the Long Leaf Pine 2000:</strong> Represents the highest award given to a citizen of the State, presented by former Governor James B. Hunt.</p>\
                <p class='body_copy'><strong>Distinguished President’s Award 1976:</strong> Presented by Optimist International.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors:</strong> Frontier Awards: Million Dollar Sales Club &amp; Million Dollar Land Sales for several years; 2009 Sales Transaction of the Year</p>\
                <p class='body_copy'><strong>SIOR Carolinas Chapter 2005-2006:</strong> Largest Industrial/Land Transaction for year. </p>\
                <p class='copy_subhead_red'>A partial listing of Mr. Stroud’s professional and community commitments include:</p>\
                <ul>\
                  <li class='body_copy'> <strong>Member, First Tennesse Bank, N.A. Triangle Advisory Board,</strong> 2015-Present<br />\
                  </li>\
                  <li class='body_copy'><strong>Former Chairman, TrustAtlantic Financial Corporation,</strong> 2006 – 2015<br />\
                  </li>\
                  <li class='body_copy'><strong>Member, Board of Directors, NC State Student Aid Association</strong> (Wolfpack Club) 2012-Present<br />\
                  </li>\
                  <li class='body_copy'><strong>Past President, Board of Directors, North Carolina State University Student Aid Association</strong><br />\
                  </li>\
                  <li class='body_copy'><strong>Member, WakeMed Foundation Advisory Council,</strong> 2008-present<br />\
                  </li>\
                  <li class='body_copy'><strong>Member, Centennial Authority,</strong> 1995 – Present<br />\
                  </li>\
                  <li class='body_copy'><strong>Past Chairman of the Centennial Authority, </strong>1995-December, 2005.<br />\
                  </li>\
                  <li class='body_copy'><strong>Board of Advisors for the Poole College of Management, NC State University, </strong>1994-Present<br />\
                  </li>\
                  <li class='body_copy'> <strong>Member Wake County’s Blue Ribbon Committee on the Future of Wake County,</strong> 2005-2006<br />\
                  </li>\
                  <li class='body_copy'><strong>Executive Committee, Board of Directors, NC Citizens for Business &amp; Industry,</strong> 2002-Spring 2006<br />\
                  </li>\
                  <li class='body_copy'> <strong>Executive Board member, NCFREE,</strong> 2000-2008<br />\
                  </li>\
                  <li class='body_copy'><strong>Co-Chair of Silver Anniversary Committee for NCFREE,</strong> to raise $1,000,000<br />\
                  </li>\
                  <li class='body_copy'><strong>Member, Board of Directors, Greater Raleigh Chamber of Commerce, </strong>1989-1992<br />\
                  </li>\
                  <li class='body_copy'><strong>President, North Carolina Railroad Company, </strong>1987-1993<br />\
                  </li>\
                  <li class='body_copy'><strong>Member, Board of Directors and Executive Committee for NC Amateur Sports Association</strong> (1987 Olympic Festival)<br />\
                  </li>\
                  <li class='body_copy'><strong>Chairman, Coliseum Committee of 1985,</strong> to study feasibility of a major events facility in Raleigh<br />\
                  </li>\
                  <li class='body_copy'><strong>Vice Chairman, North Carolina Economic Development Board,</strong> 1985-1991<br />\
                  </li>\
                  <li class='body_copy'><strong>Member, North Carolina Transportation Task Force</strong><br />\
                  </li>\
                  <li class='body_copy'><strong>Raleigh Planning Commission,</strong> 1976-77<br />\
                  </li>\
                  <li class='body_copy'><strong>Member of the Society of Industrial and Office Realtors;</strong> Carolinas Chapter of SIOR since 1976<br />\
                  </li>\
                  <li class='body_copy'><strong>Member of the Optimist Club</strong> of Raleigh since 1967; President, 1975-76<br />\
                  </li>\
                  <li class='body_copy'><strong>Member of the Raleigh Board of Realtors</strong> since 1965                </li></ul><!-- InstanceEndEditable -->\
            </div>\
        </div>"
    }, 
    {//1
        html: "<div id='middle'>\
             <!-- InstanceBeginEditable name='middle_copy' --><span class='copy_header2'>James M. Barnes, SIOR, President</span><br />\
                <span class='body_copy'><a href='mailto:jbarnes@naicarolantic.com' class='in_copy_link'>jbarnes@naicarolantic.com</a></span><br />\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>Jimmy Barnes has over 27 years of commercial real estate experience exclusively in the Raleigh, Research Triangle area of North Carolina. The last 25 years have been with NAI Carolantic Realty. He was named President of the Company in 2001. A specialist in all areas of leasing and sales, Mr. Barnes has been involved in over $100 million of transactions just over the last few years with total transactions exceeding over one million square feet. He provides exclusive tenant, buyer and landlord representative services to local, corporate and investment companies, and has represented large Class “A” office developments for investors in Cary, Downtown Raleigh, North Raleigh and the Research Triangle Park area. Mr. Barnes is a member of the Special Assets Division of NAI Carolantic, formed to help clients with the disposition of troubled assets.<br />\
                  <br />\
                  Recognized as one of the top real estate brokers in the Triangle area, Mr. Barnes is often approached by the media for his opinion on the local market. Within NAI Carolantic, his responsibilities include continued project administration, client development, and consulting. A skilled public speaker, he is also well known for having led NAI Carolantic’s Annual Conference since 2002. He also serves on the NAI GLobal Leadership Board as Secretary.</p>\
                <p class='copy_subhead_red'>Education</p>\
                <p class='body_copy'>Awarded a degree in Business Administration from Appalachian State University, Boone, NC.</p>\
                <p class='copy_subhead_red'>Professional Designations</p>\
                <p class='body_copy'><strong>Society of Industrial &amp; Office Realtors (SIOR):</strong>Specialist, Office Real Estate: The SIOR designation is awarded to individuals who have met rigorous requirements based on their outstanding knowledge of the commercial real estate industry, professional and educational background and adherence to ethical standards. There are 2,830 active SIOR members in the US, of which 92 are in North Carolina.</p>\
                <p class='copy_subhead_red'>Select Client List</p>\
                <ul>\
                  <li class='body_copy'>Campbell Law School<br />\
                  </li>\
                  <li class='body_copy'>Progress/Duke Energy</li>\
                  <li class='body_copy'>FAISON Capital Advisors<br />\
                  </li>\
                  <li class='body_copy'>Branch Banking &amp; Trust (BB&amp;T)<br />\
                  </li>\
                  <li class='body_copy'>Wells Fargo<br />\
                  </li>\
                  <li class='body_copy'>CBC America Corp.</li>\
                  <li class='body_copy'>Autism Society of North Carolina<br />\
                  </li>\
                  <li class='body_copy'>Williams Realty &amp; Building Corp.<br />\
                  </li>\
                  <li class='body_copy'>Weston Parkway TIC Group<br />\
                  </li>\
                  <li class='body_copy'>CIII Capital Partners<br />\
                  </li>\
                  <li class='body_copy'>JPB Holdings<br />\
                  </li>\
                  <li class='body_copy'>Select banks</li>\
                </ul>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global: </strong>Mr. Barnes serves on the NAI Global Leadership Board as Secretary. The firm has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.<br />\
                  <strong><br />\
                    Triangle Commercial Association of Realtors (TCAR): </strong>An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <p class='body_copy'><strong>CoreNet Global:</strong> CoreNet Global is a dynamic, fully developed global network of professionals who create strategic value for their enterprises by advancing knowledge, connecting people and promoting personal excellence.</p>\
                <p class='body_copy'><strong>Appalachian State University Board of Trustees:</strong> Founding member and former Chair of the Appalachian State University Board of Visitors, and currently serves on the Board of Trustees as Secretary.</p>\
                <p class='body_copy'><strong>Greater Raleigh Chamber of Commerce Board of Directors: </strong>Member &amp; Past Chair, Economic Development Board.</p>\
                <p class='body_copy'><strong>Boy Scouts Occoneechee Council:</strong> Council Board Member; Past Chair of the Friends of Scouting Breakfast event, Finance Committee Member.</p>\
                <p class='body_copy'><strong>Paragon Bank:</strong> Member of Bank Advisory Board. </p>\
                <p class='copy_subhead_red'>Awards</p>\
                <p class='body_copy'><strong>National Association of Realtors:</strong> 2012 National Commercial Award for outstanding achievement in the commercial real estate industry.</p>\
                <p class='body_copy'><strong>Commercial Realtor of the Year, 2011:</strong> Named Commercial Realtor of the Year by the Triangle Commercial Association of Realtors</p>\
                <p class='body_copy'><strong>Million Dollar Clubs/Triangle Commercial Association of Realtors:</strong> Million Dollar Sales Club in 2005, 2008, 2009 &amp; 2015; Million Dollar Office Leasing Club in 2005, 2006, 2007, 2008, 2009 &amp; 2011. NAI Global Elite: Top Performer by NAI Global based on production in 2008, 2010, 2011 &amp; 2012.</p>\
                <p class='body_copy'><strong>NAI Global Deal of the Year:</strong> Presented in 2011 to the Special Assets team for selling over $600 million in notes for the year for a major NC bank.</p>\
                <p class='body_copy'><strong>NAI Global Eagle Award:</strong> Presented to the firm in 2010 and 2011 in recognition of performance that best exemplified the “Right Stuff”: a combination of leadership, capital and resources; commitment to quality; the desire and energy to grow; and share the NAI Global vision for excellence in commercial real estate services.</p>\
                <p class='body_copy'><strong>CoStar Power Broker:</strong> Designated as a Power Broker by CoStar in 2004, 2005, 2006, 2007. 2008, 2009, 2011 &amp; 2013.</p>\
                <p class='body_copy'><strong>Mover &amp; Shaker:</strong> Presented by Business Leader magazine in 2009 honoring rising leaders in the Triangle.</p>\
                <p class='body_copy'>Trailblazer Award: One of five awarded the Trailblazer Award in 2008 presented by Triangle Commercial Association of Realtors.</p>\
                <p class='body_copy'>Best Professional Commercial Real Estate Service Award: Presented in 2007 by Triangle Commercial Real Estate Women (TCREW). </p>\
                <!-- InstanceEndEditable -->\
            </div>\
        </div>"

       }, {//2
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
            <span class='copy_header2'>Robin Roseberry Anders, SIOR</span><br />\
              <a href='mailto:randers@naicarolantic.com'><span class='in_copy_link'>randers@naicarolantic.com</span></a>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Robin Roseberry Anders joined NAI Carolantic Realty in late 2007 after ten years as a Senior Leasing Representative with the real estate investment trust, Highwoods Properties, Inc. With in-depth experience throughout the Research Triangle area of North Carolina, Ms. Anders is directly responsible for transactions totaling more than $259 million and exceeding 2.68 million square feet. A specialist in leasing and sales with a special focus on science and technology, Ms. Anders provides exclusive representation services to local, corporate and investment companies.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>University of North Carolina at Chapel Hill: Bachelor of Science, Biology, Minor in Chemistry - 1993</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'>Capital Bank<br />\
              </li>\
              <li class='body_copy'>Flexogenix<br />\
              </li>\
              <li class='body_copy'>3D Systems<br />\
              </li>\
              <li class='body_copy'>Clinipace Worldwide<br />\
              </li>\
              <li class='body_copy'>Campbell University<br />\
              </li>\
              <li class='body_copy'>Affordable Care<br />\
              </li>\
              <li class='body_copy'>Specialists in Plastic Surgery<br />\
              </li>\
              <li class='body_copy'>TrustAtlantic Bank<br />\
              </li>\
              <li class='body_copy'>Economic Development Partnership of NC<br />\
                </li>\
              <li class='body_copy'>BioCryst Pharmaceuticals<br />\
                </li>\
              <li class='body_copy'>Associates in Women’s Health<br />\
                </li>\
              <li class='body_copy'>Research Triangle Regional Partnership<br />\
                </li>\
              <li class='body_copy'>Edge Office<br />\
                </li>\
              <li class='body_copy'>Waste Zero<br />\
                </li>\
              <li class='body_copy'> LRC Properties<br />\
                </li>\
              <li class='body_copy'> Mangum Development<br />\
                </li>\
              <li class='body_copy'>Wexford Science &amp; Technology</li>\
            </ul>\
            <p class='body_copy'> While representing area landlords, Ms. Anders completed transactions with such tenants as Intel, Microsoft, Paychex, BioStratum, GlaxoSmithKline, ICON Clinical Research, Extreme Networks, Quintiles Transnational, Computer Sciences Corporation, Infineon Technologies, GSA/Center for Disease Control and NIEHS.</p>\
            <p class='copy_subhead_red'>Professional Designations:</p>\
            <p class='body_copy'><strong>Society of Industrial &amp; Office Realtors (SIOR):  </strong>Specialist, Office Real Estate: The SIOR designation is awarded to individuals who have met rigorous requirements based on their outstanding knowledge of the commercial real estate industry, professional and educational background and adherence to ethical standards. There are 2,830 active SIOR members in the US, of which 92 are in North Carolina.</p>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:</strong> Chairman, Office Council. Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> Board member. An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>Triangle Area Office Building Association (TRAOBA):</strong> Board member. An organization established to exert a beneficial influence upon matters affecting the office leasing industry, promote professionalism and continuing education and provide opportunities for members to exchange views and information on topics of common interest.</p>\
            <p class='body_copy'><strong>Band Together: </strong>Advisory Board. A nonprofit that uses live music as a platform for social change. Triangle Commercial Real Estate Women (TCREW): A network of area commercial real estate professionals that presents opportunities for leadership training, professional development and personal growth.            </p>\
            <p class='copy_subhead_red'>Awards:</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors Frontier Awards:</strong> Million Dollar Office Leasing Club in 2008, 2009, 2011, 2012, 2013 &amp; 2016; 2009 Million Dollar Sales Club; and 2013 Lifetime Million Dollar Office Leasing Club.</p>\
            <p class='body_copy'><strong>Best Professional Commercial Real Estate Service Award:</strong> Presented at the 2010 Champion Awards by Triangle Commercial Real Estate Women (TCREW) to an individual who provides the best professional commercial real estate service, with consideration for industry knowledge, leadership ability, negotiating skills, work ethic and creativity.</p>\
            <p class='body_copy'><strong>Triangle Business Journal: </strong>2004 Recipient of the “40 Under 40” Leadership Award; 2003 Top Office Lease - 2nd Place, Real Estate Deal of the Year Awards</p>\
            <p class='body_copy'><strong>Leadership Triangle:</strong> A non-profit advancing leadership capacity to foster regional awareness and cooperation in the Triangle - 1999 Graduating Class</p>\
            <p class='body_copy'><strong>Movers &amp; Shakers: Movers &amp; Shakers: </strong>Awarded to up and coming business leaders in the Triangle by Business Leader Media in 2010. </p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {//3
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' --> <span class='copy_header2'>Tim Brent, Broker</span><br />\
                <a href='mailto:tbrent@naicarolantic.com'><span class='in_copy_link'>tbrent@naicarolantic.com</span></a>\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>Tim Brent, former NHL hockey player, recently joined NAI Carolantic to pursue his longstanding interest in commercial real estate brokerage. His decision was the culmination of his involvement in various real estate investments over the past several years, including an investment/land transaction through NAI Carolantic that left him impressed by the team’s knowledge and professionalism.</p>\
                <p class='body_copy'>Mr. Brent will focus primarily on investment sales and leasing working in conjunction with Chairman, Steve Stroud, SIOR.                </p>\
                <p class='copy_subhead_red'>Background</p>\
                <p class='body_copy'>Born and raised in Cambridge Ontario, Canada, Mr. Brent played hockey starting at age four, and moved up to play in Major Junior Hockey at the age of 16. He was drafted in 2002 to play for the Anaheim Ducks and continued to play professional hockey for 12 years, ultimately representing Canada in three different world hockey championship tournaments. As Captain of Team Canada in 2002, he successfully led his team to win a Gold Medal in the Czech Republic. In 2004, he was Assistant Captain of the Canadian team when they won a Silver Medal in Helsinki, Finland.</p>\
                <p class='body_copy'>During his hockey career, Mr. Brent played for the Anaheim Ducks, Pittsburgh Penguins, Chicago Blackhawks, Toronto Maple Leafs and the Carolina Hurricanes. In the AHL, he played for the Cincinnati Mighty Ducks, Portland Pirates, Wilkes Barre/Scranton Penguins, Rockford Ice Hogs, Toronto Marlies and the Lehigh Valley Phantoms. He also spent two seasons abroad playing in Magnitogorsk, Russia where his team won the Russian (KHL) Championship known as the Gagarin Cup.</p>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {//4
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
            <p><span class='copy_header2'>Ed Brown, SIOR, CCIM</span><span class='body_copy'><br />\
            <a href='mailto:ebrown@naicarolantic.com' class='in_copy_link'>ebrown@naicarolantic.com<br />\
            <br />\
            </a></span>\
              <span class='copy_subhead_red'>Career Summary</span></p>\
            <p><span class='body_copy'>With over 30 years in the commercial real estate business in Wake, Durham and surrounding counties, Mr. Brown deals extensively in industrial/flex/R&amp;D facilities and land. He works closely with landlords and sellers to develop and implement effective marketing plans for a wide variety of commercial properties. Mr. Brown also has extensive experience providing exclusive tenant and buyer representation services.</span>            </p>\
            <p class='body_copy'><span class='copy_subhead_red'>Education</span></p>\
            <p class='body_copy'>Mr. Brown earned a BS degree at the University of North Carolina at Chapel Hill while on a football scholarship.</p>\
            <p class='body_copy'><span class='copy_subhead_red'>Professional Designations</span></p>\
            <p class='body_copy'><strong>Society of Industrial &amp; Office Realtors (SIOR):</strong> Industrial Specialist: The SIOR designation is awarded to individuals who have met rigorous requirements based on their outstanding knowledge of the commercial real estate industry, professional and educational background and adherence to ethical standards. There are 2,830 active SIOR members in the US, of which 92 are in North Carolina.</p>\
            <p class='body_copy'><strong>Certified Commercial Investment Member (CCIM):</strong> Over 240 hours of graduate level class work, transaction documentation and comprehensive examination are required to achieve the CCIM designation. Of 125,000 commercial real estate practitioners nationwide, only 7,900 hold the CCIM designation. Mr. Brown achieved his designation in 1988.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'><strong>Alcatel:  </strong>Represented Alcatel in selling their 232,000 square-foot R&amp;D/Manufacturing facility and in locating a 90,000 square-foot Class ‘A’ office space to lease in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Keystone Corporation:</strong> Represented Keystone in marketing and leasing over 600,000 square feet of class ‘A’ warehouse space and 1,200,000 square feet of R&amp;D/Office/Flex space in Durham, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Lockheed Martin:</strong> Represented Lockheed Martin in securing a 12,000 square-foot Class ‘A’ office space in Research Triangle Park, NC.<br />\
              </li>\
              <li class='body_copy'><strong>International Paper:</strong> Represented the client in selling a 168,000 square-foot manufacturing plant in Durham, NC.<br />\
              </li>\
              <li class='body_copy'><strong>John Deere:</strong> Represented John Deere in a statewide search for a distribution center. Finalized a lease for 320,000 square feet in Benson, NC.<br />\
                </li>\
              <li class='body_copy'><strong>Sanmina-SCI:</strong> Represented client in leasing a 450,000 square-foot manufacturing/distribution center in RTP, NC.<br />\
                </li>\
              <li class='body_copy'><strong>Liberty Property Trust:</strong> Represented client in acquiring a 536,000 square-foot portfolio.<br />\
                </li>\
              <li class='body_copy'><strong>STAG Industrial:</strong> Represented client in industrial investment purchase of 290,000 square feet in Creedmoor, NC and 383,500 square feet in Mebane, NC.<br />\
                </li>\
              <li class='body_copy'><strong>Ferguson:</strong> Represented client in leasing multiple warehouse and flex facilities.</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>North Carolina Economic Developers Association:</strong> State-wide organization of economic development professionals involved in the recruiting and retention of companies.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR): </strong>An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>CoreNet Global: </strong>CoreNet Global is a dynamic, fully developed global network of professionals who create strategic value for their enterprises by advancing knowledge, connecting people and promoting personal excellence.</p>\
            <p class='copy_subhead_red'>Awards</p>\
            <p class='body_copy'><strong>2015 Realtor of the Year: </strong>Awarded by the Triangle Commercial Association of Realtors, this is the highest honor given by the association and indicates the recipient has the highest principles, dedication to the Code of Ethics of the Association and most importantly, has the principals of good real estate practice.</p>\
            <p class='body_copy'><strong>NAI Global Elite: </strong>Awarded by NAI Global for being a top performer and top producer based on production in 2014 &amp; 2009.</p>\
            <p class='body_copy'><strong>Movers &amp; Shakers:</strong> Awarded in 2010 to up and coming business leaders in the Triangle, by Business Leader Media.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> Frontier Awards: Awarded the Lifetime Million Dollar Sales Club and Lifetime Million Dollar Industrial Leasing Club. Also awarded the following: Million Dollar Sales Club in 2005, 2006, 2007, 2008, 2009, 2010, 2011 &amp; 2012; Million Dollar Office Leasing Club in 2005 &amp; 2006; Million Dollar Industrial Leasing Club in 2008, 2009, 2010, 2011, 2012, 2013 &amp; 2015; Million Dollar Land Sales Club for 2010. One of five to be given the Trailblazer Award in 2008.</p>\
            <p class='body_copy'><strong>Carolinas Chapter of SIOR:</strong> Received award for 2005-2006 Largest Industrial/Land Transaction. Received awards in 2002 and in 2004 for Largest Dollar Value Referral, Single Transaction. Also received the 2002 award for The Largest Dollar Value Transaction Between Two SIOR Brokers in the Carolinas.</p>\
            <p class='body_copy'><strong>Triangle Business Journal’s Space Awards:</strong> Received 2005 Top Real Estate Sales award.</p>\
            <p class='body_copy'><strong>Triangle Commercial Real Estate Women (TCREW):</strong> Received 2001 “Best Professional Service” Award at the annual TCREW Champion Awards.</p>\
            <p class='body_copy'><strong>The Business Journal’s REDY Awards:</strong> Received awards for Top Industrial Lease (Third Place) in 2000 and in 2002. Received award for Top Industrial Lease (First Place) in 1998.</p>\
            <p class='body_copy'><strong>CoStar Group: </strong>Designated as a Top Power Broker in 2003, 2004, 2005, 2006, 2008, 2010, 2011, 2012, 2013, 2014 &amp; 2015.              </p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
            <span class='copy_header2'><strong>Whit Brown, Broker</strong></span><br class='copy_header2' />\
            <a href='mailto:wbrown@naicarolantic.com' class='in_copy_link'>wbrown@naicarolantic.com</a>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Whit Brown joined NAI Carolantic in 2013 after working in the Real Estate Department for General Parts International, (CARQUEST). At General Parts, he worked closely with the real estate development, property management and facilities management teams. He specializes in aquisition and disposition of investment property.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Mr. Brown received a Bachelor of Science in Construction Management and a minor in Business Administration at East Carolina University, Greenville, NC.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'>Branch Bank &amp; Trust (BB&amp;T)<br />\
              </li>\
              <li class='body_copy'>Wells Fargo<br />\
              </li>\
              <li class='body_copy'>Storage Max<br />\
              </li>\
              <li class='body_copy'>Cohen Equites<br />\
              </li>\
              <li class='body_copy'>Development Management, Inc.<br />\
              </li>\
              <li class='body_copy'>The Crown Companies, LLC<br />\
              </li>\
              <li class='body_copy'>JPB Raleigh Holdings, LLC<br />\
              </li>\
              <li class='body_copy'>North Carolina Autism Society<br />\
              </li>\
              <li class='body_copy'> Legacy Properties, LLC<br />\
              </li>\
              <li class='body_copy'>CIII Capital Partners<br />\
              </li>\
              <li class='body_copy'>Williams Realty and Building Company<br />\
              </li>\
              <li class='body_copy'>Progress Energy<br />\
              </li>\
              <li class='body_copy'>Various 1031 Clients and Family Offices</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:  </strong>Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>CoreNet Global:</strong> CoreNet Global is a dynamic, fully developed global network of professionals who create strategic value for their enterprises by advancing knowledge, connecting people and promoting personal excellence.</p>\
            <p class='body_copy'><strong>International Council of Shopping Centers (ICSC):</strong> An organization dedicated to advancing the shopping center industry and to promoting its role in the commercial distribution of consumer goods and services.</p>\
            <p class='body_copy'><strong>Raleigh Ducks Unlimited: </strong>An international nonprofit organization dedicated to the conservation of wetlands and associates upland habitats for waterfowl.            </p>\
            <p class='copy_subhead_red'>Awards:</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors Frontier Awards: </strong>Received the 2014 Rising Star Award which is presented to a broker with less than three years in commercial real estate and who demonstrated leadership qualities, involvement in the community, and a high level of production during his or her years in the industry.</p>\
              <!-- InstanceEndEditable -->\
            </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
            <span class='copy_header2'>Joaquin Canals, Broker</span><br />\
              <a href='mailto:jcanals@naicarolantic.com' class='in_copy_link'>jcanals@naicarolantic.com</a>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Mr. Canals, having over 36 years’ experience in commercial real estate, joined NAI Carolantic Realty Inc. in 1991. Knowledgeable concerning all aspects of leasing and brokerage, he has completed over 850 transactions. His specialties include retail leasing and sales. Mr. Canals is also experienced in flex and industrial sales and leasing.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Mr. Canals has B.A. degree in Political Science from Edinboro University of Pennsylvania.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'> <strong>Airborne/DHL:</strong> Handled site selection and lease negotiations for them in Raleigh and throughout Eastern NC.<br />\
              </li>\
              <li class='body_copy'><strong>US Postal Service:</strong> Represented the client in the disposition of property in Raleigh and throughout Eastern NC.<br />\
              </li>\
              <li class='body_copy'><strong>Fresenius Medical Care:</strong> Represented client in land acquisitions and lease negotiations in Raleigh and throughout Eastern NC.<br />\
              </li>\
              <li class='body_copy'><strong>Confederation Life Insurance:</strong> Handled the leasing and property disposition of their building in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Performance Cycle:</strong> Handled site selection and lease negotiations for them in Raleigh and Cary, NC.<br />\
              </li>\
              <li class='body_copy'><strong>K-Mart:</strong> Handled disposition of excess properties throughout NC.<br />\
              </li>\
              <li class='body_copy'><strong>E. C. Barton:  </strong>Site selection throughout NC &amp; SC.<br />\
              </li>\
              <li class='body_copy'><strong>CompUSA:</strong> Site selection for office and retail stores in Raleigh and Durham, NC.<br />\
              </li>\
              <li class='body_copy'><strong>European Wax Centers:</strong> Site selection throughout NC.<br />\
              </li>\
              <li class='body_copy'><strong>Lanco of Minnesota:</strong> Disposition of land and industrial buildings in NC.</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:  </strong>Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels. </p>\
            <p class='body_copy'><span class='copy_subhead_red'>Awards</span><br />\
              <br />\
              <strong>Triangle Commercial Association of Realtors: </strong>Frontier Awards: Million Dollar Retail Leasing Club for 2010, 2011, 2012 and 2015.</p>\
            <p class='body_copy'><strong>CoStar Power Broker: Top Retail Leasing Broker:</strong> 2007 (which was the only year CoStar presented retail leasing awards)<br />\
              <br />\
              <br />\
              <br />\
            </p>\
              <!-- InstanceEndEditable -->\
            </div>"

              }, {
    
                  html: " <div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->            <span class='copy_header2'>Gray Creech, Broker</span><span class='body_copy'><br />\
              <a href='mailto:gcreech@naicarolantic.com' class='in_copy_link'>gcreech@naicarolantic.com</a></span>\
            <p><span class='copy_subhead_red'>Career Summary</span><br />\
              <br />\
              <span class='body_copy'>Mr. Creech is in his 31st year as a commercial leasing broker with NAI Carolantic Realty, Inc. During this time, he has negotiated over 650 transactions, including leasing and brokerage ranging from commercial and industrial users, to Class A office tenants. He currently represents over 360,000 square feet of commercial property for various investors.</span></p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Mr. Creech has a degree in Business Management from North Carolina State University in Raleigh, North Carolina.</p>\
            <p class='body_copy'><span class='copy_subhead_red'>Select Client List</span><br />\
            </p>\
            <ul>\
              <li class='body_copy'> <strong>Kennedy Space Center: </strong>Represents the owner in the leasing of a 146,000 square-foot business/flex park in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Pine Hill Business Park:  </strong>Represents the owner in leasing of a 78,000 square-foot office/warehouse complex in Apex, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Creedmoor Centre Office Park:</strong> Represented the owners in brokering a 100,000 square-foot office condominium development in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Duraleigh Office Park:</strong> Responsible for handling the lease and/or sale of a 42,000 square-foot office condominium development in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Duke University:</strong> Represented owner in the sale of a 60,000 square-foot industrial /flex building in Morrisville, NC.<br />\
              </li>\
              <li class='body_copy'><strong>First Citizens Bank:  </strong>Assisted in the disposition of multiple commercial properties including office and flex buildings in Wake County, NC.</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels. </p>\
            <p class='copy_subhead_red'>Awards</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors Frontier Awards: </strong>Named to the Million Dollar Industrial Leasing Club in 2012.</p>\
              <!-- InstanceEndEditable -->\
            </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
            <span class='copy_header2'>Scott Hadley, Broker</span><br />\
              <span class='body_copy'><a href='mailto:shadley@naicarolantic.com' class='in_copy_link'>shadley@naicarolantic.com</a></span>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Scott Hadley joined NAI Carolantic Realty in early 2010 after serving ten years as the Manager of Leasing and Brokerage for Pinellas Corporation. Knowledgeable regarding all facets of real estate, he has assisted clients in the Research Triangle area as well as Eastern North Carolina and Coastal South Carolina. He has handled leasing responsibilities for an office portfolio of over 500,000 square feet of Class A &amp; B office space and brokered over $57 million in property/ building sales over the past few years. He continues to specialize in office and industrial leasing and sales, while representing building owners and tenants.</p>\
            <p class='body_copy'>Earlier in Mr. Hadley’s real estate career, he worked with Stallings Oil Company handling site acquisition work for Texaco and Amoco fueling facilities. As a developer, he also worked on public fueling sites and convenient store sites throughout Raleigh, Durham and Eastern North Carolina. He started his commercial real estate career with Fonville Morisey Commercial in 1986.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>  University of North Carolina at Chapel Hill: Bachelor of Business Administration</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'>BB&amp;T<br />\
              </li>\
              <li class='body_copy'>Duke Energy Progress<br />\
              </li>\
              <li class='body_copy'>Company Wrench<br />\
              </li>\
              <li class='body_copy'>C-III<br />\
              </li>\
              <li class='body_copy'>Bayview Financial<br />\
              </li>\
              <li class='body_copy'>National Power Company<br />\
              </li>\
              <li class='body_copy'>High Speed Gear<br />\
              </li>\
              <li class='body_copy'>Somerset Properties, LLC<br />\
              </li>\
              <li class='body_copy'>Waters Edge Properties, LLC<br />\
              </li>\
              <li class='body_copy'>Hopkins Oil<br />\
              </li>\
              <li class='body_copy'>Gray Chiropractic<br />\
              </li>\
              <li class='body_copy'>Power Home Technologies<br />\
              </li>\
              <li class='body_copy'>Purple Bag Properties<br />\
              </li>\
              <li class='body_copy'>Company Wrench<br />\
              </li>\
              <li class='body_copy'>KSKMX, LLC<br />\
              </li>\
              <li class='body_copy'>Fetsko Lawn<br />\
              </li>\
              <li class='body_copy'>Wright Law Firm<br />\
              </li>\
              <li class='body_copy'>ADM Properties<br />\
              </li>\
              <li class='body_copy'>Colony Tire Corporation<br />\
              </li>\
              <li class='body_copy'>Watson Refrigeration<br />\
              </li>\
              <li class='body_copy'>NexGear<br />\
                </li>\
              <li class='body_copy'>CAVU Corporation<br />\
                </li>\
              <li class='body_copy'>Maxim Healthcare<br />\
                </li>\
              <li class='body_copy'>Todd Rivenbark Puryear CPA’s<br />\
                </li>\
              <li class='body_copy'>Centralized Showing Services<br />\
                </li>\
              <li class='body_copy'>Ziglar Insurance<br />\
                </li>\
              <li class='body_copy'>MHF Logistics<br />\
                </li>\
              <li class='body_copy'>National Power<br />\
                </li>\
              <li class='body_copy'>The Law Offices of Howard Kohn<br />\
                </li>\
              <li class='body_copy'>Marlowe &amp; Moye<br />\
                </li>\
              <li class='body_copy'>Joyner Manufacturing Company<br />\
                </li>\
              <li class='body_copy'>Capital Bank N.A.<br />\
                </li>\
              <li class='body_copy'>Dr. Aaron Tropman<br />\
                </li>\
              <li class='body_copy'>3G TMA<br />\
                </li>\
              <li class='body_copy'>Holler Development<br />\
                </li>\
              <li class='body_copy'>FMI Corporation<br />\
                </li>\
              <li class='body_copy'>Desmar Corporation<br />\
                </li>\
              <li class='body_copy'>TAG Investment Group<br />\
                </li>\
              <li class='body_copy'> Cherokee Tobacco Co., LLC<br />\
                </li>\
              <li class='body_copy'>Duraw Manufacturing<br />\
                </li>\
              <li class='body_copy'>Wendell Siding<br />\
                </li>\
              <li class='body_copy'>Biederman Realty Group, LLC<br />\
                </li>\
              <li class='body_copy'>Kurt Hendrickson<br />\
                </li>\
              <li class='body_copy'>Thales Academy<br />\
                </li>\
              <li class='body_copy'>Zaytoun Orthodontics<br />\
                </li>\
              <li class='body_copy'>The Nordan Family Property<br />\
                </li>\
              <li class='body_copy'>Dr. Rudy Kirby<br />\
                </li>\
              <li class='body_copy'>NYK Logistics<br />\
                </li>\
              <li class='body_copy'>Martin Boal Anthony &amp; Johnson Architects<br />\
                </li>\
              <li class='body_copy'>Clendinen Estates</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR): </strong>An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>Triangle Area Office Building Association (TRAOBA):</strong> An organization established to exert a beneficial influence upon matters affecting the office leasing industry, promote professionalism and continuing education and provide opportunities for members to exchange views and information on topics of common interest. Served as President in 2009 and Secretary in 2008.</p>\
            <p class='body_copy'><strong>Capital Area Workforce Development Board:</strong> A public-private partnership that focuses on economic development by ensuring the local workforce has the skills, training and education to meet the needs of local employers.</p>\
            <p class='body_copy'><strong>Lee County Economic Development: </strong>Serve as a Board member for the Lee County Economic Development Corp. established to attract industry, enhance job opportunities and promote sound planning across Lee County.</p>\
            <p class='body_copy'><strong>Non-Profits include:</strong> Salvation Army, Clemson University Parent’s Council and Pi Kappa Alpha Fraternity.            </p>\
            <p class='copy_subhead_red'>Awards:</p>\
            <p class='body_copy'><strong>Movers &amp; Shakers:</strong> Awarded in 2012 to up and coming business leaders in the Triangle, by Business Leader Media.</p>\
            <p class='body_copy'><strong>CoStar Power Broker:</strong> Designated as a Top Sales Broker by CoStar in 2011 &amp; 2013.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors:</strong> Lifetime Member of the Million Dollar Sales Club; Member of the Million Dollar Industrial Leasing Club in 2013; Million Dollar Sales Club in 2011, 2012, 2013, 2014 &amp; 2015; and Million Dollar Land Sales Club in 2011, 2012, 2014 &amp; 2015.</p><!-- InstanceEndEditable -->\
            </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' --> <span class='copy_header2'>\
                Daniel Herring</span><br />\
                <a href='mailto:dherring@naicarolantic.com'><span class='in_copy_link'>dherring@naicarolantic.com</span></a>\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>Daniel Herring joined NAI Carolantic in 2015 after working in sales for three years at Anixter International and two years at Altria Group Distribution Company in Virginia. While at Anixter, he worked closely with electrical and data-com contractors as well as IT and facilities managers. His sales experience and ability to understand his client’s needs have been invaluable as he works with tenants, landlords, buyers and sellers to achieve their real estate goals.</p>\
                <p class='copy_subhead_red'>Education</p>\
                <p class='body_copy'>Mr. Herring received a Bachelor of Science in Business Administration from the Kenan-Flagler Business School at the University of North Carolina in Chapel Hill, NC.</p>\
                <p class='copy_subhead_red'>Select Client List</p>\
                <ul>\
                  <li class='body_copy'>Oakley Collier Architects<br />\
                  </li>\
                  <li class='body_copy'>KCL Properties<br />\
                  </li>\
                  <li class='body_copy'>Acceleration Academies<br />\
                  </li>\
                  <li class='body_copy'>Applied Data Technologies<br />\
                  </li>\
                  <li class='body_copy'>Mottis<br />\
                  </li>\
                  <li class='body_copy'>Brighttree<br />\
                  </li>\
                  <li class='body_copy'>South Glenwood Company LLC<br />\
                  </li>\
                  <li class='body_copy'>Rushing Water Studios<br />\
                  </li>\
                  <li class='body_copy'>Metersys<br />\
                  </li>\
                  <li class='body_copy'>The Gifted Boutique<br />\
                  </li>\
                  <li class='body_copy'>Hatch Matt MacDonald<br />\
                  </li>\
                  <li class='body_copy'>Urban Chic Nail Bar<br />\
                  </li>\
                  <li class='body_copy'> Note in the Pocket</li>\
                </ul>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global:  </strong>Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors (\TCAR):  </strong>An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <p class='body_copy'><strong>CoreNet Global:</strong> CoreNet Global is a dynamic, fully developed global network of professionals who create strategic value for their enterprises by advancing knowledge, connecting people and promoting personal excellence. </p>\
                <p class='copy_subhead_red'>Community Involvement:</p>\
                <p class='body_copy'><strong>City of Raleigh Retail Task Force: </strong>A group created to research retail opportunities and to consider both physical changes as well as policy changes needed to address challenges currently impacting the retail climate in Raleigh.</p>\
                <p class='body_copy'><strong>Boy Scouts of America:</strong> Council Ambassador to the local Venture Crew chapters.</p>\
                <!-- InstanceEndEditable -->\
            </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
            <span class='copy_header2'>John Hibbits, Broker</span><br />\
              <a href='mailto:jhibbits@naicarolantic.com' class='in_copy_link'>jhibbits@naicarolantic.com</a>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Prior to joining the firm as a broker in 2010, Mr. Hibbits was instrumental in researching, compiling and analyzing market data for NAI Carolantic’s Annual Triangle Commercial Real Estate Conference from 2000 to the present. The event, by invitation only, attracts over 1,800 business leaders and officials and is held each January at the PNC Arena. In addition, he has created momentum indices and owner maps of his speciality submarket, Raleigh’s Central Business District. </p>\
            <p class='body_copy'>Mr. Hibbits’ data driven approach has given his clients a valuable edge in achieving returns that have changed the expectations of many for the value of real estate in the CBD. Over the past six years, he has completed over $80 million in real estate transactions. </p>\
            <p class='body_copy'>A Raleigh native, Mr. Hibbits is committed to working hard and giving back to the community through Vintage Church and other non-profit work. He currently serves on the Triangle Commercial Association of Realtors and was selected to represent the state association in its search for its new headquarters in Downtown Raleigh.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>A graduate of UNC-Chapel Hill, Mr. Hibbits majored in Advertising with a focus in marketing and minor in Creative Writing.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'> BB&amp;T<br />\
              </li>\
              <li class='body_copy'>Fifth Third Bank<br />\
              </li>\
              <li class='body_copy'>Home Comfort Furniture<br />\
              </li>\
              <li class='body_copy'>Triangle Rock Club<br />\
              </li>\
              <li class='body_copy'>Kinetics Systems Inc.<br />\
              </li>\
              <li class='body_copy'>NC Association of Realtors<br />\
                </li>\
              <li class='body_copy'>Humboldt Manufacturing<br />\
                </li>\
              <li class='body_copy'>Trophy Brewing<br />\
                </li>\
              <li class='body_copy'>Lonerider Brewing<br />\
                </li>\
              <li class='body_copy'>Big Boss Brewing<br />\
                </li>\
              <li class='body_copy'>Raleigh Brewing</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR): </strong>Board Member since 2014. An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels. </p>\
            <p class='copy_subhead_red'>Awards</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors:</strong> Frontier Awards: Named to the Million Dollar Industrial Leasing Club in 2011, 2012, 2013 &amp; 2014; Million Dollar Sales Club in 2015; and the Million Dollar Retail Leasing Club in 2012.</p>\
            <p class='body_copy'><strong>CoStar Power Broker:</strong> Named a Power Broker in the Industrial Leasing category in 2011 &amp; 2013.            </p>\
            <p class='copy_subhead_red'>Community Involvement</p>\
            <p class='body_copy'><strong>Triangle Land Conservancy:</strong> A non-profit organization dedicated to permanently preserving the most important natural and working lands in the Triangle region. Their record, as of 2010, includes over 9,500 acres of protected land.</p>\
            <p class='body_copy'><strong>Cornerstone Ministries: </strong>Organization charged with helping UNC-Chapel Hill students develop into leaders both in ministry and in life through small group counseling.</p>\
            <p class='body_copy'><strong>Vintage21 Church:</strong> Community of faith dedicated to serving the city of Raleigh through social justice issues.</p>\
            <p class='body_copy'><strong>Fireproof Ministries: </strong>The umbrella ministry for a series of websites dedicated to addiction counseling and family help. Mr. Hibbits works as a counselor and volunteer speaker.</p>\
            <p class='body_copy'><strong>F3:</strong> Leadership in fitness/community service organization (f3nation.com) </p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->            <span class='copy_header2'>Richard Hibbits, Broker</span><span class='body_copy'><br />\
              <a href='mailto:rhibbits@naicarolantic.com' class='in_copy_link'>rhibbits@naicarolantic.com</a></span>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Since beginning his real estate career in 1971, Mr. Hibbits has gained experience in every facet of real estate: residential sales and construction, raw land sales, commercial development, commercial leasing, income property sales, management, receivership, syndication, and dealing with “odd” or “problem” properties.</p>\
            <p class='body_copy'>Specific accomplishments include the sale of the Sir Walter Hotel in Downtown Raleigh; sales and development of the 350 acre Weatherstone Planned Urban Development in Cary; arranging the sale and development of the 125 acre Data General/ECM plant site in Apex; development of over 900,000 square feet of commercial buildings; and being named as court-appointed receiver of an 840,000 square foot warehouse development. Mr. Hibbits is responsible for compilation of the statistics presented at the Annual Triangle Commercial Real Estate Conference.</p>\
            <p class='body_copy'>Mr. Hibbits joined NAI Carolantic Realty in 1976 and became a principal in the firm in the early 1980’s.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Mr. Hibbits is a graduate of the University of North Carolina, Chapel Hill.</p>\
            <p class='body_copy'><span class='copy_subhead_red'>Select Client List</span><br />\
            </p>\
            <ul>\
              <li class='body_copy'><strong>EMC, Inc. (formerly Data General):  </strong>Located a 125-acre site for a 300,000 square-foot plant and coordinated government help to overcome water, sewer and access problems in Apex, NC.<br />\
              </li>\
              <li class='body_copy'> <strong>US Bankruptcy Court:</strong> Court appointed Receiver for Lincoln Park North, an 840,000 square-foot, 15-building warehouse development in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Sir Walter Associates:  </strong>Brokered the sale of the Downtown hotel project for conversion to multifamily use in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Tanager Properties, LLC:</strong> Developed a 98,000 square-foot flex project in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Duraleigh Corners Shopping Center:  </strong>Developed a 74,000 square-foot unanchored retail strip center in Raleigh, NC.</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients</p>\
            <p class='body_copy'>T<strong>riangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>University of North Carolina at Chapel Hill:</strong> Member of the Dean’s Working Group for the Entrepreneurship Minor.</p>\
            <p class='body_copy'><strong>Moorhead Planetarium &amp; Science Center:</strong> Board member.</p>\
            <p class='body_copy'><strong>North Carolina Master Chorale:</strong> Board member</p>\
            <p class='body_copy'><strong>NCSU Center for Environmental Farm Systems:</strong> Board member. </p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
                <p><span class='copy_header2'>Karah Jennings, Broker</span><br />\
                <a href='mailto:kjennings@naicarolantic.com' class='in_copy_link'>kjennings@naicarolantic.com</a>                </p>\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>Karah Jennings joined NAI Carolantic Realty in 2013 after working with JP Morgan on the Institutional Equity Sales team covering the Southeast and Texas regions. Karah’s corporate and research experience are the foundation for her business development that conveys to effective management of transactions. Ms. Jennings primarily focuses on land and office properties.</p>\
                <p class='copy_subhead_red'>Education</p>\
                <p class='body_copy'>A graduate of Miami University in Ohio, Ms. Jennings received a Bachelor of Business Management with a focus on Organizational Leadership and Communications. </p>\
                <p class='copy_subhead_red'>Select Client List</p>\
                <ul>\
                  <li class='body_copy'>Alpha Marketing<br />\
                  </li>\
                  <li class='body_copy'> EMF Properties Group<br />\
                  </li>\
                  <li class='body_copy'>Gaylord Rodgers, PLLC<br />\
                  </li>\
                  <li class='body_copy'> HPT, Inc.<br />\
                  </li>\
                  <li class='body_copy'>NCTA<br />\
                  </li>\
                  <li class='body_copy'>Propstone<br />\
                  </li>\
                  <li class='body_copy'>SONIC</li>\
                </ul>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> Board Member for 2014. An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <p class='body_copy'><strong>Triangle Area Office Building Association (TRAOBA):  </strong>An organization of commercial real estate brokers primarily focused on exerting a beneficial influence on matters affecting the business. </p>\
                <p class='copy_subhead_red'>Community Involvement</p>\
                <p class='body_copy'><strong>Greater Raleigh Chamber of Commerce:</strong> Young Professional Network</p>\
                <p class='body_copy'><strong>Junior League:  </strong>Active member and Co-chair of SafeChild Angel Tree</p>\
                <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
            <span class='copy_header2'>Aldene &quot;Dee&quot; Creech Osborne, SIOR</span><br />\
              <a href='mailto:dcreech@naicarolantic.com'><span class='in_copy_link'>dcreech@naicarolantic.com</span></a>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Ms. Osborne joined NAI Carolantic Realty, Inc. in 1996, bringing to the Company over ten years of experience in commercial real estate leasing in Wake County. Since 1989, she directed the marketing and leasing of Southport Business Park in Morrisville from basic infrastructure and one 75,000 square-foot flex building to just under one million square feet of office and flex space. Other real estate experience includes three years as a broker for Linpro, a commercial real estate development company. At NAI Carolantic, Ms. Osborne performs general brokerage as well as leasing both office and flex, and has transacted well over $100 million in the last several years.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Bachelor of Arts, University of North Carolina, Chapel Hill, North Carolina.</p>\
            <p class='copy_subhead_red'>Professional Designations</p>\
            <p class='body_copy'>Society of Industrial &amp; Office Realtors (SIOR):  Specialist, Office Real Estate: The SIOR designation is awarded to individuals who have met rigorous requirements based on their outstanding knowledge of the commercial real estate industry, professional and educational background and adherence to ethical standards. There are 2,830 active SIOR members in the US, of which 92 are in North Carolina.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'><strong>General Investment &amp; Development Company:</strong> Listing agent for a one-million square-foot business park located near the Research Triangle Park in Morrisville, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Aviation Parkway and Airport Blvd. Associates:</strong> Listing agent for flex, office &amp; industrial park located in Morrisville, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Supply Point Systems:  Tenant Representative:</strong> Negotiated a 32,000 square-foot office/flex/warehouse space in Cary, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Central States Industrial:</strong> Tenant Representative: Negotiated a 7,500 square-foot flex/warehouse space in Durham, NC.<br />\
              </li>\
              <li class='body_copy'><strong>New Hope Center Associates:</strong> Listing Agent for 66,000 square-foot building currently used as office space but with features amenable to warehouse or flex space use. Located in Raleigh, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Trans Air Drive Partners:</strong> Listing Agent for a 20,000 square-foot flex property in Morrisville, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Apex Pinnacle Partners:</strong> Listing Agent for a 9,535 square-foot flex building in Apex, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Ramdab, LLC:</strong> Represented owner in the sale of a 6,112 square-foot free-standing building in Morrisville, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Expressway Partners:</strong> Listing Agent for a specialized “stand alone” laboratory located in Durham, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Centrifuge Media:</strong> Represented tenant in the leasing of 10,000 SF for 10 years.<br />\
              </li>\
              <li class='body_copy'>Adcori ACC1, LLC: Negotiated ownership into building for Centrifuge Media’s company founder and owner.<br />\
              </li>\
              <li class='body_copy'><strong>ACC Investment Properties, LLC:</strong> Listing agent for 30,000 SF flex property in Raleigh, NC</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global: </strong>Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Society of Industrial and Office Realtors (SIOR):</strong> A leading professional commercial and industrial real estate association. With more than 2,800 members in more than 630 cities, SIOR represents today’s most knowledgeable, experienced, and successful real estate brokerage specialists.</p>\
            <p class='body_copy'><strong>National Association of Realtors (NAR):</strong> A national association of licensed commercial real estate brokers, assisting brokers to be more successful by providing a facility for professional development, research and exchange of information among its members.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>Triangle Commercial Real Estate Women (TCREW): </strong>Women’s network of area commercial real estate professionals. </p>\
            <p class='copy_subhead_red'>Awards</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> Received TCAR’s highest award: “2005 Realtor of the Year.”</p>\
            <p class='body_copy'><strong>Triangle Commercial Real Estate Women (TCREW): </strong>TCREW Powerhouse Award in 2014. The award is presented to an individual in the commercial real estate industry who in 2014, demonstrated extraordinary leadership or achieved an extraordinary work volume.</p>\
            <p class='body_copy'><strong>Triangle Business Journal:</strong> In 2010, recognized for the Top Flex Lease Deal of the Year for Southport Business Park tenant, Catalent Pharma Solutions.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> Lifetime Million Dollar Industrial Leasing Club; Million Dollar Sales Club in 2009; Million Dollar Office Leasing Club in 2006, 2009, 2013, 2014; Million Dollar Industrial Leasing Club in 2012, 2013, 2014.</p>\
            <p class='body_copy'><strong>Triangle Commercial Real Estate Women (TCREW): </strong>Received 2002 “Best Professional Service” Award at the annual TCREW Champion Awards.</p>\
            <p class='body_copy'><strong>CoStar Group:</strong> Designated as a Top 20 Power Broker in 2004, 2005, 2009, 2010 , 2011, 2013 &amp; 2015.</p>\
            <p class='body_copy'><strong>Movers &amp; Shakers: </strong>Awarded in 2011 to up and coming business leaders in the Triangle, by Business Leader Media.              </p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->            <span class='copy_header2'>Jake Plotkin, CCIM</span><span class='body_copy'><br />\
              <a href='mailto:jplotkin@naicarolantic.com' class='in_copy_link'>jplotkin@naicarolantic.com</a></span>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Mr. Plotkin joined NAI Carolantic in 2007 after previously being associated with the firm as a Market Analyst while a student at NC State University. Mr. Plotkin specializes in industrial leasing and investment properties and has closed over $65 million over the past few years. He achieved his Certified Commercial Investment Member designation in 2011.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Mr. Plotkin received a BS in Business Management, a BS in Biological Sciences, and minored in Spanish at North Carolina State University in Raleigh, North Carolina. His education also includes a summer in Lima, Peru where he acquired fluency in Spanish.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'><strong>Sunset Plaza Assoc.:</strong> Represented owner in the disposition of a 106,500 SF grocery-anchored center in Fuquay Varina, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Davie Street, LLC:</strong> Represented buyer with 1031 exchange requirement and secured an off market John Deere Landscapes investment property in East Raleigh.<br />\
              </li>\
              <li class='body_copy'><strong>SSS Associates, LLC:</strong><strong></strong> Represented landlord in the leasing of an 8,508sf flex building to Volvo Construction Equipment Rents, Inc. in West Raleigh which was subsequently sold as an investment property.<br />\
              </li>\
              <li class='body_copy'><strong>Bones 13, LLC:  </strong>Represented investor, as well as seller, in the acquisition of a net leased, single-tenant building leased to Volvo Construction Equipment Rents, Inc. in West Raleigh.<br />\
              </li>\
              <li class='body_copy'><strong>CASL2 Development, LLC:</strong> Represented seller in the disposition of a 69,000 SF neighborhood retail center and secured buyer directly.<br />\
              </li>\
              <li class='body_copy'><strong>Launchpad Properties, LLC:  </strong>Represented buyer in the purchase of an 18,000sf flex building in West Raleigh.<br />\
              </li>\
              <li class='body_copy'><strong>330 NW 71st ST, L.C.:  </strong>Represented buyer in the acquisition of a single tenant, net-leased Food Lion.<br />\
              </li>\
              <li class='body_copy'><strong>CASL2 Development, LLC:  </strong>Represented seller in the sale of an 18,000sf multi-tenant retail building in Cary, NC.<br />\
              </li>\
              <li class='body_copy'><strong>330 NW 71st ST, L.C.:</strong> Represented buyer in the acquisition of a 12,000 SF retail strip center located in Durham, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Mahen, LLC:</strong> Represented the buyer in the acquisition of a 15,600 SF multi-tenant flex building in Cary, NC.<br />\
              </li>\
              <li class='body_copy'><strong>Silver Land, LLC: </strong>Represented seller in the disposition of a NNN ground lease (to BB&amp;T). Achieved 99.5% of asking price in 48 hours.<br />\
              </li>\
              <li class='body_copy'><strong> MyComputerCareer.com: </strong>Represented the client in leasing Class A office space in West Raleigh and Charlotte, NC: as well as Dallas and Houston, TX; Indianapolis, IN; and Columbus, OH.<br />\
              </li>\
              <li class='body_copy'><strong>Black Belt World:</strong> Represented the seller in the disposition of a multi-tenant retail property in Wake Forest.<br />\
              </li>\
              <li class='body_copy'><strong>Infinity 13, LLC: </strong>Represented the buyer in the acquisition of an off-market 13,800 SF flex building in Raleigh, NC<br />\
              </li>\
              <li class='body_copy'><strong>Lord Baron Investments, LLC:</strong> Represented client in the acquisition of Merchant’s Tire in North Raleigh.<br />\
              </li>\
              <li class='body_copy'><strong>Lee Dynasty, LLC:</strong> Represented client in the sale of a 12,000 SF net leased, multi-tenant retail building.<br />\
              </li>\
              <li class='body_copy'><strong>Preston Corners Investments LLC: </strong>Represented investor in the acquisition of a net leased, multitenant building.<br />\
              </li>\
              <li class='body_copy'><strong>Silver Blue Lodge, LLC: </strong>Represented buyer in the acquisition of an absolute NNN Dollar General in Camden, NC.<br />\
              </li>\
              <li class='body_copy'><strong>746 NW 62nd St, L.C. -</strong> Represented buyer in the acquisition of a net leased Verizon in Henderson, NC.</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global: </strong>Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Commercial Investment Member (CCIM):</strong> Over 240 hours of graduate level class work, transaction documentation and comprehensive examination are required to achieve the CCIM designation. Of 125,000 commercial real estate practitioners nationwide, only 7,900 hold the CCIM designation.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>Kiwanis Club of Raleigh:</strong> An international organization of volunteers changing the world through service to children and communities. </p>\
            <p class='copy_subhead_red'>Awards</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> Frontier Awards: Named to the Million Dollar Industrial Leasing Club in 2011, 2012, 2014 &amp; 2015; Million Dollar Sales Club in 2015.<br />\
              </p>\
            <p class='body_copy'><strong>CoStar Power Broker:</strong> Designated as a Power Broker by CoStar in 2011 &amp; 2012.</p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->            <span class='copy_header2'>Hunter Stewart, MBA</span><span class='body_copy'><br />\
              <a href='mailto:hstewart@naicarolantic.com' class='in_copy_link'>hstewart@naicarolantic.com</a></span>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Mr. Stewart has been a part of NAI Carolantic’s Retail Services Division for over six years. He is knowledgeable regarding all facets of commercial real estate, but has primarily focused on the retail sector specializing in retail tenant representation, shopping center and mixed-use property leasing and sales. Mr. Stewart has worked with numerous local and national retail clients creating opportunities that were not easily recognizable. This skill, along with his ability to listen and understand his client’s needs, set him apart from the competition. Prior to joining the firm, Mr. Stewart was a Business Strategy Analyst with The Fresh Market at their headquarters location in Greensboro. His experience with The Fresh Market gives him an invaluable edge in working with retail clients needing commercial real estate assistance.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Mr. Stewart completed his Master of Business Administration and received his Bachelor of Science in Business Administration at Appalachian State University. As a quarterback for the ASU football team, Mr. Stewart played a part in the team winning three national championships in 2005, 2006 and 2007 which included the historic win over Michigan. He is a native of Sanford, NC.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'>  Ruby Tuesday/Lime Fresh Mexican Grill<br />\
              </li>\
              <li class='body_copy'>City Barbeque<br />\
              </li>\
              <li class='body_copy'>Ace Hardware<br />\
              </li>\
              <li class='body_copy'>Liberty Healthcare Corp.<br />\
              </li>\
              <li class='body_copy'>Bruster’s Ice Cream<br />\
              </li>\
              <li class='body_copy'>Southern Land Company<br />\
              </li>\
              <li class='body_copy'> Allied Lab Services<br />\
              </li>\
              <li class='body_copy'>Raleigh-Durham Airport Authority<br />\
              </li>\
              <li class='body_copy'>Rise Biscuits &amp; Donuts<br />\
              </li>\
              <li class='body_copy'>Crossfit Sua Sponte<br />\
              </li>\
              <li class='body_copy'>Beacon Partners<br />\
              </li>\
              <li class='body_copy'>Azalea Management &amp; Leasing<br />\
                </li>\
              <li class='body_copy'>BB&amp;T<br />\
                </li>\
              <li class='body_copy'>Capital Bank<br />\
                </li>\
              <li class='body_copy'>Smoothie King<br />\
                </li>\
              <li class='body_copy'> Artistic Hair Salon<br />\
                </li>\
              <li class='body_copy'>West Developers<br />\
                </li>\
              <li class='body_copy'>Domino’s Pizza<br />\
                </li>\
              <li class='body_copy'>Alpine Ski Center<br />\
                </li>\
              <li class='body_copy'>The Little Gym<br />\
                </li>\
              <li class='body_copy'>Bojangles<br />\
                </li>\
              <li class='body_copy'>Faison<br />\
                </li>\
              <li class='body_copy'>C-III Realty Services</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global: </strong>Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>Greater Raleigh Chamber of Commerce Young Professionals Network:</strong> An organization providing events that engage professionals ages 23 – 39 from member firms to help them become more competitive in the business arena, establish contacts, and grow personally through a variety of program topics.</p>\
            <p class='body_copy'><strong>Interface Carolinas: </strong>Selected by Southeast Real Estate Business and Carolinas Commercial Properties to be a retail panelist at their 6th Annual InterFace Carolinas Conference in 2015. </p>\
            <p class='copy_subhead_red'>Awards:</p>\
            <p class='body_copy'><strong>NAI Global Scholarship Recipient:</strong> Selected for one of two scholarships to attend the 2015 International Council of Shopping Centers RECon in Las Vegas. RECon is the global convention for the shopping center industry and provides networking, deal making and educational opportunities for professionals from around the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors Frontier Awards:</strong> Member of the Million Dollar Retail Leasing Club in 2014 &amp; 2015. Presented the 2013 Rising Star Award for number of closed transactions.            </p>\
            <p class='copy_subhead_red'>Community Involvement: </p>\
            <p class='body_copy'><strong>Habitat for Humanity:</strong> Provides low income housing to families through volunteer contractors and material donations. Volunteer.</p>\
            <p class='body_copy'><strong>Make A Wish Foundation: </strong>Organization working to grant the wishes of children with life-threatening medical conditions. Volunteer.</p>\
            <p class='body_copy'><strong>Fellowship of Christian Athletes:</strong> Largest Christian sports organization in America seeking to impact athletes and coaches. Volunteer.</p>\
            <p class='body_copy'><strong>Juvenile Diabetes Research Foundation:</strong> Leading global organization focused on type 1 diabetes research. Volunteer.</p>\
            <p class='body_copy'><strong>Pop Warner Football:</strong> Serves as Assistant Football Coach for a team in Sanford. This is a non-profit organization that provides youth football, cheer and dance programs for participants ranging from ages 5-16.</p>\
            <p class='body_copy'><strong>Edenton Street United Methodist Church: </strong>Raleigh, NC. </p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {

        html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' --> <span class='copy_header2'>Russell Stewart</span><br />\
                <a href='mailto:rstewart@naicarolantic.com'><span class='in_copy_link'>rstewart@naicarolantic.com</span></a>\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>Russell Stewart joined NAI Carolantic in 2017 following a career as a real estate attorney in Raleigh. His real estate experience started while working for his family’s construction and development company in Pinehurst. Mr. Stewart will focus on land sales as well as industrial leasing and sales.</p>\
                <p class='copy_subhead_red'>Education</p>\
                <p class='body_copy'>Mr. Stewart was awarded a Juris Doctor degree from Campbell University, and he received a Bachelor of Science in Civil Engineering from NC State University.</p>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global:</strong> NAI Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR): </strong>An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <!-- InstanceEndEditable -->\
            </div>\
        </div>"
     }, {

        html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' --> <span class='copy_header2'>Michael Wallace</span><br />\
                <a href='mailto:mwallace@naicarolantic.com'><span class='in_copy_link'>mwallace@naicarolantic.com</span></a>\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>Michael Wallace joined NAI Carolantic in 2017 after graduating from North Carolina State University. His primarily focus will be to assist clients looking to lease or sell industrial or retail properties. While in college, he worked as an intern for NAI Carolantic, as well as Fidelity Investments and SteelFab, Inc. Mr. Wallace is from Gastonia, NC where he achieved recognition as an Eagle Scout.</p>\
                <p class='copy_subhead_red'>Education</p>\
                <p class='body_copy'>Mr. Wallace is a graduate of North Carolina State University, with a degree in Business Administration with a Finance Concentation. </p>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global:</strong> NAI Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multi-market expansions or dispositions throughout the world.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR): </strong>An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <!-- InstanceEndEditable -->\
            </div>\
        </div>"
     }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' --> <span class='copy_header2'>Jordan T. Williams</span><br />\
                <a href='mailto:jwilliams@naicarolantic.com'><span class='in_copy_link'>jwilliams@naicarolantic.com</span></a>\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>Jordan Williams joined NAI Carolantic Realty in 2017 after receiving her MBA from the University of Mississippi. Her commercial real estate experience began as a Marketing and Design Assistant at MascoloWilliams, a real estate investment group in her hometown of Dallas, Texas, which led her to pursue a career in commercial real estate.</p>\
                <p class='copy_subhead_red'>Education</p>\
                <p class='body_copy'>Jordan completed a degree in Commerce and Business Administration with double majors in Marketing and Management at The University of Alabama and holds a MBA from the University of Mississippi.</p>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR): </strong>An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' --> <span class='copy_header2'>Carson Wilson</span><br />\
                <a href='mailto:cwilson@naicarolantic.com'><span class='in_copy_link'>cwilson@naicarolantic.com</span></a>\
                <p class='copy_subhead_red'>Career Summary</p>\
                <p class='body_copy'>Carson Wilson joined NAI Carolantic in 2016 after graduating from the Cameron School of Business at UNC-Wilmington.  While in college, he worked as an intern for a real estate/appraisal company handling research and property analysis.  This experience led him to pursue a career in commercial real estate.  His focus will primarily be on industrial land sales and leasing.</p>\
                <p class='copy_subhead_red'>Education</p>\
                <p class='body_copy'>Carson attended the University of North Carolina at Wilmington, receiving a Bachelor of Science in Business Administration with a concentration in Finance.</p>\
                <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
                <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
                <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
                <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->\
          <span class='copy_header2'>Moss Withers, MBA</span><br />\
              <a href='mailto:mwithers@naicarolantic.com' class='in_copy_link'>mwithers@naicarolantic.com</a>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>Mr. Withers joined NAI Carolantic in 2009 after receiving his MBA from North Carolina State University. His commercial real estate experience began many years prior working with Preston Development Company on commercial development projects and through the management of several multifamily projects throughout the state. Mr. Withers brings new ideas to the business and has quickly established himself as a dedicated award winning broker working with clients throughout North Carolina. He specializes in land, office and investment properties.</p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Mr. Withers earned his Masters of Business Administration from the Jenkins Business School at North Carolina State University in Raleigh, North Carolina. In 2006, he received a Bachelors degree triple majoring in Economics, Finance, and Risk and Insurance from Appalachian State University in Boone, North Carolina. He has also obtained a degree in Entrepreneurship and Commercialization from NC State University.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'>Lennar<br />\
              </li>\
              <li class='body_copy'>KB Home<br />\
              </li>\
              <li class='body_copy'>Goodberry’s<br />\
              </li>\
              <li class='body_copy'>Mungo Homes<br />\
              </li>\
              <li class='body_copy'>Pulte<br />\
              </li>\
              <li class='body_copy'>Standard Pacific<br />\
              </li>\
              <li class='body_copy'>BB&amp;T<br />\
              </li>\
              <li class='body_copy'>Concept Food Services<br />\
              </li>\
              <li class='body_copy'>Withers &amp; Ravenel<br />\
              </li>\
              <li class='body_copy'>Fred Anderson Toyota (AAG)<br />\
              </li>\
              <li class='body_copy'>Johnson Automotive<br />\
                </li>\
              <li class='body_copy'>NC Truckers Association<br />\
                </li>\
              <li class='body_copy'>Williams Realty, Inc.<br />\
                </li>\
              <li class='body_copy'>State Farm Insurance<br />\
                </li>\
              <li class='body_copy'>RE Goodson Construction<br />\
                </li>\
              <li class='body_copy'>Rockinteriors<br />\
                </li>\
              <li class='body_copy'>Sonic<br />\
                </li>\
              <li class='body_copy'>Rufty-Peedin Design Builders<br />\
                </li>\
              <li class='body_copy'>CMC Hotels<br />\
                </li>\
              <li class='body_copy'>Quintessentials<br />\
                </li>\
              <li class='body_copy'>Econolodge<br />\
                </li>\
              <li class='body_copy'>Columbia Properties</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global: </strong>Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR): </strong>An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels.</p>\
            <p class='body_copy'><strong>Tacquire: </strong>Board member from 2010-2013 for a company providing a regional listing service and property data exchange for commercial real estate brokers.</p>\
            <p class='body_copy'><strong>Cary Chamber of Commerce:</strong> Member</p>\
            <p class='body_copy'><strong>Holly Springs Chamber of Commerce:</strong> Chairman of the Holly Spring Chamber. Previously served as President on the Executive Board of Advisors promoting Community Smart development</p>\
            <p class='body_copy'><strong>Paragon Bank:</strong> Advisory Board Member</p>\
            <p class='body_copy'><strong>Xanofi, Inc.: </strong>Board member/owner for start-up nanofiber production company out of NC State University. </p>\
            <p class='copy_subhead_red'>Awards</p>\
            <p class='body_copy'><strong>Best Professional Commercial Real Estate Service Award: </strong>Presented in 2016 at the 18th Annual Champion Awards by Triangle Commercial Real Estate Women (TCREW). The award is given to an individual who provides the best professional commercial real estate service, with consideration for industry knowledge, leadership ability, negotiating skills, work ethic and creativity.</p>\
            <p class='body_copy'><strong>Mover &amp; Shaker: </strong>Named a Mover &amp; Shaker in 2016 by Cary Magazine.</p>\
            <p class='body_copy'><strong>Real Estate Award Winner, Top Sales Transactions—Land:</strong> Presented by the Triangle Business Journal. Selected as one of the top three land sales transactions for 2014.</p>\
            <p class='body_copy'><strong>Tomorrow’s Leaders: </strong>Presented by the Real Estate Forum Magazine. Selected as one of the 25 most promising young professionals in the Southeastern United States commercial real estate market in 2014.</p>\
            <p class='body_copy'><strong>40 Under 40 Leadership Award: </strong>Presented by the Triangle Business Journal in 2014, the award recognizes 40 of the most influential and highly accomplished young leaders in the Triangle Region.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors Frontier Awards: </strong>Received the 2010 Rising Star Award for number of closed transactions. Also named to the Million Dollar Sales Club in 2012 &amp; 2015; the Million Dollar Sales Club for Land in 2012, 2013 &amp; 2014; and the Million Dollar Industrial Leasing Club in 2012.</p>\
            <p class='body_copy'><strong>Leadership Cary: </strong>A program designed for business leaders to learn about the economic, social, cultural and political facets of the Cary community. Completed the year-long program in 2012. </p>\
            <p class='copy_subhead_red'>Community Involvement</p>\
            <p class='body_copy'><strong>Kraft Family YMCA: </strong>Currently serves as Chairman on the Board of Advisors.</p>\
            <p class='body_copy'><strong>YMCA of the Triangle: </strong>YMCA programs promote good health, strong families, confident kids, solid communities and a better world. The YMCA serves people of all faiths, races, abilities, ages, and incomes in order to make its community a healthier, safer, and better place to live. Mr. Withers personally raised over $65,000 for the cause. In 2016, the campaign raised a record $91,500 for the annual campaign.</p>\
            <p class='body_copy'><strong>Ducks Unlimited: </strong>Ducks Unlimited supports wetlands conservation efforts. Mr. Withers is a Cary Chapter committee member and has raised over $20,000 annually for the Cary chapter.</p>\
            <p class='body_copy'><strong>Miracle League of the Triangle: </strong>Provides opportunities to all children with special needs to play baseball regardless of their abilities. Mr. Withers has been a buddy for the program since its creation.</p>\
            <p class='body_copy'><strong>Eight Oaks: </strong>Founder and President of a young professional’s organization which raises over $30,000 annually for local non-profit organizations.</p>\
            <p class='body_copy'><strong>Cary Rotary:</strong> Member/Committee Member. </p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

              }, {
    
                  html: "<div id='middle'>\
                <!-- InstanceBeginEditable name='middle_copy' -->            <span class='copy_header2'>Hunt Wyche, Broker</span><span class='body_copy'><br />\
              <a href='mailto:hwyche@naicarolantic.com' class='in_copy_link'>hwyche@naicarolantic.com</a></span>\
            <p class='copy_subhead_red'>Career Summary</p>\
            <p class='body_copy'>In 2013, Hunt Wyche joined NAI Carolantic’s brokerage team with a proven ten-year track record of handling warehouse/flex leasing, owner-occupant sales, and investment sales. His focus continues to be on landlord and investor representation which has allowed him to assist clients in finding the right space/building/land/development opportunity to meet their individual needs. His knowledge of the everchanging real estate market and his vast experience representing numerous local/regional landlords and investors has helped him to understand both sides of the transaction and thus assist hundreds of companies from small start-ups to fortune 500s as a tenant/buyer representative. Putting the two parties together has resulted in Mr. Wyche being able to close a yearly average of 50+ sale/lease transactions for the past eight years. He currently represents over 60 owners and landlords, and has successfully represented hundreds of tenants, the majority of whom are currently conducting business in the Triangle area.</p>\
            <p class='body_copy'>Prior to joining NAI Carolantic, Mr. Wyche was Vice President of Brokerage and Sales for Commercial Associates, Inc.            </p>\
            <p class='copy_subhead_red'>Education</p>\
            <p class='body_copy'>Mr. Wyche is a Raleigh native and a graduate of Appalachian State University where he majored in Real Estate and Finance.</p>\
            <p class='copy_subhead_red'>Select Client List</p>\
            <ul>\
              <li class='body_copy'>NC Orthotics and Prosthetics<br />\
              </li>\
              <li class='body_copy'>World Courier<br />\
              </li>\
              <li class='body_copy'> Cosmos Granite and Marble<br />\
              </li>\
              <li class='body_copy'>News and Observer<br />\
              </li>\
              <li class='body_copy'>NC State University<br />\
              </li>\
              <li class='body_copy'>Southern Beverage Services<br />\
              </li>\
              <li class='body_copy'>Play n Trade<br />\
              </li>\
              <li class='body_copy'>ProShred<br />\
              </li>\
              <li class='body_copy'>Above Board Electronics<br />\
              </li>\
              <li class='body_copy'>Windsor Hotels Corp.<br />\
                </li>\
              <li class='body_copy'>Autism Society of North Carolina<br />\
                </li>\
              <li class='body_copy'>Four Seas Holding, LLC<br />\
                </li>\
              <li class='body_copy'>PS Acquisition Co.<br />\
                </li>\
              <li class='body_copy'>Midtown Industrial Park, LLC<br />\
                </li>\
              <li class='body_copy'>NC Chiropractic Association, LLC<br />\
                </li>\
              <li class='body_copy'>CAAM Holdings, LLC<br />\
                </li>\
              <li class='body_copy'>MPM Investment Co., LLC<br />\
                </li>\
              <li class='body_copy'>Pershing Properties Group, LLC<br />\
                </li>\
              <li class='body_copy'>Mahoney Raleigh, LLC<br />\
                </li>\
              <li class='body_copy'>BP Enterprises &amp; Investments, LLC<br />\
                </li>\
              <li class='body_copy'>Bedo Enterprises, LLC</li>\
            </ul>\
            <p class='copy_subhead_red'>Professional Affiliations &amp; Organizations</p>\
            <p class='body_copy'><strong>NAI Global:</strong> Carolantic has been the Raleigh/Durham affiliate for NAI Global since 1982. This network enables us to assist clients in multimarket expansions or dispositions throughout the world.</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors (TCAR):</strong> An organization of licensed commercial real estate brokers, enabling members to advance their education and knowledge of issues impacting commercial real estate on local, state and national levels. Mr. Wyche served on TCAR’s Board of Directors for three years, serving as Treasurer in 2012 and 2013.</p>\
            <p class='body_copy'><strong>CoreNet Global: </strong>CoreNet Global is a dynamic, fully developed global network of professionals who create strategic value for their enterprises by advancing knowledge, connecting people and promoting personal excellence.</p>\
            <p class='body_copy'><strong>Greater Raleigh Chamber of Commerce:</strong> Active Member</p>\
            <p class='body_copy'><strong>Wake Forest Chamber of Commerce: </strong>Member and former Advisor to Economic Development Council</p>\
            <p class='body_copy'><strong>Garner Chamber of Commerce: </strong>Active Member</p>\
            <p class='body_copy'><strong>Coastal Conservation Association of NC:</strong> Active Member</p>\
            <p class='body_copy'><strong>Hillsborough Street Community Service Corporation: </strong>Active Member and former Committee Member </p>\
            <p class='copy_subhead_red'>Awards</p>\
            <p class='body_copy'><strong>Triangle Commercial Association of Realtors Frontier Awards: </strong>Mr. Wyche was named to TCAR’s Million Dollar Industrial Leasing Club in 2007, 2008, 2009, 2010, 2011 &amp; 2012 and was inducted as a Lifetime Member in 2011. In 2009 and 2012, he was presented with the Trailblazer Award given to a broker in a small real estate firm who demonstrated broad based, multi-disciplined production activity for the year. He was also named as the Triangle’s Busiest Broker in 2007 &amp; 2008 for the largest number of transactions.</p>\
              <!-- InstanceEndEditable -->\
            </div>\
        </div>"

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