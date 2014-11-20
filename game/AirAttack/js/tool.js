/*游戏工具*/
document.onkeydown = keydown;

function keydown(e) {
    var keyName;　
    var e = e || event;　
    var currKey = e.keyCode || e.which || e.charCode;　
    if ((currKey > 31 && currKey < 47))　 {　　
        switch (currKey)　　 {　　　　
        case 37:
            if (Attack.player.p_type > 0) {
                Attack.player.p_type--;
                Attack.player.t = 0;
            }

            break;　　　
        case 39:
            if (Attack.player.p_type < 1) {
                Attack.player.p_type++;
                Attack.player.t = 0;
            }
            break;　　　　
        }　　
    }
}

var OBB = function(centerPoint, width, height, rotation) {
    this.centerPoint = centerPoint;
    this.extents = [width / 2, height / 2];
    this.axes = [new Vector2(Math.cos(rotation), Math.sin(rotation)), new Vector2( - 1 * Math.sin(rotation), Math.cos(rotation))];
    this._width = width;
    this._height = height;
    this._rotation = rotation;
}
OBB.prototype = {
    getProjectionRadius: function(axis) {
        return this.extents[0] * Math.abs(axis.dot(this.axes[0])) + this.extents[1] * Math.abs(axis.dot(this.axes[1]));
    }
}

Vector2 = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

Vector2.prototype = {
    sub: function(v) {
        return new Vector2(this.x - v.x, this.y - v.y)
    },
    dot: function(v) {
        return this.x * v.x + this.y * v.y;
    }
};

var CollisionDetector = {

    detectorOBBvsOBB: function(OBB1, OBB2) {
        var nv = OBB1.centerPoint.sub(OBB2.centerPoint);
        var axisA1 = OBB1.axes[0];
        if (OBB1.getProjectionRadius(axisA1) + OBB2.getProjectionRadius(axisA1) <= Math.abs(nv.dot(axisA1))) return false;
        var axisA2 = OBB1.axes[1];
        if (OBB1.getProjectionRadius(axisA2) + OBB2.getProjectionRadius(axisA2) <= Math.abs(nv.dot(axisA2))) return false;
        var axisB1 = OBB2.axes[0];
        if (OBB1.getProjectionRadius(axisB1) + OBB2.getProjectionRadius(axisB1) <= Math.abs(nv.dot(axisB1))) return false;
        var axisB2 = OBB2.axes[1];
        if (OBB1.getProjectionRadius(axisB2) + OBB2.getProjectionRadius(axisB2) <= Math.abs(nv.dot(axisB2))) return false;
        return true;

    }
}

var $ = function(a) {
    return document.getElementById(a);
}
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(
    /* function */
    callback,
    /* DOMElement */
    element) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelAFrame = (function() {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
                    function(id) {
                        window.clearTimeout(id);
                    };
                })();

var stage2 = function(t) {
    switch (t) {
    case 30:
        enemyZc3();
        break;
    case 60:
        enemyZc();
        break;
    case 110:
        enemyZc3();
        break;
    case 189:
        crPt4(300, -100);
        crPt3(430, -190);
        break;
    case 190:
        enemyZc();
        break;
    case 248:
    case 268:
    case 288:
        sBossZc2();
        break
    case 330:
        enemyZc3();
        break;
    case 350:
        enemyZc();
        break;
    case 417:
    case 668:
        crPt2();
        crPt5();
        break;
    case 490:
        crPt5();
        break;
    case 406:
    case 416:
    case 426:
    case 436:
        sBossZc6();
        break
    case 510:
        crPt3(300, -340);
        crPt3(430, -390);
        break;
    case 510:
        crPt4(30, -100);
        break;
    case 680:
        crPt4(300, -300);
        crPt3(300, -640);
        break;
    case 790:
        crPt4(370, -140);
        crPt3(350, -390);
        break;
    case 511:
    case 541:
    case 571:
    case 601:
        sBossZc12();
        break;
    case 860:
        crPt6(210, -100);
        break;
    case 921:
    case 951:
    case 981:
    case 1011:
        sBossZc2();
        break;
    case 941:
    case 971:
    case 1001:
    case 1031:
        sBossZc12();
        break;
    case 1112:
    case 1124:
    case 1136:
    case 1148:
    case 1160:
        sBossZc5();
        break;
    case 1260:
        sBossZc4();
        break;
    case 1261:
        Attack.over_t = 2;
        break;
    case 1283:
        warning.style.display = "block";
        break;
    case 1319:
        warning.style.display = "none";
        break;
    case 1400:
        crzdj();
        break;

    }

}

var stage3 = function(t) {
    switch (t) {
        /*case 1:
        crPt7();
        
        break;
*/
    }
}

var startBtn = $("startBtn");
var helpBtn = $("helpBtn");
var overDiv = $("overDiv");
var startDiv = $("startDiv");
var btn1 = $("Btn1");
var husDiv=$("hus_div");

startBtn.onclick = function() {
    startBtn.className = "btn startBtn2";
    helpBtn.className = "btn helpBtn2";
    setTimeout(function() {
        startDiv.style.display = "none";
        Attack.onStart = 1;
    },
    300)
}

helpBtn.onclick = function() {
    setTimeout(function() {
        help_div.style.display = "block";
    },
    300)
}

husDiv.onclick = function() {
	setTimeout(function() {
		help_div.style.display = "none";
	},
	300)
}

