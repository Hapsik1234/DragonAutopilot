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
    rollRight();
    while (fixedRotationZ>0) {
      console.log("Awaiting to complete rotation manouver " + fixedRotationZ.toString());
      dnt();
    }
    rollLeft();
  }
}

function dnt() {}
