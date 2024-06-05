let speech = new SpeechSynthesisUtterance();
const Btn = document.querySelector("button");
const textArea = document.querySelector("textarea");
let voiceSelect = document.querySelector("select");

let voices = []

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new option(voice.name, i)));
}

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value]
})

Btn.addEventListener("click", ()=>{
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
    
})
