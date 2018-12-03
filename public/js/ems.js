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
    
    // Shut the menu if open
    $(".collapse").collapse('hide');
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
	// Shut the menu if open
    $(".collapse").collapse('hide');		  		
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
		
		// Add the rows for the courses by making an AJAX call
        // to the courses api.  Note: Initial interface development
        // will include retrieving only courses for the CSCI 
        // department
        
        $.get("/api/courses?dept=CSCI", addCourseRows);
		    
	    // display the course management
	    $("#crseMgmtPage").css("display","block");
		page.setCurPage("crseMgmt");	
    }
    // Assert: Course Management Page is Displayed.
    // Shut the menu if open
    $(".collapse").collapse('hide');
}

/* addCourseRows calls a web service to retrieve the rows in the course
   table and formats those rows as HTML table rows.  The HTML formatted
   rows are returned.
 */
   
function addCourseRows(rows) {
    var rowHTML = "";
    for (var i=0; i < rows.length; i++) {
        rowHTML += "<tr>" + 
                    '<td class="crseID">' + rows[i]._id + "</td>" + 
                    "<td>" + rows[i].dept + "</td>" + 
                    "<td>" + rows[i].number + "</td>" +
                    "<td>" + rows[i].name + "</td>" +
                    '<td><span>' + rows[i].desc.substring(0,20) + " ..."+ "</span></td>" +
                    "<td>" + rows[i].creditHr + "</td>" +
        	   "</tr>";
        }
        
        // make an element from the rows
        var rowsEle = $(rowHTML);
        // put the table
        $("#crseMgmtTable tbody").append(rowsEle);
}

/* Add course event handler. */
function addCourse() {
   $('menu-content').collapse('hide');
   alert("TO TO: 1) Add edit row  to course table.\n2) Unhide save button.\n3) Get data from form.\n4) Validate data.\n5)Post data to database.");
}

/* Delete course event handler. */
function delCourse() {
	   alert("TO TO: 1) Unhide checkbox column.\n 2) Unhide delete button.\n3) Get data from form.\n4) Post data to database.");
	}

function goFindSchedule() {
    // Shut the menu if open
    $(".collapse").collapse('hide');
    alert('To Do: \n\nWrite the schedule system.');
}