btn1.onclick = function() {
    overDiv.style.display = "none";
    leftBg.className = "leftBg leftBgOn";
    rightBg.className = "rightBg rightBgOn";
    Attack.init();
    setTimeout(function() {
        leftBg.className = "leftBg";
        rightBg.className = "rightBg";
    },
    3000);
    setTimeout(function() {
        Attack.start();
    },
    2000);

}

function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame

function drStar() {
    var rad = random(0, 2);
    var rad2 = random(1, 8);
    var rad3 = random(0, 4);
    var bg = [Attack.imgDx[27], Attack.imgDx[28], Attack.imgDx[29], Attack.imgDx[30]]
    var st = new yun(50 * rad2, -250, bg[rad3], rad);
    Attack.s.push(st);
}


function enemyZc() {
    var kn = Attack.enemylist.length;
    for (var i = kn; i < kn + 8; i++) {
        Attack.enemylist[i] = new enemy(50 * (i - kn) - 390, 30 * (i - kn) - 260, Attack.imgDx[2], 3, 63, 55, 1, 1, 30 + i * 6, 30, 50, 1, 1);
    }
}

function enemyZc2() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy(50, 660, Attack.imgDx[84], 233, 222, 166, 14, 1, 30, 30, 50, 1, 1);
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd15(an);
    }
}

function enemyZc3() {
    var kn = Attack.enemylist.length;
    for (var i = kn; i < kn + 8; i++) {
        Attack.enemylist[i] = new enemy(50 * (i - kn) + 520, 30 * (i - kn) + 340, Attack.imgDx[2], 3, 63, 55, 1, 1, 30 + i * 6, 30, 70, 1, 1);
        Attack.enemylist[i].arc = Math.PI;
    }
}
function sBossZc5() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy( - 280, 180, Attack.imgDx[55], 20, 82, 72, 8, 10, 78, 30, 65, 1, 7, 4);
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd12(an);
    }
}

function sBossZc6() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy( - 80, 180, Attack.imgDx[55], 20, 82, 72, 11, 10, 78, 30, 65, 1, 7, 4);
    Attack.enemylist[kn].arc = -Math.PI / 2
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd13(an);
    }
}

function sBossZc4() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy(200, -100, Attack.imgDx[51], 260, 145, 132, 9, 6, 78, 46, 105, 3, 1, 3);
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd11(an);
    }
}

function sBossZc2() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy( - 100, 10, Attack.imgDx[4], 20, 40, 98, 12, 6, 78, 30, 55, 1, 1, 1);
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd3(an);
    }
}
function sBossZc12() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy(600, 10, Attack.imgDx[4], 20, 40, 98, 13, 6, 78, 26, 55, 1, 1, 1);
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd3(an);
    }
}

function sBossZc() {
    var kn = Attack.enemylist.length;
    var an3 = [];
    for (var i = kn; i < kn + 3; i++) {
        Attack.enemylist[i] = new enemy( - 10 + 130 * ((i - kn + 3) % 2), 65 * (i - kn + 1) - 330, Attack.imgDx[4], 20, 40, 98, 2, 6, 78, 26, 55, 1, 1, 1);

    }
    var an = Attack.enemylist[kn];
    var an2 = Attack.enemylist[kn + 1];
    var an3 = Attack.enemylist[kn + 2];
    an.fpao = function() {
        printbosspd3(an);
    }
    an2.fpao = function() {
        printbosspd3(an2);
    }
    an3.fpao = function() {
        printbosspd3(an3);
    }

}

function crzdj() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy(235, 650, Attack.imgDx[24], 1190, 40, 65, 7, 3, 0, 105, 120, 1, 1);
    Attack.enemylist[kn].tank = 5;
    Attack.enemylist[kn + 1] = new enemy(195, 650, Attack.imgDx[25], 1190, 40, 65, 6, 3, 0, 55, 120, 1, 1);
    Attack.enemylist[kn + 1].tank = 5;
    Attack.enemylist[kn + 2] = new enemy(200, 600, Attack.imgDx[15], 1000, 70, 254, 5, 3, 0, 80, 120, 2, 1, 2);
    Attack.enemylist[kn + 2].tank = 5;
    var an = Attack.enemylist[kn + 2];
    an.fpao = function() {
        printbosspd6(an);
    }
    var an1 = Attack.enemylist[kn + 1];
    an1.fpao = function() {
        printbosspd8(an1);
    }
    var an2 = Attack.enemylist[kn];
    an2.fpao = function() {
        printbosspd9(an2);
    }
}

function boss() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy(200, 600, Attack.imgDx[75], 940, 24, 268, 5, 3, 0, 80, 120, 1, 1);
    Attack.enemylist[kn].tank = 6;
    Attack.enemylist[kn + 1] = new enemy(11, 650, Attack.imgDx[76], 940, 189, 88, 5, 3, 0, 80, 120, 1, 1);
    Attack.enemylist[kn + 2] = new enemy(224, 650, Attack.imgDx[77], 940, 189, 88, 5, 3, 0, 80, 120, 1, 1);
    Attack.enemylist[kn + 3] = new enemy(154, 830, Attack.imgDx[78], 940, 116, 56, 5, 3, 0, 80, 120, 1, 1);
}

