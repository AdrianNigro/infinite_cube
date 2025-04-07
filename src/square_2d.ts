class Square2 {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private start_size: number = 300;

    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    constructor() {
        this.canvas = document.getElementById('squareCanvas2') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;

        this.drawSquare(this.start_size);

        // this.drawSquare(this.start_size-200, 0);

    }


    private async drawSquare(pSize: number) {


        for (let i = 0; i < 5; i++) {
            let size = pSize
    
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.save();
            this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

            let step = 25;
            let rotationAngle = 0;

            for (let i = 0; i < 18; i++) {
                // console.log(i, size, step, rotationAngle);

                // Save the current context state
                this.ctx.save();
                
                // Rotate the context
                this.ctx.rotate(rotationAngle * Math.PI / 180);

                // Calculate grayscale color (gets darker with each iteration)
                const grayValue = Math.floor(255 - (i * 14)); // Decrease by 18 for each square
                const fillColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
                
                
                // Draw outer square
                this.ctx.beginPath();
                this.ctx.fillStyle = fillColor;
                this.ctx.strokeStyle = fillColor;
                // this.ctx.strokeStyle = 'green';
                this.ctx.lineWidth = 2;
                this.ctx.rect(-size/2, -size/2, size, size);
                this.ctx.fill();
                this.ctx.stroke();

                // Restore the context state
                this.ctx.restore();

                size = size - step;
                step = step * 0.95
                rotationAngle += 3 + (1/10*i^2)

                // Add a delay between each square
                await this.sleep(100); // 100ms delay
            }

            this.ctx.restore();
        }
    }
}

export default Square2; 