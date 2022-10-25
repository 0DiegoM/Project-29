MustacheX = 0;
MustacheY = 0;

function preload() {
Mustache = loadImage("https://i.postimg.cc/K4StP35r/mustache-png-image-pngpix-6.png")
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoad);
poseNet.on("pose", gotPoses);
}

function modelLoad() {
console.log("PoseNet se ha cargado!")
}

function gotPoses(results) {
if(results.length > 0) {
console.log(results);
MustacheX = results[0].pose.nose.x-15;
MustacheY = results[0].pose.nose.y-15;
}
}

function draw() {
image(video, 0, 0, 300, 300);
image(Mustache, MustacheX, MustacheY, 40, 40)
}

function take_snapshot() {
save("ImageWithMustache.png");
}