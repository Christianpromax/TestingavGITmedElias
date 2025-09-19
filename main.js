

// alert("Oi nå ble du bitt av en slange")


let snake_div = null;

let snake_pos = [0,0];
let snake_vel = [40,30];
let snake_dim = [];

window.onload = (e) => {
    snake_div = document.getElementsByClassName("snake").item(0)
    
    let img = snake_div.getElementsByTagName("img").item(0);
    snake_dim = [img.width, img.height];

    snake_div.addEventListener('onclick', () => {
        console.log("Click");
        
    })

    setInterval(frame, 5)
    
    console.log("onload");
}

function frame() {
    console.log("Frame");

    let dt = 1/60;
    snake_pos[0] += snake_vel[0] * dt;
    snake_pos[1] += snake_vel[1] * dt;

    const width   = window.innerWidth
    const height  = window.innerHeight

    if (snake_pos[0] > width - snake_dim[0] || snake_pos[0] < 0) snake_vel[0] *= -1;
    if (snake_pos[1] > height - snake_dim[1] || snake_pos[1] < 0) snake_vel[1] *= -1;

    snake_div.style.left = snake_pos[0] + "px"
    snake_div.style.top  = snake_pos[1] + "px"
}