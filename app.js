//Treehouse Techdegree Javascript Project 2
var studentList = document.getElementsByClassName('student-list')[0];
var studentNumber = studentList.children.length;
var pagination = '<div class="pagination"><ul></ul></div>';
var searchInput = document.getElementById("search"); 

//set up initial dispaly for 10 students
function initialDisplay(){
    
    //make all the students disappear
    for (i=0; i<studentNumber; i++){
        studentList.children[i].style.display = "none";
    }
    //show up only first 10 students 
    for (i=0; i<10; i++){
        studentList.children[i].style.display = "block";
    } 
}

//function for show certain group of students as user click certain page
function showPage(pageNumber){
    //make all stduents disappear
    for (i=0; i<studentNumber; i++){
        studentList.children[i].style.display = "none";
    }
    //set up the first student that is gonna show up in that page by multiplying 10
    //since each page has 10 students
    var startingStudent = pageNumber*10;
    //set up the last student that is gonna show up in that page by multiplying 10
    //since each page has 10 students
    var endingStudent = pageNumber*10 + 10;
    //in case last page does not have 10 students, if endingStudent is more than the students in the list, we use the number of student instead
    if (endingStudent > studentNumber){
        endingStudent = studentNumber;
    }
    //show those students 
    for (j=startingStudent; j<endingStudent; j++){
        studentList.children[j].style.display = "block";
    } 
    
}

//Build pagination
function paginationBuilder(){
    //append those code into the page
    $(".page").append(pagination);
    //calculate the page we need
    var page = Math.ceil(studentNumber/10);
    //loop through page to place the page number
    for(i=0; i<page; i++){
        //since page starts from 1 and index start from 0, we +!
        var pageNumber = i+1;
        $(".pagination ul").append('<li><a href="#">' + pageNumber + '</a></li>');
}
    //by default, we start from first page. So we add first child active.
    $('.pagination ul li a').first().addClass('active');
    $('.pagination ul li a').on("click", function(){
        //get the number from the pagination button
        var pageSelection = parseInt($(this)[0].text)-1;
        showPage(pageSelection);
        //remove the current active class we have and assign it to the current pagination we click
        $(".pagination ul li a").removeClass();
	    $(this).addClass("active");
    }
                                )
}
  
function searchBuilder(){
    //when user click the search button, find the content that user puts into the input box
    $('.student-search button').on("click", function(){
        var searchInput = document.getElementById("search");
        //set boolean to indicate that whether or not the input is in the list
        var CannotFind = true;
        for(i=0; i<studentNumber; i++){
            studentList.children[i].style.display = "none";
            var studentName = studentList.children[i].getElementsByTagName("h3")[0].firstChild.nodeValue;
            //when the input fully match the student name, display that name
            if (searchInput.value === studentName){
                studentList.children[i].style.display = "block";
                CannotFind = false;
            }
            //if the input doesn't fully match, check if the input is someone's first name or last name.
            else{
                var fullName = studentName.split(' ');
                var firstName = fullName[0];
                var lastName = fullName[1];
                if (searchInput.value === firstName){
                    studentList.children[i].style.display = "block";
                    CannotFind = false;
                }
                else if (searchInput.value === lastName){
                    studentList.children[i].style.display = "block";
                    CannotFind = false;
                }
            }
        }
        //if no student is found, indicate that no results.
        if(CannotFind){
            $('.page-header h2').text('No Results');
        }
        else{
            $('.page-header h2').text('Students');
        }
    }
                                   )
}
                                   
    
    
    
initialDisplay();
paginationBuilder();
searchBuilder();

