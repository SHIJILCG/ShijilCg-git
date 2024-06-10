class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem3.innerHTML = "Mouse button pressed";
          break;
        case 'mouseup':
          elem3.innerHTML += "...and released.";
          break;
      }
    }
  }

  let menu = new Menu();

  elem3.addEventListener('mousedown', menu);
  elem3.addEventListener('mouseup', menu);