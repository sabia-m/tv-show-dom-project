//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}



function makePageForEpisodes(episodeList) {

  const rootElem = document.getElementById("root");
  for (let i = 0; i < episodeList.length; i++){
  let rect = document.createElement("div")
  //styling of ep divs
  rect.style.backgroundColor = "indianred";
  rect.style.border = "2px solid black"
  rect.style.margin = "10px"
  rect.style.width = "360px";
  rect.style.height = "410px"
  rect.style.textAlign = "center"
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  
  let epTitle = document.createElement("h1")
  //let title = episodeList.map(e => e.name)
  rootElem.appendChild(rect)
  epTitle.textContent = `${episodeList[i].name} - S${episodeList[i].season} E${episodeList[i].number}`;
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
