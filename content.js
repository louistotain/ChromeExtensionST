var htmlObject = document.createElement('div');

htmlObject.id = "ChromeExtContainer";
htmlObject.style.position = "fixed";
htmlObject.style.zIndex = "9999";
htmlObject.style.right = "0";
htmlObject.style.borderRadius = "5px";
htmlObject.style.padding = "5px";
htmlObject.style.margin = "5px";

var p = "<span id='ChromeExtCompteur' style='font-size: 15px; font-weight: bold; color: white; padding: 5px; text-shadow: 3px 3px 3px #0000009e;' >Mise à jour écran :</span>";

htmlObject.innerHTML = p;
document.body.insertBefore(htmlObject, document.body.firstChild);

function pad(value) {
  if(value < 10) {
    return '0' + value;
  } else {
    return value;
  }
}

setInterval(function () {

  chrome.extension.onMessage.addListener(handleMessage);
  function handleMessage(request) {
    document.getElementById('ChromeExtCompteur').innerHTML = 'Mise à jour écran : 00:' + pad(request.data);
  }

}, 1000);