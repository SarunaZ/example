  var toggle_head = document.querySelector('.menu-toggle');
  var toggle_foot = document.querySelector('.menu-toggle-foot');
  var menus = document.querySelector('.menus');
  var menu_foot = document.querySelector('.footer-menu');
  var drop = document.querySelector('.dropdown');
  var first = document.querySelector('#first');

  toggle_head.addEventListener('click', toggles_head);
  toggle_foot.addEventListener('click', toggles_foot);
  first.addEventListener('click', drop_menu);


  /*----Responsive head menu toggle-----*/

  function toggles_head() {
      if (menus.classList) {
          menus.classList.toggle("show");
      } else {
          var menu = menus.className.split(" ");
          var i = menu.indexOf("show");
          if (i >= 0) {
              menu.splice(i, 1);
          } else
              menu.push("show");
          menus.className = menu.join(" ");
      }
  }

  /*----Responsive footer menu toggle-----*/

  function toggles_foot() {
      if (menu_foot.classList) {
          menu_foot.classList.toggle("show");
      } else {
          var ints = menu_foot.className.split(" ");
          var i = ints.indexOf("show");
          if (i >= 0) {
              ints.splice(i, 1);
          } else
              ints.push("show");
          menu_foot.className = ints.join(" ");
      }
  }

  /*----Drop-menu toggle-----*/

  function drop_menu() {
      if (drop.classList) {
          drop.classList.toggle("show");
      } else {
          var drops = drop.className.split(" ");
          var i = drops.indexOf("show");
          if (i >= 0)
              drops.splice(i, 1);
          else
              drops.push("show");
          drop.className = drops.join(" ");
      }

  }