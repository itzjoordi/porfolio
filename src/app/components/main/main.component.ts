import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    this.createAnimateBackground();
  }

  createAnimateBackground(): void {
    const numBalls = 80;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement('div');
      ball.classList.add('ball');
      ball.style.background = this.getRandomHEXColor();
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      ball.style.position = 'absolute';
      ball.style.borderRadius = '100%';
      ball.style.opacity = '0.7';

      balls.push(ball);
      document.getElementsByClassName('animation-area')[0].append(ball);
    }

    // Animate the balls
    balls.forEach((element, index) => {
      const to = {
        x: Math.random() * (index % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      element.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        },
      );
    });
  }

  getRandomHEXColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    return color;
  }
}
