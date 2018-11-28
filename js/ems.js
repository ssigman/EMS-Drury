var page;  // Object to track current page state

$(document).ready(function(){
	console.log("jQuery is ready to use...");
	//set up listeners on the menu items
	$('#browseStu').on("click",goBrowseStu);
	$('#home').on("click",goHome);
	$('#crseMgmt').on("click",goCourseMgt);
    $('#fndSch').on("click", goFindSchedule);
	$('#mainContentPane #crseAddButton').on('click',addCourse);
	$('#mainContentPane #crseDelButton').on('click',delCourse);
	
	// The initial Page is the current and last page
	page = new menuState("home");
});

// Define a page State Object
function menuState(curPage) {
	this.curPage=curPage;
}

/* function to change the current page.  */
menuState.prototype.setCurPage = function(page) {
	this.curPage=page;
};

/* function to query the current page. */
menuState.prototype.getCurPage = function() {
	return this.curPage;
};

/* function to prepare the browse students page by requesting
   the students from a web service.  The student data is 
   returned by the web service as a HTML table.  This function
   adds the table to the browse students page. 
    */
function goBrowseStu() {
	// adjust the pages that are shown
	if (page.getCurPage() != "browseStu") {
       // post a TO DO message.
		var stuList = "<div id='browseStuPage' class='panel panel-info'>" +
                "<div class='panel-heading'>Browse Students " + "</div>" +
                "<p style='text-align:center;padding-top:5em;padding-bottom:5em;'>" + 
                "<strong>TO DO: Add Browse Students page</strong></p>" +
                "</div>";
        $("#mainContentPane").prepend(stuList);
		
		// Hide the current page & make browse student the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("browseStu");
	}
}
/* function to set the home page. */
function goHome() {
    if (page.getCurPage() != 'home') {
		if (page.getCurPage() == "browseStu") {
			// remove the Browse Student Page
			$("#browseStuPage").remove();
		}
		else {
			// adjust the pages that are shown
			// Hide the current page & make browse student the new current page
			var curSelector = '#' + page.getCurPage()+"Page";
		    $(curSelector).css("display","none");
		}
		    
	    // display the current page
	    $("#homePage").css("display","block");
		page.setCurPage("home");	
    }
			  		
}

/* function to build the course management page */
function goCourseMgt() {
    if (page.getCurPage() != 'crseMgmt') {
		if (page.getCurPage() == "browseStu") {
			// remove the Browse Student Page
			$("#browseStuPage").remove();
		}
		else {
			// adjust the pages that are shown
			// Hide the current page & make browse student the new current page
			var curSelector = '#' + page.getCurPage()+"Page";
		    $(curSelector).css("display","none");
		}
		
		// if the page already has rows displayed, remove them first.
		var courses = $('#crseMgmtTable tbody');
		if ($(courses.children().length < 1)) {
			$(courses).empty();
		}
		
		// add the rows for the courses
		addCourseRows();
		    
	    // display the course management
	    $("#crseMgmtPage").css("display","block");
		page.setCurPage("crseMgmt");	
    }
    // Assert: Course Management Page is Displayed.
}

/* addCourseRows calls a web service to retrieve the rows in the course
   table and formats those rows as HTML table rows.  The HTML formatted
   rows are returned.
 */
   
function addCourseRows() {
	// add some test courses to the page
	
    var rows = "";
    for (var i=0; i < 10; i++) {
        rows += "<tr>" + 
                    '<td class="crseID">' + i + "</td>" + 
                    "<td>" + "CSCI" + "</td>" + 
                    "<td>" + (100+i) + "</td>" +
                    "<td>" + "Computer Science-" + i + "</td>" +
                    '<td><span>' + "This is a fake course" + "</span></td>" +
                    "<td>" + 3 + "</td>" +
        	   "</tr>";
        }
        
        // make an element from the rows
        var rowsEle = $(rows);
        
        // put the table
        $("#crseMgmtTable tbody").append(rowsEle);
}

/* Add course event handler. */
function addCourse() {
   alert("TO TO: 1) Add edit row  to course table.\n2) Unhide save button.\n3) Get data from form.\n4) Validate data.\n5)Post data to database.");
}

/* Delete course event handler. */
function delCourse() {
	   alert("TO TO: 1) Unhide checkbox column.\n 2) Unhide delete button.\n3) Get data from form.\n4) Post data to database.");
	}

function goFindSchedule() {
    alert('To Do: \n\nWrite the schedule system.');
}