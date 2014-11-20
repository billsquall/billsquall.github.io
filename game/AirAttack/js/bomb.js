/*爆炸类*/
function bomb(x, y) {
    this.x = y;
    this.y = x;
    this.k = 0;
    this.r = 6;
    this.j = 0;

}
bomb.prototype.dr = function(wid, hig) {
    var ctx = Attack.ctx2;
    if (this.j <= 60) {
        var rad6 = random(0, 10);
        if (this.j % 4 == 0) {
            Attack.player.fire(Attack.player.x + 43 - 10, Attack.player.y + 40, 0, 0, 16, rad6 * Math.PI / 30);
            Attack.player.fire(Attack.player.x + 44 + 10, Attack.player.y + 40, 0, 0, 16, -rad6 * Math.PI / 30);
        }

    } else if (this.j > 60 && this.j <= 420) {
        if (this.j == 61) {
            gameDiv.className = "gameOn";
        }
        if (this.j % 2 == 0) {
            var rad2 = random( - 32, 32);
            var rad3 = random( - 32, 32);
            Attack.bzlist.push(new explode(this.x + rad2 * 5, this.y + rad3 * 5, 1));
            for (var a = 0; a < 10; a++) {
                var rad = random( - 40, 40);
                Attack.splist.push(new sp(this.x + rad2 * 5, this.y + rad3 * 5, 55 + rad, Math.PI / 6 * a + rad * Math.PI / 100, Attack.imgDx[16], 1));
            }
        }

    }
}
bomb.prototype.run = function() {
    if (this.j <= 60) {
        this.y -= 5;
    } else if (this.j > 60 && this.j <= 420) {
        this.bz();
    }
    this.j++;

}
bomb.prototype.bz = function() {
    for (var i = 0; i < Attack.enemylist.length; i++) {
        if (this.j % 4 == 0 && Attack.enemylist[i].bzd(this.x, this.y, 140)) {
            Attack.player.score += 100;
            if (Attack.enemylist[i].blood <= 0) {
                Attack.enemylist.die = 1;
            }
        }
    }
}

function stage(dn3, text, speed, dn4, img) {
    this.dn3 = dn3;
    this.dn4 = dn4;
    this.t = 0;
    this.speed = speed;
    this.text = text;
    this.img = img;

}

stage.prototype.drBg = function() {
    for (var i = 0; i < Attack.s.length; i++) {
        Attack.s[i].die && Attack.s.splice(i, 1);
    }
    for (var i = 0; i < Attack.chenaList.length; i++) {
       Attack.chenaList[i].die && Attack.chenaList.splice(i, 1);
    }
    this.dn3 += this.speed;
    this.dn4 += this.speed;
    this.dn3 >= 802 && (this.dn3 -= 1604);
    this.dn4 >= 802 && (this.dn4 -= 1604);
    var ctx = Attack.ctx2;
    ctx.drawImage(this.img, 0, this.dn3);
    ctx.drawImage(this.img, 0, this.dn4);
    for (var i = 0; i < Attack.s.length; i++) {
        Attack.s[i].run();
        Attack.s[i].dr();
    }
    for (var i = 0; i < Attack.chenaList.length; i++) {
        Attack.chenaList[i].move();
        Attack.chenaList[i].dr();
    }
    
	if (this.t == 0) {
        stageText.innerHTML = this.text;
        stageText.className = "stageText stageTextOn";
    }
	
    this.t == 50 && (stageText.style.display = "none");
    Attack.over_t || (this.t += .5);
    this.t % 100 == 0 && drStar();

}

var a_mub = function(a, x, n, speed, h, c) {
    this.n = n;
    this.x = x;
    this.h = h;
    this.speed = speed;
    this.a = a;
    this.y = -this.h * 4 - 8;
    this.nub = [];
    this.c = c;
    this.init();
}

a_mub.prototype.init = function() {
    this.nub[5] = this.a;
    for (var i = 6; i < 10; i++) {
        this.nub[i - 1] == 0 ? this.nub[i] = 9 : this.nub[i] = this.nub[i - 1] - 1;
    }
    for (var i = 4; i >= 0; i--) {
        this.nub[i + 1] == 9 ? this.nub[i] = 0 : this.nub[i] = this.nub[i + 1] + 1;
    }

}

a_mub.prototype.dr = function() {
    var ctx = this.c;
    ctx.save();
    if (this.c == Attack.ctx3) {
        ctx.font = (this.h - 11) + "px Black Ops One";
        ctx.shadowColor = "#000";
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
        gradient.addColorStop("0", "#fff");
        gradient.addColorStop("0.3", "#444");
        gradient.addColorStop("0.6", "#fff");
        gradient.addColorStop("0.8", "#444");
        gradient.addColorStop("1", "#fff");
        ctx.fillStyle = gradient;
        for (var i = 0; i < this.nub.length; i++) {
            var _y = this.y + i * this.h;
            if (_y > 0 && _y < 60) {
                ctx.fillText(this.nub[i], this.x, _y);
            }
        }
    } else {
        ctx.font = (this.h - 14) + "px Graduate";
        ctx.shadowColor = "#000";
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
        gradient.addColorStop("0", "#fff");
        gradient.addColorStop("0.3", "#444");
        gradient.addColorStop("0.6", "#fff");
        gradient.addColorStop("0.8", "#444");
        gradient.addColorStop("1", "#fff");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        for (var i = 0; i < this.nub.length; i++) {
            var _y = this.y + i * this.h;
            if (_y > 0 && _y < 160) {
                ctx.strokeText(this.nub[i], this.x, _y);
            }
        }
    }
    ctx.restore();
}
a_mub.prototype.move = function() {
    if (this.n != this.nub[5]) {
        this.y += 7.5 / this.speed;
        if ((this.h * 4 + 8 + this.y) == this.h) {
            var nub = this.nub.pop();
            this.nub.splice(0, 0, nub);
            this.y = -this.h * 4 - 8;
        }
    }
}