/*飞机爆炸*/
function explode(x, y, type) {
    this.x = x;
    this.y = y;
    this.r = 0;
    this.die = 0;
    this.type = type;
    this.t = 0;
}
explode.prototype.dr = function() {
    var ctx = Attack.ctx2;
    switch (this.type) {
    case 1:
        ctx.drawImage(Attack.imgDx[17], 102 * Math.floor(this.r / 2), 0, 102, 85, this.x - 60, this.y - 45 - this.r, 120, 100);
        var h = this.t * 10;
        ctx.drawImage(Attack.imgDx[42], this.x - h / 2, this.y - h / 2, h, h);
        break;
    case 2:
        if (this.t % 2 == 0) {
            var rad2 = random( - 22, 22);
            var rad3 = random( - 22, 22);
            Attack.bzlist.push(new explode(this.x + rad2 * 5, this.y + rad3 * 5, 1));
            for (var a = 0; a < 10; a++) {
                var rad = random( - 30, 30);
                Attack.splist.push(new sp(this.x + rad2 * 5, this.y + rad3 * 5, 55 + rad, Math.PI / 6 * a + rad * Math.PI / 100, Attack.imgDx[16], 1));
            }
        }

        break;
    case 3:
        if (this.t % 2 == 0) {
            var rad2 = random( - 22, 22);
            var rad3 = random( - 22, 22);
            Attack.bzlist.push(new explode(this.x + rad2 * 5, this.y + rad3 * 5, 1));
            for (var a = 0; a < 10; a++) {
                var rad = random( - 30, 30);
                Attack.splist.push(new sp(this.x + rad2 * 5, this.y + rad3 * 5, 55 + rad, Math.PI / 6 * a + rad * Math.PI / 100, Attack.imgDx[16], 1));
            }
        }
        break;
    case 4:
        var d = this.r - 1;
        if (!d) {
            Attack.s.push(new yun(this.x - 75, this.y - 75, Attack.imgDx[38], 0, 1));
        }
        ctx.drawImage(Attack.imgDx[17], 150 * this.r, 0, 150, 150, this.x - 75, this.y - 75, 150, 150);
        break;
    case 5:
        ctx.drawImage(Attack.imgDx[42], 23 * this.r, 0, 23, 23, this.x - 12, this.y - 12, 23, 23);
        break;
    }
    this.t++;
}
explode.prototype.bao = function(i) {
    switch (this.type) {
    case 1:
        this.r < 30 ? this.r++ : this.die = 1;
        break;
    case 2:
        if (this.t == 1) {
            for (var i = 0; i < Attack.enemylist.length; i++) {
                Attack.enemylist[i].die = 1;
            }
            gameDiv.className = "gameOn";
        }
        if (this.t == 60) {
            this.die = 1;
            gameDiv.className = "";
        }

        break;
    case 3:
        if (this.t == 40) {
            this.die = 1;

            Attack.over_t = 0;
        }
        break;
    case 4:
        if (this.r < 28) {
            this.r++;
        } else {
            this.die = 1;
        }
        break;
    case 5:
        if (this.r < 5) {
            this.r++;
        } else {
            this.die = 1;
        }
        break;
    }

}

function sp(x, y, h, arc, img, type, m, n) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.m = m;
    this.n = n;
    this.img = img;
    this.die = 0;
    this.cos1 = Math.cos(arc);
    this.sin1 = Math.sin(arc);
    this.type = type;
    this.t = 0;
}
sp.prototype.dr = function() {
    var ctx = Attack.ctx2;
    if (this.type == 1) {
        ctx.drawImage(this.img, this.x - this.h / 2, this.y - this.h / 2, this.h, this.h);
    }
    if (this.type == 2) {
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.drawImage(this.img, Attack.player.x + Attack.player.w / 2 - this.h / 2 + this.m, this.y + 20 - this.h * 4 - this.n, this.h, this.h * 6);
        ctx.restore();
    }
    if (this.type == 3) {
        ctx.drawImage(this.img, this.x - this.h / 2 + this.m, this.y - this.h / 2 - this.n, this.h, this.h);
    }
    if (this.type == 4) {
 
        ctx.drawImage(this.img,this.x - this.h/2, this.y - this.h/2, this.h,this.h);
    }
    if (this.type == 5) {
        ctx.drawImage(this.img, 0, 0, 64, 64, Attack.player.x + 31 - this.h / 2, this.y + 30 - 4 * this.h, this.h, 4 * this.h);
    }
    if (this.type == 6) {
        ctx.drawImage(this.img, this.x - this.h / 2, this.y - this.h / 2, this.h, this.h);
    }
    if (this.type == 7) {
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.drawImage(this.img, Attack.player.x + Attack.player.w / 2 - this.h / 2, this.y + 70 - this.h * 10, this.h, this.h * 10);

        ctx.restore();
    }
    if (this.type == 8) {

        ctx.drawImage(this.img, this.x - this.h / 2, this.y - this.h / 2, this.h, this.h);
    }
}