function boss2() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy(184, 772, Attack.imgDx[81], 940, 120, 118, 15, 3, 0, 80, 120, 1, 1);
    Attack.enemylist[kn].tank = 7;
    var an2 = Attack.enemylist[kn];
    an2.fpao = function() {
        bosspd2(an2);
    }
    Attack.enemylist[kn + 1] = new enemy(40, 600, Attack.imgDx[80], 940, 406, 174, 15, 3, 0, 80, 120, 1, 1);
    Attack.enemylist[kn + 1].tank = 6;
    var an = Attack.enemylist[kn + 1];
    an.fpao = function() {
        bosspd(an);
    }
}

function crPt3(a, b) {
    var kn = Attack.enemylist.length;
    var chena = {
        img: Attack.imgDx[50],
        mfx: 1,
        type: 0
    }
    Attack.enemylist[kn] = new enemy(a, b, Attack.imgDx[49], 10, 40, 40, 4, 3, 0, 0, 0, 1, 1, 0, chena);
    Attack.enemylist[kn].tank = 2;
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd4(an);
    }

}
function crPt5() {
    var kn = Attack.enemylist.length;
    var chena = {
        img: Attack.imgDx[47],
        mfx: 1,
        type: 0
    }
    Attack.enemylist[kn] = new enemy(250, -100, Attack.imgDx[9], 20, 32, 56, 10, 3, 0, 0, 0, 1, 1, 0, chena);
    Attack.enemylist[kn].tank = 1;
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd7(an);
    }

}

function crPt2() {
    var kn = Attack.enemylist.length;
    var chena = {
        img: Attack.imgDx[47],
        mfx: 1,
        type: 0
    }
    Attack.enemylist[kn] = new enemy(400, -100, Attack.imgDx[9], 20, 32, 56, 3, 3, 0, 0, 0, 1, 1, 0, chena);
    Attack.enemylist[kn].tank = 1;

    var an = Attack.enemylist[kn];

    an.fpao = function() {
        printbosspd7(an);
    }

}
function crPt7(a, b) {
    var kn = Attack.enemylist.length;
    var chena = {
        img: Attack.imgDx[47],
        mfx: 1,
        type: 0
    }
    Attack.enemylist[kn] = new enemy(a, b, Attack.imgDx[9], 20, 32, 56, 3, 3, 0, 0, 0, 1, 1, 0, chena);
    Attack.enemylist[kn].tank = 1;

    var an = Attack.enemylist[kn];

    an.fpao = function() {
        printbosspd7(an);
    }

}
function crPt6(a, b) {
    var kn = Attack.enemylist.length;
    var chena = {
        img: Attack.imgDx[47],
        mfx: 1,
        type: 0
    }
    Attack.enemylist[kn] = new enemy(a, b, Attack.imgDx[72], 60, 30, 56, 3, 3, 0, 0, 0, 1, 1, 0, chena);
    Attack.enemylist[kn].tank = 4;

    var an = Attack.enemylist[kn];

    an.fpao = function() {
        printbosspd17(an);
    }

}

function crPt4(a, b) {
    var kn = Attack.enemylist.length;
    var chena = {
        img: Attack.imgDx[60],
        mfx: 1,
        type: 0
    }
    Attack.enemylist[kn] = new enemy(a, b, Attack.imgDx[58], 10, 40, 49, 4, 3, 0, 0, 0, 1, 1, 0, chena);
    Attack.enemylist[kn].tank = 3;
    var an = Attack.enemylist[kn];
    an.fpao = function() {
        printbosspd10(an);
    }

}

function sBossZc3() {
    var kn = Attack.enemylist.length;
    Attack.enemylist[kn] = new enemy(360, -250, Attack.imgDx[19], 340, 241, 114, 8, 3, 0, 30, 120, 1, 2);
    var jk = Attack.enemylist[kn];
    jk.arc = Math.PI;
    jk.fpao = function() {
        printbosspd2(jk, 34);
    }
    Attack.enemylist[kn + 1] = new enemy( - 10, -200, Attack.imgDx[19], 340, 241, 114, 9, 3, 0, 30, 120, 1, 2);
    var jk2 = Attack.enemylist[kn + 1];
    jk2.arc = Math.PI;
    jk2.fpao = function() {
        printbosspd2(jk2, 14);
    }
}


function printbosspd(an, n, t) {
    if (an.t > 75 && an.t2 == t) {
        an.arc = Math.PI / 10 * Math.sin(Math.PI / 40 * (an.t * n));
        an.fire(an.x + 18, an.y + 66, 22, 0, 34, Math.PI - an.arc);
        an.fire(an.x + 33, an.y + 66, 22, 0, 34, Math.PI - an.arc);
    }
    if (an.t2 == t) {
        an.t2 = 0
    }
}
function printbosspd3(an) {
    if (an.t2 % 120 == 0 || an.t2 % 120 == 6 || an.t2 % 120 == 12 || an.t2 % 120 == 18) {
        an.fire(an.x + 10, an.y + 49, 3, 7, 10, 0, 4 + an.t2 % 120 / 24);
        an.fire(an.x + 30, an.y + 49, 3, 7, 10, 0, 4 + an.t2 % 120 / 24);
    }

}

