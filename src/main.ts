import { setupCanvas } from "./canvas.ts"
import "./style.css"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<canvas id="canvas"></canvas>
`

setupCanvas(document.querySelector<HTMLCanvasElement>("#canvas"))
