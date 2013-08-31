document.addEventListener('DOMContentLoaded', function () {

	document.getElementById('btnencode').addEventListener('click',function(){
	    encode();
		storeSelection();
	},false);

	document.getElementById('btndecode').addEventListener('click',function(){
	    decode();
		storeSelection();
	},false);

	document.getElementById('btnclear').addEventListener('click',function(){
	    clear();
		storeSelection();
	},false);

	document.getElementById('radHTML').addEventListener('click',function(){
	    storeSelection();
	},false);

	document.getElementById('radURL').addEventListener('click',function(){
	    storeSelection();
	},false);

	var htmlSelected = localStorage.htmlSelection == undefined ? true : localStorage.htmlSelection == 'true';
	var previousValue = localStorage.textarea == undefined ? '' : localStorage.textarea;
	document.getElementById('radHTML').checked = htmlSelected;
	document.getElementById('radURL').checked = !htmlSelected;
	document.getElementById('textarea').value = previousValue;
});

function storeSelection(){
	localStorage.htmlSelection = document.getElementById('radHTML').checked;
	localStorage.textarea = document.getElementById('textarea').value;
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