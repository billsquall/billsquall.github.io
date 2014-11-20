/*游戏工具*/
function orientationListener(e) {
    var gamma = e.gamma;
    gamma > 10 ? game1.fj1.fx = "L2" : gamma < -10 ? game1.fj1.fx = "R2" : game1.fj1.fx = "CR";
}

function keydown(e) {
    var keyName, e = e || event, currKey = e.keyCode || e.which || e.charCode;
    if (currKey > 7 && currKey < 14 || currKey > 31 && currKey < 47) switch (currKey) {
      case 37:
        game1.fj1.fx = "R";
        break;
      case 39:
        game1.fj1.fx = "L";
    }
}

function keyup(e) {
    var keyName, e = e || event, currKey = e.keyCode || e.which || e.charCode;
    if (currKey > 7 && currKey < 14 || currKey > 31 && currKey < 47) switch (currKey) {
      case 37:
        game1.fj1.fx = "CR";
        break;
      case 39:
        game1.fj1.fx = "CR";
    }
}

function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function drWall() {
    var n = random(0, 15), n3 = random(6, 26), n2 = 15 - n, wall1 = new wall(630, 20 * n, 13 * n3, 2), wall2 = new wall(630, 20 * n2, 13 * n3, 1);
    game1.wallList.push(wall1, wall2);
}

document.onkeydown = keydown, document.onkeyup = keyup, window.addEventListener("deviceorientation", this.orientationListener, !1), window.addEventListener("MozOrientation", this.orientationListener, !1), window.addEventListener("devicemotion", this.orientationListener, !1);

var OBB = function(centerPoint, width, height, rotation) {
    this.centerPoint = centerPoint, this.extents = [ width / 2, height / 2 ], this.axes = [ new Vector2(Math.cos(rotation), Math.sin(rotation)), new Vector2(-1 * Math.sin(rotation), Math.cos(rotation)) ], this._width = width, this._height = height, this._rotation = rotation;
};

OBB.prototype = {
    "getProjectionRadius": function(axis) {
        return this.extents[0] * Math.abs(axis.dot(this.axes[0])) + this.extents[1] * Math.abs(axis.dot(this.axes[1]));
    }
}, Vector2 = function(x, y) {
    this.x = x || 0, this.y = y || 0;
}, Vector2.prototype = {
    "sub": function(v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    },
    "dot": function(v) {
        return this.x * v.x + this.y * v.y;
    }
};

var CollisionDetector = {
    "detectorOBBvsOBB": function(OBB1, OBB2) {
        var nv = OBB1.centerPoint.sub(OBB2.centerPoint), axisA1 = OBB1.axes[0];
        if (OBB1.getProjectionRadius(axisA1) + OBB2.getProjectionRadius(axisA1) <= Math.abs(nv.dot(axisA1))) return !1;
        var axisA2 = OBB1.axes[1];
        if (OBB1.getProjectionRadius(axisA2) + OBB2.getProjectionRadius(axisA2) <= Math.abs(nv.dot(axisA2))) return !1;
        var axisB1 = OBB2.axes[0];
        if (OBB1.getProjectionRadius(axisB1) + OBB2.getProjectionRadius(axisB1) <= Math.abs(nv.dot(axisB1))) return !1;
        var axisB2 = OBB2.axes[1];
        return OBB1.getProjectionRadius(axisB2) + OBB2.getProjectionRadius(axisB2) <= Math.abs(nv.dot(axisB2)) ? !1 : !0;
    }
};

window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
        window.setTimeout(callback, 1e3 / 60);
    };
}();

var startBtn = document.getElementById("startBtn"), overBtn = document.getElementById("overBtn"), startDiv = document.getElementById("startDiv"), overDiv = document.getElementById("overDiv"), overBtn = document.getElementById("overBtn"), startBtn = document.getElementById("startBtn"), icon_div = document.getElementById("icon_div"), gamediv = document.getElementById("game"), icon2 = document.getElementById("icon2"), icon3 = document.getElementById("icon3"), icon1 = document.getElementById("icon1"), help = document.getElementById("help"), help_l1 = document.getElementById("help_l1"), help_l2 = document.getElementById("help_l2"), help_d1 = document.getElementById("help_d1"), help_d2 = document.getElementById("help_d2");

help_l1.onclick = function() {
    help_d1.style.display = "block", help_d2.style.display = "none";
}, help_l2.onclick = function() {
    help_d2.style.display = "block", help_d1.style.display = "none";
}, icon1.onclick = function() {
    this.className == "icon1" ? (icon1.className = "icon1 icon1_on", help.className = "help help_on") : this.className == "icon1 icon1_on" && (icon1.className = "icon1", help.className = "help help_off");
}, icon2.onclick = function() {
    icon2.style.display = "none", icon3.style.display = "block", game1.start();
}, icon3.onclick = function() {
    icon3.style.display = "none", icon2.style.display = "block", webkitCancelAnimationFrame(game1.stimer);
};

var tmove = function(e) {
    var e = e || event, _x = e.pageX - gamediv.offsetLeft;
    _x > game1.fj1.x ? game1.fj1.fx = "L" : game1.fj1.fx = "R";
}, tmove_off = function() {
    game1.fj1.fx = "CR";
};

gamediv.addEventListener("mouseup", tmove_off, !1), gamediv.addEventListener("mousedown", tmove, !1);