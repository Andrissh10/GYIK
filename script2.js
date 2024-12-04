document.querySelectorAll('.faq-btn').forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');  // A nyíl elemet keresem

        // Ha az aktuális válasz már látható
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.style.padding = "0 10px"; // Visszaállítjuk az alap paddingot
          content.style.visibility = "hidden"; // Elrejtjük
          arrow.style.transform = "rotate(0deg)"; // Lefelé mutató nyíl
        } else {
          // Minden válasz bezárása
          document.querySelectorAll('.faq-content').forEach(otherContent => {
            otherContent.style.maxHeight = null;
            otherContent.style.padding = "0 10px"; // Alap padding visszaállítása
            otherContent.style.visibility = "hidden"; // Elrejtjük a többi választ
          });

          // Az aktuális válasz kinyitása
          content.style.maxHeight = content.scrollHeight + "px"; // Az elem tényleges magassága
          content.style.padding = "10px"; // Animálni a paddingot
          content.style.visibility = "visible"; // Láthatóvá válik
          arrow.style.transform = "rotate(180deg)"; // Felfelé mutató nyíl
        }

        button.classList.toggle('active');
      });
    });
