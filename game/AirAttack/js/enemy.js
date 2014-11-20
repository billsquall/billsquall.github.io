/*敌人类*/
var enemy = function(x, y, img, blood, width, hight, mtype, zdc, timer, swX, swY, bz, leg, lxj, chena) {
    this.x = x;
    this.y = y;
    this.hight = hight;
    this.width = width;
    this.img = img;
    this.blood = blood;
    this.bj = 0;
    this.t = 0;
    this.t2 = 0;
    this.mtype = mtype;
    this.zdc = zdc;
    this.swX = swX;
    this.swY = swY;
    this.timer = timer;
    this.bz = bz;
    this.die = 0;
    this.n = 0;
    this.leg = leg;
    this.dh = 0;
    this.arc = 0;
    this.arc2 = 0;
    this.arc3 = 0;
    this.arc4 = 0;
    this.lxj = lxj;
    this.chena = chena;
    this.m2 = 0;
    this.n2 = 0;
};

enemy.prototype.fpao = function() {
    if (this.t2 == this.timer) {
        this.fire();
        this.t2 = 0;
    }
}

enemy.prototype.dr = function() {
    var ctx = Attack.ctx2;
    if (this.swX != 0) {
        ctx.save();
        ctx.translate(this.x + this.width / 2 + this.swX, this.y + this.hight / 2 + this.swY);
        ctx.rotate(this.arc);
        ctx.globalAlpha = 0.6;
        ctx.drawImage(this.img, this.width * (this.leg * 2 + Math.floor(this.dh)), 0, this.width, this.hight, -this.width / 4, -this.hight / 4, this.width * 0.5, this.hight * 0.5);
        ctx.restore();
    } else {
        ctx.save();
        ctx.translate(this.x + this.width / 2 + 4, this.y + this.hight / 2 + 4);
        ctx.rotate(this.arc);
        ctx.globalAlpha = 0.6;
        ctx.drawImage(this.img, this.width * (this.leg * 2 + Math.floor(this.dh)), 0, this.width, this.hight, -this.width / 2, -this.hight / 2, this.width, this.hight);
        ctx.restore();
    }
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.hight / 2);
    ctx.rotate(this.arc);
    if (!this.bj) {
        ctx.drawImage(this.img, this.width * ( + Math.floor(this.dh)), 0, this.width, this.hight, -this.width / 2, -this.hight / 2, this.width, this.hight);
    } else {
        ctx.drawImage(this.img, this.width * (this.leg * 1 + Math.floor(this.dh)), 0, this.width, this.hight, -this.width / 2, -this.hight / 2, this.width, this.hight);

    }
    ctx.restore();
    if (this.tank == 1) {
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = 0;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.translate(m, n);
        ctx.rotate(this.arc2);
        ctx.drawImage(Attack.imgDx[3], -11, -11);
        ctx.restore();
    }
    if (this.tank == 2) {
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = 0;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.save();
        ctx.translate(m + 4, n + 4);
        ctx.rotate(this.arc2);
        ctx.globalAlpha = 0.7;
        ctx.drawImage(Attack.imgDx[48], 60, 0, 30, 60, -15, -30, 30, 60);
        ctx.restore();
        ctx.save();
        ctx.translate(m, n);
        ctx.rotate(this.arc2);
        if (!this.bj) {
            ctx.drawImage(Attack.imgDx[48], 0, 0, 30, 60, -15, -30, 30, 60);
        } else {
            ctx.drawImage(Attack.imgDx[48], 30, 0, 30, 60, -15, -30, 30, 60);

        }
        ctx.restore();
    }

    if (this.tank == 3) {

        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = 0;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.save();
        ctx.translate(m + 4, n + 4);
        ctx.rotate(this.arc2);

        ctx.globalAlpha = 0.7;
        ctx.drawImage(Attack.imgDx[59], 84, 0, 42, 62, -21, -31, 42, 62);
        ctx.restore();
        ctx.save();
        ctx.translate(m, n);
        ctx.rotate(this.arc2);
        if (!this.bj) {
            ctx.drawImage(Attack.imgDx[59], 0, 0, 42, 62, -21, -31, 42, 62);
        } else {
            ctx.drawImage(Attack.imgDx[59], 42, 0, 42, 62, -21, -31, 42, 62);

        }

        ctx.restore();
    }
    if (this.tank == 4) {
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = 0;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.translate(m, n);
        ctx.rotate(this.arc2);

        ctx.drawImage(Attack.imgDx[73], -13, -14);
        ctx.restore();
    }
    if (this.tank == 5) {
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = 0;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);

        ctx.translate(m, n);
        ctx.rotate(this.arc2);

        ctx.drawImage(Attack.imgDx[74], -14, -14);
        ctx.restore();
    }
    if (this.tank == 6) {
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = 0;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);

        ctx.translate(m, n + 72);
        ctx.rotate(this.arc2);

        ctx.drawImage(Attack.imgDx[79], -14, -14);
        ctx.restore();
    }
    if (this.tank == 7) {

        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = 0;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.save();
        ctx.translate(m + 100, n - 75);
        ctx.rotate(this.arc2);

        ctx.drawImage(Attack.imgDx[79], -14, -14);
        ctx.restore();
        ctx.save();

        ctx.translate(m + 140, n - 85);
        ctx.rotate(this.arc2);

        ctx.drawImage(Attack.imgDx[79], -14, -14);
        ctx.restore();
        ctx.save();

        ctx.translate(m - 100, n - 75);
        ctx.rotate(this.arc4);

        ctx.drawImage(Attack.imgDx[79], -14, -14);
        ctx.restore();

        ctx.save();

        ctx.translate(m - 140, n - 83);
        ctx.rotate(this.arc4);

        ctx.drawImage(Attack.imgDx[79], -14, -14);
        ctx.restore();
    }
    if (this.lxj == 1) {
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = 10;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.translate(m, n);
        ctx.rotate(Math.PI / 24 * this.t % 24);
        ctx.drawImage(Attack.imgDx[8], -51, -51);
        ctx.restore();
    }
    if (this.lxj == 2) {
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = -60;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.translate(m, n);
        ctx.rotate(Math.PI / 24 * this.t % 24);
        ctx.drawImage(Attack.imgDx[44], -130, -130);
        ctx.restore();
    }

    if (this.lxj == 3) {
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = -14;
        var _x_ = 55;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.translate(m, n);
        ctx.rotate(Math.PI / 24 * this.t % 24);
        ctx.drawImage(Attack.imgDx[52], -34, -34);
        ctx.restore();
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = -14;
        var _x_ = -56;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.translate(m, n);
        ctx.rotate(Math.PI / 24 * this.t % 24);
        ctx.drawImage(Attack.imgDx[52], -34, -34);
        ctx.restore();
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = this.hight / 2 - 5;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.translate(m, n);
        ctx.rotate(this.arc);
        ctx.drawImage(Attack.imgDx[61], 46 * (this.t % 3), 0, 46, 8, -17, -3, 34, 6);

        ctx.restore();
    }
    if (this.lxj == 4) {
        ctx.save();
        var f = this.x + this.width / 2;
        var g = this.y + this.hight / 2;
        var _y_ = this.hight / 2;
        var _x_ = 0;
        var m = Math.round(_x_ * Math.cos(this.arc) - _y_ * Math.sin(this.arc) + f);
        var n = Math.round(_x_ * Math.sin(this.arc) + _y_ * Math.cos(this.arc) + g);
        ctx.translate(m, n);
        ctx.rotate(this.arc);
        ctx.drawImage(Attack.imgDx[61], 46 * (this.t % 3), 0, 46, 8, -17, -3, 34, 6);
        ctx.restore();
    }

    this.t2++;
    this.bj = 0;
}

