console.log("Welcome to Spotify");

//Initialize variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');

let songs=[
    {songName:"Rasiya", filepath: "spotify/1.mp3", coverPath: "spotify/rasiyaimg.jpg"},
    {songName:"Tum Mile", filepath: "spotify/2.mp3", coverPath: "spotify/2.jpg"},
    {songName:"Chori Kiya", filepath: "spotify/3.mp3", coverPath: "spotify/3.jpg"},
    {songName:"Saibo", filepath: "spotify/4.mp3", coverPath: "spotify/4.jpg"},
    {songName:"Aayat", filepath: "spotify/5.mp3", coverPath: "spotify/5.jpg"},
    {songName:"Laal Ishq", filepath: "spotify/6.mp3", coverPath: "spotify/6.jpg"},
    {songName:"Darmiyan", filepath: "spotify/7.mp3", coverPath: "spotify/7.jpg"},
    {songName:"Channa", filepath: "spotify/8.mp3", coverPath: "spotify/8.jpg"},
]

// audioElement.play();
//hanlde play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }

})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SongInfoPlay')).forEach((element)=>{
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('SongInfoPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
    })
    
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})

