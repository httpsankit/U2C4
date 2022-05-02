// write js code here corresponding to matches.html


var tbody=document.querySelector('tbody')
var match_data
if(JSON.parse(localStorage.getItem("schedule"))==null)
{
    match_data=[]
}
else{
    match_data= JSON.parse(localStorage.getItem("schedule"))
}

for(var i = 0 ; i < match_data.length;i++)
{
    var tr= document.createElement('tr')

    var td1= document.createElement('td')
     td1.innerText= match_data[i].match_num;
    var td2= document.createElement('td')
    td2.innerText= match_data[i].teamA;
    var td3= document.createElement('td')
     td3.innerText= match_data[i].teamB;
    var td4= document.createElement('td')
    td4.innerText= match_data[i].date;
    var td5= document.createElement('td')
    td5.innerText= match_data[i].venue;
    var td6= document.createElement('td')
    td6.innerText= "Favourite";
    td6.style.cursor="pointer"
    td6.style.backgroundColor="green"
    td6.addEventListener("click",sendToFav)

    
    
    tr.append(td1,td2,td3,td4,td5,td6)
    tbody.append(tr)
}
// console.log(match_data)
var fab_data

if(JSON.parse(localStorage.getItem("favourites"))==null)
{
    fab_data=[]
}
else{
    fab_data= JSON.parse(localStorage.getItem("favourites"))
}


function sendToFav(){
    var xmatch= event.target.parentNode.firstChild.innerText
    var xteamA= event.target.parentNode.firstChild.nextSibling.innerText
    var xteamB= event.target.parentNode.firstChild.nextSibling.nextSibling.innerText
    var xdate= event.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerText
    var xvenue= event.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerText
    // console.log(xmatch)

    var xdata= {
        m_num:xmatch,
        teamA:xteamA,
        teamB:xteamB,
        date:xdate,
        venue:xvenue
    }
    fab_data.push(xdata)
    // console.log(fab_data)
localStorage.setItem("favourites",JSON.stringify(fab_data))

}


