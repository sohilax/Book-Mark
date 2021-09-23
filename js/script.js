var siteName =document.getElementById('siteName');
var siteUrl =document.getElementById('siteUrl');
var nameError =document.getElementById('nameError');
var urlError =document.getElementById('urlError');
var submit =document.getElementById('submit')

var bookContainer = [];
if (localStorage.getItem('ourBooks') != null) {
    bookContainer = JSON.parse(localStorage.getItem('ourBooks'));
    displayBooks();
}

function addBook() {
    nameError.classList.replace('d-flex','d-none');   
    urlError.classList.replace( 'd-flex','d-none'); 
    if (siteName.value==""&& siteUrl.value=="")
    {
        nameError.classList.replace('d-none', 'd-flex');   
        urlError.classList.replace('d-none', 'd-flex'); 
    } 
    else if(siteName.value=="")
    {
        nameError.classList.replace('d-none', 'd-flex'); 
    }
    else if (siteUrl.value=="")
    {
        urlError.classList.replace('d-none', 'd-flex');
    }
    else 
    {
    var book ={
        name:siteName.value,
        url:siteUrl.value,
    }
     bookContainer.push(book);
     localStorage.setItem('ourBooks', JSON.stringify(bookContainer));
     displayBooks();
     clearForm();
    } 
 }
 function clearForm()
 {
    siteName.value="";
    siteUrl.value="";  
 }
 function displayBooks() {
    var arrayContainer = ` `; //with out value undefined
    for (i = 0; i < bookContainer.length; i++) {
        arrayContainer += ` <div class="webwell d-flex justify-content-between" id="  ">
        <h2> <span>${i+1} - </span> ${bookContainer[i].name}</h2>
        <div>
        <a class="btn btn-primary" href=" ${bookContainer[i].url} " target="_blank">visit</a>
        <button onclick="deleteBook(${i})" class="btn btn-danger btndelete">Delete</button>
    </div>
    </div>` ;
    }
    document.getElementById("bookmarkList").innerHTML = arrayContainer;
}
function deleteBook(index) {
    bookContainer.splice(index, 1)
    localStorage.setItem('ourBooks', JSON.stringify(bookContainer));
    displayBooks();
}
submit.addEventListener('click', addBook);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' ) {
        addBook();
    }
});