var sj_8 = 0;
function printbosspd8(an) {
    if (an.t2 == 1) {
        sj_8 = random(1, 4);
    }

    if (an.t2 > 176 && an.t2 < 276 && (an.t2 == 240)) {
        an.fire(an.x + 20, an.y + 9, 7, 0, 0);
    }
    if (an.t2 == 176) {
        var cx = an.x + an.width / 2 - Attack.player.x - 43;
        var cy = an.y + an.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;
        var cos1 = cy / cz;
        if (cy > 0) {
            an.arc3 = Math.PI - Math.asin(sin1);
        } else {
            an.arc3 = Math.asin(sin1);
        }
        an.moveto(an.arc3);

    }
    if (an.t2 > 176 && an.t2 <= 196) {
        an.arc2 -= an.a_arc;
    }

    if (sj_8 == 1 && an.t2 > 176 && an.t2 < 226 && an.t2 % 3 == 0) {
        an.arc2 -= Math.PI / 50;
        an.fire(an.x + 24, an.y + 70, 18, 0, 0, Math.PI - an.arc2, (an.t2 - 176) / 6 + 5);
        an.fire(an.x + 16, an.y + 70, 18, 0, 0, Math.PI - an.arc2, (an.t2 - 176) / 6 + 5);
    }
    if (sj_8 == 2 && an.t2 > 196 && an.t2 < 226 && an.t2 % 4 == 0) {
        an.arc2 += Math.PI / 100;

        an.fire(an.x + 24, an.y + 70, 9, 0, 0, Math.PI - an.arc2, ((an.t2 - 196) / 8 + 5));
        an.fire(an.x + 16, an.y + 70, 9, 0, 0, Math.PI - an.arc2, ((an.t2 - 176) / 8 + 5));
    }
    if ((sj_8 == 3) && an.t2 > 196 && an.t2 < 206 && (an.t2 % 2 == 0)) {

        for (var i = 0; i < 8; i++) {
            var rad = random( - 4, 4);
            an.fire(an.x + 24, an.y + 70, 6, 8, 10, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (an.t2 - 196) / 4 + 3);
            an.fire(an.x + 16, an.y + 70, 6, 8, 10, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (an.t2 - 196) / 4 + 3);
        }
    }
    if (an.t2 == 302) {
        an.t2 = 0

    }
}

function printbosspd9(an) {
    if (an.t2 > 176 && an.t2 < 276 && (an.t2 == 240)) {
        an.fire(an.x + 20, an.y + 9, 8, 0, 0);
    }
    if (an.t2 == 176) {
        var cx = an.x + an.width / 2 - Attack.player.x - 43;
        var cy = an.y + an.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;
        var cos1 = cy / cz;
        if (cy > 0) {
            an.arc3 = Math.PI - Math.asin(sin1);
        } else {
            an.arc3 = Math.asin(sin1);
        }
        an.moveto(an.arc3);

    }
    if (an.t2 > 176 && an.t2 <= 196) {
        an.arc2 -= an.a_arc;
    }

    if (sj_8 == 1 && an.t2 > 176 && an.t2 < 226 && an.t2 % 3 == 0) {
        an.arc2 += Math.PI / 50;
        an.fire(an.x + 24, an.y + 70, 18, 0, 0, Math.PI - an.arc2, (an.t2 - 176) / 6 + 5);
        an.fire(an.x + 16, an.y + 70, 18, 0, 0, Math.PI - an.arc2, (an.t2 - 176) / 6 + 5);
    }
    if (sj_8 == 2 && an.t2 > 196 && an.t2 < 226 && an.t2 % 4 == 0) {

        an.arc2 -= Math.PI / 100;
        an.fire(an.x + 24, an.y + 70, 9, 0, 0, Math.PI - an.arc2, ((an.t2 - 196) / 8 + 5));
        an.fire(an.x + 16, an.y + 70, 9, 0, 0, Math.PI - an.arc2, ((an.t2 - 176) / 8 + 5));
    }
    if ((sj_8 == 3) && an.t2 > 196 && an.t2 < 206 && (an.t2 % 2 == 0)) {

        for (var i = 0; i < 8; i++) {
            var rad = random( - 4, 4);
            an.fire(an.x + 24, an.y + 70, 6, 8, 10, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (an.t2 - 196) / 4 + 3);
            an.fire(an.x + 16, an.y + 70, 6, 8, 10, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (an.t2 - 196) / 4 + 3);
        }
    }
    if (an.t2 == 302) {
        an.t2 = 0

    }
}

var sj_11 = 0;

function printbosspd11(an) {
    if (an.t2 % 150 == 0) {
        sj_11 = random(1, 3);
    }
    if ((an.t2 % 150 == 2 || an.t2 % 150 == 28)) {
        an.fire(an.x + 60, an.y + 66, 8, 0, 0);
        an.fire(an.x + 85, an.y + 66, 7, 0, 0);
    }
    if (sj_11 == 1 && (an.t2 % 150 == 108 || an.t2 % 150 == 118 || an.t2 % 150 == 128)) {
        an.arc3 -= Math.PI / 20;
        for (var i = 0; i < 20; i++) {

            an.fire(an.x + 73, an.y + 27, 10, 16, 16, Math.PI / 10 * i - an.arc3);
        }
    }
    if (sj_11 == 1 && (an.t2 % 150 == 88 || an.t2 % 150 == 98 || an.t2 % 150 == 78)) {
        an.arc3 -= Math.PI / 20;
        for (var i = 0; i < 14; i++) {

            an.fire(an.x + 73, an.y + 27, 26, 16, 16, Math.PI / 7 * i - an.arc3, 3);
        }
    }
    if (sj_11 == 2 && an.t2 % 150 % 30 == 0) {
        var cx = an.x + an.width / 2 - Attack.player.x - 43;
        var cy = an.y + an.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;
        var cos1 = cy / cz;

        if (cy > 0) {
            an.arc3 = Math.PI - Math.asin(sin1);

        } else {
            an.arc3 = Math.asin(sin1);
        }
    }
    if (sj_11 == 2 && an.t2 % 150 % 30 % 3 == 0 && an.t2 % 150 % 30 < 10) {

        for (var i = 0; i < 4; i++) {

            an.fire(an.x + 73, an.y + 27, 13, 16, 16, Math.PI - Math.PI / 20 * (3 - i) - an.arc3, an.t2 % 150 % 30 / 3 + 5);
        }
    }

}

