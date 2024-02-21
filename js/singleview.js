

const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");

const apiURL = `https://eswqosjuxxhslqrooapo.supabase.co/rest/v1/wild_food_gather?id=eq.${id}`;

fetch(apiURL, {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzd3Fvc2p1eHhoc2xxcm9vYXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDEyMTAsImV4cCI6MjAyMzQ3NzIxMH0.gd6T8bVc5WRSI-CgOKj7B4vpnTFDECsZCBAVz90W3HM",
        
    },
})
    .then((res) => res.json())
    .then(showData)
    .catch(error => console.error('Error fetching data:', error));

function showData(items) {
    console.log(items);
    if (items.length > 0) {
        const item = items[0]; // Assuming you're expecting only one item
        document.querySelector(".list_tittle").textContent = item.name;
        document.querySelector(".tekst").textContent = item.description;
        document.querySelector(".biotop_img").src = item.biotope_img;
        document.querySelector(".item_img").src = item.profile_picture;
    } else {
        console.log("No item found");
    }
}