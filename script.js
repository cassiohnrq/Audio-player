const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");


const quantidadeCapitulos = 3;

const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#fff',
  progressColor: '#00ffcc',
  height: 80,
  responsive: true,
  barWidth: 2,
  barGap: 2,
  cursorWidth: 0, // Remove a linha de cursor
});

wavesurfer.load(audio.src);

let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
  audio.play();
  taTocando = true;
  botaoPlayPause.classList.add("tocando");
}

function pausarFaixa() {
  audio.pause();
  taTocando = false;
  botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}


function capituloAnterior() {
  pausarFaixa();

  if (capitulo === 1) {
    capitulo = quantidadeCapitulos;
  } else {
    capitulo -= 1;
  }

  audio.src = "/audios/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Capítulo " + capitulo;
  wavesurfer.load(audio.src);
}


function proximoCapitulo() {
  pausarFaixa();

  if (capitulo < quantidadeCapitulos) {
    capitulo += 1;
  } else {
    capitulo = 1;
  }

  audio.src = "/audios/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Capítulo " + capitulo;
  wavesurfer.load(audio.src);
}



// Sincronize play/pause com o player principal
audio.addEventListener('play', () => wavesurfer.play());
audio.addEventListener('pause', () => wavesurfer.pause());
audio.addEventListener('seeked', () => wavesurfer.seekTo(audio.currentTime / audio.duration));

// Sincronize o tempo do audio com o wavesurfer
wavesurfer.on('seek', (progress) => {
  audio.currentTime = progress * audio.duration;
});

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);

audio.addEventListener("ended", proximoCapitulo);
