function changePitch() {
  function backup() {}
  backup = pitchDown;
  pitchDown = pitchUp;
  pitchUp = backup;	
}

function correctRoll() {
  var n = 0;    //This is to not overload website
  console.log(fixedRotationZ);
  if (fixedRotationZ>0) {
    console.log("Larger than zero");
    test();
    test2();
    rollRight();
    while (fixedRotationZ>0 && n<1000) {
      console.log(n + ": Awaiting to complete rotation manouver " + fixedRotationZ.toString());
      dnt();
      n++;
    }
    
  }
}

function test() {
  if (2+2==4) {
    rollRight();
  }
  console.log("Test");
}

function test2() {
  console.log("Test");
}

function dnt() {}
/*
To import code to simulator write in inspect console:
var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://raw.githack.com/Hapsik1234/DragonAutopilot/main/script.js'; document.head.appendChild(script);

NOTE: This code doesn't work yet, still working in limited free time. Made it public for testing.
*/
