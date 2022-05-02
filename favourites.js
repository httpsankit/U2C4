var tbody=document.querySelector('tbody')
var fax_data
if(JSON.parse(localStorage.getItem("favourites"))==null)
{
    fax_data=[]
}
else{
    fax_data= JSON.parse(localStorage.getItem("favourites"))
}

for(var i = 0 ; i < fax_data.length;i++)
{
    var tr= document.createElement('tr')

    var td1= document.createElement('td')
     td1.innerText= fax_data[i].m_num;
    var td2= document.createElement('td')
    td2.innerText= fax_data[i].teamA;
    var td3= document.createElement('td')
     td3.innerText= fax_data[i].teamB;
    var td4= document.createElement('td')
    td4.innerText= fax_data[i].date;
    var td5= document.createElement('td')
    td5.innerText= fax_data[i].venue;
    var td6= document.createElement('td')
    td6.innerText= "Delete";
    td6.style.cursor="pointer"
    td6.style.backgroundColor="red"
    td6.addEventListener("click",deletex)

    
    
    tr.append(td1,td2,td3,td4,td5,td6)
    tbody.append(tr)
}
function deletex(){
event.target.parentNode.remove()
}