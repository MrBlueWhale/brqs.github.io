<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>var step = 1,
    nLit = 0,
    interval = "",
    mil = 450,
    paused = true,
    hashMil = window.location.hash.substr(-3),
    hashCode = "",
    steps = 20,
    btns;


if (hashMil!=""){ // Handle code + tempo from hash
  mil = hashMil;
  window['tempo'].value = (550-mil)/50;
  hashCode = decompress( window.location.hash.substr(1).slice(0,-3) );
  steps = hashCode.length/8;
  TweenMax.to('#controls', 0.2, {autoAlpha:1, pointerEvents:'auto'});
  interval = setInterval(nextStep, mil);
  paused=true;
}


for (var i=1; i&lt;=steps; i++) { // Make steps + chime buttons
  var step = '<div id="step'+i+'" class="step">'+
                '<div id="chime'+i+'_1" class="btn btn1"></div>'+
                '<div id="chime'+i+'_2" class="btn btn2"></div>'+
                '<div id="chime'+i+'_3" class="btn btn3"></div>'+
                '<div id="chime'+i+'_4" class="btn btn4"></div>'+
                '<div id="chime'+i+'_5" class="btn btn5"></div>'+
                '<div id="chime'+i+'_6" class="btn btn6"></div>'+
                '<div id="chime'+i+'_7" class="btn btn7"></div>'+
                '<div id="chime'+i+'_8" class="btn btn8"></div>'+      
              '</div>';
  document.getElementById('steps').innerHTML += step;
}


// Setup chime buttons
btns = document.getElementsByClassName("btn");
TweenMax.set('.btn', {alpha:0.25});
TweenMax.set('#toy', {width:steps*30});

for (var i=0; i