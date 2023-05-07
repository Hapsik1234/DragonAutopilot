function change() {
	function backup() {}
	backup = pitchDown;
	pitchDown = pitchUp;
	pitchUp = backup;	
}
