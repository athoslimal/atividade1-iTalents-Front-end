// timer.js (ES6 Module)
export class Timer {
    constructor(displayElement) {
      this.displayElement = displayElement;
      this.reset();
    }
  
    reset() {
      this.time = 0; // segundos totais
      this.isRunning = false;
      this.updateDisplay();
    }
  
    start() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timerInterval = setInterval(() => this.increment(), 1000);
      }
    }
  
    stop() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
    }
  
    increment() {
      this.time++;
      this.updateDisplay();
    }
  
    updateDisplay() {
      const { minutes, seconds } = this.getTimeComponents();
      this.displayElement.textContent = `${minutes}:${seconds}`;
    }
  
    getTimeComponents() {
      // destructuring e template literals
      const minutes = String(Math.floor(this.time / 60)).padStart(2, '0');
      const seconds = String(this.time % 60).padStart(2, '0');
      return { minutes, seconds };
    }
  }
  