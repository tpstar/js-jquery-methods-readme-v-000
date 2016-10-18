'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass("iAmFancy");
}

function addText(string) {
  return $('p:nth-child(2)').append(string);
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage(string) {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(sel) {
  return $(sel).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
