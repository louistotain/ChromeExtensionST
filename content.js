// retour en haut à gauche

var htmlObject2 = document.createElement('a');

htmlObject2.id = "ChromeExtContainer2";
htmlObject2.style.position = "fixed";
htmlObject2.style.zIndex = "9999";
htmlObject2.style.left = "0";
htmlObject2.style.borderRadius = "5px";
htmlObject2.style.padding = "5px";
htmlObject2.style.margin = "5px";
htmlObject2.onclick = function(e) {
  window.location.replace("https://social.tremblaye-sa.fr/ecran-dynamique");
};

var p2 = "<span id='ChromeExtRetour' style='font-size: 15px; font-weight: bold; color: white; padding: 5px; text-shadow: 3px 3px 3px #0000009e; cursor: pointer' >Retour</span>";

htmlObject2.innerHTML = p2;
document.body.insertBefore(htmlObject2, document.body.firstChild);


// compteur en haut à droite

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


// restyle les pages nodes
if (document.getElementsByClassName('navbar').length){

  if (document.getElementsByTagName('body')) document.getElementsByTagName('body')[0].style = "background-image: url('../themes/contrib/socialtremblaye1/assets/images/background_tremblaye_base_4.jpg'); background-size: cover; color: rgb(71, 74, 77) !important;";
  // if (document.getElementsByTagName('body')) document.getElementsByTagName('body')[0].style = "background-image: url('https://www.pixelstalk.net/wp-content/uploads/images2/Merry-christmas-wallpaper-Live.jpg'); background-size: cover; color: rgb(71, 74, 77) !important;";

  if (document.getElementsByTagName('site-footer')) document.getElementsByClassName('site-footer').item(0).remove();
  if (document.getElementsByClassName('navbar')) document.getElementsByClassName('navbar').item(0).remove();

  if (document.getElementsByClassName('main-container')) document.getElementsByClassName('main-container').item(0).style.paddingTop = "0px";
  if (document.getElementsByClassName('region--content')) document.getElementsByClassName('region--content').item(0).style.minWidth = "100%";
  if (document.getElementsByClassName('region--content')) document.getElementsByClassName('region--content').item(0).style.paddingRight = "0px";

  if (document.getElementsByTagName('body')) document.getElementsByTagName('body').item(0).style.backgroundImage = "url('../themes/contrib/socialtremblaye1/assets/images/background_tremblaye_base_4.jpg')";
  // if (document.getElementsByTagName('body')) document.getElementsByTagName('body').item(0).style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/images2/Merry-christmas-wallpaper-Live.jpg')";
  if (document.getElementsByTagName('body')) document.getElementsByTagName('body').item(0).style.backgroundSize = "cover";

}

console.log($('#edit-field-sites'))
