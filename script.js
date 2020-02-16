var malesNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femalesNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuday"];

function getName(){
    var day=parseInt(document.getElementById("day").value);
    var month=parseInt(document.getElementById("month").value);
    var year=parseInt(document.getElementById("year").value);
    var male=document.getElementById("male");
    var female=document.getElementById("female");   
}

if(day<=0||day>31){
    alert("please enter a valid date!)
}
else if(month<=0||month>12){
    alert("please enter a valid month!")
}
else if(year>2020){
    alert("please enter a valid year!")
}
var day= new Date(year + "/" + month + "/" + day);
var birthday=day.getDay();
if(male.checked==true){
    document.getElementById("result").innerHTML="You were born on a "+daysOfWeek[birthDay]+ "your Akhan name is"+ malesNames[birthDay]
}
else if(female.checked==true){
    document.getElementById("result").innerHTML="You were born on a "+daysOfWeek[birthDay]+ "your Akhan name is"+ femalesNames[birthDay]
}