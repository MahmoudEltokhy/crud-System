

var bookmarkNameInput = document.getElementById("bookmarkName");
var siteUrlInput = document.getElementById("siteUrl"); 
var visitBtnInput = document.getElementById("visitBtn");


var bookmarkArray = [] ;

if(localStorage.getItem("websites") != null){



bookmarkArray = JSON.parse(localStorage.getItem("websites")); 

displayBookMark();


}


function addBookMark(){


    if(userNameRegex() && siteUrlRegex()){

        var index = {

            name:bookmarkNameInput.value,
            url:siteUrlInput.value,
        }
    
        bookmarkArray.push(index); 
        displayBookMark();
        localStorage.setItem("websites", JSON.stringify(bookmarkArray)); 
    
        clearForm();
    }

    else{

        alert("pleaser Enter Valid Data");
    }





}


function displayBookMark(){


    var cartona = ''; 


    for(var i = 0 ; i < bookmarkArray.length ; i++)
    {
        cartona+=`

        <tr>
              <td> ${ bookmarkArray[i].name} </td>
              <td> ${bookmarkArray[i].url}</td>
              <td><a href = "${bookmarkArray[i].url}"  target="_blank" id="visitBtn" class="btn btn-sm btn-info" onclick ="visitWebsite(${i})">Visit</a></td>
              <td><button class="btn btn-sm btn-danger" onclick ="deleteWebsite(${i})">Delete</button></td>
        </tr>
        `
    }

    document.getElementById("tableData").innerHTML = cartona;





}

function deleteWebsite(websiteNumber){

    bookmarkArray.splice(websiteNumber ,1); 
    localStorage.setItem("websites", JSON.stringify(bookmarkArray)); 
    displayBookMark();
}

function visitWebsite(elementNumber){

    var index = elementNumber;
    var x  = bookmarkArray[index].url; 

    x = x.toString();
    

   



}

function clearForm(){

    bookmarkNameInput.value="";
    siteUrlInput.value = "";
}







function userNameRegex(){


    warningAlert = document.getElementById("warningAlert");


    var regex = /^[A-Za-z][a-z]{2,20}\s?([a-zA-z]{2,20})?$/; 

    

    if(regex.test(bookmarkNameInput.value) ){

        bookmarkNameInput.classList.add("is-valid");
        bookmarkNameInput.classList.remove("is-invalid");
        warningAlert.classList.add("d-none");
        return true;



    }

    else{

        bookmarkNameInput.classList.add("is-invalid");
        bookmarkNameInput.classList.remove("is-valid");
        warningAlert.classList.remove("d-none");
        return false;
        
    }









}


function siteUrlRegex(){


    var regex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

    var urlName = document.getElementById("warningAlert2"); 

    if(regex.test(siteUrlInput.value)){

        siteUrlInput.classList.add("is-valid");
        siteUrlInput.classList.remove("is-invalid");
        urlName.classList.add("d-none");
        return true;
    }

    else{
        siteUrlInput.classList.add("is-invalid");
        siteUrlInput.classList.remove("is-valid");
        urlName.classList.remove("d-none");
        return false;
    }
}