var bacground, Img, Tom, Jerry, catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3;
function preload() {
    catImg1 = loadAnimation("tomOne.png");
    catImg2 = loadAnimation("tomTwo.png" , "tomThree");
    catImg3 = loadAnimation("tomFour.png");
    mouseImg1 = loadAnimation("jerryOne.png");
    mouseImg2 = loadAnimation("jerryTwo.png" , "jerryThree.png");
    mouseImg3 = loadAnimation("jerryFour.png");
    Img = addImage("garden.png");
}

function setup(){
    createCanvas(400,400);
    Tom = createSprite(200,200,200,200);
    Jerry = createSprite(200,200,200);
    Tom.addAnimation("catStart", catImg1);
    Jerry.addAnimation("mouseStart", mouseImg1);
}

function draw() {
    background(255);
    bacground.addImage(Img);
    text(mouseX + ',' + mouseY, 10, 45);
    if(Tom.x - Jerry.x < Jerry.width/2 + Tom.width/2 && Jerry.x - Tom.x < Jerry.width/2 + Tom.width/2 && Tom.y - Jerry.y < Jerry.width/2 + Tom.width/2 && Jerry.y - Tom.y < Jerry.width/2 + Tom.width/2){
        Tom.addAnimation("catDone", catImg3); Tom.changeAnimation("catDone"); Jerry.addAnimation("mouseDone", mouseImg3); Jerry.changeAnimation("mouseDone");
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
    Tom.velocityX = -5;
    Tom.addAnimation("catRunning", catImg2);
    Tom.changeAnimation("catRunning");
    Jerry.addAnimation("mouseTeasing", mouseImg2);
    Jerry.changeAnimation("mouseTeasing");
    }
}