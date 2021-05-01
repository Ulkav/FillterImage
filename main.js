noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/tJ3m9ZVR/clown-nose-image.jpg');
}

function setup() {
    canvans = createCanvas(300,300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('PoseNet Is Initialized');
}



function gotPoses(result)
{
    if(result.lenght > 0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x;
        nosey = result[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);

    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}
