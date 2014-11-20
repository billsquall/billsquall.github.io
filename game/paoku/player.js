//人物类继承自Sprite类型
Player = eG.createSprite({
    //目前跳跃次数，最多两次
    jumptimes: 0,
    a: 0,
    speed: 5,
	isover : 0
});
Player.prototype.update = function() {
    this.anim.update();
    this.sd.x = this.x;
    this.sd.y = this.y + 50;
    //跑步
    this.x += this.speed;
    this.message();
    this.x > 240 && paoku.setviewPort(-this.speed);
    //gameover
    if (this.y > 570&&!this.isover) {
        this.isover = 1;
        this.over();
    }

    if (this.type == 0) {
        if (this.colDetection(paoku.zalayer)) {
            this.anim = this.animlist[0];
            this.sd.visible = 0;
        } else {
            this.anim = this.animlist[1];
            this.y += 5;
			this.sd.visible = 1;
        }
    }
    //跳跃
    if (this.type == 1) {
        this.sd.visible = 1;
        if (this.a < 18) {
            this.y -= ((22 - this.a) / 2);
        } else {
            if (this.colDetection(paoku.zalayer)) {
                this.type = 0;
                this.anim = this.animlist[0];
                this.a = 0;
                this.jumptimes = 0;
            } else {
                this.y += (this.a / 5);
            }
        }
        this.a++;
    }

}
Player.prototype.over = function() {
    this.x = -100;
	paoku.textlayer.push(paoku.overBtn);
	paoku.overBtn.to({alpha:1},30);
    this.speed = 0;
    paoku.offtimefuc();
    paoku.setviewPort(0);
	paoku.overBtn.addEventListener("click",
    function() {	
        //清空精灵列表，时间轴返回
        paoku.setEmpty();
        paoku.startReady();
    });

}
Player.prototype.message = function() {
    this.distanceValue += this.speed;
    this.distancetext.text = "您已经跑了" + this.distanceValue.toFixed(0) + "m";
    this.distanceValue % 1e3 >= 1e3 - this.speed && (this.speed += .2);
    /*if (this.distanceValue % 1500 >= 1500 - this.speed) {
        this.anim.speed < 10 && (this.anim.speed++, this.anim.goframe(0));
    }*/
}

Player.prototype.colDetection = function(objList) {
    var flag = false;
    for (var i = 0; i < objList.length; i++) {
       this.y - this.height / 2 + this.obb[3] < objList[i].y - objList[i].height / 2 + objList[i].obb[1] + 15 && eG.OBBvsOBB(this.testObb(), objList[i].testObb()) && (this.y =objList[i].y - objList[i].height / 2 + objList[i].obb[1]+this.height / 2- this.obb[3]+2, flag = !0);
    }
    return flag;
};

Player.prototype.runup = function() {
    if (this.jumptimes < 2) {
        this.anim = this.animlist[1];
        this.anim.goframe(0);
        this.a = 0;
        this.jumptimes++
    }
    this.type = 1;
};