$(document).ready(function() {
	$('#input').setInterval(romanize, 50);
	romanize();
});

function romanize() {
	let chars = [...$('#input').val()];
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