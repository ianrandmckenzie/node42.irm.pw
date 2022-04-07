$(document).ready(function(){
  AOS.init();
  $(".decrypted-1").hide();
  $(".decrypted-2").hide();
  $(".decrypted-3").hide();
  $(".decrypted-4").hide();
})

function startdecrypt(decrypted, encrypted) {
  var originalText = decrypted.text().split('').reverse();
  var decryptedText = "";
  var i = 0;

  decrypted.text("");

  var shuffleInterval = setInterval(function(){
    var shuffledText = '';
    var j = originalText.length;
    while(j--) {
      shuffledText += String.fromCharCode((Math.random()*94+33) | 0);
      if(j%32){
        shuffledText += " ";
        j--
      }
    }
    if(i++ % 2 === 0) decryptedText += originalText.pop();
    decrypted.text(decryptedText);
    decrypted.show();
    encrypted.text(shuffledText);
    if(!shuffledText.length) clearInterval(shuffleInterval);
  },5);
}
