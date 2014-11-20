var  Jg = function(type, m, n) {
    this.t = 0;
    this.h = 0;
    this.m = m;
    this.n = n || 0;
    this.type = type;
    this.die = 0;
    this.t = 0;
    this.w = 10;
}

Jg.prototype.dr = function() {
    var ctx = Attack.ctx2;
    switch (this.type) {　　　　
    case 1:
        var rad = random( - 6, 6);
        var rad2 = random( - 3, 3);
		 if (this.t % 2 == 0) {
        Attack.splist.push(new sp(Attack.player.x, Attack.player.y, this.w + rad, 0, Attack.imgDx[23], 2, 0, -10));
		 }
        if (this.w < 26) {
            this.w += 1;
        }
        break;
    case 2:
        this.m += 2 * Math.sin(Math.PI / 2 + this.t * Math.PI / 20);;
        for (var a = 0; a < 3; a++) {
            var rad = random( - 5, 5);
            var rad2 = random( - 5, 5);
            Attack.splist.push(new sp(Attack.player.x + Attack.player.w / 2, Attack.player.y + 20, this.w / 2 + rad, rad2 * Math.PI / 20, Attack.imgDx[69], 3, this.m, 0));
        }

        var rad = random( - 6, 6);
        var rad2 = random( - 3, 3);
        Attack.splist.push(new sp(Attack.player.x, Attack.player.y, this.w + rad, 0, Attack.imgDx[69], 2, this.m, 10));

        if (this.w < 30) {
            this.w += 1;
        }
        if (rad = random( - 1, 5) == 0) {
            for (var i = 0; i < 2; i++) {
                Attack.splist.push(new sp(Attack.player.x, Attack.player.y, this.w, 0, Attack.imgDx[69], 2, this.m, this.n));
            }
        }
        break;　　　
    }
}
Jg.prototype.run = function() {
    var _player = Attack.player;
    var _enemylist = Attack.enemylist;
    if (this.t % 4 == 0) {
        for (var i = 0; i < _enemylist.length; i++) {
            if (_enemylist[i].isHit(new OBB(new Vector2(Attack.player.x + Attack.player.w / 2, Attack.player.y + 20 - this.h / 2), this.w, this.h, Math.PI))) {
                for (var a = 0; a < 3; a++) {
                    var rad = random( - 5, 5);
                    var rad2 = random( - 5, 5);
                    Attack.splist.push(new sp(Attack.player.x + Attack.player.w / 2, _enemylist[i].y + _enemylist[i].hight, this.w / 2 + rad, rad2 * Math.PI / 16, Attack.imgDx[23], 3, 0, 0));
                }
                var d = parseInt(Attack.all_mub) + 100 * (1 + (_player.hit / 100));
                Attack.score_init(d);
                _player.htime = 60;
                if (_player.htime > 0) {
                    _player.hit++;
                    Attack.hit_init(_player.hit);
                }
                _player.jNl(1);
            }
        }
    }
    if (this.h < 620) {
        this.h += 12;
    }
    this.t++;
}

