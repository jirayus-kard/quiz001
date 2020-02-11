// Pure javascript - Add 'submit' event listener to form with id="myForm"
// more info: https://www.w3schools.com/js/
document.querySelector('#bookmark-form').addEventListener('submit', function(e) {
    console.log("Submittied"); 
    let s = document.querySelector('#sitename');
    let u = document.querySelector('#URL');
    let siteArray = localStorage.getItem('site') ? JSON.parse(localStorage.getItem('site')) : [];
    let UArray = localStorage.getItem('UR') ? JSON.parse(localStorage.getItem('UR')) : [];

    localStorage.setItem('site', JSON.stringify(siteArray));
    localStorage.setItem('UR', JSON.stringify(UArray));
    let si = JSON.parse(localStorage.getItem('site'));
    let ul = JSON.parse(localStorage.getItem('UR'));

    const liMaker = text => {
        const li = document.createElement('li')
        li.textContent = text
        h2.appendChild(li)
      }

});
   
   // or JQuery - Add 'submit' event listener to form with id="myForm"
   // more info: https://www.w3schools.com/jquery/default.asp
  /*$("bookmark-form").submit(function(e){
     console.log("Submitted");
   });*/