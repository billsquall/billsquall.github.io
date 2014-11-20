/*我方飞机类*/
var plane = function(x, y, w, h, img, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.type = type;
    this.blood = 5;
    this.wd = 0;
    this.wdk = 0;
    this.score = 0;
    this.nl = 200;
    this.t = 0;
    this.htime = 0;
    this.p_type = 0;
    this.hit = 0;
    this.speed = 5;
    this.maxHit = 0;
    this.die = 0;
    this.star = 0;
    this.d = 4;
    this.tl = 0;
    this.tr = 0;
};

plane.prototype.dr = function() {
    var ctx = Attack.ctx2;
    ctx.save();
    ctx.globalAlpha = 0.6;
    ctx.drawImage(this.img, this.w * Math.floor(this.d), this.h, this.w, this.h, this.x + 50, this.y + 80, this.w * 0.5, this.h * 0.5);
    ctx.restore();
    ctx.save();
    if (this.type == 2) {
        if (this.t % 6 == 0 && this.p_type == 0) {
            ctx.drawImage(Attack.imgDx[5], this.x + this.w / 2 - 31, this.y + this.h / 2 - 55);
        }
        ctx.drawImage(Attack.imgDx[61], 46 * (Math.floor(this.t / 2) % 3), 0, 46, 8, this.x + this.w / 2 - 17, this.y - 2, 34, 6);
    }
    ctx.shadowColor = "#eee";
    ctx.shadowOffsetY = this.t % 2;
    ctx.drawImage(this.img, this.w * Math.floor(this.d), 0, this.w, this.h, this.x, this.y, this.w, this.h);
    if (this.wd == 1 && this.wdk < 120) {
        if (this.wdk == 1) {
            gameDiv.className = "gameOn";
            this.xd();
            setTimeout(function() {
                gameDiv.className = "";
            },
            800);
            for (var a = 0; a < 64; a++) {
                var rad = random( - 30, 30);
                Attack.splist.push(new sp(this.x + this.w / 2, this.y + this.h / 2, 40 + rad, Math.PI / 32 * a, Attack.imgDx[54], 6));
            }
        }
        var h = 120;
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        ctx.rotate(Math.PI / 12 * (Math.floor(this.wdk / 5) % 24));
        ctx.drawImage(Attack.imgDx[62], 164 * (Math.floor(this.wdk / 10) % 12), 0, 164, 164, -h / 2, -h / 2, h, h);
        ctx.restore();
        this.wdk++;
    } else if (this.wd == 2 && this.wdk < 300) {
        var h = 120;
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        ctx.rotate(Math.PI / 12 * (Math.floor(this.wdk / 5) % 24));
        ctx.drawImage(Attack.imgDx[62], 164 * (Math.floor(this.wdk / 10) % 10), 0, 164, 164, -h / 2, -h / 2, h, h);
        ctx.restore();
        this.wdk++;
    } else {
        this.wd = 0;
        this.wdk = 0;
    }
    ctx.restore();

}