var sj_15 = 0;

function printbosspd15(an) {

    if (an.t2 % 150 == 0) {
        var cx = an.x + an.width / 2 - Attack.player.x - 43;
        var cy = an.y + an.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;
        var cos1 = cy / cz;

        if (cy > 0) {
            an.arc3 = Math.PI - Math.asin(sin1);

        } else {
            an.arc3 = Math.asin(sin1);
        }
    }

    if ((an.t2 % 150 == 88 || an.t2 % 150 == 98 || an.t2 % 150 == 78)) {
        an.arc3 -= Math.PI / 20;
        for (var i = 0; i < 5; i++) {

            an.fire(an.x + 111 + 70, an.y + 47, 6, 0, 0, Math.PI / 5 * i - an.arc3 + Math.PI / 2, (an.t2 % 150 - 88) / 10 + 3);

            an.fire(an.x + 111 - 70, an.y + 47, 6, 0, 0, Math.PI / 5 * i - an.arc3 + Math.PI / 2, (an.t2 % 150 - 88) / 10 + 3);
            an.fire(an.x + 111, an.y + 47, 26, 10, 10, Math.PI / 5 * i - an.arc3 + Math.PI / 2, 3);
        }
    }

}

function printbosspd12(an) {
    if (an.t2 == 118) {

        var rad = random( - 10, 10);
        an.fire(an.x + 41, an.y + 36, 11, 16, 16, Math.PI - Math.PI / 20 * rad);

    }

    if (an.t2 == 150) {
        an.t2 = 0
    }
}

function printbosspd13(an) {
    if (an.t2 % 20 == 0) {
        var rad = random( - 10, 10);

        an.fire(an.x + 41, an.y + 36, 17, 12, 18, rad * Math.PI * 1 / 5);

    }
    if (an.t2 % 20 == 1) {
        var rad = random( - 10, 10);

        an.fire(an.x + 41, an.y + 36, 17, 12, 18, rad * Math.PI * 1 / 5);

    }
    if (an.t2 % 20 == 2) {

        var rad = random( - 10, 10);
        an.fire(an.x + 41, an.y + 36, 17, 12, 18, rad * Math.PI * 1 / 5);

    }

}

var sj_1 = 0;

function bosspd(an) {
    var j = an.t % 200;
    if (j == 1) {
        sj_1 = random(1, 4);
    }
    if (sj_1 == 2 || sj_1 == 3) {

        var cx = an.x + an.width / 2 - Attack.player.x - 43;
        var cy = an.y + an.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;
        var cos1 = cy / cz;

        if (cy > 0) {
            an.arc3 = Math.PI - Math.asin(sin1);

        } else {
            an.arc3 = Math.asin(sin1);
        }
        an.moveto(an.arc3);

    }
    if (sj_1 == 1 && j == 79) {

        var cx = an.x + an.width / 2 - Attack.player.x - 43;
        var cy = an.y + an.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;
        var cos1 = cy / cz;

        if (cy > 0) {
            an.arc3 = Math.PI - Math.asin(sin1);

        } else {
            an.arc3 = Math.asin(sin1);
        }
        an.moveto(an.arc3);

    }
    if (sj_1 == 2 && j <= 20) {
        an.arc2 -= an.a_arc;
    }
    if (sj_1 == 3 && j <= 20) {
        an.arc2 -= an.a_arc;
    }

    if (sj_1 == 1 && j > 80 && j <= 100) {
        an.arc2 -= an.a_arc;
    }

    if (sj_1 == 1 && j > 100 && j < 170 && j % 5 == 0) {

        for (var i = 0; i < 5; i++) {

            an.fire(an.x + 199, an.y + 122, 25, 0, 0, Math.PI - an.arc2 + Math.PI / 15 * (3 - i), (j - 100) % 35 / 10 + 6, 2);
            an.fire(an.x + 207, an.y + 122, 25, 0, 0, Math.PI - an.arc2 - Math.PI / 15 * (3 - i), (j - 100) % 35 / 10 + 6, 2);

        }

    }
    if (sj_1 == 2 && j > 20 && j < 140) {

        an.arc2 += Math.PI / 30;

        an.fire(an.x + 199, an.y + 122, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 30 + 4, 2);
        an.fire(an.x + 207, an.y + 122, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 30 + 4, 2);

    }
    if (sj_1 == 2 && j > 20 && j == 140) {
        an.arc2 -= Math.PI * 4;
    }
    if (sj_1 == 3 && j > 20 && j < 30 && j % 2 == 0) {

        for (var i = 0; i < 10; i++) {
            var rad = random( - 4, 4);
            an.fire(an.x + 199, an.y + 122, 6, 14, 20, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (j - 20) / 4 + 3, 2);
            an.fire(an.x + 207, an.y + 122, 6, 14, 20, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (j - 20) / 4 + 3, 2);
        }

    }

}

