var recognition;
var nowRecognition = false;
function start () {
    recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US"
    recognition.onresult = function (e) {
        var results = e.results;
        for (var i = e.resultIndex; i<results.length; i++){
        var value = e.results[i][0].transcript;
        if (value.indexOf('quarter') >= 0){
        var speech = "What do they call it?"
        }else if (value.indexOf('cheese') >= 0){
        var speech = "A Royale with cheese! What do they call a Big Mac?"
        }else if (value.indexOf('Mac') >= 0){
        var speech = "Le Big-Mac! Hahaha! What do they call a Whopper?";
        }else if (value.indexOf('ketchup') >= 0){
        var speech = "What?";
        }else if (value.indexOf('mayonnaise') >= 0){
        var speech = "Yuck! buhaha!";
        }else if (value.indexOf('massage') >= 0){
        var speech = "Fuck You!";
        }else if (value == "what"){
        var speech = "Ezekiel 25:17.The path of the righteous man is beset on all sides .And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee."
        }else if (value.indexOf('walk') >= 0){
        var speech = "You know, walk the earth, meet people... get into adventures. Like Caine from Kung Fu.";
        }else{
        var speech = "Mother Fucker."
        }
        };
    var u = new SpeechSynthesisUtterance();
    var voices = speechSynthesis.getVoices();
    u.voice = voices[64];
    u.text = speech;
    u.lang = 'en-US';
    speechSynthesis.speak(u);
    };
    recognition.start();
    nowRecognition = true;
};
function stop () {
    recognition.stop();
    nowRecognition = false;
}
document.querySelector('#btn1').onclick = function () {

    // unsupported.
    if (!'webkitSpeechRecognition' in window) {
        alert('This browser is not supported Web Speech API.');
        return;
    }

    if (nowRecognition) {
        stop();
        document.getElementById( 'sound-file-1' ).play() ;
        this.value = 'Get Voice';
        this.className = 'btn btn-default';
    } else {
        start();
        document.getElementById( 'sound-file-2' ).play() ;
        this.value = 'Stop Voice';
        this.className = 'btn btn-danger';
    }

    var u = new SpeechSynthesisUtterance();
    var voices = speechSynthesis.getVoices();
    u.voice = voices[64];
    u.text = "";
    u.lang = 'en-US';
    speechSynthesis.speak(u);
}
