// Opretter en ny URLSearchParams-objekt baseret på søgestrengen i den aktuelle sides URL
const parameter = new URLSearchParams(window.location.search);
// Henter værdien af parameteren 'id' fra URL'en
const id = parameter.get("id");

// Konstruerer API-URL'en ved at inkludere 'id'-parameteren
const apiURL = `https://eswqosjuxxhslqrooapo.supabase.co/rest/v1/wild_food_gather?id=eq.${id}`;

// Foretager en fetch-anmodning til den specificerede API-URL med de angivne indstillinger
fetch(apiURL, {
    method: "GET",
    headers: {
        // Indeholder nødvendige headers, herunder API-nøglen til godkendelse
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzd3Fvc2p1eHhoc2xxcm9vYXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDEyMTAsImV4cCI6MjAyMzQ3NzIxMH0.gd6T8bVc5WRSI-CgOKj7B4vpnTFDECsZCBAVz90W3HM",       
    },
})
    // Behandler responsen som JSON
    .then((res) => res.json())
    // Kalder funktionen 'showData' med det parsede datasæt som argument
    .then(showData)
    // Håndterer eventuelle fejl under hentning af data
    .catch(error => console.error('Fejl ved hentning af data:', error));

// Funktion til at vise data
function showData(items) {
    // Udskriver de modtagne elementer til konsollen
    console.log(items);
    // Tjekker om der er elementer modtaget
    if (items.length > 0) {
        // Henter det første element, da der antages, at der kun forventes ét element
        const item = items[0];
        // Opdaterer HTML-elementer med de modtagne data
        document.querySelector(".list_tittle").textContent = item.name;
        document.querySelector(".tekst").textContent = item.description;
        document.querySelector(".biotop").textContent = item.biotope;
        document.querySelector(".maeneder").textContent = item.month;
        document.querySelector(".type").textContent = item.categori;
        document.querySelector(".biotop_img").src = item.biotope_img;
        document.querySelector(".item_img").src = item.profile_picture;
    } else {
        // Udskriver en besked til konsollen, hvis der ikke blev fundet nogen elementer
        console.log("Intet element fundet");
    }
}