/*炮弹类*/
var Pd =  function(x, y, w, h, type, arc) {
    this.x = x;
    this.y = y;
    this.t = 0;
    this.w = w;
    this.h = h;
    this.type = type;
    this.arc = arc;
    this.kt = random(0, 2);
    this.die = 0;
	this.cos1 = Math.cos(arc);
	this.sin1 = Math.sin(arc);
}
Pd.prototype.dr = function() {
    var ctx = Attack.ctx2;
    switch (this.type) {　　　　
    case 1:
        ctx.save();
        ctx.translate(this.x + 8, this.y + 8);
        ctx.rotate(Math.PI / 18 * (this.t % 36));
        ctx.drawImage(Attack.imgDx[12], 16 * (Math.floor(this.kt) % 2), 0, 16, 16, -8, -8, 16, 16);
        ctx.restore();
        this.kt += 0.1;
        break;　
    case 2:
        ctx.save();
        if (this.t > 10) {
            var rad = random( - 8, 8);
            var rad2 = random( - 2, 2);
            var f = this.x + rad2;
            var g = this.y + 16 - 19 / 2;
            var _y_ = g - this.y;
            var m = Math.round( - _y_ * Math.sin( - this.arc) + f);
            var n = Math.round(_y_ * Math.cos( - this.arc) + g);
            Attack.splist.push(new sp(m, n - 5, 20 + rad, this.arc, Attack.imgDx[18], 4));

        }
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[6], -9 / 2, -19 / 2);
        ctx.restore();
        break;
    case 8:
    case 5:
    case 29:    　　　
    case 7:
        ctx.save();
        if (this.t > 10) {
            var rad = random( - 4, 4);
            var rad2 = random( - 1, 2);
            var m = Math.round(this.x + rad2);
            var n = Math.round(this.y);
            Attack.splist.push(new sp(m, n, 16 + rad, this.arc, Attack.imgDx[18], 4));
        }ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[20], -6, -8, 12, 34);
        ctx.restore();
        break;　　
    case 18:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[70], 21 * (Math.round(this.kt) % 2), 0, 21, 76, -3, -12, 6, 24);
        ctx.restore();
        this.kt += 0.1;
        break;　
    case 4:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[13], 21 * (Math.round(this.kt) % 2), 0, 21, 76, -3, -12, 6, 24);
        ctx.restore();
        this.kt += 0.1;
        break;　
    case 12:
        　ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[57], 21 * (Math.round(this.kt) % 2), 0, 21, 76, -7 / 2, -25 / 2, 7, 25);
        ctx.restore();
        this.kt += 0.1;
        break;　
    case 23:
        　ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[53], 21 * (Math.round(this.kt) % 2), 0, 21, 76, -7 / 2, -25 / 2, 7, 25);
        ctx.restore();
        this.kt += 0.1;
        break;　
    case 25:
        　ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[82], 16 * (Math.floor(this.kt) % 2), 0, 16, 16, -8, -8, 16, 16);
        ctx.restore();
        this.kt += 0.1;
        break;　
	 case 26:
        　ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[83], 36 * (Math.floor(this.kt) % 2), 0, 36, 36, -12, -12, 24, 24);
        ctx.restore();
        this.kt += 0.1;
        break;　　
    case 6:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI / 18 * (this.t % 36));

        ctx.drawImage(Attack.imgDx[45], 14 * (Math.floor(this.kt) % 2), 0, 14, 20, -7, -10, 14, 20);
        ctx.restore();
        this.kt += 0.1;
        break;
    case 9:

        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.drawImage(Attack.imgDx[40], 16 * (Math.round(this.kt) % 2), 0, 16, 16, -8, -8, 16, 16);
        ctx.restore();
        this.kt += 0.1;
        break;　　
    case 3:
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        ctx.rotate(Math.PI - (this.arc2 || this.arc));
        ctx.drawImage(Attack.imgDx[10], this.w * (Math.round(this.kt) % 2), 0, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
        this.kt += 0.1;
        break;　
    case 10:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - (this.arc2 || this.arc));
        ctx.drawImage(Attack.imgDx[36], this.w * (Math.round(this.kt) % 2), 0, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
        this.kt += 0.1;
        break;
    case 11:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - (this.arc2 || this.arc));
        ctx.drawImage(Attack.imgDx[56], this.w * (Math.round(this.kt) % 2), 0, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
        this.kt += 1 / 4;
        break;
    case 17:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI / 18 * (this.t % 36));

        ctx.drawImage(Attack.imgDx[67], this.w * (Math.floor(this.kt) % 2), 0, this.w, this.h, -(this.w) / 2, -(this.h) / 2, this.w, this.h);
        ctx.restore();
        this.kt += 0.1;
        break;　
    case 13:
        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.rotate(Math.PI - (this.arc2 || this.arc));
        ctx.drawImage(Attack.imgDx[66], this.w * (Math.round(this.kt) % 2), 0, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
        this.kt += 1 / 8;
        break;
    case 19:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - (this.arc2 || this.arc));
        ctx.drawImage(Attack.imgDx[11], this.w * (Math.round(this.kt) % 2), 0, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
        this.kt += 0.1;
        break;　

    case 24:
        ctx.save();
        ctx.translate(this.x + 4, this.y + 11);
        ctx.rotate(Math.PI - (this.arc2 || this.arc));
        ctx.drawImage(Attack.imgDx[47], -3, -10);
        ctx.restore();
        break;
    case 15:
    case 14:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[7], this.w * (Math.round(this.kt) % 2), 0, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
        this.kt += 0.1;
        break;
    case 16:
        ctx.save();
        if (this.t > 10) {
            var rad = random( - 4, 4);
            var rad2 = random( - 1, 2);
            var m = Math.round(this.x + rad2);
            var n = Math.round(this.y);
            Attack.splist.push(new sp(m, n, 16 + rad, this.arc, Attack.imgDx[18], 4));
        }　
		ctx.translate(this.x,this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[68], -6, -8);
        ctx.restore();
        break;　
    case 21:
        ctx.save();

        for (var a = 0; a < 2; a++) {
            var rad = random( - 8, 8);
            var rad2 = random( - 2, 2);
            var f = this.x + rad2;
            var g = this.y + 16 - 19 / 2;
            var _y_ = g - this.y;
            var _x_ = 0;
            var m = Math.round(_x_ * Math.cos( - this.arc) - _y_ * Math.sin( - this.arc) + f);
            var n = Math.round(_x_ * Math.sin( - this.arc) + _y_ * Math.cos( - this.arc) + g);
            Attack.splist.push(new sp(m, n - 5, 36 + rad, this.arc, Attack.imgDx[71], 8));
        }　

        break;　
    case 28:
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI - this.arc);
        ctx.drawImage(Attack.imgDx[41], -17 / 2, -27);
        ctx.restore();
        break;　　　　　
    }
}

