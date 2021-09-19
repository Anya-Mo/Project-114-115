function preload() {
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    
}
function take_Snapshot() {
    save("filtered_img.png");
}
function draw() {
    image(video,0,0,300,300);
}
function modelLoaded() {
    console.log("PoseNet Model Loaded");
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        console.log("Lips X Axis = "+results[0].pose.lip.x);
        console.log("Lips Y Axis = "+results[0].pose.lip.y);
    }
}