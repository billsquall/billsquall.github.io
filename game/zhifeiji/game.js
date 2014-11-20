function game(c) {
	this.wallList = [];
	this.fj1 = null;
	this.stimer = null;
	this.t = [];
	this.splist = [];
	this.leg = 0;
	this.c = c;
	this.t2 = 0;
	this.gy = 0;
	this.option = 0;
	this.gy2 = 705;
	this.overt = 0;
	this.ctx2 = c.getContext("2d");
	this.imgList = ["bg.jpg"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/bg.jpg*/, "sg1.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sg1.png*/, "sg2.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sg2.png*/, "sg3.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sg3.png*/, "sg4.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sg4.png*/, "sg5.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sg5.png*/, "sg6.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sg6.png*/, "sg7.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sg7.png*/, "sg8.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sg8.png*/, "sp.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/sp.png*/, "fj1.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/fj1.png*/, "fj2.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/fj2.png*/, "icon1-1.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/icon1.png*/, "icon2-1.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/icon2.png*/, "icon3-1.png"/*tpa=http://www.iweiyang.cn/zhifeiji/js/img/icon3.png*/];
	this.imgDx = [];
	for (var n = 0; n < this.imgList.length; n++) {
		this.imgDx[n] = new Image();
		this.imgDx[n].src = this.imgList[n];
	}
}
game.prototype.drBg = function() {
	var ctx = this.ctx2;
	ctx.drawImage(game1.imgDx[0], 0, this.gy);
	ctx.drawImage(game1.imgDx[0], 0, this.gy2);
	this.t2++;
}
game.prototype.gamestart = function() {
	this.fj1 = new fj(230, -60);
	game1.start();
	icon3.style.display = "block";
}
game.prototype.drXx = function() {
	var ctx = this.ctx2,_fj1 = this.fj1;
	ctx.save();
	ctx.strokeStyle = "#fff";
	ctx.strokeRect(10, 6, 150, 20);
	ctx.restore();
	ctx.save();
	var gradient3 = ctx.createLinearGradient(10, 10, 170, 10);
	gradient3.addColorStop(0, "#fff");
	gradient3.addColorStop((this.t2 % 20) / 20, "#aaa");
	gradient3.addColorStop(1, "#fff");
	ctx.fillStyle = gradient3;
	ctx.fillRect(10, 6, _fj1.nl, 20);
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.shadowColor = "#222";
	ctx.shadowOffsetY = 1;
	ctx.shadowOffsetX = 1;
	ctx.fillStyle = "#fff;";
	ctx.font = "bold 14px Verdana";
	ctx.fillText("SCORE:" + _fj1.score + "cm", 20, 21);
	ctx.fill();
	ctx.fillStyle = "#fff;";
	ctx.textAlign = "end";
	ctx.fillText("H-SCORE:" + _fj1.Hscore + "cm", 500, 21);
	ctx.restore();
}
game.prototype.ready = function() {
	var leg = 0;
	for (var n = 0; n < this.imgList.length; n++) {
		if (this.imgDx[n].complete) {
			leg++;
		}
	}
	var ctx = this.ctx2;
	var imgLeg = this.imgList.length;
	ctx.clearRect(0, 0, 512, 630);
	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.fillRect(60, 280, 400, 70);
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.font = "bold 30px Verdana";
	ctx.fillText(leg + "/" + imgLeg, 205, 383);
	var gradient3 = ctx.createLinearGradient(60, 280, 460, 280);
	gradient3.addColorStop(0, "#D57E38");
	gradient3.addColorStop((this.t2 % 20) / 20, "#fff");
	gradient3.addColorStop(1, "#D57E38");
	ctx.fillStyle = gradient3;
	ctx.fillRect(60, 280, 400 * leg / imgLeg, 70);
	ctx.fill();
	ctx.stroke();
	this.t2++;
	if (leg == imgLeg) {
		game1.init();
		game1.drBg();
		startDiv.style.display = "block";
		return;
	}
}
game.prototype.drObj = function() {
	var _fj1 = this.fj1,spList = this.splist;
	for (var i = 0; i < this.wallList.length; i++) {
		if (this.wallList[i].die) {
			this.wallList.splice(i, 1);
		}
	}
	for (var i = 0; i < spList.length; i++) {
		if (spList[i].die) {
			spList.splice(i, 1);
		}
	}
	this.drBg();
	if (!_fj1.die) {
		for (var i = 0; i < this.wallList.length; i++) {
			this.wallList[i].dr();
			this.wallList[i].pz((new OBB(new Vector2(_fj1.x, _fj1.y), 10, 54, _fj1.arc)));
			this.wallList[i].move();
		}
		_fj1.dr();
		_fj1.move();
		_fj1.moved();
		_fj1.checkborder();
		this.drXx();
	} else {
		for (var i = 0; i < spList.length; i++) {
			spList[i].dr();
			spList[i].bao();
		}
		this.gameover();
	}
}
game.prototype.gameover = function() {
	var ctx = this.ctx2;
	ctx.save();
	ctx.beginPath();
	ctx.shadowColor = "#000";
	ctx.shadowOffsetY = 1;
	ctx.shadowOffsetX = 1;
	ctx.fillStyle = "#fff;";
	ctx.font = "bold 60px Verdana";
	ctx.textAlign = "center";
	ctx.fillText("GAME OVER", 256, 160);
	ctx.font = "bold 20px Verdana";
	ctx.fillText("Score: " + game1.fj1.score, 256, 240);
	game1.fj1.Hscore && ctx.fillText("H-score: " + game1.fj1.Hscore, 256, 290);
	ctx.fill();
	ctx.restore();
	this.overt || (overDiv.style.display = "block", game1.fj1.score > game1.fj1.Hscore && localStorage.setItem("score", game1.fj1.score));
	this.overt++;
}
game.prototype.start = function() {
	this.stimer = requestAnimFrame(function() {
		game1.start();
	});
	game1.drObj();
}
game.prototype.init = function() {
	this.wallList = [];
	this.fj1 = null;
	this.t = [];
	this.leg = 0;
	this.overt = 0;
	this.gy = 0;
	this.gy2 = 705;
	this.onready = 1;
	clearInterval(this.stimer);
	webkitCancelAnimationFrame(this.stimer);
}