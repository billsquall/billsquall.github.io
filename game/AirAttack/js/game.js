var game = function(c, bg) {
    this.over_t = 0;
    this.onStart = 0;
    this.bzlist = [];
    this.splist = [];
    this.enemylist = [];
    this.stage = null;
    this.s = [];
    this.s2 = [];
    this.drPd = [];
    this.drJg = [];
    this.drDpd = [];
    this.splist = [];
    this.chenaList = [];
    this.zd = "a";
    this.player = null;
    this.stimer = null;
    this.sL = 0;
    this.lastAnimationFrameTime = 0;
    this.lastFpsUpdateTime = 0;
    this.fps = 0;
    this.leg = 0;
    this.c = c;
    this.st = 0;
    this.t = 0;
    this._x = 230;
    this._y = 440;
    this.ctx2 = c.getContext("2d");
    this.ctx3 = score.getContext("2d");
    this.ctx4 = hit.getContext("2d");
    this.mub_list = [null, null, null, null, null, null, null, null, null];
    this.all_mub = "000000000";
    this.hit_list = [null, null, null, null];
    this.hit_mub = "0000";
    this.imgList = ["img/startbg.jpg", "img/plane1.png", "img/dr1.png", "img/pt.png", "img/dr2.png", "img/fire2.png", "img/pd.png", "img/pd2.png", "img/lxj.png", "img/dr8.png", "img/pd4.png", "img/pd3.png", "img/pd10.png", "img/pd8.png", "img/bz1.png", "img/dr4.png", "img/hit.png", "img/bz3.png", "img/fire.png", "img/pd2.png", "img/pd11.png", "img/bload2.png", "img/bload.png", "img/pd6.png", "img/dr5.png", "img/dr6.png", "img/pd4.png", "img/bg1.png", "img/bg2.png", "img/bg3.png", "img/bg4.png", "img/bg7.jpg", "img/bg6.jpg", "img/dr6.png", "img/pd7.png", "img/pd8.png", "img/pd9.png", "img/pd10.png", "img/bz4.png", "img/dr5.png", "img/pd12.png", "img/pd5.png", "img/bz2.png", "img/jn2.png", "img/lxj2.png", "img/pd7.png", "img/dr10.png", "img/chena1.png", "img/pt2.png", "img/dr3.png", "img/chena2.png", "img/dr7.png", "img/lxj3.png", "img/pd22.png", "img/fire3.png", "img/dr9.png", "img/pd13.png", "img/pd14.png", "img/dr10.png", "img/pt3.png", "img/chena3.png", "img/lxj4.png", "img/fire4.png", "img/plane2.png", "img/select.png", "img/plane3.png", "img/pd15.png", "img/pd17.png", "img/pd16.png", "img/pd19.png", "img/pd20.png", "img/pd21.png", "img/dr11.png", "img/pt4.png", "img/pt5.png", "img/boss1_1.png", "img/boss1_2.png", "img/boss1_3.png", "img/boss1_4.png", "img/pt6.png", "img/boss2_1.png", "img/boss2_2.png", "img/pd24.png", "img/pd25.png", "img/dr12.png"];
    this.imgDx = [];
    for (var n = 0; n < this.imgList.length; n++) {
        this.imgDx[n] = new Image();
        this.imgDx[n].src = this.imgList[n];
    }
}
game.prototype.drawFPS = function(now) {
    var fps = 1000 / (now - this.lastAnimationFrameTime);
    this.lastAnimationFrameTime = now;
    if (now - this.lastFpsUpdateTime > 1000) {
        this.lastFpsUpdateTime = now;
        this.fps = fps;
    }
    this.ctx2.font = "18px Arial bold";
    this.ctx2.fillText(this.fps.toFixed(0) + 'FPS', 10, 626);
}
game.prototype.score_init = function(n) {
    var zero = "";
    for (var i = 0; i < this.mub_list.length - n.toString().length; i++) {
        zero += " ";
    }
    n = zero + n;
    var k2 = n.toString().split("");
    var k1 = Attack.all_mub.toString().split("");
    for (var i = 0; i < Attack.mub_list.length; i++) {
        if (k2[i] != " ") {
            if (k1[i] == " ") {
                k1[i] = "0";
            }
            Attack.mub_list[i] = new a_mub(parseInt(k1[i]), 15 * i + 3, parseInt(k2[i]), 9 - i, 30, this.ctx3);
        }
    }
    Attack.all_mub = n.toString();
};

