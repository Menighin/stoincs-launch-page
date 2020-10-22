// Scroll to
const scrollToSection = (e, id) => {
  e.preventDefault();
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

// Toggle snout
const toggleSnout = () => {
  const actual = document.querySelector('.snout').style.display;
  if (actual === 'block') {
    document.querySelector('.snout').style.display = 'none';
    document.querySelector('.snout-loading').style.display = 'block';
  } else {
    document.querySelector('.snout').style.display = 'block';
    document.querySelector('.snout-loading').style.display = 'none';
  }
}

// Configuring carousel
var carousel = document.querySelector('.main-carousel');
var flkty = new Flickity( carousel, {
  cellAlign: 'left',
  autoPlay: true,
  pageDots: false,
  wrapAround: true,
  resize: false
});


// Configuring download link
const windowsDownload = 'https://github.com/Menighin/stoincs/releases/download/v0.0.2/Stoincs-Setup-0.0.2.exe';
const linuxDownload = 'https://github.com/Menighin/stoincs/releases/download/v0.0.2/Stoincs-0.0.2.x86_64.rpm';

const getOS = () => {
  const userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

const downloadLink = document.getElementById('download');
downloadLink.href = getOS() === 'Linux' ? linuxDownload : windowsDownload;

const downloadPlatform = document.getElementById('download-platform');
downloadPlatform.classList.add(getOS() === 'Linux' ? 'fa-ubuntu' : 'fa-windows');
