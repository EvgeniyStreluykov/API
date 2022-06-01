document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    apiRequest();
});

document.querySelector("#search").addEventListener("click", () => {
    apiRequest();
});

apiRequest = () => {
  document.querySelector("#grid").textContent = "";

  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

  fetch(url)
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      
    return response.json();
   })
   .then(data => {
      loadImages(data);
   })
   .catch(error => console.log(error));
}

loadImages = (data) => {
  for(let i = 0; i < data.results.length; i++) {
    const image = document.createElement("div");

    image.className = "img";
    
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    
    image.addEventListener("dblclick", function() {
      window.open(data.results[i].links.download, '_blank', rel = "noopener noreferrer");
    })
    
    document.querySelector("#grid").appendChild(image);
  }
}

window.onscroll = () => {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

bgcolor = () => {
  const date = new Date();
  const hour = date.getHours();

  if(hour >= 10 && hour < 20){
    document.body.style.backgroundColor = '#dee9fa';
    document.body.style.color = '#000';
  }
  else{
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#dee9fa';
  }
}

window.addEventListener('load', bgcolor);
