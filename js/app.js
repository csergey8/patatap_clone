function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;

    new Path.Circle(new Point(point), 10).fillColor = "purple";

}
