# Audiobooks Player

Um player de audiobooks simples feito em HTML, CSS e JavaScript, com visual moderno, animação de fundo e visualização de forma de onda do áudio.

Veja no pages:https://cassiohnrq.github.io/Audio-player

## Funcionalidades

- Lista de capítulos baseada em arquivos definidos no JavaScript
- Botões de play/pause, próximo e anterior
- Visualização da forma de onda do áudio com WaveSurfer.js
- Animação de fundo com gradiente em movimento
- Interface responsiva e moderna

## Como usar

1. **Clone ou baixe este repositório**
2. Coloque seus arquivos de áudio (ex: `1.mp3`, `2.mp3`, etc) na pasta `audios/`
3. Se quiser, edite a lista de arquivos no início do arquivo `script.js`:
   ```js
   const arquivosAudio = [
     "1.mp3",
     "2.mp3",
     "3.mp3"
   ];
   ```
4. Abra o arquivo `index.html` no navegador

## Estrutura dos arquivos

```
├── audios/           # Coloque aqui seus arquivos .mp3
├── imagens/          # Imagens de capa
├── index.html        # Página principal
├── script.js         # Lógica do player
├── style.css         # Estilos e animações
```

## Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox, animação de gradiente)
- JavaScript (ES6)
- [WaveSurfer.js](https://wavesurfer-js.org/) para visualização da onda

## Exemplo de uso

![screenshot](imagens/5013.jpg)

## Deploy no GitHub Pages

- Use caminhos relativos para os arquivos de áudio (ex: `audios/1.mp3`)
- O projeto funciona em qualquer serviço de hospedagem estática

## Créditos

- Ícones SVG do [Heroicons](https://heroicons.com/)
- Visualização de onda: [WaveSurfer.js](https://wavesurfer-js.org/)

---
## 🧪 Como usar localmente

1. Clone o repositório:

```bash
git clone https://github.com/cassiohnrq/Audio-player.git