plane.prototype.fpao = function(fx) {
    /* 	if (this.t % 68 == 0){
		  
	    this.fire(this.x + 45 - 20, this.y+34,  10, 10,21, 3/4*Math.PI);
        this.fire(this.x + 45 + 20, this.y+34,  10, 10,21,-3/4*Math.PI);
		 
		}  

	if (this.t % 4 == 0){
		   this.m+=4*Math.sin(Math.PI/2+this.t*Math.PI/40);
	     this.fire(this.x + 45 - this.m, this.y+4, 14, 45, 14, 0);
        this.fire(this.x + 45 + this.m, this.y+4, 14, 45, 14, 0);
		 
		}  */
    if (this.p_type == 0) {
        if (this.t == 1) {
            Attack.drJg.splice(0, 1);
        }
        if (this.t % 6 == 0) {
            this.fire(this.x + 45 - 9, this.y + 4, 14, 45, 14, 0);
            this.fire(this.x + 45 + 9, this.y + 4, 14, 45, 14, 0);
        }
        if (this.t % 6 == 0) {
            this.fire(this.x + 45 - 18, this.y + 4, 14, 45, 14, Math.PI / 50);
            this.fire(this.x + 45 + 18, this.y + 4, 14, 45, 14, -Math.PI / 50);
        }

        if (this.t % 90 == 20) {
            this.fire(this.x + 44 + 30, this.y + 30, 8, 18, 16, -Math.PI / 10);
            this.fire(this.x + 44 - 30, this.y + 30, 8, 18, 16, Math.PI / 10);

        }
        if (this.t % 90 == 25) {
            this.fire(this.x + 44 - 15, this.y + 30, 8, 18, 16, Math.PI / 10);
            this.fire(this.x + 44 + 15, this.y + 30, 8, 18, 16, -Math.PI / 10);
        }
        if (this.t % 90 == 15) {
            this.fire(this.x + 44 - 45, this.y + 30, 8, 18, 16, Math.PI / 10);
            this.fire(this.x + 44 + 45, this.y + 30, 8, 18, 16, -Math.PI / 10);
        }
    }
    if (this.p_type == 1) {

        if (this.t == 1) {
            var jg1 = new Jg(1, 0, 0);
            Attack.drJg.push(jg1);
            this.speed = 3;
        }

    }
    /*if(this.t % 4 == 2){
		
		 this.fire(this.x+ 45 , this.y+6, 14, 45, 14,this.t%100*(Math.PI/400)- Math.PI/8);
		  this.fire(this.x + 45, this.y+6, 14, 45, 14,this.t%100*(-Math.PI/400)+ Math.PI/8);
		 }
	
     /*   if (this.t % 30 == 8 || this.t % 30 == 14 || this.t % 30 == 20) {
      
	     
		
		 this.fire(this.x + 44 - 11, this.y, 0, 0, 28, 0);
        this.fire(this.x + 44 + 11, this.y, 0, 0, 28, 0);

    }
 if (this.t % 30 == 10 || this.t % 30 == 16 || this.t % 30 == 22) {
	

	  this.fire(this.x + 44 - 14, this.y, 0, 0, 28, Math.PI/20);
	  this.fire(this.x + 44 + 14, this.y, 0, 0, 28, -Math.PI/20);
	 }
    if (this.t % 80 == 40) {
        this.fire(this.x + 44 + 30, this.y + 30, 8, 18, 2, -Math.PI/3);
        this.fire(this.x + 44 - 30, this.y + 30, 8, 18, 2, Math.PI/3);
    }
    if (this.t % 80 == 50) {
        this.fire(this.x + 44 - 10, this.y + 30, 8, 18, 2, Math.PI/4);
        this.fire(this.x + 44 + 10, this.y + 30, 8, 18, 2, -Math.PI/4);
    }var jg1 = new Jg(1,0,0);
   Attack.drJg.push(jg1);
	if(this.t==1){
		var jg1 = new Jg(2,0,20);
   Attack.drJg.push(jg1);
    	var jg2 = new Jg(2,0,20);
		jg2.t =20
   Attack.drJg.push(jg2);
   }*/
    this.t++;
}
/*飞机发炮*/
plane.prototype.fire = function(_x, _y, w, h, color, arc, speed) {
    var a = new Pd(_x, _y, w, h, color, arc);
    a.speed = speed;
    Attack.drPd.push(a);
}
/*放炸弹类*/
plane.prototype.zd = function() {
    Attack.zd = new bomb(this.y + 25, this.x + this.w / 2);
    if (this.nl == 200) {
        this.wd = 2;
        this.wdk = 0;
        this.nl = 0;
        this.xd();
        setTimeout(function() {
            Attack.zd = "a";
            gameDiv.className = "";
        },
        4500);
    }
}

plane.prototype.jNl = function(n) {
    if (this.nl < 200) {
        this.nl += n;
    }
}

plane.prototype.xd = function() {
    var drdpd = Attack.drDpd;
    for (var i = 0; i < drdpd.length; i++) {
        Attack.s2.push(new star(drdpd[i].x, drdpd[i].y));
        drdpd[i].die = 1;
    }
}

plane.prototype.isHit = function(OBB1) {
    var OBB2 = new OBB(new Vector2(this.x + this.w / 2, this.y + this.h / 2), 16, 16, 0);
    if (CollisionDetector.detectorOBBvsOBB(OBB1, OBB2)) {
        this.hit > this.maxHit && (this.maxHit = this.hit);
        this.hit = 0;
        Attack.hit_list = [null, null, null, null];
        Attack.hit_mub = "0000";
        this.blood--;
        this.jNl(1);
        this.wd = 1;
        this.wdk = 0;
        if (this.blood == 0) {
            this.die = 1;
            Attack.bzlist.push(new explode(this.x + 43, this.y + 36, 1));
            clearInterval(Attack.moveZ);
        }
        return 1;
    } else {
        return 0;
    }
}

plane.prototype.eat = function(a, b, w, h) {
    return b < this.y + 30 + h && b > this.y + 10 - h && a > this.x + 10 - w && a < this.x + 30 + w ? (this.star++, 1) : 0;
}

plane.prototype.moveZd = function() {
    var cx = Attack._x - this.x - 43;
    var cy = Attack._y - this.y - 36;
    if (cx > 10 || cx < -10 || cy > 10 || cy < -10) {
        var cz = Math.sqrt(cx * cx + cy * cy);
        this.y += Math.round(this.speed * cy / cz);
        this.x += Math.round(this.speed * cx / cz);
        if (!this.tl && cx > 10) {
            this.tl = 1;
            this.tr = 0;
        }
        if (!this.tr && cx < -10) {
            this.tr = 1;
            this.tl = 0;
        }
    } else if (cx <= 10 && cx >= -10) {
        this.tr = 0;
        this.tl = 0;
    }
    if (this.tl) {
        this.d < 8 ? this.d += .5 : this.d = 8;
    } else {
        this.d > 4 && (this.d -= 1 / 8);
    }

    if (this.tr) {
       this.d > .5 ? this.d -= .5 : this.d = 0;
    } else {
        this.d < 4 && (this.d += 1 / 8);
    }
}