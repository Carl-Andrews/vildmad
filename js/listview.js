// Indhenter URL-parametre fra den aktuelle sides URL
const urlParams = new URLSearchParams(window.location.search);
// Henter værdien af parameteren 'Urlinfo'
const urlInfo = urlParams.get('Urlinfo');
// Udskriver værdien af 'Urlinfo' til konsollen
console.log(urlInfo);

// Foretager en fetch-anmodning til det angivne API-endepunkt med 'season' parameteren baseret på 'Urlinfo'
fetch(`https://eswqosjuxxhslqrooapo.supabase.co/rest/v1/wild_food_gather?season=eq.${urlInfo}`, {
    // Angiver anmodningens metode som GET
    method: "GET",
    // Indeholder nødvendige headers, såsom API-nøglen
    headers:{
        apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzd3Fvc2p1eHhoc2xxcm9vYXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDEyMTAsImV4cCI6MjAyMzQ3NzIxMH0.gd6T8bVc5WRSI-CgOKj7B4vpnTFDECsZCBAVz90W3HM"
    },
})
    // Behandler responsen som JSON
    .then((res)=>res.json())
    // Kalder funktionen 'showDatas' med det parsede datasæt som argument
    .then(showDatas);

// Funktion til at vise datasæt
function showDatas(datas){
    // Gennemløber hvert datasæt og kalder funktionen 'showData' for hvert af dem
    datas.forEach(showData);
}

// Funktion til at vise data
function showData(data){
    // Udskriver data til konsollen
    console.log(data);
    
    // Henter indholdet af skabelonen med id 'listViewTemplate'
    const template = document.querySelector("#listViewTemplate").content;
    // Kloner skabelonen
    const copy = template.cloneNode(true);
   // Ændrer indholdet af klonen
   copy.querySelector("h3").textContent = data.name;
   copy.querySelector("img").src= data.profile_picture;
   copy.querySelector("a").href = `singleview.html?id=${data.id}`;
   
   // Tilføjer klonen til DOM'en
   document.querySelector(".viewList-Container").appendChild(copy);
}