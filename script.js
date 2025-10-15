const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

let arquivosAudio = [];
let capitulo = 0;
let taTocando = false;
let wavesurfer;

fetch('./audios.json')
  .then(res => res.json())
  .then(lista => {
    arquivosAudio = lista;
    if (arquivosAudio.length > 0) {
      capitulo = 0;
      carregarCapitulo(capitulo);
      inicializarWaveSurfer();
    }
  });

function carregarCapitulo(indice) {
  const nomeArquivo = arquivosAudio[indice];
  audio.src = "audios/" + nomeArquivo;
  nomeCapitulo.innerText = nomeArquivo;
  if (wavesurfer) {
    wavesurfer.load(audio.src);
  }
}

function inicializarWaveSurfer() {
  wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#fff',
    progressColor: '#00ffcc',
    height: 80,
    responsive: true,
    barWidth: 2,
    barGap: 2,
    cursorWidth: 0,
  });
  wavesurfer.load(audio.src);

  audio.addEventListener('play', () => wavesurfer.play());
  audio.addEventListener('pause', () => wavesurfer.pause());
  audio.addEventListener('seeked', () => wavesurfer.seekTo(audio.currentTime / audio.duration));
  wavesurfer.on('seek', (progress) => {
    audio.currentTime = progress * audio.duration;
  });
}

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
  if (taTocando) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function capituloAnterior() {
  pausarFaixa();
  capitulo = (capitulo === 0) ? arquivosAudio.length - 1 : capitulo - 1;
  carregarCapitulo(capitulo);
}

function proximoCapitulo() {
  pausarFaixa();
  capitulo = (capitulo < arquivosAudio.length - 1) ? capitulo + 1 : 0;
  carregarCapitulo(capitulo);
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);
