



class Snake {
    x  = 0;
    y  = 0;
    dx = 0;
    dy = 0;

    w; h;

    div_elm;

    constructor() {
        this.div_elm = document.createElement('div');
        document.body.appendChild(this.div_elm);

        this.div_elm.style.position = 'absolute';
        this.div_elm.innerHTML = '<img src="Images/HenrikSrawr.jpg" alt="HenrikSrawr.jpg" width="60">';
        this.div_elm.onclick = () => this.onclick();

        let img = this.div_elm.getElementsByTagName("img").item(0);
        this.w = img.width;
        this.h = img.height;

        this.dx = 3 + Math.random() * 20;
        this.dy = 3 + Math.random() * 20;
    }

    update(dt) {
        this.x += this.dx * dt;
        this.y += this.dy * dt;

        const width   = window.innerWidth
        const height  = window.innerHeight

        if (this.x > width  - this.w || this.x < 0)  this.dx *= -1;
        if (this.y > height - this.h || this.y < 0)  this.dy *= -1;

        this.div_elm.style.left = this.x + "px"
        this.div_elm.style.top  = this.y + "px"
    }

    onclick() {
        // alert("Oi nå ble du bitt av en slange")
        this.dx *= 3;
        this.dy *= 3;

        console.log('Click')
    }
}


const snakes = [];

window.onload = (e) => {
    

    // snake_div.addEventListener('onclick', () => {
    //     console.log("Click");
        
    // })

    setInterval(frame, 5)
    
    console.log("onload");

    for (let i = 0; i < 30; i++) {
        let snake = new Snake();
        snakes.push(snake);
    }
}

function frame() {
    console.log("Frame");

    let dt = 1/60;
    for (let snake of snakes) snake.update(dt);
}