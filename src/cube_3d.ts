class Cube {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private size: number = 100;
    private angle: number = 0;

    constructor() {
        this.canvas = document.getElementById('cubeCanvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.animate();
    }

    private drawCube() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.rotate(this.angle);

        // Front face
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'green';
        this.ctx.lineWidth = 2;
        this.ctx.rect(-this.size/2, -this.size/2, this.size, this.size);
        this.ctx.stroke();

        // Back face
        this.ctx.beginPath();
        this.ctx.rect(-this.size/2 + 20, -this.size/2 + 20, this.size, this.size);
        this.ctx.stroke();

        // Connecting lines
        this.ctx.beginPath();
        this.ctx.moveTo(-this.size/2, -this.size/2);
        this.ctx.lineTo(-this.size/2 + 20, -this.size/2 + 20);
        this.ctx.moveTo(this.size/2, -this.size/2);
        this.ctx.lineTo(this.size/2 + 20, -this.size/2 + 20);
        this.ctx.moveTo(this.size/2, this.size/2);
        this.ctx.lineTo(this.size/2 + 20, this.size/2 + 20);
        this.ctx.moveTo(-this.size/2, this.size/2);
        this.ctx.lineTo(-this.size/2 + 20, this.size/2 + 20);
        this.ctx.stroke();

        this.ctx.restore();
    }

    private animate() {
        this.angle += 0.01;
        this.drawCube();
        requestAnimationFrame(() => this.animate());
    }
}

export default Cube; 