function bosspd2(an) {

    var j = an.t % 200;

    if (j == 1) {

}

    if (sj_1 == 1 && j < 20) {
        an.arc2 = 0
    }

    if (sj_1 == 1 && j > 20 && j < 60 && j % 3 == 0) {

        an.arc2 -= Math.PI / 50;

        an.fire(an.x + 56, an.y + 95, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 20 + 4, 3);

        an.fire(an.x + 64, an.y + 95, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 20 + 4, 3);

        an.fire(an.x + 56, an.y + 95, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 20 + 4, 4);
        an.fire(an.x + 64, an.y + 95, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 20 + 4, 4);
    }
    if (sj_1 == 1 && j > 60 && j < 100 && j % 3 == 0) {

        an.arc2 += Math.PI / 30;

        an.fire(an.x + 56, an.y + 95, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 20 + 4, 3);

        an.fire(an.x + 64, an.y + 95, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 20 + 4, 3);

        an.fire(an.x + 56, an.y + 95, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 20 + 4, 4);
        an.fire(an.x + 64, an.y + 95, 23, 0, 0, Math.PI - an.arc2, (j - 20) / 20 + 4, 4);
    }

    if (sj_1 == 1 && j < 20) {
        an.arc4 = 0
    }

    if (sj_1 == 1 && j > 20 && j < 60 && j % 2 == 0) {

        an.arc4 += Math.PI / 50;

        an.fire(an.x + 56, an.y + 95, 23, 0, 0, Math.PI - an.arc4, (j - 20) / 20 + 4, 5);

        an.fire(an.x + 64, an.y + 95, 23, 0, 0, Math.PI - an.arc4, (j - 20) / 20 + 4, 5);

        an.fire(an.x + 56, an.y + 95, 23, 0, 0, Math.PI - an.arc4, (j - 20) / 20 + 4, 6);
        an.fire(an.x + 64, an.y + 95, 23, 0, 0, Math.PI - an.arc4, (j - 20) / 20 + 4, 6);
    }

    if (sj_1 == 1 && j > 60 && j < 100 && j % 2 == 0) {
        an.arc4 -= Math.PI / 50;
        an.fire(an.x + 56, an.y + 95, 23, 0, 0, Math.PI - an.arc4, (j - 20) / 20 + 4, 5);

        an.fire(an.x + 64, an.y + 95, 23, 0, 0, Math.PI - an.arc4, (j - 20) / 20 + 4, 5);

        an.fire(an.x + 56, an.y + 95, 23, 0, 0, Math.PI - an.arc4, (j - 20) / 20 + 4, 6);
        an.fire(an.x + 64, an.y + 95, 23, 0, 0, Math.PI - an.arc4, (j - 20) / 20 + 4, 6);
    }
    if (sj_1 == 3 && j > 40 && j < 50 && j % 2 == 0) {

        for (var i = 0; i < 10; i++) {
            var rad = random( - 4, 4);
            an.fire(an.x + 56, an.y + 95, 6, 14, 20, Math.PI - an.arc4 + Math.PI / 15 * rad + Math.PI * 1 / 14, (j - 40) / 4 + 3, 6);
            an.fire(an.x + 64, an.y + 95, 6, 14, 20, Math.PI - an.arc4 + Math.PI / 15 * rad + Math.PI * 1 / 14, (j - 40) / 4 + 3, 6);
        }

    }
    if (sj_1 == 3 && j > 60 && j < 70 && j % 2 == 0) {

        for (var i = 0; i < 10; i++) {
            var rad = random( - 4, 4);
            an.fire(an.x + 56, an.y + 95, 6, 14, 20, Math.PI - an.arc4 + Math.PI / 15 * rad + Math.PI * 1 / 14, (j - 60) / 4 + 3, 5);
            an.fire(an.x + 64, an.y + 95, 6, 14, 20, Math.PI - an.arc4 + Math.PI / 15 * rad + Math.PI * 1 / 14, (j - 60) / 4 + 3, 5);
        }

    }

}

