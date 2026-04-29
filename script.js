// БЛОК 1: стартовый экран

const startScreen = document.getElementById("startScreen");
const openSiteBtn = document.getElementById("openSiteBtn");
const siteContent = document.getElementById("siteContent");
const bgMusic = document.getElementById("bgMusic");



if(openSiteBtn && startScreen && siteContent){
  openSiteBtn.addEventListener("click", function(){
    siteContent.classList.add("show");
    startScreen.classList.add("hide");

    if(bgMusic){
      bgMusic.play().catch(error => {
        console.log("Музыка не запустилась:", error);
  });
}
});
}

document.addEventListener('DOMContentLoaded', () => {
  const heroButton = document.querySelector('.hero-button');
  const block2 = document.querySelector('.block-2');

  if (heroButton && block2) {
    heroButton.addEventListener('click', (e) => {
      e.preventDefault();
      block2.classList.add('visible');
      
    });
  }
});

// Появление блока 3 при скролле (можно настроить порог)
const block3 = document.querySelector('.block-3');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      block3.classList.add('visible');
      // observer.unobserve(block3); // если нужно показать только один раз
    }
  });
}, {
  threshold: 0.3  // 30% блока видно → запускаем анимацию
});

if (block3) {
  observer.observe(block3);
}



// БЛОК 4 — анимация при скролле

// БЛОК 4 — стабильная анимация при появлении

const block4 = document.querySelector(".block4");

if(block4){

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block4.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer.observe(block4);

}

// БЛОК 5

const block5 = document.querySelector(".block5");

if(block5){

const observer5 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block5.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer5.observe(block5);

}

// БЛОК 6

const block6 = document.querySelector(".block6");

if(block6){

const observer6 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block6.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer6.observe(block6);

}

// БЛОК 7

const block7 = document.querySelector(".block7");

if(block7){

const observer7 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block7.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer7.observe(block7);

}

// БЛОК 8

const block8 = document.querySelector(".block8");

if(block8){

const observer8 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block8.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer8.observe(block8);

}

// БЛОК 10 — анимация при скролле

const block10 = document.querySelector(".block10");

if(block10){
  const observer10 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        block10.classList.add("show");
      }
    });
  }, {
    threshold: 0.3
  });

  observer10.observe(block10);
}


const block10Form = document.getElementById("block10Form");

if (block10Form) {
  block10Form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(block10Form);

    try {
      const response = await fetch(block10Form.action, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        block10Form.reset();
        alert("Анкета отправлена");
      } else {
        alert("Ошибка отправки");
      }
    } catch (error) {
      alert("Ошибка соединения");
    }
  });
}

// БЛОК 11

const block11 = document.querySelector(".block11");

if(block11){

const observer11 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block11.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer11.observe(block11);

}