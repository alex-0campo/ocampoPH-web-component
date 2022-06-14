// toggle Light/Dark mode (classes)

if (window.matchMedia) {
  let match = window.matchMedia('(prefers-color-scheme: dark)');  

  /////////   toggle light/dark classes function   /////////
  function toggleLightDarkClass(mql, target, classNames) {
    if(mql) {
      // dark mode code block
      classNames.forEach(name => {
        // switch classes 'bg-light' => 'bg-dark' and 'text-dark => 'text-light'
        switch (name) {
          case 'navbar-light':
            target.classList.replace(name, 'navbar-dark');
            break;
          case 'bg-light':
            target.classList.replace(name, 'bg-dark');
            break;
          case 'text-dark':
            target.classList.replace(name, 'text-light');
            break;
          default:
            break;
        }
      })
    } else {  
      // light mode code block   
      classNames.forEach(name => {
        // switch classes 'bg-dark' => 'bg-light' and 'text-light => 'text-dark'
        switch (name) {
          case 'navbar-dark':
            target.classList.replace(name, 'navbar-light');
            break;
          case 'bg-dark':
            target.classList.replace(name, 'bg-light');
            break;
          case 'text-light':
            target.classList.replace(name, 'text-dark');
            break;
          default:
            break;
        }
      })
    }
  } // end toggleLightDarkClass() function

  // target navbar element
  const nav = document.getElementById('header-nav');
  const navClasses = nav.classList;
  toggleLightDarkClass(match.matches, nav, navClasses);

  // target footer element
  const footer = document.getElementById('footer');  
  const footerClasses = footer.classList;
  toggleLightDarkClass(match.matches, footer, footerClasses);

  // target main container element
  const mainContainer = document.getElementById('main-container');  
  const mainContClasses = mainContainer.classList;
  toggleLightDarkClass(match.matches, mainContainer, mainContClasses);


  ///////////////////////////////////////////////////
  //////// edit footer's a tags text classes ////////
  ///////////////////////////////////////////////////
  const footerUlLiA = document.querySelectorAll('footer>ul>li>a');
  
  //// footer>ul>li>a ////
  footerUlLiA.forEach((name) => {
    const nameClassNames = name.classList;
    toggleLightDarkClass(match.matches, name, nameClassNames);
  })

  const footerP = document.querySelector('footer>p');
  const footerPClassNames = footerP.classList;
  toggleLightDarkClass(match.matches, footerP, footerPClassNames);
  
  //////////////////////////////////////////////
  /* toggle light--dark mode on system change */
  //////////////////////////////////////////////
  match.addEventListener('change', () => {
    toggleLightDarkClass(match.matches, nav, navClasses);
    toggleLightDarkClass(match.matches, footer, footerClasses);
    toggleLightDarkClass(match.matches, mainContainer, mainContClasses);

    footerUlLiA.forEach((name) => {
      const nameClassNames = name.classList;
      toggleLightDarkClass(match.matches, name, nameClassNames);
    })

    toggleLightDarkClass(match.matches, footerP, footerPClassNames);

  })
}
