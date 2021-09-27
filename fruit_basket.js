img = "";
status = "";

function preload() {
    img = loadImage("fruit basket.jpg");
}

function setup() {
    canvas = createCanvas(450, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img, 0, 0, 450, 420);
}

function friut_back() {
    window.location = "index.html";
}


function modalLoaded() {
    console.log("Modal Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}