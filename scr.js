/*
comments








*/
console.log("testing scripts")



//listen for submitting form
//onclick = "saveBookmark()"
/*
var submitted = document.getElementById('myForm');
if (submitted != null) {
    submitted.addEventListener('submit', saveBookmark);
}
*/
document.getElementById('Form').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark(e) {
   // console.log ('jlkdjf ');
   //get form values
   var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteURL').value;

    if (!validateForm(siteName, siteUrl)) {
        return false;
    }
 /*
    if (!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
    alert ('Please use a valid URL');
    return false;
    }
*/
    console.log(`site name ${siteName} site url ${siteUrl}`);


    var bookmark = {
        name : siteName, 
        url: siteUrl
    }
    console.log('sdcs', bookmark);

    /*
//local storage test
localStorage.setItem('test', 'hello world');
console.log(localStorage.getItem('test'));
console.log("skfjs");
localStorage.removeItem('test');
console.log(localStorage.getItem('test'));
*/

//test if bookmarks null or empty
// 'bookmarks'

if (localStorage.getItem('bookmarks') === null) {
   // console.log(JSON.parse(localStorage.getItem('Bookmarks').length));
    //Init array
    var bookmarks = [];
    //add to array
    bookmarks.push(bookmark);
    //set to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    console.log('dkfj', bookmarks);
} else   {
//if (localStorage.getItem('Bookmarks') !== null)  {
 //   console.log('else ', bookmarks);
    //get bookmarks from local storage
   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   console.log('else ', bookmarks);
    //add bookmark to array
   bookmarks.push(bookmark);
    console.log(bookmarks);
    //re - set back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

//clear form
document.getElementById('Form').reset();

//re-fetch bookmarks
fetchBookmarks();
    //methods prevent default - prevent form from submitting
    e.preventDefault();
}//end SAVE bookmarks



//delete bookmarks
function deleteBookmark(url) {
    console.log(url);
   //get bk from localstorage
   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   //loop through bookmarks
   for (var i = 0; i < bookmarks.length; i++ ) {
       if (bookmarks[i].url == url) {
           //remove from array
           bookmarks.splice(i, 1);
       }
   }
     //re - set back new values after deleting url to local storage
     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     //re-fetch bookmarks
     fetchBookmarks();
}

function goLink(url) {
    console.log('travel url', url);
   
    
}


//fetch bookmarks-------------------------------------------------------------------
function fetchBookmarks() {


    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // get output id
    var bookmarksResults = document.getElementById('bookmarkResults');

    //build output
   // bookmarksResults.innerHTML = 'hEllo fetching'
   bookmarksResults.innerHTML = '';
   
   for ( var x = 0; x < bookmarks.length; x++   ) {
       var name = bookmarks[x].name;
       var url = bookmarks[x].url;
       console.log('lsting', name, url);

      // bookmarksResults.innerHTML += `<span> ${name} -- ${url} </span><br>`;
      /*
      bookmarksResults.innerHTML += `<div class = "well"> 
                                    <h3>${name}` +
                                    `<a class = "btn btn-default" target = "_blank" href = "${url}"    >Visit</a>` + 
                                    `<a onclick = 'deleteBookmark(\''+url+'\')'  class = "btn btn-danger" target = "_blank" href = '#'    >Delete</a>` + 
                                    `</h3>`;
    */
        bookmarksResults.innerHTML = '';
        for(var i = 0; i < bookmarks.length; i++){
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;
        
            bookmarksResults.innerHTML +=
                                       '<div class="well">'+
                                        '<h3>'+name+
                                       // '<a onclick = " goLink() "    target = "_blank"  class = "btn btn-default"   href = "http://google.com">jsk</a>' + 

                                        `</br></br> <a class = "btn btn-default" target = "_blank" href = "${url}" >Visit </a>` +
                                        ' <a onclick = "deleteBookmark(\''+url+'\')" class ="btn btn-danger"  href="#">Delete</a> ' +
                                      //' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                        '</h3>'+
                                        '</div>';

/*
bookmarksResults.innerHTML += '<div class="well">'+
'<h3>'+name+
' <a class="btn btn-default" target="_blank" href="'+(url)+'">Visit</a> ' +
' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
'</h3>'+
'</div>';

*/

        }
console.log('this is fetching', bookmarks)

    }
} //end function fetchbookmarks


//validate form function--------------------------------------
function validateForm(siteName, siteUrl) { 

    if (!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
    alert ('Please use a valid URL');
    return false;
    }

    //if valid url return true
    return true;
}


/* end of bookmarking */
