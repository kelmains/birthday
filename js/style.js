
$(document).ready(function(){
    $("#Birthday").submit(function(event){
      event/preventDefault();
      var Birthday=$("input#Date").val();
      var Gender=$("select#Gender").val();
      var fName=$("inpute#fName").val();


var days =['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
var mNames =['Kwasi', 'Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var fNames = ['Akosua', 'Adwoa', 'Abenaa','Akua', 'Yaa','Afua'];\

var d =new Date(Birthday);
var dayName =days[d.getDay()];
var Name=""

if (Gender=="Male"){
  switch (dayName) {
    case 'Sunday':
    Name= mNames[0];
      break;
    case 'Monday':
      Name = mNames[1];
        break;
        case 'Tuesday':
        Name = mNames[2];
          break;
        case 'Wednesday':
        Name = mNames[3];
          break;
        case 'Thursday':
        Name = mNames[4];
          break;
        case 'Friday':
        Name = mNames[5];
          break;
        case 'Saturday':
        Name = mNames[6];
          break;
    default:
  }
}
else {
  switch (dayName) {
    case 'Sunday':
    Name =fNames[0];
      break;
    case 'Monday':
    Name = fNames[1];
      break;
    case 'Tuesday':
    Name = fNames[2];
      break;
    case 'Wednesday':
    Name = fNames[3];
      break;
    case 'Thursday':
    Name = fNames[4];
      break;
    case 'Friday':
    Name = fName[5];
      break;
    case 'Saturday':
      Name =fNames[6];
      break;
    default:
  }
}
 document.getElementById('name').innerHTMl = "Your Akan name is" <b>"+Name+"</b> since you were born on "+dayName";
 $("#output").text(name);
});
});
