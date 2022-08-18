function preload()
{
}

function setup()
{
    canvas=createCanvas(400, 400);
    canvas.position(430,250);
    video = createCapture(VIDEO);
    video.hide()

}

function draw()
{
    image(video, 0, 0, 640, 480);

}

function take_snapshot()
{
    save('student_name.png');
}
