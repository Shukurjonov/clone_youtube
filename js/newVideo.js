let newVideo = document.querySelector(".new-video");
let iframeLink = document.querySelector(".iframe-link");
let imageLink = document.querySelector(".image-link");
let headingInput = document.querySelector(".heading-input");
let addVideo = document.querySelector(".addVideo");

newVideo.onsubmit =  function(event) {
  event.preventDefault();
  let iframe = iframeLink.value;
  let img = imageLink.value;
  let heading = headingInput.value;
  let videoId = videos[videos.length - 1].videoId + 1;
  console.log(iframe)
  console.log(img)
  console.log(heading)
  console.log(videoId)
  
  let object = { videoId, iframe, img, heading };
  videos.push(object);
  
  iframeLink.value = null;
  imageLink.value = null;
  headingInput.value = null;


  window.localStorage.setItem('videosData', JSON.stringify(videos))
}



