function music_on(){
    var musicbox=["https://linwhitehat.github.io/music/JAY夜曲.mp3","https://linwhitehat.github.io/music/JAY七里香.mp3","https://linwhitehat.github.io/music/JAY不能说的秘密.mp3","https://linwhitehat.github.io/music/JAY夏天的风.mp3","https://linwhitehat.github.io/music/JAY稻香.mp3","https://linwhitehat.github.io/music/JAY红尘客栈.mp3"];
    var audio1=document.getElementById('bg_music');
    if(audio1.paused){
        var index=Math.floor((Math.random()*musicbox.length));
        $("#bg_music").attr("src",musicbox[index]);
        audio1.play();
        audio1.volume=0.7;
        document.getElementById("musicmobbtn").children[0].classList.add("xuanzhuan");
        //$("#musicmobbtn").children("svg").addClass("xuanzhuan");
    }
    else{
        audio1.pause();
        document.getElementById("musicmobbtn").children[0].classList.remove("xuanzhuan");
        //$("#musicmobbtn").children("svg").removeClass("xuanzhuan");
        audio1.currentTime=0;
    }
}