enemy.prototype.moveto = function(arc) {
    this.a_arc = (this.arc2 - arc) / 20;
}
enemy.prototype.isHit = function(OBB1) {
	var _y = this.y + this.hight / 2,_x = this.x + this.width / 2,
	OBB2 = new OBB(new Vector2(_x, _y), this.width, this.hight, this.arc);
    if (CollisionDetector.detectorOBBvsOBB(OBB1, OBB2)) {
        this.blood--;
        if (!this.blood) {
            Attack.s2.push(new star(_x, _y));
            Attack.player.star++;
            Attack.bzlist.push(new explode(_x, _y, this.bz));
            this.chena && Attack.chenaList.push(new chena(this.x, this.y, this.chena.img, this.chena.mfx, this.chena.type, this.width, this.hight, this.arc));
            for (var a = 0; a < 8; a++){
                Attack.splist.push(new sp(_x,_y, 70 + random( - 30,30), Math.PI / 5 * random( 0,9), Attack.imgDx[16], 1));
            }
            this.die = 1;
        }
        this.bj = 1;
        return 1;
    } else {
        return 0;
    }

}

enemy.prototype.bzd = function(a, b, r) {
    if (this.x > a - r - this.width && this.x < a + r + this.width && this.y > b - r - this.hight && this.y < b + r + this.hight) {
        var _y = this.y + this.hight / 2;
        var _x = this.x + this.width / 2;
        this.blood -= 1;
        if (this.blood <= 0) {
            Attack.s2.push(new star(_x, _y));
            Attack.bzlist.push(new explode(_x, _y, this.bz));
            if (this.chena) {
                Attack.chenaList.push(new chena(this.x, this.y, this.chena.img, this.chena.mfx, this.chena.type, this.width, this.hight, this.arc));
            }
            this.die = 1;
        }
        this.bj = 1;
        return 1;
    } else {
        return 0;
    }
}