var rad4 = 0;
function printbosspd6(an) {
    var rad = random( - 20, 20);
    var j = an.t % 140;
    if (j == 1) {
        rad4 = random(1, 6);

        var cx = an.x + an.width / 2 - Attack.player.x - 43;
        var cy = an.y + an.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;
        var cos1 = cy / cz;

        if (cy > 0) {
            an.arc3 = Math.PI - Math.asin(sin1);

        } else {
            an.arc3 = Math.asin(sin1);
        }
        an.moveto(an.arc3);

    }

    if (j <= 20) {
        an.arc2 -= an.a_arc;
    }
    if ((rad4 == 1) && j > 20 && j < 50 && j % 3 == 0) {
        an.arc2 += Math.PI / 50;
        an.fire(an.x + 31, an.y + 160, 4, 0, 0, Math.PI - an.arc2, (j - 20) / 6 + 5);
        an.fire(an.x + 39, an.y + 160, 4, 0, 0, Math.PI - an.arc2, (j - 20) / 6 + 5);
    }
    if ((rad4 == 1) && j > 50 && j < 80 && j % 3 == 0) {

        an.fire(an.x + 31, an.y + 160, 4, 0, 0, Math.PI - an.arc2 - Math.PI / 50 * (j - 50) / 6, (j - 50) / 6 + 5);
        an.fire(an.x + 39, an.y + 160, 4, 0, 0, Math.PI - an.arc2 + Math.PI / 50 * (j - 50) / 6, (j - 50) / 6 + 5);

    }
    if ((rad4 == 1) && j > 80 && j < 110 && j % 3 == 0) {

        an.arc2 -= Math.PI / 25;
        an.fire(an.x + 31, an.y + 160, 4, 0, 0, Math.PI - an.arc2, (j - 80) / 6 + 5);
        an.fire(an.x + 39, an.y + 160, 4, 0, 0, Math.PI - an.arc2, (j - 80) / 6 + 5);

    }

    if ((rad4 == 2) && j > 80 && j < 110 && (j % 6 == 0)) {

        for (var i = 0; i < 5; i++) {
            an.fire(an.x + 31, an.y + 160, 9, 0, 0, Math.PI - an.arc2 + Math.PI / 15 * (3 - i), 7);
            an.fire(an.x + 39, an.y + 160, 9, 0, 0, Math.PI - an.arc2 + Math.PI / 15 * (3 - i), 7);
        }

    }
    if ((rad4 == 2) && j > 20 && j < 80 && (j % 6 == 0)) {
        an.fire(an.x + 31, an.y + 160, 9, 0, 0, Math.PI - an.arc2 - Math.PI / 50 * ((j) / 6), ((j - 20) / 6 + 3));
        an.fire(an.x + 39, an.y + 160, 9, 0, 0, Math.PI - an.arc2 + Math.PI / 50 * ((j) / 6), ((j - 20) / 6 + 3));
    }

    if ((rad4 == 3) && j > 20 && j < 30 && (j % 2 == 0)) {
        an.arc2 -= Math.PI / 20;
        for (var i = 0; i < 8; i++) {
            var rad = random( - 4, 4);
            an.fire(an.x + 31, an.y + 160, 6, 14, 20, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (j - 20) / 4 + 3);
            an.fire(an.x + 39, an.y + 160, 6, 14, 20, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (j - 20) / 4 + 3);
        }
    }
    if ((rad4 == 3) && j > 40 && j < 60 && (j % 2 == 0)) {
        an.arc2 += Math.PI / 20;
        for (var i = 0; i < 8; i++) {
            var rad = random( - 4, 4);
            an.fire(an.x + 31, an.y + 160, 6, 8, 10, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (j - 40) / 4 + 3);
            an.fire(an.x + 39, an.y + 160, 6, 8, 10, Math.PI - an.arc2 + Math.PI / 20 * rad + Math.PI * 1 / 14, (j - 40) / 4 + 3);
        }
    }

    if ((rad4 == 4) && j > 20 && j < 120 && (j % 2 == 0)) {
        if (j < 40) {
            an.arc2 += Math.PI / 20;
            an.fire(an.x + 31, an.y + 160, 18, 0, 0, Math.PI - an.arc2, (j - 20) / 8 + 4);
            an.fire(an.x + 39, an.y + 160, 18, 0, 0, Math.PI - an.arc2, (j - 20) / 8 + 4);
        } else if (j < 80) {
            an.arc2 -= Math.PI / 20;
            an.fire(an.x + 31, an.y + 160, 18, 0, 0, Math.PI - an.arc2, (j - 40) / 8 + 5);
            an.fire(an.x + 39, an.y + 160, 18, 0, 0, Math.PI - an.arc2, (j - 40) / 8 + 5);
        } else if (j < 120) {
            an.arc2 += Math.PI / 20;
            an.fire(an.x + 31, an.y + 160, 18, 0, 0, Math.PI - an.arc2, (j - 80) / 8 + 6);
            an.fire(an.x + 39, an.y + 160, 18, 0, 0, Math.PI - an.arc2, (j - 80) / 8 + 6);
        }

    }

    if ((rad4 == 5) && j > 20 && j % 30 == 1) {
        var cx = an.x + an.width / 2 - Attack.player.x - 43;
        var cy = an.y + an.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;
        var cos1 = cy / cz;

        if (cy > 0) {
            an.arc3 = Math.PI - Math.asin(sin1);

        } else {
            an.arc3 = Math.asin(sin1);
        }
        an.moveto(an.arc3);

    }

    if ((rad4 == 5) && j > 20 && j % 30 < 20) {
        an.arc2 -= an.a_arc;
    }
    if ((rad4 == 5) && j % 30 % 3 == 0 && j % 30 > 20 && j % 30 < 30) {
        an.arc2 -= Math.PI / 80;
        for (var i = 0; i < 3; i++) {
            an.fire(an.x + 31, an.y + 160, 26, 16, 16, Math.PI - Math.PI / 20 * (2 - i) - an.arc2, j % 30 / 9 + 4);
            an.fire(an.x + 39, an.y + 160, 26, 16, 16, Math.PI - Math.PI / 20 * (2 - i) - an.arc2, j % 30 / 9 + 4);
        }
    }
}

