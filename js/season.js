fetch(`https://eswqosjuxxhslqrooapo.supabase.co/rest/v1/wild_food_gather/${categoi}.`, {
    method: "GET",
    headers:{
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzd3Fvc2p1eHhoc2xxcm9vYXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDEyMTAsImV4cCI6MjAyMzQ3NzIxMH0.gd6T8bVc5WRSI-CgOKj7B4vpnTFDECsZCBAVz90W3HM"
    },
})
.then((res) => res.json())
.then(dataRecieved)

function dataRecieved (data) {
    data.forEach(showCategories)
  }
  
  function showCategories (showCategory) {
    const myCategory = document.querySelector('.templateseason').content
    const myClone = myCategory.cloneNode(true)
  
    myClone.querySelector('h2').textContent = showCategory.season
    myClone.querySelector(
      'a'
    ).href = `listview.html?season=${showCategory.season}`
  
    const parentElement = document.querySelector('main')
    parentElement.appendChild(myClone)
  }

