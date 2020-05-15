//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}



function makePageForEpisodes(episodeList) {
  let header = document.getElementById("header")
  let searchBar = document.createElement("input")
     searchBar.type = "search"
     searchBar.placeholder = "Search Now"
     header.appendChild(searchBar)


  const rootElem = document.getElementById("root");

  for (let i = 0; i < episodeList.length; i++){
  let rect = document.createElement("div")
  //styling of ep divs
  rect.style.backgroundColor = "darkgrey";
  rect.style.border = "2px solid black"
  rect.style.margin = "10px"
  rect.style.width = "360px";
  rect.style.height = "410px"
  rect.style.textAlign = "center"
  rect.style.justifyContent = "space-evenly"
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  
  let epTitle = document.createElement("h1")
  //let title = episodeList.map(e => e.name)
  rootElem.appendChild(rect)
  epTitle.textContent = `${episodeList[i].name} - S${episodeList[i].season} E${episodeList[i].number}`;
  epTitle.style.backgroundColor = "palegreen"
   rect.appendChild(epTitle)

   let epImage = document.createElement("img")
   epImage.src = episodeList[i].image.medium
   rect.appendChild(epImage)

   let epSum = document.createElement("p")
   epSum.textContent = `${episodeList[i].summary}`
   rect.appendChild(epSum)

}
}

window.onload = setup;
