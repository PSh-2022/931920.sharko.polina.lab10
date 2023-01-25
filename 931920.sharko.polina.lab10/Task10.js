function curtaint1() {
	document.getElementById('curtain').style.height = '100vh';
        document.getElementById('curtain').style.marginTop = '0vh';
        document.getElementById('curtain').style.transition = '0.2s';
}
function curtaint2() {
	document.getElementById('curtain').style.marginTop = '-5vh';
        document.getElementById('curtain').style.transition = '0.2s';
}
function curtaint3() {
	document.getElementById('trick1').style.marginTop = '-100vh';
	document.getElementById('trick1').style.transition = '1s';
}
function magician1() {
	var styles = getComputedStyle(document.getElementById('dove'));
    if (styles.top == '651px') {
	document.getElementById('dove').style.top = '563px';
	document.getElementById('dove').style.transition = '0.5s';
	document.getElementById('rabbit').style.top = '651px';
	document.getElementById('rabbit').style.transition = '0.5s';
	} else {
	document.getElementById('dove').style.top = '651px';
	document.getElementById('dove').style.transition = '0.5s';
	document.getElementById('rabbit').style.top = '563px';
	document.getElementById('rabbit').style.transition = '0.5s';
	}
	
}
function lighter3() {
var styles = getComputedStyle(document.getElementById('rabbit'));
    if(styles.display == 'none'){
	document.getElementById('light').style.display = 'block';
        document.getElementById('light').style.transition = '0.2s';
	document.getElementById('rabbit').style.display = 'block';
	document.getElementById('hat').style.display = 'block';
	document.getElementById('mag').style.display = 'block';
	document.getElementById('dove').style.display = 'block';
	
	}
	else{
	document.getElementById('light').style.display = 'none';
        document.getElementById('light').style.transition = '0.2s';
	document.getElementById('rabbit').style.display = 'none';
	document.getElementById('hat').style.display = 'none';
	document.getElementById('mag').style.display = 'none';
	document.getElementById('dove').style.display = 'none';
	document.getElementById('lighter').style.transition = '1s';
	}
}