game.prototype.hit_init = function(n) {
    var zero = "";
    for (var i = 0; i < this.hit_list.length - n.toString().length; i++) {
        zero += " "
    }
    n = zero + n;
    var k2 = n.toString().split("");
    var k1 = Attack.hit_mub.toString().split("");
    Attack.hit_mub = n.toString();
    for (var i = 0; i < Attack.hit_list.length; i++) {
        if (k2[i] != " ") {
            if (k1[i] == " ") {
                k1[i] = "0";
            }
            Attack.hit_list[i] = new a_mub(parseInt(k1[i]), 40 * i - 30, parseInt(k2[i]), 1, 82.5, this.ctx4);
        }
    }

};

game.prototype.loading = function() {
    this.stimer = setInterval(function() {
        this.ready();
    }.bind(this), 100);
}
game.prototype.ready = function() {
    var leg = 0;
    for (var n = 0; n < this.imgList.length; n++) {
        this.imgDx[n].complete && leg++;
    }
    var ctx = this.ctx2;
    var imgLeg = this.imgList.length;
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 480, 640);
    ctx.save();
    ctx.beginPath();
    var gradient2 = ctx.createLinearGradient(30, 280, 450, 280);
    gradient2.addColorStop(0, "#fff");
    gradient2.addColorStop(Math.sin(this.t % 10 * Math.PI / 10), "#000");
    gradient2.addColorStop(1, "#fff");
    ctx.fillStyle = gradient2;
    ctx.fillRect(28, 278, 424, 26);
    ctx.fill();
    var gradient3 = ctx.createLinearGradient(30, 280, 450, 280);
    gradient3.addColorStop(0, "#777");
    gradient3.addColorStop(Math.sin(this.t % 20 * Math.PI / 20), "#fff");
    gradient3.addColorStop(1, "#777");
    ctx.fillStyle = gradient3;
    ctx.fillRect(30, 280, 420 / this.imgList.length * leg, 22);
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.font = "19px Black Ops One";
    ctx.fillText("LOADING...", 220, 333);
    ctx.fillText(leg + "/" + this.imgList.length, 350, 333);
    ctx.fill();
    this.t++;
    if (leg == this.imgList.length) {
        clearInterval(this.stimer);
        this.stimer3 = setInterval(function() {
            this.ui();
        }.bind(this), 20);
        ctx.clearRect(0, 0, 480, 640);
        startDiv.style.display = "block";
        return;
    }
}

game.prototype.ui = function() {
    var ctx = this.ctx2;
    ctx.drawImage(this.imgDx[0], 0, this.dn);
    ctx.save();
    ctx.font = "58px Graduate";
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.beginPath();
    var gradient3 = ctx.createLinearGradient(0, 114, 470, 116);
    gradient3.addColorStop(0, "#444");
    gradient3.addColorStop(Math.sin((this.t % 140) * Math.PI / 140) * Math.sin((this.t % 140) * Math.PI / 140), "#fff");
    gradient3.addColorStop(1, "#444");
    ctx.lineWidth = 3;
    ctx.strokeStyle = gradient3;
    ctx.strokeText("AIR ATTACK", 70, 116);
    ctx.stroke();
    ctx.restore();
    this.t++;
    if (this.onStart) {
        clearInterval(this.stimer3);
        setTimeout(function() {
            this.start();
        }.bind(this), 100);
        /*leftBg.className = "leftBg leftBgOn";
        rightBg.className = "rightBg rightBgOn";*/
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                var newNode = document.createElement("div");
                newNode.className = "a_begin_div";
                newNode.style.left = 48 * i + "px";
                newNode.style.top = 63 * j + "px";
                newNode.style.backgroundPosition = ( - 48) * i + "px" + " " + ( - 63) * j + "px";
                newNode.style.webkitAnimation = "rot" + random(0, 2) + "-animation " + (random(1, 10)) / 10 + "s " + 1 + " ease-in-out";
                begin_div.appendChild(newNode);
            }
        }
        begin_div.style.display = "block";
        /* selectDiv.className = "selectDiv_on";
		selectBg.className = "selectBg_on";*/
        setTimeout(function() {
            leftBg.className = "leftBg";
            rightBg.className = "rightBg";
            begin_div.style.display = "none";
        },
        2000);
    }
}