function printbosspd17(an) {
    var cx = an.x - Attack.player.x - 20;
    var cy = an.y - Attack.player.y - 25;
    var cz = Math.sqrt(cx * cx + cy * cy);
    var sin1 = cx / cz;
    var cos1 = cy / cz;
    if (cy > 0) {
        an.arc3 = Math.PI - Math.asin(sin1);
    } else {
        an.arc3 = Math.asin(sin1);
    }
    if (an.t2 == 1) {
        an.moveto(an.arc3)
    }
    if (an.t2 <= 20) {
        an.arc2 -= an.a_arc;
    }
    if (an.t2 > 20 && an.t2 < 60 && an.t2 % 100 % 6 == 0) {
        an.fire(an.x + 12, an.y + 70, 19, 7, 10, Math.PI - an.arc2, -(an.t2 - 20) % 100 / 18 + 6);
        an.fire(an.x + 20, an.y + 70, 19, 7, 10, Math.PI - an.arc2 + Math.PI / 40, -(an.t2 - 20) % 100 / 12 + 6);
        an.fire(an.x + 20, an.y + 70, 19, 7, 10, Math.PI - an.arc2, -(an.t2 - 20) % 100 / 18 + 6);
        an.fire(an.x + 12, an.y + 70, 19, 7, 10, Math.PI - an.arc2 - Math.PI / 40, -(an.t2 - 20) % 100 / 12 + 6);
    }

    if (an.t2 == 100) {
        an.t2 = 0;
    }
}
function printbosspd7(an) {
    var cx = an.x - Attack.player.x - 20;
    var cy = an.y - Attack.player.y - 25;
    var cz = Math.sqrt(cx * cx + cy * cy);
    var sin1 = cx / cz;
    var cos1 = cy / cz;
    if (cy > 0) {
        an.arc3 = Math.PI - Math.asin(sin1);
    } else {
        an.arc3 = Math.asin(sin1);
    }

    if (an.t2 == 1) {
        an.moveto(an.arc3)
    }
    if (an.t2 <= 20) {
        an.arc2 -= an.a_arc;
    }

    if (an.t2 > 20 && an.t2 < 50 && an.t2 % 7 == 0) {
        an.arc2 += Math.PI / 180;

        an.fire(an.x + 16, an.y + 56, 19, 7, 10, Math.PI - an.arc2, (an.t2 - 20) / 35 + 4);
    }
    if (an.t2 == 100) {
        an.t2 = 0;
    }
}

var arc5 = 0;
function printbosspd10(an) {
    var cx = an.x - Attack.player.x - 20;
    var cy = an.y - Attack.player.y - 25;
    var cz = Math.sqrt(cx * cx + cy * cy);
    var sin1 = cx / cz;
    var cos1 = cy / cz;
    if (cy > 0) {
        arc5 = Math.PI - Math.asin(sin1);
    } else {
        arc5 = Math.asin(sin1);
    }
    if (an.t2 == 1) {
        an.moveto(arc5)
    }
    if (an.t2 <= 20) {
        an.arc2 -= an.a_arc;
    }
    if (an.t2 == 21) {

        an.fire(an.x + 20, an.y + 63, 5, 7, 10, Math.PI - an.arc2, 3);
    }

    if (an.t2 == 84) {
        an.t2 = 0;
    }
}

function printbosspd5(an) {
    if (an.t2 == 86 || an.t2 == 88 || an.t2 == 90 || an.t2 == 92 || an.t2 == 94 || an.t2 == 96 || an.t2 == 98 || an.t2 == 100) {
        var rad = random( - 13, 13);
        an.fire(an.x + 12, an.y + 65, 23, 0, 0, Math.PI - an.arc + rad * Math.PI / 100);
        an.fire(an.x + 76, an.y + 65, 23, 0, 0, Math.PI - an.arc + rad * Math.PI / 100);
        an.fire(an.x + 40, an.y + 65, 22, 0, 0, Math.PI - an.arc + rad * Math.PI / 100);
    }
    if (an.t2 == 102 || an.t2 == 103 || an.t2 == 104 || an.t2 == 106 || an.t2 == 107) {
        var rad = random( - 13, 13);
        an.fire(an.x + 12, an.y + 65, 23, 0, 0, Math.PI - an.arc + rad * Math.PI / 100);
        an.fire(an.x + 76, an.y + 65, 23, 0, 0, Math.PI - an.arc + rad * Math.PI / 100);

    }
    if (an.t2 == 110) {
        an.t2 = 0;
    }

}

var arc6 = 0;
function printbosspd4(an) {
    var cx = an.x - Attack.player.x - 20;
    var cy = an.y - Attack.player.y - 25;
    var cz = Math.sqrt(cx * cx + cy * cy);
    var sin1 = cx / cz;
    var cos1 = cy / cz;
    if (cy > 0) {
        arc6 = Math.PI - Math.asin(sin1);
    } else {
        arc6 = Math.asin(sin1);
    }
    if (an.t2 == 1) {
        an.moveto(arc6)
    }
    if (an.t2 <= 20) {
        an.arc2 -= an.a_arc;
    }

    if ((an.t2 == 21 || an.t2 == 26 || an.t2 == 31 || an.t2 == 36 || an.t2 == 41 || an.t2 == 46)) {

        an.arc2 += Math.PI / 120;

        an.fire(an.x + 20, an.y + 49, 18, 0, 0, Math.PI - an.arc2, (an.t2 - 20) / 18 + 5);
    }

    if (an.t2 == 84) {
        an.t2 = 0;
    }
}