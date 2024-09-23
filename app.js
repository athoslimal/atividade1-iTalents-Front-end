import { Timer } from './timer.js';

// Selecionando elementos do DOM
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Criando uma instância de Timer (usando classes)
const timer = new Timer(display);

// Eventos para os botões
startBtn.addEventListener('click', () => timer.start());
stopBtn.addEventListener('click', () => timer.stop());
resetBtn.addEventListener('click', () => timer.reset());

// Spread Operator (exemplo simples)
const buttons = [...document.querySelectorAll('button')];

// Adicionando uma classe CSS aos botões usando forEach e spread operator
buttons.forEach(button => button.classList.add('timer-button'));

// Operador ternário para verificar se o Timer está rodando
startBtn.textContent = timer.isRunning ? 'Pause' : 'Start';
