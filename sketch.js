var cat,mouse,bgImg;
function preload() {
    //load the images here
  // catImg=loadAnimation("cat1.png");
  bgImg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite(200,200,20,20);
 mouse=createSprite(200,300,20,20);
 //cat.addAnimation(catImg,"cat");
}

function draw() {

   background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
