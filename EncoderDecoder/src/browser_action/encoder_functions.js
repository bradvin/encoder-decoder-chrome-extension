document.addEventListener('DOMContentLoaded', function () {

	document.getElementById('btnencode').addEventListener('click',function(){
	    encode();
	},false);

	document.getElementById('btndecode').addEventListener('click',function(){
	    decode();
	},false);

	document.getElementById('btnclear').addEventListener('click',function(){
	    clear();
	},false);

	document.getElementById('radHTML').addEventListener('click',function(){
	    storeSelection();
	},false);

	document.getElementById('radURL').addEventListener('click',function(){
	    storeSelection();
	},false);

	var htmlSelected = localStorage.htmlSelection == 'true';
	document.getElementById('radHTML').checked = htmlSelected;
	document.getElementById('radURL').checked = !htmlSelected;
});

function storeSelection(){
	localStorage.htmlSelection = document.getElementById('radHTML').checked;
}

function clear() {
	document.getElementById('textarea').value='';
}

function encode() {
	var html = document.getElementById('radHTML');
	if (html.checked) {
		htmlencode();
	} else {
		urlencode();
	}
}

function decode() {
	var html = document.getElementById('radHTML');
	if (html.checked) {
		htmldecode();
	} else {
		urldecode();
	}
}

function urlencode() {
	var obj = document.getElementById('textarea');
	var unencoded = obj.value;
	obj.value = encodeURIComponent(unencoded);
}
function urldecode() {
	var obj = document.getElementById('textarea');
	var encoded = obj.value;
	obj.value = decodeURIComponent(encoded.replace(/\+/g,  " "));
}

function htmlencode() {
	var obj = document.getElementById('textarea');
	var unencoded = obj.value;
	obj.value = Encoder.htmlEncode(unencoded);
}

function htmldecode() {
	var obj = document.getElementById('textarea');
	var encoded = obj.value;
	obj.value = Encoder.htmlDecode(encoded);
}