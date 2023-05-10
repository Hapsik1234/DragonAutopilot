function changePitch() {
  function backup() {}
  backup = pitchDown;
  pitchDown = pitchUp;
  pitchUp = backup;	
}

function correctRoll() {
  var num = 2;
  console.log(fixedRotationZ);
  if (fixedRotationZ>0) {
    console.log("Larger than zero");
    test();
    while (fixedRotationZ>0) {
      console.log("Awaiting to complete rotation manouver " + fixedRotationZ.toString());
      dnt();
    }
    rollLeft();
  }
}

function test() {
  rollRight();
}

function dnt() {}
/*
To import code to simulator write in inspect console:
var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://raw.githack.com/Hapsik1234/DragonAutopilot/main/script.js'; document.head.appendChild(script);

NOTE: This code doesn't work yet, still working in limited free time
*/
