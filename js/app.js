var circles = [];

var keyData = {
    a: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        })
    },
    s: {
        color: "green",
        sound: new Howl({
            src: ['sounds/clay.mp3']
        })
    },
    d: {
        color: "red",
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        })
    }
}

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 500);
    //console.log(keyData[event.key].color);
    if (keyData[event.key]) {
        newCircle.fillColor = (keyData[event.key].color);
    } else {
        newCircle.fillColor = "white";
    }
    //keyData[event.key].sound.play();

    circles.push(newCircle);
};

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 10;
        circles[i].scale(.86);
    }
}
