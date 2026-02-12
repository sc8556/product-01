const themeToggle = document.getElementById('theme-toggle');
const themes = ['pink', 'dark', 'light'];
let currentThemeIndex = 0;
document.body.dataset.theme = themes[currentThemeIndex];

themeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.dataset.theme = themes[currentThemeIndex];
});

class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'lotto-generator');

        const title = document.createElement('h1');
        title.textContent = 'Lotto Number Generator';

        const numbersContainer = document.createElement('div');
        numbersContainer.setAttribute('class', 'numbers-container');

        const button = document.createElement('button');
        button.textContent = 'Generate Numbers';

        const style = document.createElement('style');
        style.textContent = `
            .lotto-generator {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem;
                background-color: var(--component-background);
                border-radius: 1rem;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.15);
                transition: background-color 0.3s ease;
            }
            h1 {
                font-size: 2rem;
                color: var(--primary-color);
                margin-bottom: 1.5rem;
            }
            .numbers-container {
                display: flex;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            .number {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                background-color: var(--secondary-color);
                color: var(--white);
                font-size: 1.5rem;
                font-weight: bold;
                animation: reveal 0.5s ease-in-out forwards;
            }
            @keyframes reveal {
                from {
                    transform: scale(0);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            button {
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 0.5rem;
                background-color: var(--primary-color);
                color: var(--white);
                font-size: 1rem;
                cursor: pointer;
                transition: background-color 0.3s ease;
                box-shadow: 0 4px 6px rgba(0, 123, 255, 0.2), 0 1px 3px rgba(0, 123, 255, 0.1);
            }
            button:hover {
                filter: brightness(1.2);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(title);
        wrapper.appendChild(numbersContainer);
        wrapper.appendChild(button);

        button.addEventListener('click', () => this.generateNumbers());

        this.generateNumbers();
    }

    generateNumbers() {
        const numbersContainer = this.shadowRoot.querySelector('.numbers-container');
        numbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        [...numbers].sort((a, b) => a - b).forEach((number, index) => {
            const numberElement = document.createElement('div');
            numberElement.setAttribute('class', 'number');
            numberElement.textContent = number;
            numberElement.style.animationDelay = `${index * 0.1}s`;
            numbersContainer.appendChild(numberElement);
        });
    }
}

customElements.define('lotto-generator', LottoGenerator);