game.prototype.selectPlane = function() {
    this.stimer = setInterval(function() {
        Attack.selectDr();
    },
    20);
    this.player = new plane(180, 240, 88, 68, Attack.imgDx[63], 3);
}

game.prototype.information = function() {
    var ctx = this.ctx2;
    var _player = this.player;
    ctx.save();
    ctx.beginPath();
    var gradient3 = ctx.createLinearGradient(8, 47, 8, 47 - _player.htime * 3 / 5);
    gradient3.addColorStop(0, "#E8D815");
    gradient3.addColorStop(Math.sin(this.t % 20 * Math.PI / 20), "#B3FF7B");
    gradient3.addColorStop(1, "#7BF1F9");
    ctx.fillStyle = gradient3;
    ctx.moveTo(8, 47);
    ctx.lineTo(32, 47);
    ctx.lineTo(32 + _player.htime * 3 / 5 * 4 / 9, 47 - _player.htime * 3 / 5);
    ctx.lineTo(32 + _player.htime * 3 / 5 * 4 / 9 - 24, 47 - _player.htime * 3 / 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.drawImage(this.imgDx[22], 5, 5, 180, 46);
    ctx.drawImage(Attack.imgDx[43], 30 * (Math.floor(this.t / 4) % 5), 0, 30, 30, 445, 5, 30, 30);
    ctx.save();
    ctx.font = "20px  Graduate";
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.beginPath();
    var gradient2 = ctx.createLinearGradient(0, 20, 0, 0);
    gradient2.addColorStop(0, "#bbb");
    gradient2.addColorStop(0.5, "#fff");
    gradient2.addColorStop(1, "#bbb");
    ctx.fillStyle = gradient2;
    ctx.textAlign = "end";
    ctx.fillText(_player.star, 445, 25);
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    var gradient3 = ctx.createLinearGradient(40, 17, 40, 30);
    gradient3.addColorStop(0, "#7D3300");
    gradient3.addColorStop(0.2, "#F58900");
    gradient3.addColorStop(0.4, "#FFF651");
    gradient3.addColorStop(0.6, "#F58900");
    gradient3.addColorStop(0.8, "#7D3300");
    gradient3.addColorStop(1, "#3E0F00");
    ctx.fillStyle = gradient3;
    ctx.moveTo(50, 24);
    ctx.lineTo(55, 18);
    ctx.lineTo(55 + 115 / 5 * _player.blood, 18);
    ctx.lineTo(55 + 115 / 5 * _player.blood + 5, 24);
    ctx.lineTo(55 + 115 / 5 * _player.blood, 29);
    ctx.lineTo(55, 29);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 0.5;
    var gradient3 = ctx.createLinearGradient(40, 17, 200, 30);
    gradient3.addColorStop(0, "#000");
    gradient3.addColorStop(Math.sin(this.t % 50 * Math.PI / 50), "#fff");
    gradient3.addColorStop(1, "#000");
    ctx.lineWidth = 2;
    ctx.strokeStyle = gradient3;
    ctx.stroke();
    this.t++;
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    var gradient2 = ctx.createLinearGradient(49, 37, 49, 47);
    gradient2.addColorStop(0, "#01185D");
    gradient2.addColorStop(0.2, "#004DEE");
    gradient2.addColorStop(0.4, "#00F9FF");
    gradient2.addColorStop(0.6, "#004FC8");
    gradient2.addColorStop(0.8, "#0036A0");
    gradient2.addColorStop(1, "#000036");
    ctx.fillStyle = gradient2;
    ctx.moveTo(44, 42);
    ctx.lineTo(48, 37);
    ctx.lineTo(49 + 110 / 200 * _player.nl, 37);
    ctx.lineTo(49 + 110 / 200 * _player.nl + 5, 42);
    ctx.lineTo(49 + 110 / 200 * _player.nl, 47);
    ctx.lineTo(49, 47);
    ctx.lineTo(44, 43);
    ctx.fill();
    ctx.globalAlpha = 0.4;
    var gradient3 = ctx.createLinearGradient(40, 17, _player.nl, 30);
    gradient3.addColorStop(0, "#00145D");
    gradient3.addColorStop(Math.sin(this.t % 30 * Math.PI / 30), "#fff");
    gradient3.addColorStop(1, "#00145D");
    ctx.lineWidth = 3;
    ctx.strokeStyle = gradient3;
    ctx.stroke();
    ctx.restore();
	ctx.drawImage(score,160,0);
	ctx.drawImage(hit,23,55);
	this.ctx3.clearRect(0, 0, 144, 30);
    this.ctx4.clearRect(0, 0, 160, 80);
	
    if (_player.htime > 0) {
        ctx.save();
        ctx.font = "22px Graduate";
        ctx.shadowColor = "#000";
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.beginPath();
        var gradient3 = ctx.createLinearGradient(70, 134, 70, 156);
        gradient3.addColorStop(0, "#FEFB01");
        gradient3.addColorStop(Math.sin((_player.t % 20) * Math.PI / 20), "#EE7D0F");
        gradient3.addColorStop(1, "#FEFB01");
        ctx.fillStyle = gradient3;
        _player.htime--;
        ctx.fillText("combo!", 70, 156);
        ctx.fill();
        ctx.restore();
    } else {
        if (_player.hit > _player.maxHit) {
            _player.maxHit = _player.hit;
        }
        this.hit_mub = "0000";
        _player.hit = 0;
        this.hit_list = [null, null, null, null];
    }
    this.drawFPS(new Date().getTime());
}

game.prototype.drObj = function() {
	 this.stimer = requestAnimFrame(function() {
        Attack.drObj();
    });
    var enemylist = this.enemylist;
    var bzList = this.bzlist;
    var spList = this.splist;
    var drpd = this.drPd;
    var drJg = this.drJg;
    var drdpd = this.drDpd;
    var _player = this.player;
    var s2 = this.s2;
	
    for (var i = 0; i < bzList.length; i++) {
        bzList[i].die && bzList.splice(i, 1);
    }
    for (var i = 0; i < spList.length; i++) {
        spList[i].die && spList.splice(i, 1);
    }
    for (var i = 0; i < s2.length; i++) {
        s2[i].die && s2.splice(i, 1);
    }
    for (var i = 0; i < enemylist.length; i++) {
        enemylist[i].die && enemylist.splice(i, 1);
    }
    for (var i = 0; i < drdpd.length; i++) {
        drdpd[i].die && drdpd.splice(i, 1);
    }
    for (var i = 0; i < drpd.length; i++) {
        drpd[i].die && drpd.splice(i, 1);
    }
    
    this.stage.drBg();
    this.stage.sT();
	
    for (var i = 0; i < enemylist.length; i++) {
        enemylist[i].move();
        if (enemylist[i].check()) {
            enemylist[i].dr();
            enemylist[i].fpao();
        }
    }
    
	for (var i = 0; i < bzList.length; i++) {
        bzList[i].dr();
        bzList[i].bao();
    }
    
	for (var i = 0; i < spList.length; i++) {
        spList[i].dr();
        spList[i].bao();
    }

    for (var i = 0; i < s2.length; i++) {
        s2[i].dr();
        s2[i].move();
    }
    
	for (var i = 0,
    j = drpd.length; i < j; i++) {
        drpd[i].move2();
        drpd[i].dr();
    }
    
	for (var i = 0,
    j = drdpd.length; i < j; i++) {
        drdpd[i].move();
        drdpd[i].dr();

    }
    
	if (!_player.die) {
        _player.dr();
        _player.fpao();
        this.information();
        for (var i = 0,
        j = drJg.length; i < j; i++) {
            drJg[i].run();
            drJg[i].dr();
        }
        for (var i = 0; i < 9; i++) {
            if (Attack.mub_list[i] != null) {
                Attack.mub_list[i].dr();
                Attack.mub_list[i].move();
            }
        }

        for (var i = 0; i < 4; i++) {
            if (Attack.hit_list[i] != null) {
                Attack.hit_list[i].dr();
                Attack.hit_list[i].move();
            }
        }
    } else {
        this.gameover();
    }
    if (this.zd != "a") {
        this.zd.dr();
        this.zd.run();
    }
}
/*ÓÎÏ·½áÊø*/
game.prototype.gameover = function() {
    this.over_t++;
    if (this.over_t == 3) {
        clearInterval(this.moveZ);
        scoreSpan.innerHTML = this.all_mub;
        hitSpan.innerHTML = this.player.maxHit;
        overDiv.style.display = "block";
    }
}

game.prototype.start = function() {
    /*this.player = new plane(180, 440,86,73,Attack.imgDx[1],1);*/
    /*this.player = new plane(180, 440,88,68,Attack.imgDx[63],2);*/
    this.player = new plane(180, 440, 90, 68, Attack.imgDx[65], 2);
    var stageOne = new stage(0, "STAGE 1", 2, 802, Attack.imgDx[31]);
    stageOne.sT = function() {
        stage1(this.t);
    }
    var stageTwo = new stage(0, "STAGE 2", 2, 802, Attack.imgDx[32]);
    stageTwo.sT = function() {
        stage2(this.t);
    }
    this.stage = stageTwo;
    this.player.wd = 2;
    Attack.score_init(parseInt(Attack.all_mub));
    Attack.drObj();
   
    var _c = gameEnter, c_x = _c.offsetLeft, c_y = _c.offsetTop,
	move = function(e) {
        var e = e || event;
        Attack._x = e.pageX - c_x;
        Attack._y = e.pageY - c_y;
    },
	tmove = function(e) {
        var e = e || event;
        if (e.targetTouches.length == 1) {
            e.preventDefault();
            var touch = e.targetTouches[0];
            Attack._x = touch.pageX - _c.offsetLeft;
            Attack._y = touch.pageY - _c.offsetTop;
        }
    }

    var xd = function() {
        this.player.zd();
    }.bind(this);
    var xd2 = function(e) {
        var e = e || event;
        if (e.targetTouches.length == 2) {
            e.preventDefault();
            Attack.player.xd();
        }
    }
    _c.addEventListener("touchmove", tmove, false);
    _c.addEventListener("mousemove", move, false);
    _c.addEventListener("dblclick", xd, false);
    _c.addEventListener("touchmove", xd2, false);
    this.moveZ = setInterval(function() {
        Attack.player.moveZd();
    },
    10);
}

game.prototype.init = function() {
    this.sp1 = 10;
    this.bzlist = [];
    this.enemylist = [];
    this.s = [];
    this.s2 = [];
    this.drPd = [];
    this.drDpd = [];
    this.drJg = [];
    this.chenaList = [];
    this.splist = [];
    this.zd = "a";
    this._x = 230;
    this._y = 440;
    this.player = null;
    this.stage = null;
    this.sL = 0;
    this.over_t = 0;
    this.dn = 0;
    this.hit_list = [null, null, null, null];
    this.hit_mub = "0000";
    cancelAFrame(this.stimer);
    clearInterval(this.stimer3);
}