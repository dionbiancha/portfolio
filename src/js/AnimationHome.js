export function leftOnAnimation() {
  document.getElementById("Photo").style.marginLeft = '15px';
  document.getElementById("Photo").style.transitionDuration = '1s';
  document.getElementById("More-left").style.opacity = '1';
  document.getElementById("More-left").style.marginLeft = '85%';
  document.getElementById("More-left").style.transitionDuration = '1s';
  document.getElementById("More-left-dark").style.opacity = '1';
  document.getElementById("More-left-dark").style.marginLeft = '85%';
  document.getElementById("More-left-dark").style.transitionDuration = '1s';
  document.getElementById("Text-left").style.marginLeft = '280px';
  document.getElementById("Text-left").style.transitionDuration = '1s';
  document.getElementById("Left").style.width = '70%';
  document.getElementById("Left").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.width = '58%';
  document.getElementById("Left").style.zIndex = '3';
  document.getElementById("Right").style.zIndex = '1';
  document.getElementById("Github").style.marginLeft = '-100px';
  document.getElementById("Github").style.transitionDuration = '1s';
  document.getElementById("Github").style.opacity = '0';
  document.getElementById("Linkedin").style.opacity = '0';
}
export function leftOffAnimation() {
  document.getElementById("Photo").style.marginLeft = '-150%';
  document.getElementById("Photo").style.transitionDuration = '1s';
  document.getElementById("More-left").style.opacity = '0';
  document.getElementById("More-left").style.marginLeft = '-40%';
  document.getElementById("More-left").style.transitionDuration = '1s';
  document.getElementById("More-left-dark").style.opacity = '0';
  document.getElementById("More-left-dark").style.marginLeft = '-40%';
  document.getElementById("More-left-dark").style.transitionDuration = '1s';
  document.getElementById("Text-left").style.marginLeft = '60px';
  document.getElementById("Text-left").style.transitionDuration = '1s';
  document.getElementById("Left").style.width = '50%';
  document.getElementById("Left").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.width = '50%';
  document.getElementById("Github").style.marginLeft = '0px';
  document.getElementById("Github").style.transitionDuration = '1s';
  document.getElementById("Left").style.zIndex = '1';
  document.getElementById("Right").style.zIndex = '1';
  document.getElementById("Github").style.opacity = '1';
  document.getElementById("Linkedin").style.opacity = '1';
}

export function rightOnAnimation() {
  document.getElementById("More-right").style.opacity = '1';
  document.getElementById("More-right").style.marginLeft = '-97%';
  document.getElementById("More-right").style.transitionDuration = '1s';
  document.getElementById("Text-right").style.marginLeft = '80px';
  document.getElementById("Text-right").style.transitionDuration = '1s';
  document.getElementById("Right").style.width = '70%';
  document.getElementById("Right").style.transitionDuration = '1s';
  document.getElementById("Suport-right").style.display = 'block';
  document.getElementById("Left").style.zIndex = '1';
  document.getElementById("Right").style.zIndex = '2';
  document.getElementById("Github").style.opacity = '0';
  document.getElementById("Linkedin").style.opacity = '0';
}
export function rightOffAnimation() {
  document.getElementById("More-right").style.opacity = '0';
  document.getElementById("More-right").style.marginLeft = '72%';
  document.getElementById("More-right").style.transitionDuration = '1s';
  document.getElementById("Text-right").style.marginLeft = '60px';
  document.getElementById("Text-right").style.transitionDuration = '1s';
  document.getElementById("Right").style.width = '50%';
  document.getElementById("Right").style.transitionDuration = '1s';
  document.getElementById("Suport-right").style.display = 'none';
  document.getElementById("Left").style.zIndex = '1';
  document.getElementById("Right").style.zIndex = '1';
  document.getElementById("Github").style.opacity = '1';
  document.getElementById("Linkedin").style.opacity = '1';
}