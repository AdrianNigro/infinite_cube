
import Cube from './cube_3d';
import Square2 from './square_2d';

class App {
    constructor() {
        this.initialize();
    }

    private initialize(): void {
        console.log('App initialized');
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        document.addEventListener('DOMContentLoaded', () => {
            const content = document.querySelector('.content');
            if (content) {
                content.addEventListener('click', () => {
                    this.handleContentClick();
                });
            }
        });
    }

    private handleContentClick(): void {
        console.log('Content clicked!');
        // Add your interactive functionality here
    }
}

// Initialize the app
new App();

document.addEventListener('DOMContentLoaded', () => {
    new Square2();
    new Cube();
}); 