//Treehouse Techdegree Javascript Project 2
var studentList = document.getElementsByClassName('student-list')[0];
var studentNumber = studentList.children.length;
var pagination = '<div class="pagination"><ul></ul></div>';
var searchInput = document.getElementById("search"); 

function initialDisplay(){
    
    for (i=0; i<studentNumber; i++){
        studentList.children[i].style.display = "none";
    }
    for (i=0; i<10; i++){
        studentList.children[i].style.display = "block";
    } 
}

function showPage(pageNumber){
    
    for (i=0; i<studentNumber; i++){
        studentList.children[i].style.display = "none";
    }
    var startingStudent = pageNumber*10;
    var endingStudent = pageNumber*10 + 10;
    if (endingStudent > studentNumber){
        endingStudent = studentNumber;
    }
    for (j=startingStudent; j<endingStudent; j++){
        studentList.children[j].style.display = "block";
    } 
    
}

function paginationBuilder(){
    $(".page").append(pagination);
    var page = Math.ceil(studentNumber/10);
    for(i=0; i<page-1; i++){
        var pageNumber = i+1;
        $(".pagination ul").append('<li><a href="#">' + pageNumber + '</a></li>');
}
    $('.pagination ul li a').first().addClass('active');
    $('.pagination ul li a').on("click", function(){
        var pageSelection = parseInt($(this)[0].text);
        console.log(pageSelection);
        showPage(pageSelection);
        $(".pagination ul li a").removeClass();
	    $(this).addClass("active");
    }
                                )
}
  
function searchBuilder(){

    $('.student-search button').on("click", function(){
        var searchInput = document.getElementById("search");
        var CannotFind = true;
        for(i=0; i<studentNumber; i++){
            studentList.children[i].style.display = "none";
            var studentName = studentList.children[i].getElementsByTagName("h3")[0].firstChild.nodeValue;
            if (searchInput.value === studentName){
                studentList.children[i].style.display = "block";
                CannotFind = false;
            }
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

