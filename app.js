const input = document.querySelector('input');
const shorten = document.querySelector('.shorten');
const lists = document.querySelector('.lists');

shorten.addEventListener('click', shortenLink);


function shortenLink(e) {
  const link = input.value;

  if (link === '') {
    input.style.border = '1px solid red';
    input.classList.add('red');
    alert("Insert link");
  } else {
    input.classList.remove('red');
    input.style.border = 'unset';

    fetch('https://api.shrtco.de/v2/shorten', {
      method: 'POST',

      body: JSON.stringify({
        "long_url": link,
        "domain": ""
      })
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      // console.log(data);
      createLink(data.id, link);
    }).catch(function (err) {
      console.log(err);

    })
  }

  function createLink(line, mylink) {
    // const link = input.value;

    const listDiv = document.createElement('div');
    listDiv.classList.add('list');

    const long = document.createElement('div');
    long.classList.add('long-link')
    long.textContent = mylink;
    listDiv.appendChild(long)
    // add longlink to local storage
    // saveMyLinks(mylink);

    const short = document.createElement('p');
    short.classList.add('short-link')
    short.innerText = line;
    listDiv.appendChild(short);
    //add shortlink to local storage
    // saveMyLinks(mylink, line);

    const btn = document.createElement('button')
    btn.classList.add('copy-link')
    btn.innerText = 'Copy';
    listDiv.appendChild(btn);

    lists.appendChild(listDiv)
  }
   }

   

  //hamburger menu animation
  function myFunction(x) {
    x.classList.toggle("change");
  }
  // hamburger menu//
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach(n => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