Pd.prototype.move = function() {
    if (this.y < 670 && this.y > -20 && this.x > -20 && this.x < 500) {
		var _player = Attack.player;
        if (!_player.wd && _player.isHit(new OBB(new Vector2(this.x, this.y), this.w, this.h, this.arc))) {
            this.die = 1;
        }
        this.run();
    } else {
        this.die = 1;
    }
}


Pd.prototype.move2 = function() {
    var _player = Attack.player;
    if (this.y > 0 && this.y < 680 && this.x > -30 && this.x < 530 && _player) {
        var _enemylist = Attack.enemylist,i = 0,len = _enemylist.length,
		obb = new OBB(new Vector2(this.x, this.y), this.w, this.h, this.arc);
		
		for (;i < len;i++){
            if (_enemylist[i].isHit(obb)){
				var d = parseInt(Attack.all_mub) + 100 * (1 + (_player.hit / 100));
                Attack.score_init(d);
                _player.htime = 60;
                _player.htime > 0 && (_player.hit++, Attack.hit_init(_player.hit));
                _player.jNl(1);
                if (this.type != 21) {
                    this.die = 1;
                }
            }
        }
		
        this.run();
    } else {
        this.die = 1;
    }
}


Pd.prototype.run = function() {
    switch (this.type) {　
    case 1:
        var _player = Attack.player;
        if (this.t < 3) {
            var cx = this.x + this.w / 2 - _player.x - 20;
            var cy = this.y + this.h / 2 - _player.y - 25;
            var cz = Math.sqrt(cx * cx + cy * cy);
            this.sin1 = cx / cz;
            this.cos1 = cy / cz;
			this.arc2 = (cy>0)?Math.asin(this.sin1):Math.PI - Math.asin(this.sin1)
        }
        this.t++;
        this.y -= 4 * this.cos1;
        this.x -= 4 * this.sin1;
        break;　
    case 2:
        if (this.t == 0) {
            var k = random(0, Attack.enemylist.length);
			this._player = Attack.enemylist[k];
        }
        if (this._player) {
            if (!this._player.die) {
                if (this.t < 10) {
                    this.arc = this.arc;
                    if (this.x > Attack.player.x + 43) {
                        this.x -= -4;
                        this.arc = this.arc;
                    } else {
                        this.x -= 4;
                        this.arc = this.arc;
                    }

                } else if (this.t < 15) {} else if (this.t < 180) {

                    var cx = this.x - this._player.x - this._player.width / 2;
                    var cy = this.y - this._player.y - this._player.hight / 2;
                    var cz = Math.sqrt(cx * cx + cy * cy);
                    this.sin1 = cx / cz;
                    if (cy > 0) {
                        this.arc3 = Math.asin(this.sin1);
                        if (this.arc < this.arc3) {
                            this.arc += Math.PI / 50;
                        } else {
                            this.arc -= Math.PI / 50;
                        }
                    } else {
                        if (this.x > Attack.player.x + 43) {
                            this.arc3 = -Math.PI - Math.asin(this.sin1);

                        } else {
                            this.arc3 = Math.PI - Math.asin(this.sin1);

                        }

                        if (this.arc < this.arc3) {
                            this.arc += Math.PI / 50;
                        } else {
                            this.arc -= Math.PI / 50;
                        }

                    }

                    this.y -= (2 + this.t / 10) * Math.cos(this.arc);
					　this.x -= (2 + this.t / 10) * Math.sin(this.arc);
                }
            } else {
                this.y -= (2 + this.t / 15) * Math.cos(this.arc);
				this.x -= (2 + this.t / 15) * Math.sin(this.arc);
            }
        } else {
            if (this.t < 10) {

                this.cos1 = 0;
                if (this.x > Attack.player.x + 43) {
                    this.x -= -4;
                    this.arc = this.arc;
                } else {
                    this.x -= 4;
                    this.arc = this.arc;
                }
                this.y -= (2 + this.t / 15);　
            } else {

                if (this.x > Attack.player.x + 43) {
                    if (this.t < 40) {
                        this.arc += Math.PI / 100;
                    }

                } else {
                    if (this.t < 40) {
                        this.arc -= Math.PI / 100;
                    }

                }

                this.y -= (2 + this.t / 15) * Math.cos(this.arc);
                this.x -= (2 + this.t / 15) * Math.sin(this.arc);
            }
        }

        this.t++;
        break;
    case 7:

        var _player = Attack.player;
        if (this.t < 10) {
            var cx = this.x - _player.x - 20;
            var cy = this.y - _player.y - 25;
            var cz = Math.sqrt(cx * cx + cy * cy);
            this.sin1 = cx / cz;
            this.cos1 = cy / cz;
            this.arc = Math.PI;

            this.x -= -4;

        } else if (this.t < 15) {

} else if (this.t < 70) {

            var cx = this.x - _player.x - 20;
            var cy = this.y - _player.y - 25;
            var cz = Math.sqrt(cx * cx + cy * cy);
            this.sin1 = cx / cz;

            if (cy > 0) {

                this.arc3 = Math.asin(this.sin1);
                if (this.arc < this.arc3) {
                    this.arc += Math.PI / 40;
                } else {
                    this.arc -= Math.PI / 40;
                }
            } else {

                this.arc3 = Math.PI - Math.asin(this.sin1);

                if (this.arc < this.arc3) {
                    this.arc += Math.PI / 40;
                } else {
                    this.arc -= Math.PI / 40;
                }

            }

            this.y -= (this.t / 15) * Math.cos(this.arc);
            this.x -= (this.t / 15) * Math.sin(this.arc);
        } else {
            this.y -= (this.t / 15) * Math.cos(this.arc);
            this.x -= (this.t / 15) * Math.sin(this.arc);
        }
        this.t++;
        break;
    case 8:
        var _player = Attack.player;
        if (this.t < 10) {
            var cx = this.x - _player.x - 43;
            var cy = this.y - _player.y - 36;
            var cz = Math.sqrt(cx * cx + cy * cy);
            this.sin1 = cx / cz;
            this.cos1 = cy / cz;
            this.arc = Math.PI;

            this.x -= 4;

        } else if (this.t < 15) {

} else if (this.t < 70) {

            var cx = this.x - _player.x - 20;
            var cy = this.y - _player.y - 25;
            var cz = Math.sqrt(cx * cx + cy * cy);
            this.sin1 = cx / cz;

            if (cy > 0) {

                this.arc3 = 2 * Math.PI + Math.asin(this.sin1);
                if (this.arc < this.arc3) {
                    this.arc += Math.PI / 40;
                } else {
                    this.arc -= Math.PI / 40;
                }
            } else {

                this.arc3 = Math.PI - Math.asin(this.sin1);

                if (this.arc < this.arc3) {
                    this.arc += Math.PI / 40;
                } else {
                    this.arc -= Math.PI / 40;
                }

            }
            this.y -= (this.t / 15) * Math.cos(this.arc);
            this.x -= (this.t / 15) * Math.sin(this.arc);
        } else {
            this.y -= (this.t / 15) * Math.cos(this.arc);
            this.x -= (this.t / 15) * Math.sin(this.arc);
        }

        this.t++;
        break;
    case 3:
        var _player = Attack.player;
        if (this.t < 3) {
            var cx = this.x + this.w / 2 - _player.x - 20;
            var cy = this.y + this.h / 2 - _player.y - 25;
            var cz = Math.sqrt(cx * cx + cy * cy);
            this.sin1 = cx / cz;
            this.cos1 = cy / cz;
            if (cy > 0) {
                this.arc2 = Math.asin(this.sin1);
            } else {
                this.arc2 = Math.PI - Math.asin(this.sin1);
            }
        }
        this.y -= this.speed * this.cos1;
        this.x -= this.speed * this.sin1;
        this.t++;
        break;
    case 19:

        this.y -= this.speed * this.cos1;
        this.x -= this.speed * this.sin1;

        this.t++;
        break;
    case 21:
        if (this.t == 0) {
            var k = random(0, Attack.enemylist.length);
			this._player = Attack.enemylist[k];
        }
        if (this._player) {
            if (!this._player.die) {
                if (this.t < 15) {} else if (this.t < 180) {

                    var cx = this.x - this._player.x - this._player.width / 2;
                    var cy = this.y - this._player.y - this._player.hight / 2;
                    var cz = Math.sqrt(cx * cx + cy * cy);
                    this.sin1 = cx / cz;

                    if (cy > 0) {

                        this.arc3 = Math.asin(this.sin1);
                        if (this.arc < this.arc3) {
                            this.arc += Math.PI / 30;
                        } else {
                            this.arc -= Math.PI / 30;
                        }
                    } else {

                        if (this.x > Attack.player.x + 43) {
                            this.arc3 = -Math.PI - Math.asin(this.sin1);

                        } else {
                            this.arc3 = Math.PI - Math.asin(this.sin1);

                        }

                        if (this.arc < this.arc3) {
                            this.arc += Math.PI / 30;
                        } else {
                            this.arc -= Math.PI / 30;
                        }

                    }

                    this.y -= (8 + this.t / 15) * Math.cos(this.arc);　this.x -= (8 + this.t / 15) * Math.sin(this.arc);
                }
            } else {
                this.y -= (8 + this.t / 15) * Math.cos(this.arc);　this.x -= (8 + this.t / 15) * Math.sin(this.arc);
            }
        } else {
            if (this.t < 15) {} else {

                if (this.x > Attack.player.x + 43) {
                    if (this.t < 50) {
                        this.arc += Math.PI / 40;
                    }

                } else {
                    if (this.t < 50) {
                        this.arc -= Math.PI / 40;
                    }

                }

                this.y -= (8 + this.t / 15) * Math.cos(this.arc);
                this.x -= (8 + this.t / 15) * Math.sin(this.arc);
            }
        }

        this.t++;
        break;
    case 18:
    case 4:
        this.y -= (this.speed) * this.cos1;
        this.x -= (this.speed) * this.sin1;

        this.t++;

        break;　
    case 11:
        if (this.t < 20) {
            this.y -= 3 * this.cos1;
            this.x -= 3 * this.sin1;
        } else if (this.t == 35) {
            for (var i = 0; i < 10; i++) {
                var e = new Pd(this.x, this.y, 0, 0, 12, Math.PI / 5 * i);
                e.sin1 = Math.sin(Math.PI / 5 * i);
                e.cos1 = Math.cos(Math.PI / 5 * i);
                Attack.drDpd.push(e);
            }
            this.die = 1;
        }

        this.t++;

        break;　
    case 6:

        this.y -= this.speed * this.cos1;
        this.x -= this.speed * this.sin1;

        this.t++;

        break;　
    case 9:

        this.y -= (this.speed) * this.cos1;
        this.x -= (this.speed) * this.sin1;

        this.t++;

        break;
    case 10:

        this.y -= (10 - 7 * Math.sin(Math.PI * this.t / 120)) * this.cos1;
        this.x -= (10 - 7 * Math.sin(Math.PI * this.t / 120)) * this.sin1;

        this.t++;

        break;
    case 13:

        this.y -= (this.speed) * this.cos1;
        this.x -= (this.speed) * this.sin1;

        break;　
	 case 26:

        this.y -= (this.speed) * this.cos1;
        this.x -= (this.speed) * this.sin1;

        break;
    case 12:

        this.y -= (9 - 7 * Math.sin(Math.PI * this.t / 120)) * this.cos1;
        this.x -= (9 - 7 * Math.sin(Math.PI * this.t / 120)) * this.sin1;

        this.t++;

        break;　
    case 23:

        this.y -= (this.speed + this.t / 15) * this.cos1;
        this.x -= (this.speed + this.t / 15) * this.sin1;

        this.t++;

        break;　
    case 25:

        this.y -= (this.speed + this.t / 15) * this.cos1;
        this.x -= (this.speed + this.t / 15) * this.sin1;

        this.t++;
        break;　
    case 17:

        this.y -= 3 * this.cos1;
        this.x -= 3 * this.sin1;

        this.t++;

        break;　
    case 5:
        var _player = Attack.player;
        if (this.t < 10) {
            this.y += 2;
        } else if (this.t < 40) {
            var cx = this.x - _player.x - 20;
            var cy = this.y - _player.y - 25;
            var cz = Math.sqrt(cx * cx + cy * cy);
            this.sin1 = cx / cz;
            if (cy > 0) {
                this.arc3 = Math.asin(this.sin1);
                if (this.arc < this.arc3) {
                    this.arc += Math.PI / 40;
                } else {
                    this.arc -= Math.PI / 40;
                }
            } else {
                this.arc3 = Math.PI - Math.asin(this.sin1);
                if (this.arc < this.arc3) {
                    this.arc += Math.PI / 40;
                } else {
                    this.arc -= Math.PI / 40;
                }

            }

            this.y -= (2 + this.t / 15) * Math.cos(this.arc);
            this.x -= (2 + this.t / 15) * Math.sin(this.arc);
        } else {
            this.y -= (2 + this.t / 15) * Math.cos(this.arc);
            this.x -= (2 + this.t / 15) * Math.sin(this.arc);
        }

        this.t++;
        break;
	case 29:

        var _player = Attack.player;
        if (this.t < 10) {
             this.y -= 2 * Math.cos(this.arc);
            this.x -= 2 * Math.sin(this.arc);

        } else if (this.t < 40) {

            var cx = this.x - _player.x - 20;
            var cy = this.y - _player.y - 25;
            var cz = Math.sqrt(cx * cx + cy * cy);
            this.sin1 = cx / cz;

            if (cy > 0) {

                this.arc3 = Math.asin(this.sin1);
                if (this.arc < this.arc3) {
                    this.arc += Math.PI / 40;
                } else {
                    this.arc -= Math.PI / 40;
                }
            } else {

                this.arc3 = Math.PI - Math.asin(this.sin1);

                if (this.arc < this.arc3) {
                    this.arc += Math.PI / 40;
                } else {
                    this.arc -= Math.PI / 40;
                }

            }

            this.y -= (2 + this.t / 15) * Math.cos(this.arc);
            this.x -= (2 + this.t / 15) * Math.sin(this.arc);
        } else {
            this.y -= (2 + this.t / 15) * Math.cos(this.arc);
            this.x -= (2 + this.t / 15) * Math.sin(this.arc);
        }

        this.t++;
        break;
    case 24:
        this.t++;
        if (this.t < 15) {
            this.y -= Math.round(3 * this.cos1);
            this.x -= Math.round(3 * this.sin1);
        } else {
            this.y -= Math.round(7 * this.cos1);
            this.x -= Math.round(7 * this.sin1);
        }
        break;　
    case 14:

        this.y -= (7 + this.t / 3) * Math.cos(this.arc);
        this.x -= (7 + this.t / 3) * Math.sin(this.arc);

        this.t++;
        break;
    case 15:

        if (this.x > Attack.player.x + 44) {

            this.arc += Math.PI / 200;
        } else {

            this.arc -= Math.PI / 200;

        }

        this.y -= (5 + this.t / 6) * Math.cos(this.arc);
        this.x -= (5 + this.t / 6) * Math.sin(this.arc);
        this.t++;
        break;
    case 28:
        this.y -= (7 + this.t) * this.cos1;
        this.x -= (7 + this.t) * this.sin1;
        this.t++;
        break;
    case 16:
        if (this.t == 0) {
            var k = random(0, Attack.enemylist.length);
			this._player = Attack.enemylist[k];
        }
        if (this._player) {
            if (!this._player.die) {
                if (this.t < 10) {
                    if (this.x > Attack.player.x + 43) {
                        this.x -= -4;
                        this.arc = this.arc;
                    } else {
                        this.x -= 4;
                        this.arc = this.arc;
                    }

                } else if (this.t < 15) {} else if (this.t < 50) {
                    this.y -= (2 + this.t / 10) * Math.cos(this.arc);
                    this.x -= (2 + this.t / 10) * Math.sin(this.arc);

                } else if (this.t < 180) {

                    var cx = this.x - this._player.x - this._player.width / 2;
                    var cy = this.y - this._player.y - this._player.hight / 2;
                    var cz = Math.sqrt(cx * cx + cy * cy);
                    this.sin1 = cx / cz;

                    if (cy > 0) {
                        this.arc3 = Math.asin(this.sin1);
                       
					    if (this.arc < this.arc3) {
                            this.arc += Math.PI / 50;
                        } else {
                            this.arc -= Math.PI / 50;
                        }
                    } else {

                        if (this.x > Attack.player.x + 43) {
                            this.arc3 = -Math.PI - Math.asin(this.sin1);

                        } else {
                            this.arc3 = Math.PI - Math.asin(this.sin1);

                        }

                        if (this.arc < this.arc3) {
                            this.arc += Math.PI / 50;
                        } else {
                            this.arc -= Math.PI / 50;
                        }

                    }

                    this.y -= (2 + this.t / 10) * Math.cos(this.arc);
					this.x -= (2 + this.t / 10) * Math.sin(this.arc);
                }
            } else {
                this.y -= (2 + this.t / 10) * Math.cos(this.arc);
				this.x -= (2 + this.t / 10) * Math.sin(this.arc);
            }
        } else {
            if (this.t < 10) {

                this.cos1 = 0;
                if (this.x > Attack.player.x + 43) {
                    this.x -= -4;
                    this.arc = this.arc;
                } else {
                    this.x -= 4;
                    this.arc = this.arc;
                }
                this.y -= (2 + this.t / 15);　
            } else if (this.t < 15) {} else if (this.t < 50) {
                this.y -= (2 + this.t / 10) * Math.cos(this.arc);
                this.x -= (2 + this.t / 10) * Math.sin(this.arc);

            } else {

                if (this.x > Attack.player.x + 43) {
                    if (this.t < 70) {
                        this.arc += Math.PI / 100;
                    }

                } else {
                    if (this.t < 70) {
                        this.arc -= Math.PI / 100;
                    }

                }

                this.y -= (2 + this.t / 10) * Math.cos(this.arc);
                this.x -= (2 + this.t / 10) * Math.sin(this.arc);
            }
        }

        this.t++;
        break;
    }

}