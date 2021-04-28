


function createPost(link) {

    let bodyElement = document.body;
    //The document.createElement() method create html elements specified by tagName
    

    let imageElement = document.createElement('img');



    //The ClassName property gets and sets the value of the class attribute of the spefified element
    
    imageElement.className = "image";
    imageElement.id="imgg";
    

    download(link);


    // This sets the value of an attribute specified element. If exists then will be updated, otherwise the new attribute is added with the specified name and value
  
    imageElement.setAttribute("alt", "Image from Unsplash");


  }

 
  function download(link adress) {
    /*let hashBtn = document.getElementById("hash") || this;
    let url = hashBtn.innerHTML;*/
    let url= link;
    console.log(url);

    if (!url) return;
 
 
    const req = new XMLHttpRequest();
    req.responseType = "text/html";
 
    req.onload = function(e) {
      var img = new Image();
      
      document.getElementById("imgg").src = this.response;
    }
 
  }