enemy.prototype.fire = function(a, b, c, w, h, arc, speed, type) {
   var f = this.x + this.width / 2, g = this.y + this.hight / 2, _x = a || f, _y = b || g + 10, _y_ = _y - g, _x_ = _x - f;
    if (type == 1) {
        var d_arc = this.arc;
    } else {
        var d_arc = this.arc2 || this.arc;
    }
    if (type == 5) {
        var d_arc = this.arc4;
    }
    if (type == 6) {
        var d_arc = this.arc4;
    }
    var m = Math.round(_x_ * Math.cos(d_arc) - _y_ * Math.sin(d_arc) + f);
    var n = Math.round(_x_ * Math.sin(d_arc) + _y_ * Math.cos(d_arc) + g);
    if (type == 2) {
        n += 72;
    }
    if (type == 3) {
        m += 100;
        n -= 75;
    }
    if (type == 4) {
        m += 140;
        n -= 85;
    }
    if (type == 5) {
        m -= 100;
        n -= 75;
    }
    if (type == 6) {
        m -= 140;
        n -= 85;
    }
    var _w = w || 0, _h = h || 0, c = c || this.zdc, e = new Pd(m, n, _w, _h, c, arc);
     Attack.splist.push(new sp(m, n, 10 + random( - 5, 5), Math.PI - this.arc + random( - 5, 5) * Math.PI / 50, Attack.imgDx[69], 3, 0, 0),new sp(m, n, 10 + random( - 5, 5), Math.PI - this.arc + random( - 5, 5) * Math.PI / 50, Attack.imgDx[69], 3, 0, 0));
    e.speed = speed;
    Attack.drDpd.push(e);
}

enemy.prototype.check = function() {
    return this.x <= -this.hight || this.x >= 490 || this.y > 640 || this.y < -this.hight ? 0 : 1;

}

