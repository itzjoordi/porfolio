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
  // Curated palette matching the portfolio's teal/cyan/magenta branding
  private readonly particleColors = [
    'rgba(4, 194, 201, 0.6)', // brand teal
    'rgba(0, 163, 175, 0.5)', // dark teal
    'rgba(80, 220, 230, 0.5)', // light cyan
    'rgba(255, 28, 247, 0.35)', // brand magenta
    'rgba(180, 60, 220, 0.4)', // purple
    'rgba(100, 240, 255, 0.45)', // bright aqua
    'rgba(0, 210, 190, 0.5)', // emerald teal
    'rgba(200, 80, 255, 0.35)', // violet
  ];

  ngOnInit(): void {
    this.createAnimateBackground();
  }

  createAnimateBackground(): void {
    const numBalls = 60;
    const balls: HTMLDivElement[] = [];
    const container = document.getElementsByClassName('animation-area')[0];
    if (!container) return;

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement('div');
      ball.classList.add('ball');

      // Pick from curated palette
      const color = this.particleColors[i % this.particleColors.length];
      ball.style.background = color;
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;

      // Size categories: small, medium, large for visual depth
      const sizeCategory = Math.random();
      let size: number;
      if (sizeCategory < 0.5) {
        size = 0.3 + Math.random() * 0.4; // small: 0.3-0.7em
      } else if (sizeCategory < 0.85) {
        size = 0.8 + Math.random() * 0.6; // medium: 0.8-1.4em
      } else {
        size = 1.5 + Math.random() * 1.0; // large: 1.5-2.5em
      }

      ball.style.width = `${size}em`;
      ball.style.height = `${size}em`;
      ball.style.position = 'absolute';
      ball.style.borderRadius = '100%';

      // Depth effect: larger particles get more blur and lower opacity
      if (size > 1.4) {
        ball.style.filter = 'blur(3px)';
        ball.style.opacity = '0.4';
      } else if (size > 0.7) {
        ball.style.filter = 'blur(1px)';
        ball.style.opacity = '0.6';
      } else {
        ball.style.opacity = '0.8';
      }

      balls.push(ball);
      container.append(ball);
    }

    // Animate the balls with varied speeds
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
          duration: (Math.random() + 1) * 3000,
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        },
      );
    });
  }
  scrollToWork(): void {
    const el = document.querySelector('[data-anchor="aboutme"]');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
