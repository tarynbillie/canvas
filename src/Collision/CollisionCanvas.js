import { randomIntFromRange, randomColor, distance } from '../utils'

// initial setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = [
    '#2364AA', 
    '#3DA5D9', 
    '#73BFB8', 
    '#FEC601',
    '#EA7317',
];

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init();
})

addEventListener('click', function() {
    init();

})

function distance(x1, y1, x2, y2) {
    const xDistance = x2 - x1
    const yDistance = y2 - y1

    // sqrt = square root
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

// Objects
function Circle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color

    this.update = () => {
  
        this.draw();
    }

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()

    }
}

// Implementation
let circle1;
let circle2;
function init() {
    circle1 = new Circle(300, 300, 100, 'black');
    circle2 = new Circle(undefined, undefined, 30, 'red');

}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    console.log(distance(circle1.x, circle1.y))

}

init();
animate();
