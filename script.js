window.onload = function(){
    $("#mybtn").hide();
    $("#apn-laps").hide();
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#mlseconds');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let lapBtn = document.querySelector('#mybtn');
    let Interval;
    


    const startTimer = () => {
        tens++;

        if (tens <= 9) {
      appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = '0' + seconds;
      tens = 0;
      appendTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = '0' + minutes;
      seconds = 0;
      appendSeconds.innerHTML = '0' + 0;
    }
    };

    startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    $('#start').hide('slow');
    $("#mybtn").show(700);

    
  };

  stopBtn.onclick = () => {
    clearInterval(Interval);
    $('#start').show(500);
    $("#mybtn").hide(400);
  };

  resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHMTL = minutes;
    $('#start').show(500);
    $("#mybtn").hide(400);
    $(".all-lists").empty();
    $("#apn-laps").hide(200);
  };

  lapBtn.onclick = () => {
    $("ol").append(`<li class='list-item'>${$('#minutes').text() +':'+$('#seconds').text()+ ':' + $('#mlseconds').text() }</li>`);
    $("#apn-laps").show();

    // alert("hiii " +$('#minutes').text() +':'+$('#seconds').text()+ ':' + $('#mlseconds').text() );
  }




  
  
  
}






$document.ready(function() {
  
})