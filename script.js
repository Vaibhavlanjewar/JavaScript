const editor = document.getElementById('text-editor');
let currentState = [editor.innerHTML];
let currentIndex = 0;
let pencilDown = false;
let highlighter = false;
let highlighterColor = 'yellow';
let pencilColor = 'black';

function bold() {
  document.execCommand('bold', false, null);
}

function italic() {
  document.execCommand('italic', false, null);
}

function underline() {
  document.execCommand('underline', false, null);
}

function setTextColor(color) {
  document.execCommand('foreColor', false, color);
}

function setTextSize(size) {
  document.execCommand('fontSize', false, size);
}

function setTextFont(font) {
  document.execCommand('fontName', false, font);
}

function toggleHighlighter() {
  highlighter = !highlighter;
  if (highlighter) {
    document.addEventListener('mouseup', onMouseUpHighlighter);
  } else {
    document.removeEventListener('mouseup', onMouseUpHighlighter);
 
  }
}