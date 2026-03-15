fetch("videos/videos.json")

.then(response => response.json())

.then(videos => {

const grid = document.getElementById("videoGrid")

videos.forEach(video => {

grid.innerHTML += `
<div class="card" onclick="openVideo('${video.id}')">

<img src="${video.thumbnail}">

<div class="title">${video.title}</div>

</div>
`

})

})

function openVideo(id){

window.location = "video.html?id="+id

}
