// Функція "Діалог з користувачем" (для загального використання)
function userDialog() {
    let validModels = ["RS7", "A5", "Q8"];
    let question;

    do {
        question = prompt("Which Audi model are you interested in? (RS7, A5, Q8)");
    } while (!validModels.includes(question));

    if (question === "RS7") {
        alert("Excellent choice! The RS7 is a powerful sports sedan.");
    } else if (question === "A5") {
        alert("Great! Audi A5 is stylish and efficient.");
    } else if (question === "Q8") {
        alert("Luxury choice! Audi Q8 is a premium crossover.");
    }
}
// Функція виведення інформації про розробника
function showDeveloperInfo(lastName, firstName, position = "Developer") {
    alert(`Developer Info:\nLast Name: ${lastName}\nFirst Name: ${firstName}\nPosition: ${position}`);
}


// Функція порівняння цін обраних авто
function compareCarPrices() {
    const car1Price = parseInt(document.getElementById('car1').value);
    const car2Price = parseInt(document.getElementById('car2').value);

    if (car1Price > car2Price) {
        alert(`The first car is more expensive: $${car1Price}`);
    } else if (car2Price > car1Price) {
        alert(`The second car is more expensive: $${car2Price}`);
    } else {
        alert("Both cars have the same price.");
    }
}
// Змінює фон сторінки на 30 секунд і повертає назад
function changeBackgroundFor30Seconds() {
    const originalBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#2c2c2c"; // сірий фон
    setTimeout(() => {
        document.body.style.backgroundColor = originalBackground;
    }, 30000); // через 30 секунд
}
function changeTitleById() {
    const title = document.getElementById("gradient-text");
    if (title) {
        title.textContent = "📞 Choose your the best!";
    }
}
function highlightAllLinks() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.style.color = "#beff";
        link.style.textDecoration = "underline";
    });
}
//Додає HTML всередину елемента
function addNewOpeningHours() {
    const list = document.querySelector(".opening-hours");
    if (list) {
      list.innerHTML += `<li style="color:#b37eff">Holiday Special: 12:00 – 16:00</li>`;
    }
  }
  //Замінює увесь елемент
  function replaceEmailBlock() {
    const email = document.querySelector(".contact-info p:nth-child(2)");
    if (email) {
      email.outerHTML = `<p><strong>📧 Email:</strong> <a href="mailto:info@audi-kyiv.ua">info@audi-kyiv.ua</a></p>`;
    }
  }
  //Змінює лише текст (без HTML)
  function updatePhoneText() {
    const phone = document.querySelector(".contact-info p:nth-child(3)");
    if (phone) {
      phone.textContent = "📞 Phone: Updated: +380 99 999 99 99";
    }
  }
  //Змінює вміст текстового вузла напряму
  function updatePageTitleNode() {
    const heading = document.getElementById("contact-title");
    if (heading && heading.firstChild) {
      heading.firstChild.nodeValue = "📩 Reach Out to Us 🛠️";
    }
  }
//createElement
  function addCustomNote() {
    const note = document.createElement("p");
    const text = document.createTextNode("📌 Note: Audi hotline is available 24/7.");
    note.append(text);
    document.querySelector(".contact-container").append(note);
  }
  
  function insertImportantNotice() {
    const notice = document.createElement("p");
    notice.textContent = "⚠️ Important: Please bring your ID!";
    document.querySelector(".contact-container").prepend(notice);
  }
  
  function addAfterMap() {
    const map = document.querySelector(".map-container");
    const msg = document.createElement("p");
    msg.textContent = "📍 We are located in the city center!";
    if (map) {
      map.after(msg);
    }
  }
  function insertSocialNote() {
    const social = document.querySelector(".social-links");
    if (social) {
      const info = document.createElement("p");
      info.textContent = "🔗 Follow us on social media for updates!";
      social.before(info);
    }
  }
  
  function removeLastSocialLink() {
    const socialLinks = document.querySelectorAll(".social-links li");
    if (socialLinks.length > 2) {
      socialLinks[socialLinks.length - 1].remove();
    }
  }
  // Функція для демонстрації використання document.write()
function showTemporaryMessage() {
    document.write("<h2 style='color: #5618acf0; text-align: center;'>Welcome to our Contact Page!</h2>");
  }
  // Показ додаткової інформації при натисканні на LEARN MORE
  function revealInfo() {
    const info = document.getElementById("more-info");
    if (info) {
        info.style.display = "block";
    }
}
// === 🎯 Обробники подій для cataloge.html ===

// Обробник наведення на заголовок
function onHeadingHover(event) {
  event.currentTarget.style.color = "#ffcc00"; // Жовтий при наведенні
  console.log("Hovered:", event.currentTarget.textContent);
}

// Обробник відведення миші
function onHeadingLeave(event) {
  event.currentTarget.style.color = "white"; // Повернення білого
}

// Об'єкт з handleEvent для обробки кліку
const headingHandler = {
  isLarge: false, // Стан — чи збільшено заголовок

  handleEvent(event) {
    if (event.type === "click") {
      alert("You clicked on the catalog heading!");
      console.log("Current Target:", event.currentTarget);

      // 🔁 Перемикаємо розмір заголовка
      if (this.isLarge) {
        event.currentTarget.style.fontSize = "40px"; // звичайний
      } else {
        event.currentTarget.style.fontSize = "70px"; // збільшений
      }

      this.isLarge = !this.isLarge; // змінюємо стан
    }
  }
};

