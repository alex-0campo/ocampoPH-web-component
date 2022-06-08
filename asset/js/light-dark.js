// default: light-mode page => toggle to dark-mode page 
// default: dark-mode page => toggle to light-mode page

if (window.matchMedia) {
  let match = window.matchMedia('(prefers-color-scheme: dark)')

  //// toggle light|dark mode classes ////
  function toggleLightDark(mql, target, classNames) {
    if (mql) {
      classNames.forEach(name => {
        // toggle ****-light classes to ****-dark
        if (name.endsWith('-light')) {
          // set navClassNames to dark-mode
          target.classList.replace(name, name.replace('-light', '-dark'))
        }
      })
    } else {
      classNames.forEach(name => {
        if (name.endsWith('-dark')) {
          // set footerClassNames to dark-mode
          target.classList.replace(name, name.replace('-dark', '-light'));
        }
      })
    }
  }

  const nav = document.getElementById('header-nav');
  const footer = document.getElementById('footer');
  const navClassNames = nav.classList;
  const footerClassNames = footer.classList;  

  toggleLightDark(match.matches, nav, navClassNames)
  toggleLightDark(match.matches, footer, footerClassNames)
  // toggleLightDark(match.matches, footerLi, footerClassNames)

  const footerLi = document.querySelectorAll('footer>ul>li');
  // set footer's a tags light-dark mode
  footerLi.forEach((name) => {
    // console.log(name.classList);
    // toggleLightDark(match.matches, name, name.classList)
  })

  /* toggle light--dark mode on system change */
  match.addEventListener('change', () => {
    toggleLightDark(match.matches, nav, navClassNames);
    toggleLightDark(match.matches, footer, footerClassNames);
  })

  
}
