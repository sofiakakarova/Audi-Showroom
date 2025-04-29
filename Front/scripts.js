// Функція "Діалог з користувачем" (для загального використання)
function userDialog() {
    let question = prompt("Which Audi model are you interested in?");
    if (question === "RS7") {
        alert("Excellent choice! The RS7 is a powerful sports sedan.");
    } else if (question === "A5") {
        alert("Great! Audi A5 is stylish and efficient.");
    } else if (question === "Q8") {
        alert("Luxury choice! Audi Q8 is a premium crossover.");
    } else {
        alert("Thank you for your interest in Audi.");
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
// Перенаправляє на головну сторінку через 10 секунд
function redirectToHomePage() {
    setTimeout(() => {
        window.location.href = "index.html"; //  куди переходимо
    }, 10000); // 10 секунд затримки
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
      social.before(info); // вставляємо перед списком
    }
  }
  function removeLastSocialLink() {
    const socialLinks = document.querySelectorAll(".social-links li");
    if (socialLinks.length > 2) {
      socialLinks[socialLinks.length - 1].remove(); // Видалити тільки останній
    }
  }
