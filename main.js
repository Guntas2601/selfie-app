var speechrecognition=window.webkitSpeechRecognition;
var recognition = new speechrecognition;
function Start(){

document.getElementById("Text_box").innerHTML="";
recognition.start();


}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log (content);

    document.getElementById("Text_box").innerHTML=content;
Speak();
}

function Speak(){

var synth=window.speechSynthesis;
speakdata= document.getElementById("Text_box").value;
var utterthis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);
Webcam .attach(cam)


}
var cam= document.getElementById("camera");

Webcam .set({
width:360,
height:250,
image_format:"png",
png_quality:90

});