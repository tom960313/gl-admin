const tools = {
	//获取验证码倒计时
	timeCountdown(obj) { //obj包括timer、waitTime 、canGet
		const TIME_COUNT = 30; //默认倒计时秒数

		if (!obj.timer) {
			obj.waitTime = TIME_COUNT;
			obj.canGet = false;
			obj.timer = setInterval(() => {
				if (obj.waitTime > 0 && obj.waitTime <= TIME_COUNT) {
					obj.waitTime--;
				} else {
					obj.canGet = true;
					clearInterval(obj.timer); //清空定时器
					obj.timer = null;
				}
			}, 1000)
		}
		return {
			timer: obj.timer,
			canGet: obj.canGet,
			waitTime: obj.waitTime
		}
	}

}

export default tools;