// addEvenListener.Функція ініціалізації подій на сторінці cataloge.html
function initCatalogPageEvents() {
  const heading = document.getElementById("gradient-text");
  if (heading) {
      heading.addEventListener("mouseover", onHeadingHover);   // Наведення
      heading.addEventListener("mouseout", onHeadingLeave);    // Відведення
      heading.addEventListener("click", headingHandler);       // Клік
  }
}



// Викликаємо ініціалізацію ТІЛЬКИ на сторінці cataloge.html
if (window.location.pathname.includes("cataloge.html")) {
  window.addEventListener("DOMContentLoaded", initCatalogPageEvents);
}
//Видалити об’єкт, використовуючи removeEventListener
document.addEventListener("DOMContentLoaded", () => {
  const removeBtn = document.getElementById("remove-events");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      const heading = document.getElementById("gradient-text");
      if (heading) {
        heading.removeEventListener("mouseover", onHeadingHover);
        heading.removeEventListener("mouseout", onHeadingLeave);
        heading.removeEventListener("click", headingHandler);
        alert("Обробники подій було видалено!");
      }
    });
  }
});
// 🎯 Обробник для підсвічування пунктів соцмереж
document.addEventListener("DOMContentLoaded", () => {
  const socialList = document.querySelector(".social-links");

  if (socialList) {
    socialList.onclick = function (event) {
      const clicked = event.target;

      // Перевірка: клікаєм саме по <li> або <a> в <li>
      const li = clicked.closest("li");

      if (li && socialList.contains(li)) {
        // Видаляємо попереднє підсвічування
        const allItems = socialList.querySelectorAll("li");
        allItems.forEach(item => item.classList.remove("highlight"));

        // Додаємо підсвічування поточному
        li.classList.add("highlight");

        // Тематичне повідомлення
        alert(`🔗 Ви обрали: ${li.textContent.trim()}`);
      }
    };
  }
});
// властивість
document.addEventListener("DOMContentLoaded", () => {
  const watchBtn = document.getElementById("watch-btn");

  if (watchBtn) {
    // Призначення обробника через властивість
    watchBtn.onclick = function () {
      alert("🎬 Playing Audi RS7 trailer...");
    };
  }
});

// 🎯 Behavior-поведінка з data-action
document.addEventListener("DOMContentLoaded", () => {
  const mainMenu = document.querySelector("#main-menu");

  if (mainMenu) {
    mainMenu.onclick = function (event) {
      const button = event.target.closest(".btn");

      if (!button) return;

      const action = button.dataset.action;

      switch (action) {
        case "offers":
          alert("🎁 Check out our latest Audi offers!");
          break;
        case "configure":
          alert("🛠️ Start configuring your dream Audi now.");
          break;
        case "meeting":
          alert("📅 Booking a meeting with our consultant...");
          break;
      }
    };
  }
});


// Події наведення миші на зображення в таблиці автомобілів
document.addEventListener("DOMContentLoaded", () => {
  const carImages = document.querySelectorAll(".car-table img");

  carImages.forEach(img => {
    // mouseover — зміна стилю при наведенні
    img.addEventListener("mouseover", (event) => {
      event.target.style.border = "3px solid #ffcc00"; // виділення
      console.log("Mouse over:", event.target);        // event.target — елемент, над яким відбулась подія
    });

    // mouseout — повернення до стандартного стилю
    img.addEventListener("mouseout", (event) => {
      event.target.style.border = "none";
      console.log("Mouse out to:", event.relatedTarget); // event.relatedTarget — куди перейшли після миші
    });
  });
});



// Отримуємо всі елементи, які мають клас 'puzzle-piece'
const pieces = document.querySelectorAll('.puzzle-piece');

// Для кожного пазлу додаємо обробник події mousedown
pieces.forEach(piece => {
  piece.addEventListener('mousedown', startDrag);
});

// Змінна для відстеження активного (перетягуваного) елемента
let draggedPiece = null;

// Функція, яка запускається при натисканні миші на елемент
function startDrag(e) {
  draggedPiece = e.target; // зберігаємо, який саме елемент перетягується
  draggedPiece.style.position = 'absolute'; // ставимо абсолютне позиціювання
  draggedPiece.style.zIndex = 1000;         // елемент буде поверх усіх інших

  // Встановлюємо початкову позицію
  moveAt(e.pageX, e.pageY);

  // Функція переміщення елемента за координатами миші
  function moveAt(x, y) {
    draggedPiece.style.left = x - draggedPiece.offsetWidth / 2 + 'px';
    draggedPiece.style.top = y - draggedPiece.offsetHeight / 2 + 'px';
  }

  // Поки рухається мишка — рухаємо елемент
  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  // Підписка на подію переміщення миші
  document.addEventListener('mousemove', onMouseMove);

  // Коли кнопку миші відпускають — завершення перетягування
  draggedPiece.onmouseup = function(e) {
    // Видаляємо обробник руху
    document.removeEventListener('mousemove', onMouseMove);
    draggedPiece.onmouseup = null;

    // Визначаємо, чи елемент знаходиться над якоюсь з dropzone
    const dropzones = document.elementsFromPoint(e.clientX, e.clientY)
      .filter(el => el.classList.contains('dropzone'));

    // Якщо елемент наведено на пусту зону — вставляємо його туди
    if (dropzones.length > 0 && dropzones[0].children.length === 0) {
      dropzones[0].appendChild(draggedPiece);       // переносимо елемент у зону
      draggedPiece.style.position = 'static';       // прибираємо абсолютне позиціювання
    } else {
      // Інакше — повертаємо назад або залишаємо як є
      draggedPiece.style.position = 'static';
    }

    // Обнуляємо змінну перетягуваного елемента
    draggedPiece = null;
  };
}




