var bird;
var pipes = [];
function setup(){
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    //here the cycle is swapped to return to the next element in the array after the splice
    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }

        if(pipes[i].offScreen()){
            /*splice is a func that deletes an element of the array, so when the
            pipes are offscreen we don't keep em in memory*/
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    //every 100 frames create a new pipe
    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());

    }

   
}

function keyPressed(){
    if (key == ' ') {
        bird.up();
        console.log("SPACE");
    }
}