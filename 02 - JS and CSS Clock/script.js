function updateClock() {
    // 获取当前时间
    const now = new Date();

    // 处理秒针
    const seconds = now.getSeconds(); // 当前秒数
    // 秒针的计算相对简单，对于一个完整的旋转为360°，60秒对应一个旋转的周期
    // 可得到公式 secondsDegrees = (当前秒 / 60) * 360
    const secondsDegrees = ((seconds / 60) * 360); 
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    

    // 处理分针
    const minutes = now.getMinutes();
    // 同理，分针的处理也是一样，360 / 60 = 6 即每6度为一分钟的偏移。
    // 值得注意的是:
    // 分针的偏移会受到秒针的影响，因此需要加上 seconds/60 * 6
    const minutesDegrees = ((minutes / 60) * 360) + (seconds/60 * 6)
    document.querySelector('.min-hand').style.transform = `rotate(${minutesDegrees}deg)`;
  
    // 处理时针
    const hours = now.getHours();
    // 时针的计算也是一样，只需要注意24小时制需要对12取余
    const hoursDegrees = (((hours %12) / 12) * 360) + ((minutes / 60) * 30);

    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
  }
  
  setInterval(updateClock, 1000);
  updateClock();