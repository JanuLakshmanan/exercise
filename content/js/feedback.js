const trname=document.getElementById("tname");
const faname=document.getElementById("fname");
const parname=document.getElementById("pname");
const emid=document.getElementById("eid");


const submit=document.getElementById("submit");
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
 table='';
function display()
{
   
    training_name=trname.value;
    faculty_name=faname.value;
    participant=parname.value;
    employee_id=emid.value;
    if(training_name!=""&&faname!=""&&participant!=""&&employee_id!="")
  { 
    table+=`<tr><td>${training_name}</td><td>${faculty_name}</td><td>${participant}</td><td>${employee_id}</td><td style="background-color:green;">Feedback submitted</td></tr>`;
  document.getElementById("feedbacktable").innerHTML=table;
  trname.value="";
  faname.value="";
  parname.value="";
  emid.value="";} 

}


submit.addEventListener("click",display);