//counter code
var button= document.getElementById('counter');
button.onclick = function (){
//create a request
var request= new XMLHttpRequest();
//capture response and store it in a variable
request.onreadystatechange = function (){
    if(request.readyState === XMLHttpRequest.DONE) {
          //take some actions
           if(request.status === 200) {
            var counter=request.responseText;
             var span=document.getElementById('count');
              span.innerHTML=counter.toString();
            }
       }
    //not done yet
};
  //make a request
  request.open('GET', 'http://vishnumohankv.imad.hasura-app.io/counter',true);
  request.send(null);
  
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('sbmt_btn');
submit.onclick = function() {
    //make rqst to the server and send the name
     
     //capture the names and render it as a list
     var names = ['name1','name2','name3','name4','name5'];
     var list = '';
     for(var i=0; i<names.length; i++){
         list += '<li>'+ names[i] +'</li>';
         
     }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};