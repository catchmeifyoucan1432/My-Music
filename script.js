console.log("Welcome to musical world");

//initialize the variable
let songIndex=0;
let audioElement= new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let song=[
    {SongName:"nit-khair",filepath:"song/1.mp3",coverpath:'covers/1.JPG'},
    {SongName:"pal",filepath:"song/2.mp3",coverpath:'covers/2.JPG'},
    {SongName:"pyar-kisika",filepath:"song/3.mp3",coverpath:'covers/3.JPG'},
    {SongName:"sabko-bhula",filepath:"song/4.mp3",coverpath:'covers/4.JPG'},
    {SongName:"sun-meri-sehjadi",filepath:"song/5.mp3",coverpath:'covers/5.JPG'},
    {SongName:"tere-sang-yara",filepath:"song/6.mp3",coverpath:'covers/6.JPG'},
    {SongName:"teri-mitti",filepath:"song/7.mp3",coverpath:'covers/7.JPG'}
]


songitem.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src=song[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=song[i].SongName;
    
});
// audioElement.play();

//handale play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

//listen of event
audioElement.addEventListener('timeupdate',()=>{
    
    //updater seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongName.innerText=song[songIndex].SongName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].SongName;
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');   
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].SongName;
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');   
})

