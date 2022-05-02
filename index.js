// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener('submit',sendToDb)
var datac
if(JSON.parse(localStorage.getItem("schedule"))==null)
{
    datac=[]
}
else{
    datac= JSON.parse(localStorage.getItem("schedule"))
}
function sendToDb(){
    event.preventDefault()
   
   var datax={
       match_num:document.getElementById("matchNum").value,
       teamA:document.getElementById("teamA").value,
       teamB:document.getElementById("teamB").value,
       date:document.getElementById("date").value,
       venue:document.getElementById("venue").value
   } 

datac.push(datax)
   
console.log(datac)
localStorage.setItem("schedule",JSON.stringify(datac))

}