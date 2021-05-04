
const videoList = document.querySelector(".video__list");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");

const audioSearch = document.querySelector(".audio-search");

let SpeechRecognition = window.webkitSpeechRecognition;
let voice = new SpeechRecognition();
voice.lang = "en-Us";
voice.continuous = false;


audioSearch.onclick = () => {
	voice.start()

	voice.onresult = (event) => {
		let result = event.results[0][0]['transcript']
		searchInput.value = result;
    console.log(result);
	}

	voice.onspeechend = function() {
		voice.stop()
	}
}


searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let searchText = searchInput.value;
  searchRenderer(searchText);
})

function searchRenderer(text) {
  
  let newArray = [];
  for (video of videos){
    let isSearch = video.heading.search(text);
    if (isSearch != -1){
      newArray.push(video);
    }

  }
  
  videoRenderer(newArray);
}


function videoRenderer(videos){
  videoList.innerHTML = null;
  for (video of videos){
    
    let elLi = document.createElement("li");
    elLi.classList.add("video__item");
    
    let elVideoItem = document.createElement("div");
    elVideoItem.classList.add("video-item__img");
    
    let elImg = document.createElement("img");
    elImg.classList.add("item-img");
    elImg.src = video.img;
    elImg.alt = video.videoId;
    elImg.width = "250";
    elImg.height = "150";
    
    let videoInfo = document.createElement("div");
    videoInfo.classList.add("video-info");
    
    let imgBox = document.createElement("div");
    imgBox.classList.add("img-box");
    
    let createrImg = document.createElement("img");
    createrImg.classList.add("video-info__creater-img");
    createrImg.src = "img/abdukarim.jpg";
    createrImg.alt = "subscriptions";
    createrImg.width = "36";
    createrImg.height = "36";
    
    let videoHead = document.createElement("div");
    videoHead.classList.add("video-head");
    
    let headingDiv = document.createElement("div");
    headingDiv.classList.add("heading-div");
    
    let videoHeading = document.createElement("div");
    videoHeading.classList.add("video__heading");
    videoHeading.innerText = video.heading;
    
    let remove = document.createElement("button");
    remove.classList.add("remove")
    
    let elSpan = document.createElement("span");
    elSpan.classList.add("dot");
    
    let elSpan2 = document.createElement("span");
    elSpan2.classList.add("dot");
    
    let elSpan3 = document.createElement("span");
    elSpan3.classList.add("dot");
    
    let removeModal = document.createElement("div");
    removeModal.classList.add("remove-modal");
    removeModal.innerText = "Удалить";

    removeModal.onclick = function (){
      removeVideo(elImg.alt);
    }
    
    remove.onclick = function (){
      removeModal.classList.toggle("on")
    }
    
    let videoCreater = document.createElement("div");
    videoCreater.classList.add("video__creater");
    videoCreater.innerText = "New channel";
    
    let watchVideo = document.createElement("div");
    watchVideo.classList.add("watch__video");
    watchVideo.innerText = "1 просмотра";
    
    let time = document.createElement("div");
    time.classList.add("watch__video");
    time.innerText = "прямо сейчас";
    
    remove.appendChild(elSpan);
    remove.appendChild(elSpan2);
    remove.appendChild(elSpan3);
    remove.appendChild(removeModal);
    headingDiv.appendChild(videoHeading);
    headingDiv.appendChild(remove);
    videoHead.appendChild(headingDiv);
    videoHead.appendChild(videoCreater);
    videoHead.appendChild(watchVideo);
    videoHead.appendChild(time);
    
    imgBox.appendChild(createrImg);
    videoInfo.appendChild(imgBox);
    videoInfo.appendChild(videoHead);
    
    elVideoItem.appendChild(elImg);
    
    elLi.appendChild(elVideoItem);
    elLi.appendChild(videoInfo);
    
    videoList.appendChild(elLi);
  }
}

function removeVideo(Id){
  let newArray = [];
  for (video of videos)
    if (video.videoId != Id){
      newArray.push(video);
    }
  
  videos = newArray;
  videoRenderer(videos);
  window.localStorage.setItem('videosData', JSON.stringify(videos));
}

videoRenderer(videos);