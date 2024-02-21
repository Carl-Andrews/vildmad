//https://eswqosjuxxhslqrooapo.supabase.co/rest/v1/wild_food_gather
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzd3Fvc2p1eHhoc2xxcm9vYXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDEyMTAsImV4cCI6MjAyMzQ3NzIxMH0.gd6T8bVc5WRSI-CgOKj7B4vpnTFDECsZCBAVz90W3HM
console.log("test");


const urlParams = new URLSearchParams(window.location.search)
const urlInfo = urlParams.get('Urlinfo')
console.log(urlInfo)

fetch(`https://eswqosjuxxhslqrooapo.supabase.co/rest/v1/wild_food_gather?season=eq.${urlInfo}`, {
    method: "GET",
    headers:{
        apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzd3Fvc2p1eHhoc2xxcm9vYXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDEyMTAsImV4cCI6MjAyMzQ3NzIxMH0.gd6T8bVc5WRSI-CgOKj7B4vpnTFDECsZCBAVz90W3HM"
    },
})
    .then((res)=>res.json())
    .then(showDatas);

function showDatas(datas){
    datas.forEach(showData);
    // console.log(datas + 'test');
}

function showData(data){
    console.log(data);
    //fange template

const template = document.querySelector("#listViewTemplate").content;
    //lav kopi
const copy = template.cloneNode(true);
   //ændre inddhold 
   copy.querySelector("h3").textContent = data.name;
   copy.querySelector("img").src= data.profile_picture;
   copy.querySelector("a").href = `singleview.html?id=${data.id}`;
   
           //appende
   document.querySelector(".viewList-Container").appendChild(copy);
}

