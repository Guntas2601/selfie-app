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
    if(content=="Take my selfie "){
console.log("Taking selfie")
Speak();
    }

}

function Speak(){

var synth=window.speechSynthesis;
speakdata= "Taking your selfie in 5 seconds"
var utterthis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);
Webcam .attach(cam);

setTimeout(function(){

takesnapshot();
save();

},5000

);


}
var cam= document.getElementById("camera");

Webcam .set({
width:360,
height:250,
image_format:"png",
png_quality:90

});

function takesnapshot(){

Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML="<img id='image'src='"+data_uri+"'>"

});

}
function save(){

Anchor=document.getElementById ("link").value;
Image=document.getElementById ('image').src; 
Anchor.href=Image;
Anchor.click();

}

