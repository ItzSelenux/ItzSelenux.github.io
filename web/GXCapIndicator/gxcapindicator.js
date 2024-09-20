let isCapsLockOn = false;
let isNumLockOn = false;

function updateCapsLockStatus() {
  const cap0 = document.querySelector('.caps0');
  const cap1 = document.querySelector('.caps1');
  const capsStatus = document.getElementById('capsStatus');

  if (isCapsLockOn) {
    capsStatus.textContent = 'Caps Lock status: ON';
    cap0.style.display = 'none';
    cap1.style.display = 'block';
  } else {
    capsStatus.textContent = 'Caps Lock status: OFF';
    cap0.style.display = 'block';
    cap1.style.display = 'none';
  }
}

function updateNumLockStatus() {
  const num0 = document.querySelector('.num0');
  const num1 = document.querySelector('.num1');
  const numStatus = document.getElementById('numStatus');

  if (isNumLockOn) {
    numStatus.textContent = 'Num Lock status: ON';
    num0.style.display = 'none';
    num1.style.display = 'block';
  } else {
    numStatus.textContent = 'Num Lock status: OFF';
    num0.style.display = 'block';
    num1.style.display = 'none';
  }
}

function initializeCapsLockListener() {
  const input = document.getElementById('inputText');
  const initialCapsLockState = (navigator.userAgent.match(/Windows/i) ? true : false) ^ document.querySelector('input').value.match(/[A-Z]/);
  isCapsLockOn = initialCapsLockState;
  updateCapsLockStatus();

  input.addEventListener('keydown', function(event) {
    if (event.key === 'CapsLock') {
      isCapsLockOn = !isCapsLockOn;
      updateCapsLockStatus();
    }
  });
}

function initializeNumLockListener() {
  const input = document.getElementById('inputText');
  const initialNumLockState = (navigator.userAgent.match(/Windows/i) ? true : false) ^ document.querySelector('input').value.match(/\d/);
  isNumLockOn = initialNumLockState;
  updateNumLockStatus();

  input.addEventListener('keydown', function(event) {
    if (event.key === 'NumLock') {
      isNumLockOn = !isNumLockOn;
      updateNumLockStatus();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  function checkAndInitialize() {
    if (document.querySelector('.ghbtn')) {
      initializeCapsLockListener();
      initializeNumLockListener();
      clearInterval(intervalID);
    }
  }
  var intervalID = setInterval(checkAndInitialize, 100);
});