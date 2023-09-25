song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
ScoreLeftWrist = 0;
ScoreRightWrist = 0;

Song1Status = "";
Song2Status = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 600, 500);
    Song1Status = song1.Isplaying;
    Song2Status = song2.Isplaying;

    fill ("#FF0000");
    stroke ("#FF0000");
}

function preload() {
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}


function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            scoreLeftWrist = results[0].pose.keypoints[9].score;


            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("leftWristX = " + leftWristX + "leftWristY = "+ leftWristY );

            rightWristX = results[0].pose.rightWrist.x;
            rightWristY= results[0].pose.rightWrist.y;
            console.log("rightWristX = " + rightWristX + "rightWristY = "+ rightWristY );
        }
        }

        
    