/**
 * Created by h205p2 on 5/12/17.
 */

$(document).ready(function(){
    songNum=Math.floor(Math.random()*songsArray.length);
    songNum2=Math.floor(Math.random()*songsArray.length);
    songNum3=Math.floor(Math.random()*songsArray.length);
    songNum4=Math.floor(Math.random()*songsArray.length);

    songNumArray=[songNum, songNum2, songNum3, songNum4];

    currentSong=songsArray[songNum];

    button1=document.getElementById("firstOption");
    button2=document.getElementById("secondOption");
    button3=document.getElementById("thirdOption");
    button4=document.getElementById("fourthOption");
    buttonArray=[button1, button2, button3, button4];

    buttonOption=Math.floor(Math.random()*buttonArray.length);

    console.log(songNum);
    console.log(songNum2);
    console.log(songNum3);
    console.log(songNum4);
    console.log(buttonOption);
});

function resetData(){
    songNum=Math.floor(Math.random()*songsArray.length);
    songNum2=Math.floor(Math.random()*songsArray.length);
    songNum3=Math.floor(Math.random()*songsArray.length);
    songNum4=Math.floor(Math.random()*songsArray.length);

    songNumArray=[songNum, songNum2, songNum3, songNum4];

    currentSong=songsArray[songNum];

    button1=document.getElementById("firstOption");
    button2=document.getElementById("secondOption");
    button3=document.getElementById("thirdOption");
    button4=document.getElementById("fourthOption");
    buttonOption=Math.floor(Math.random()*buttonArray.length);

    text1=document.getElementById("firstOption").textContent;
    text2=document.getElementById("secondOption").textContent;
    text3=document.getElementById("thirdOption").textContent;
    text4=document.getElementById("fourthOption").textContent;
}

songsArray=[song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20, song21, song22, song23, song24, song25, song26, song27];

function gameStart(){
    resetData();
    var dupes;
    do{
        var set=new Set();
        dupes=false;

        for(i=0; i<songNumArray.length; ++i){
            if (set.has(songNumArray[i])){
                resetData();
                dupes=true;
                break;
            }
            else{
                set.add(songNumArray[i]);
            }
        }
    } while(dupes);
    /*for(i=0; i<songNumArray.length-1; i++){
        if(songNumArray[i]==songNumArray[i+1]){
        resetData();
        }
    }*/
    /*if(songNumArray[0]==songNumArray[1] || songNumArray[0]==songNumArray[2] || songNumArray[0]==songNumArray[3]){
        resetData();
    }*/
    $("#startButton").fadeOut(200);
    $("body").pagecontainer("change", "#page2", {});
    document.getElementById("lyricsOutput").innerHTML=currentSong.snippet;
    switch(buttonOption){
        case 0:
            document.getElementById("firstOption").textContent=currentSong.songName;

            document.getElementById("secondOption").textContent=songsArray[songNum2].songName;
            document.getElementById("thirdOption").textContent=songsArray[songNum3].songName;
            document.getElementById("fourthOption").textContent=songsArray[songNum4].songName;
            break;
        case 1:
            document.getElementById("secondOption").textContent=currentSong.songName;

            document.getElementById("firstOption").textContent=songsArray[songNum2].songName;
            document.getElementById("thirdOption").textContent=songsArray[songNum3].songName;
            document.getElementById("fourthOption").textContent=songsArray[songNum4].songName;
            break;
        case 2:
            document.getElementById("thirdOption").textContent=currentSong.songName;

            document.getElementById("firstOption").textContent=songsArray[songNum2].songName;
            document.getElementById("secondOption").textContent=songsArray[songNum3].songName;
            document.getElementById("fourthOption").textContent=songsArray[songNum4].songName;
            break;
        case 3:
            document.getElementById("fourthOption").textContent=currentSong.songName;

            document.getElementById("firstOption").textContent=songsArray[songNum2].songName;
            document.getElementById("secondOption").textContent=songsArray[songNum3].songName;
            document.getElementById("thirdOption").textContent=songsArray[songNum4].songName;
            break;
    }
    text1=document.getElementById("firstOption").textContent;
    text2=document.getElementById("secondOption").textContent;
    text3=document.getElementById("thirdOption").textContent;
    text4=document.getElementById("fourthOption").textContent;
}

function guessFirst(){
    $("#audio1").attr("src",currentSong.songURL);
    $("#audio2").attr("src",currentSong.songURL);
    document.getElementById("songName1").innerHTML=currentSong.songName;
    document.getElementById("songName2").innerHTML=currentSong.songName;
    if(text1==currentSong.songName){
        $("body").pagecontainer("change", "#page3", {});
    }
    else{
        $("body").pagecontainer("change", "#page4", {});
    }
}

function guessSecond(){
    $("#audio1").attr("src",currentSong.songURL);
    $("#audio2").attr("src",currentSong.songURL);
    document.getElementById("songName1").innerHTML=currentSong.songName;
    document.getElementById("songName2").innerHTML=currentSong.songName;
    if(text2==currentSong.songName){
        $("body").pagecontainer("change", "#page3", {});
    }
    else{
        $("body").pagecontainer("change", "#page4", {});
    }
}

function guessThird(){
    $("#audio1").attr("src",currentSong.songURL);
    $("#audio2").attr("src",currentSong.songURL);
    document.getElementById("songName1").innerHTML=currentSong.songName;
    document.getElementById("songName2").innerHTML=currentSong.songName;
    if(text3==currentSong.songName){
        $("body").pagecontainer("change", "#page3", {});
    }
    else{
        $("body").pagecontainer("change", "#page4", {});
    }
}

function guessFourth(){
    $("#audio1").attr("src",currentSong.songURL);
    $("#audio2").attr("src",currentSong.songURL);
    document.getElementById("songName1").innerHTML=currentSong.songName;
    document.getElementById("songName2").innerHTML=currentSong.songName;
    if(text4==currentSong.songName){
        $("body").pagecontainer("change", "#page3", {});
    }
    else{
        $("body").pagecontainer("change", "#page4", {});
    }
}

function backToSecond(){
    $("body").pagecontainer("change", "#page2", {});
    $("#audio1").trigger("pause");
    $("#audio2").trigger("pause");
    gameStart();
}