sp.prototype.bao = function() {
    if (this.h > 0 && this.y > -10 && this.y < 640) {
        if (this.type == 1) {
            this.y -= 3 * this.cos1;
            this.x -= 3 * this.sin1;
            this.h -= 2;
        }
        if (this.type == 2) {

            this.y -= 20 * this.cos1;
            this.x -= 20 * this.sin1;

        }
        if (this.type == 3) {
            this.y -= 2 * this.cos1;
            this.x -= 2 * this.sin1;
            this.h -= 1;
        }
        if (this.type == 4) {
            this.y += 3 * this.cos1;
            this.x += 3 * this.sin1;
            this.h -= 3;
			
        }
        if (this.type == 8) {
            this.y += 3 * this.cos1;
            this.x += 3 * this.sin1;
            this.h -= 3;
        }
        if (this.type == 6) {
            this.y += 8 * this.cos1;
            this.x += 8 * this.sin1;
            this.h -= 1;
        }
        if (this.type == 7) {

            this.y -= 26 * this.cos1;
            this.x -= 26 * this.sin1;

        }
    } else {
		
        this.die = 1;
    }
}


function chena(x, y, img, mfx, type, w, h, arc) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.die = 0;
    this.mfx = mfx;
    this.type = type;
    this.width = w;
    this.hight = h;
    this.arc = arc;
}
chena.prototype.dr = function() {
    var ctx = Attack.ctx2;
    ctx.save();
    ctx.translate(this.x + this.width / 2 + 4, this.y + this.hight / 2 + 4);
    ctx.rotate(this.arc);
    ctx.globalAlpha = 0.7;
    ctx.drawImage(this.img, this.width, 0, this.width, this.hight, -this.width / 2, -this.hight / 2, this.width, this.hight);
    ctx.restore();
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.hight / 2);
    ctx.rotate(this.arc);
    ctx.drawImage(this.img, 0, 0, this.width, this.hight, -this.width / 2, -this.hight / 2, this.width, this.hight);
    ctx.restore();
}
chena.prototype.move = function() {
    if (this.mfx == 1) {
        this.y += Attack.stage.speed;
        if (this.y > 800) {
            this.die = 1;
        }
    }

}

/*云*/
function yun(x, y, img, fx, type) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.die = 0;
    this.fx = fx;
    this.type = type;
    this.speed_x = random(1, 8);
    this.speed_y = random(1, 8);
}
yun.prototype.dr = function() {
    Attack.ctx2.drawImage(this.img, this.x, this.y);
}
yun.prototype.run = function() {
    if (!this.type) {
        if (this.fx == 0) {
            this.y += this.speed_y;
            this.x -= this.speed_x;
        }
        if (this.fx == 1) {
            this.y += this.speed_y;
            this.x += this.speed_x;
        }
        if (this.fx == 2) {

            this.y += this.speed_y;
            this.x += this.speed_x;
        }
        if (this.fx == 3) {

            this.y += this.speed_y;
            this.x += this.speed_x;
        }
        if (this.y > 800) {
            this.die = 1;
        }
    } else {
        this.y += 1;
        if (this.y > 640) {
            this.die = 1;
        }

    }

}

function star(x, y) {
    this.x = x;
    this.y = y;
    this.die = 0;
    this.st = 0;
}
star.prototype.dr = function() {
    Attack.ctx2.drawImage(Attack.imgDx[43], 30 * (Math.floor(this.st / 4) % 5), 0, 30, 30, this.x - 15, this.y - 15, 30, 30);
    this.st++;
}
star.prototype.move = function() {
    var cx = this.x - Attack.player.x - 43;
    var cy = this.y - Attack.player.y - 30;
    var cz = Math.sqrt(cx * cx + cy * cy);
    var sin1 = cx / cz;
    var cos1 = cy / cz;
    if (this.st < 40) {} else {
        this.y -= (this.st - 40) / 5 * cos1;
        this.x -= (this.st - 40) / 5 * sin1;
    }
    if (Attack.player.eat(this.x, this.y, 15, 15)) {
        this.die = 1;
    }
}