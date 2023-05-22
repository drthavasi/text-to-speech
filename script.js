function createAudioRow(text) {
  var audioTableBody = document.getElementById("audioTableBody");

  var audioRow = document.createElement("tr");

  var serialNumberCell = document.createElement("td");
  serialNumberCell.textContent = audioTableBody.rows.length + 1;
  audioRow.appendChild(serialNumberCell);

  var textContentCell = document.createElement("td");
  textContentCell.textContent = text;
  audioRow.appendChild(textContentCell);

//   var downloadCell = document.createElement("td");
//   var downloadLink = document.createElement("a");
//   downloadLink.textContent = "Download";
//   downloadLink.href = generateAudioURL(text);
//   downloadLink.download = "audio_" + Date.now() + ".wav";
//   downloadCell.appendChild(downloadLink);
//   audioRow.appendChild(downloadCell);

  var playCell = document.createElement("td");
  var playButton = document.createElement("button");
  playButton.textContent = "Play";
  playButton.onclick = function () {
    playAudio(text);
  };
  playCell.appendChild(playButton);
  audioRow.appendChild(playCell);

  audioTableBody.appendChild(audioRow);

  var audioTable = document.getElementById("audioTable");
  audioTable.style.display = "table";
}

function convertText() {
  var inputText = document.getElementById("inputText").value;
  createAudioRow(inputText);
  textToSpeech(inputText);
}

function playAudio(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(utterance);
  }
  
function textToSpeech(text) {
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = speechSynthesis.getVoices()[0];
  speechSynthesis.speak(utterance);
}

function generateAudioURL(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices()[0];
  
    return URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  }
  