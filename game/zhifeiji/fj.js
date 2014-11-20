/*我方飞机类*/
var fj = function(x, y) {
    this.x = x;
    this.y = y;
    this.arc = 0;
    this.score = 0;
    this.Hscore = localStorage.getItem("score");;
    this.die = 0;
    this.timerL;
    this.speed = 3;
    this.o_speed = 3;
    this.nl = 0;
    this.k1 = 1;
    this.k2 = 1;
    this.t = 0;
    this.wd = 0;
};

/*画飞机*/
fj.prototype.dr = function() {
    var ctx = game1.ctx2;
    ctx.save();
    ctx.translate(this.x + 30, this.y + 40);
    ctx.rotate(this.arc);
    ctx.globalAlpha = 0.6;
    ctx.drawImage(game1.imgDx[11], -22 * 0.7, -27 * 0.7, 44 * 0.7, 54 * 0.7);
    ctx.restore();
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.arc);
    ctx.drawImage(game1.imgDx[10], -22, -27, 44, 54);
    ctx.restore();
    this.wd && (this.nl -= 1, this.speed = this.o_speed + 8 * Math.sin(Math.PI / 150 * this.nl), this.nl == 0 && (this.speed = this.o_speed, this.wd = 0));

}

fj.prototype.move = function() {
    switch (this.fx)　　 {　　　　
    case "R":
        if (this.arc <= Math.PI / 2) {
            this.arc += Math.PI / 50;
        }
        break;　　　　
    case "L":
        if (this.arc >= -Math.PI / 2) {
            this.arc -= Math.PI / 50;
        }
        break;
	case "R2":
        if (this.arc <= Math.PI / 2) {
            this.arc += Math.PI / 100;
        }
        break;　　　　
    case "L2":
        if (this.arc >= -Math.PI / 2) {
            this.arc -= Math.PI / 100;
        }
        break;　　　　
    case "CR":
        break;　　　　
    }　　　　

}

fj.prototype.checkborder = function(screenWidth, screenHeight) {
    if (this.x <= 15 || this.x >= 512 - 15) {
        this.die = 1;
    }
}

fj.prototype.addnl = function() {
    if (this.nl < 150) {
        this.nl++;
    }
    if (this.nl == 150) {
        this.wd = 1;
        this.o_speed = this.speed;
    }

}

fj.prototype.moved = function() {
    this.l_speed = this.speed - (this.speed - 3) * Math.sin(Math.abs(this.arc));
    var _s = this.l_speed * Math.cos(this.arc);
    this.x -= this.l_speed * Math.sin(this.arc);
    if (this.y < 300) {
        this.y += _s;
    } else {
        game1.gy -= _s;
        if (game1.gy <= -705) {
            game1.gy += 1410;
        }
        game1.gy2 -= _s;
        if (game1.gy2 <= -705) {
            game1.gy2 += 1410;
        }
    }
    this.score += Math.round(_s);
    this.t += Math.round(_s);
    if (this.t >= 420) {
        this.t = 0;
        this.speed += 0.1;
        drWall();
    }

}

function sp(x, y, h, arc, img) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.img = img;
    this.die = 0;
    this.cos1 = Math.cos(arc);
    this.sin1 = Math.sin(arc);

}
sp.prototype.dr = function() {
    var ctx = game1.ctx2;
    ctx.drawImage(this.img, this.x - this.h / 2, this.y - this.h / 2, this.h, this.h);
}

sp.prototype.bao = function() {
    this.h > 0 ? (this.y -= 4 * this.cos1, this.x -= 4 * this.sin1, this.h -= 1) : this.die = 1;
}