// Set active the element and remove the active class from the siblings
export function setActive(li) {
  [...li.parentElement.children].forEach((sibling) => sibling.classList.remove('active'));
  li.classList.add('active');
}

// Toggle a class for a specific element
export function toggleClass(el, className) {
  // eslint-disable-next-line no-unused-expressions
  el.classList.toggle(className);
}

// Touchable device detection
export function isTouchable() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
}

// set a Cookie with identifier, value and timestamp
export function setCookie(cname, cvalue, time) {
  const d = new Date();
  d.setTime(d.getTime() + time);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue}; ${expires}`;
}

// get Cookie with identifier
export function getCookie(cname) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function deleteCookie(cname) {
  // This function will attempt to remove a cookie from all paths.
  // eslint-disable-next-line no-restricted-globals
  const pathBits = location.pathname.split('/');
  let pathCurrent = ' path=';

  // do a simple pathless delete first.
  document.cookie = `${cname}=; expires=Thu, 01-Jan-1970 00:00:01 GMT;`;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pathBits.length; i++) {
    pathCurrent += ((pathCurrent.substr(-1) !== '/') ? '/' : '') + pathBits[i];
    document.cookie = `${cname}=; expires=Thu, 01-Jan-1970 00:00:01 GMT;${pathCurrent};`;
  }
}
