/*障碍*/
var wall = function(y, width, height, type) {
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.die = 0;
};

wall.prototype.dr = function() {
    var ctx = game1.ctx2;
    if (this.type == 1) {
        ctx.save();
        ctx.translate(30, 40);
        ctx.globalAlpha = 0.6;
        ctx.drawImage(game1.imgDx[1], 33, 0, 33, this.height - 100, this.width - 24, this.y + 50, 33 * 0.8, this.height - 100);
        ctx.drawImage(game1.imgDx[4], 0, 33, 500, 33, this.width - 550 + 5, this.y - 7 + 10, 500, 33 * 0.8);
        ctx.drawImage(game1.imgDx[8], 0, 33, 500, 33, this.width - 548 + 5, this.y + this.height - 24 - 5, 500, 33 * 0.8);
        ctx.drawImage(game1.imgDx[3], 50, 0, 50, 50, this.width - 50 + 5, this.y + 10, 50 * 0.8, 50 * 0.8);
        ctx.drawImage(game1.imgDx[2], 50, 0, 50, 50, this.width - 48 + 5, this.y + this.height - 50, 50 * 0.8, 50 * 0.8);
        ctx.restore();
        ctx.drawImage(game1.imgDx[1], 0, 0, 33, this.height - 100, this.width - 24, this.y + 50, 33, this.height - 100);
        ctx.drawImage(game1.imgDx[4], 0, 0, 500, 33, this.width - 550, this.y - 7, 500, 33);
        ctx.drawImage(game1.imgDx[8], 0, 0, 500, 33, this.width - 548, this.y + this.height - 24, 500, 33);
        ctx.drawImage(game1.imgDx[3], 0, 0, 50, 50, this.width - 50, this.y, 50, 50);
        ctx.drawImage(game1.imgDx[2], 0, 0, 50, 50, this.width - 48, this.y + this.height - 50, 50, 50);
    } else if (this.type == 2) {
        ctx.save();
        ctx.translate(30, 40);
        ctx.globalAlpha = 0.6;
        ctx.drawImage(game1.imgDx[7], 33, 0, 33, this.height - 100, 512 - this.width-9, this.y + 50, 33 * 0.8, this.height - 100);
        ctx.drawImage(game1.imgDx[4], 0, 33, 500, 33, 550 - this.width + 19 - 20, this.y - 9 + 11, 500, 33 * 0.8);
        ctx.drawImage(game1.imgDx[8], 0, 33, 500, 33, 548 - this.width + 23 - 19, this.y + this.height - 26 - 5, 500, 33 * 0.8);
        ctx.drawImage(game1.imgDx[5], 50, 0, 50, 50, 512 - this.width-3, this.y + 10, 50 * 0.8, 50 * 0.8);
        ctx.drawImage(game1.imgDx[6], 50, 0, 50, 50, 512 - this.width, this.y + this.height - 50, 50 * 0.8, 50 * 0.8);
        ctx.restore();
        ctx.drawImage(game1.imgDx[7], 0, 0, 33, this.height - 100, 512 - this.width-9, this.y + 50, 33, this.height - 100);
        ctx.drawImage(game1.imgDx[4], 0, 0, 500, 33, 550 - this.width + 10, this.y - 9, 500, 33);
        ctx.drawImage(game1.imgDx[8], 0, 0, 500, 33, 548 - this.width + 14, this.y + this.height - 26, 500, 33);
        ctx.drawImage(game1.imgDx[5], 0, 0, 50, 50, 512 - this.width-2, this.y, 50, 50);
        ctx.drawImage(game1.imgDx[6], 0, 0, 50, 50, 512 - this.width, this.y + this.height - 50, 50, 50);
    } 
}

/**检测碰撞**/
wall.prototype.pz = function(OBB1) {
    var w = 0,w2 = 0;
    this.type == 1 && (w = this.width / 2, w2 = this.width);
    this.type == 2 && (w = 512 - this.width / 2, w2 = 512 - this.width);
    var OBB2 = new OBB(new Vector2(w, this.y + this.height / 2), this.width, this.height, 0);
    if (game1.fj1.y > this.y && game1.fj1.y < this.y + this.height && Math.abs(w2 - game1.fj1.x) < 18) {
        game1.fj1.addnl();
    }
    else if (!game1.fj1.wd && CollisionDetector.detectorOBBvsOBB(OBB1, OBB2)) {
        game1.fj1.die = 1;
        for (var a = 0; a < 24; a++) {
            var rad = random( - 6, 6);
            game1.splist.push(new sp(game1.fj1.x, game1.fj1.y, 26 + rad, Math.PI / 12 * a, game1.imgDx[9]));
        }
    }

}
wall.prototype.move = function() {
   this.y > -380 ? this.y -= game1.fj1.l_speed * Math.cos(game1.fj1.arc) : this.die = 1;
}