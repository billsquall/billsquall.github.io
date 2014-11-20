//障碍物类继承Bitmap
Obstacles = eG.createBitmap();
Obstacles.prototype.update = function() {
    this.x < -this.width / 2 - 20 && this.remove();
    this.x > 800 + this.width / 2 ? this.visible = 1 : this.visible = 0;
}

//僵尸幽灵类
dr = eG.createSprite();
dr.prototype.update = function() {
    this.anim.update();
    this.x -= 1;
    this.type ? this.y += Math.sin(Math.PI / 20 * this.timeline) : this.y += Math.sin(Math.PI / 30 * this.timeline);
    this.t++;
    if (eG.OBBvsOBB(this.testObb(), paoku.p1.testObb())) {
        var p1 = paoku.p1;
        if (p1.y - p1.height / 2 + p1.obb[3] < this.y - this.height / 2 + this.obb[1] + 10) {
            p1.jumptimes = 0;
            p1.runup();
            this.remove();
            paoku.pointlayer.push(new tree({
                x: this.x,
                y: this.y,
                img: paoku.getImg("tree"),
                width: 100,
                height: 100,
                ctx: paoku.ctx
            }))
        } else {
            paoku.pointlayer.push(new tree({
                x: p1.x,
                y: p1.y,
                img: paoku.getImg("tree"),
                width: 100,
                height: 100,
                ctx: paoku.ctx
            }));
            p1.y = 1200;
            p1.over();
        }
    }
    this.x < -42 && this.remove();
}

//金币类
Star = eG.createSprite();
Star.prototype.update = function() {
    this.anim.update();
    this.x < -32 && this.remove();
    if (eG.OBBvsOBB(this.testObb(), paoku.p1.testObb())) {
        paoku.p1.score.text += 10;
        this.up = 1;
    }
    if (this.up) {
        this.y -= 5;
		
        this.y < 40 && this.remove();
    }
}

//背景类
Bg = eG.createBitmap();

Bg.prototype.update = function() {
    switch (this.type) {
    case 0:
       this.x <= -this.width / 2 && (this.x += this.width * 2);
        break;
    case 1:
        this.x <= -this.width / 2 && (this.x = 1e3);
        break;
    case 2:
       this.x <= -this.width / 2 && (this.x = 1200, this.y = 70 + eG.Math.random(-10, 10) * 4);
        break;
    case 3:
        this.x <= -this.width / 2 && (this.x = 2500);
        break;
    case 4:
        this.alpha = Math.sin(this.timeline % 50 * Math.PI / 50);
        break;
    }
	
    if (paoku.p1 && paoku.p1.x > 240) {
        this.x -= this.speed;
    }
}

point = eG.createBitmap();
point.prototype.update = function() {
    if (this.y <= -20) {
        this.y += 500;
        this.x = 500 + eG.Math.random( - 10, 10) * 30;
        this.arc = eG.Math.random( - 10, 10) * Math.PI / 30;
    }
    this.y -= this.speed * Math.cos(this.arc);
    this.x -= this.speed * Math.cos(this.arc);
}

tree = eG.createBitmap();
tree.prototype.update = function() {
    this.y += 5;
    this.rotation += Math.PI / 30;
    this.y > 530 && this.remove();
}