enemy.prototype.move = function() {
    this.t++;
    switch (this.mtype) {
    case 1:
        this.y += Math.round(5 * Math.cos(this.arc));
        this.x -= Math.round(5 * Math.sin(this.arc));
        this.arc -= Math.PI / 200;
        if (this.t == 300) {
            this.die = 1;
        }
        break;
    case 2:
        if (this.t < 100) {
            this.y += Math.round(3 * Math.cos(this.arc));
            this.x -= Math.round(3 * Math.sin(this.arc));
            this.arc -= Math.PI / 400;

        } else if (this.t > 100 && this.t < 240) {
            if (random(0, 2) == 1) {
                this.arc -= Math.PI / 400;
            } else {

                this.arc += Math.PI / 400;
            }

        } else if (this.t > 240 && this.t < 500) {
            this.y += Math.round(3 * Math.cos(this.arc));
            this.x -= Math.round(3 * Math.sin(this.arc));
            this.arc += Math.PI / 200;
        } else if (this.t == 500) {
            this.die = 1;
        }

        break;
    case 5:
        this.x += Math.sin(this.t * Math.PI / 100);
        if (this.t < 300) {
            this.y -= 2 + Math.cos(this.t * Math.PI / 100);
        }
        break;
    case 6:
        this.x += Math.sin(this.t * Math.PI / 100);
        if (this.t % 302 == 1) {
            this.swY = 1000;
        }
        if (this.t % 302 == 164) {
            this.swY = 140;
        }
        if (this.t % 302 == 290) {
            this.swY = 1000;
            this.arc2 = 0;
        }
        if (this.t < 300) {
            this.y -= 2 + Math.cos(this.t * Math.PI / 100);
        }
        if (this.t % 302 > 150 && this.t % 302 < 176) {
            this.x += 5 / 2;
        } else if (this.t % 302 < 275) {} else if (this.t % 302 < 300) {
            this.x -= 5 / 2;
        }

        break;
    case 7:
        this.x += Math.sin(this.t * Math.PI / 100);
        if (this.t < 300) {
            this.y -= 2 + Math.cos(this.t * Math.PI / 100);
        }
        if (this.t % 302 == 1) {
            this.swY = 1000;
        }
        if (this.t % 302 == 290) {
            this.swY = 1000;
            this.arc2 = 0;
        }
        if (this.t % 302 == 164) {
            this.swY = 140;
        }
        if (this.t % 302 > 150 && this.t % 302 < 176) {
            this.x -= 5 / 2;
        } else if (this.t % 302 < 275) {} else if (this.t % 302 < 300) {
            this.x += 5 / 2;
        }

        break;

    case 3:

        if (this.t < 90) {
            this.y += 2.5;
        }

        else if (this.t < 190) {
            this.arc += Math.PI / 200;
            this.y -= Math.cos(this.arc) - 2;
            this.x += 0.5 * Math.sin(this.arc);
        } else {
            this.y += 2 * Math.cos(this.arc) + 2;
            this.x -= 1 * Math.sin(this.arc);
            this.arc += Math.PI / 200;
        }
        break;
    case 4:

        this.y += 2;

        break;
    case 8:
        if (this.t < 100) {
            this.arc -= Math.PI / 100;
            this.y += 5 * Math.cos(this.arc);
            this.x -= 5 * Math.sin(this.arc);
            if (this.dh > 0) {
                this.dh -= 0.25;
            }
        } else if (this.t < 300) {
            this.arc += Math.PI / 100;
            this.y += 6 * Math.cos(this.arc);
            this.x -= 6 * Math.sin(this.arc);
            if (this.dh < 6) {
                this.dh += 0.25;
            }
        } else if (this.t < 312) {

            this.dh -= 0.25;
            this.y += 6 * Math.cos(this.arc);
            this.x -= 6 * Math.sin(this.arc);
        } else {
            this.y += 6 * Math.cos(this.arc);
            this.x -= 6 * Math.sin(this.arc);
        }

        break;
    case 9:

        if (this.t < 30) {
            this.y += 4;
        }

        this.x += Math.sin(this.t * Math.PI / 100);
        this.y += Math.sin(this.t * Math.PI / 300);
        break;
    case 10:
        if (this.t < 90) {
            this.y += 2.5;
        }

        else if (this.t < 140) {
            this.arc += Math.PI / 100;
            this.y += 2;
        } else if (this.t < 160) {
            this.y += 2;
            this.x += 1;
        } else if(this.t<600) {
            this.y += 2 * Math.cos(this.arc) + 2;
            this.x -= 1 * Math.sin(this.arc);
            this.arc += Math.PI / 200;
        }else{
			this.die=1;
			}
        break;
    case 11:
        this.y += (this.t / 6) * Math.cos(this.arc);
        this.x -= (this.t / 6) * Math.sin(this.arc);
        this.dh = 3;
        if (this.t == 200) {
            this.die = 1
        }
        break;

    case 12:

        var cx = this.x + this.width / 2 - Attack.player.x - 43;
        var cy = this.y + this.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;

        if (cy > 0) {
            this.arc3 = Math.PI - Math.asin(sin1);

            if (Math.abs(Math.asin(sin1)) < Math.PI) {
                if (this.arc < -2 * Math.PI + this.arc3) {

                    this.arc += Math.PI / 200;
                } else {

                    this.arc -= Math.PI / 200;
                }
            } else {
                if (this.arc < this.arc3) {

                    this.arc += Math.PI / 200;
                } else {

                    this.arc -= Math.PI / 200;
                }

            }

        } else {
            this.arc3 = Math.asin(sin1);
            if (this.arc < this.arc3) {

                this.arc += Math.PI / 300;
            } else {

                this.arc -= Math.PI / 300;
            }
        }

        this.y = 70 + 60 * Math.sin(this.t * Math.PI / 200);
        this.x += 2 + Math.sin(this.t * Math.PI / 100);
        if (this.x > 650) {
            this.die = 1;
        }
        break;
    case 13:

        var cx = this.x + this.width / 2 - Attack.player.x - 43;
        var cy = this.y + this.hight / 2 - Attack.player.y - 36;
        var cz = Math.sqrt(cx * cx + cy * cy);
        var sin1 = cx / cz;

        if (cy > 0) {
            this.arc3 = Math.PI - Math.asin(sin1);

            if (Math.abs(Math.asin(sin1)) < Math.PI) {
                if (this.arc < -2 * Math.PI + this.arc3) {

                    this.arc += Math.PI / 200;
                } else {

                    this.arc -= Math.PI / 200;
                }
            } else {
                if (this.arc < this.arc3) {

                    this.arc += Math.PI / 200;
                } else {

                    this.arc -= Math.PI / 200;
                }

            }

        } else {
            this.arc3 = Math.asin(sin1);
            if (this.arc < this.arc3) {

                this.arc += Math.PI / 300;
            } else {

                this.arc -= Math.PI / 300;
            }
        }

        this.y = 70 + 60 * Math.sin(this.t * Math.PI / 200);
        this.x -= 2 + Math.sin(this.t * Math.PI / 100);
        if (this.x < -100) {
            this.die = 1;
        }
        break;
	 case 14:
	  this.x -= 1 * Math.sin(this.t * Math.PI / 100);
	  this.y -= 2 * Math.sin(this.t * Math.PI / 100);
	       if(this.t<180){
		  
		  this.y -= 5 * Math.sin(this.t * Math.PI / 180);
       
		   
		   }
		   
		 if(this.t>600){
			 this.y-=6;
			 }
		if(this.t==650){
			this.die=1;
			}	 
       
       
        break;
    case 15:

        this.x += Math.sin(this.t * Math.PI / 100);
        if (this.t < 80) {
            this.y -= 8 + Math.cos(this.t * Math.PI / 100);
        }
        if (sj_1 == 1) {
            this.x -= Math.sin(this.t * Math.PI / 100) * 3;
            this.y -= Math.cos(this.t * Math.PI / 100);
        }
        if (sj_1 == 3) {

            this.x += Math.sin(this.t * Math.PI / 100) * 2;
        }
        break;
    }　

}