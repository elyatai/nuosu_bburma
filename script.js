$(document).ready(function() {
	setInterval(romanize, 50);
});

last = '';
function romanize() {
	let i = $('#input').val();
	if(i === last) return;
	last = i;
	let chars = [...i];
	let roman = chars.map(c => convert(c, 'roman')).join(' ');
	let ipa = chars.map(c => convert(c, 'ipa')).join(' ');
	$('#roman').text(roman);
	$('#ipa').text('/' + ipa + '/')
}

function convert(char, type) {
	if(nuosu_bburma[char]) {
		return nuosu_bburma[char][type];
	} else {
		return char;
	}
}