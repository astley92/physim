export function setupCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d")

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;

        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        ctx.fillStyle = "green"
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas()

    ctx.fillStyle = "black"
    ctx.font = "48px sans-seriff"
    ctx.textBaseline= "top"
    ctx.fillText("Hello, World!", 0, 0)
}
