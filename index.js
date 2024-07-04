window.addEventListener("DOMContentLoaded", function () {
  //modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("show");
      modal.classList.remove("hide");
      document.body.style.overflow = "hidden";
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
    }
    render() {
      const elem = document.createElement("div");
      elem.innerHTML = `
      <div class="item">
        <img
          src=${this.src}
          alt=${this.alt}
        />
        <div class="item__discription">
          <h2>${this.title}</h2>
          <p>${this.descr}</p>
          <p class="price">${this.price} ₽/шт.</p>
          <button data-modal>Заказать</button>
        </div>
      </div>
      `;
      this.parent.append(elem);
    }
  }

  new MenuCard(
    "https://s3-alpha-sig.figma.com/img/de7b/1965/881e7dd5efdb8021eea24ded74566398?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SckXFW9~V4uAGii9e26VGpYtoRVXXYucqxa7VsBekgrIl2VdNFU8g~IqyDTnuo6mysjgMiNqCPbOB0cBe-WjjK1IeJF8j52Nx56x5ZvFL-WoQMGY9TFz6gpKfpV69MJan7hn5IDjYFWy~chtofeeUFogSBLX0-cJkgoNZEJv279HpKt16TqzMto6Uw5UrBOOTi0gxMGXuql8ybWf2-iEbrNAX1~v0DMMK8LNrvcwssmEPn5oDfmuAlaUq8YjeNQHqVLCaNpqAPgTn2AZeQjZ4D0D0vIqFBRw1~sbACE8sf43qOP5pE5iX4usiR9oCIeNePSZGEN76l2tNkFJNhpGrg__",
    "кремовый замок",
    "Кремовый замок",
    "Нежный крем любого цвета на выбор, вафельная основа",
    150,
    ".products__wrapper"
  ).render();

  new MenuCard(
    "https://s3-alpha-sig.figma.com/img/b288/5a34/2e3fec501c1ed161a51b03bf5183c364?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XK0rq7bwizXqF7noWhd9xv-sieljsrDVFVlQV7ytN2UgcgJqvaFqJ9yBiMavaDLuAOvGa1QIITDHHThr0Lfrw3jfuHmV6HHuWKYiDLhsjMAbxZjckpwBIxLEz6MSPbSkIOC7XNttS~KqWBzxoptE9wIRtt0A2POvXYgnn1Eeq2SBvTs-DFvHESeHwjJ6GF76uUJmRbHK2NRdMO~hwqOZWjMZCLhSeVt5Rg2ncXUrYXbyXXlb~wvwkk~95UpT0lyBqcDy7MdmwWShA-BXANwIIZFwklRK6BhYNeTbsNwqfKwlR5SMgJBMf~tSmSgMS7LcmiUuG~pjHBX6UODs6zM5hg__",
    "кремовый замок",
    "Кремовый замок",
    "Нежный крем любого цвета на выбор, вафельная основа",
    150,
    ".products__wrapper"
  ).render();

  new MenuCard(
    "https://s3-alpha-sig.figma.com/img/e6c3/7d19/89c5b8fb8a30a7f52fb6d3a415755d7c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-Eze8Q8~g~6tGvOyvAZJ3UqmAn42QC5UfTAtV5Ga5~zVAvKHd97mPbfqfIGqHeBueNrsA2QLzFOp7IRfP54LDhjC32VLMUhN3xom0kCxXcEJQr6Mqru3S8WNEH3AwRIJGti9fW7DefAQPf37gWIfpeazM34zZPxio~PWBhKkItnu2~~jpwzYK9rdxhDrqnT2t7UKlIpxFDT7k~fATBeya7qdqNmlLVGK2d28jrR6HIdwVr5JmIRRmlvjbHE53p6nDnGeJEulxhSQCRSuhuE08xDtJziRmcTD1vNPFqWS8EqR33q95KmNRrUbxRgTbQXDFneVI3XRurfQL3B-~iT0Q__",
    "кремовый замок",
    "Кремовый замок",
    "Нежный крем любого цвета на выбор, вафельная основа",
    150,
    ".products__wrapper"
  ).render();

  new MenuCard(
    "https://s3-alpha-sig.figma.com/img/46ec/ff26/cb5688f8b8688b8754dede9cdaaec5c2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDGlo1zMr6Ay~3YjmMOb07uTRwo7mHhegyVvGDdS5PaUvH4eHkselin317iPbdm5XkGZZISfQ2gMPCQLCtTk7Vez2aZQ~YlChvDOYNINL9bPf2V60b5Fe7AFzJt~on7KS2w0TOqn~2lkyR2Lzh8gtf6HByhW-N6zPmw0FxKhat~gSYy1sgvQlgqwkUQZ1IfZVVAxbdn9bRWsgSX3rXEGSAv782sX9oC6qmlds1Gwm7L1A-4FqxJVfi5krU0lCtLoq0MgfuFyFyOQmALDscW6eOwDhNetV-d4bJhfEUOBsx4A4Ys4UDYtkFyjDlXtO3QVHQU0fD6mqZGa4dlj-v3mlw__",
    "кремовый замок",
    "Кремовый замок",
    "Нежный крем любого цвета на выбор, вафельная основа",
    150,
    ".products__wrapper"
  ).render();

  new MenuCard(
    "https://s3-alpha-sig.figma.com/img/305d/f6c5/1d2929255f76bbc28037978dcbdbaa97?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VyK7Z0lbqXj2B~sTvG7l5lIc7D17bsHyWP23Hss56ypXhafg6ga~BTQveGxY6ZhHufU1XJW9aSep1t7qZRcjS8ZH0dfliNxTOeXgMI7t7Q80rY18uRSZXMk~FRkL9X9UohgXfzAuWRLRvQfKrO0Jzf0OeV6ehCnljPviyzeKOa8xJAqSDxGwqLwWb9UtEg7~dOgjg~eqdMJ-g7Tdc1zQHmHbw-z5SQq4PFwteF~nhS3JcXG8-n2oG1KNCmSOSz3lyICO4c43d0Cuac61-xqjWrPm2hVsCA7rtwhlWIjRCoTSxy6LGrcgD4zS4q64AiJNrOhOCtcDfcAzRKSJnoUHxQ__",
    "кремовый замок",
    "Кремовый замок",
    "Нежный крем любого цвета на выбор, вафельная основа",
    150,
    ".products__wrapper"
  ).render();

  new MenuCard(
    "https://s3-alpha-sig.figma.com/img/9fe3/6ea1/a31777a6a590887af44d18ed3bb3d227?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgXa5ODNI983vUBhocG9Ip~9Mbp2CSsGQcI1gzCxjWWT~HR1EYwEllFXtwJEhjakpd63SJ647p9TZExvAF4bJV7FacB8gRX51QdmkgJ8RBhFyloT2s8zfQswBXAvbHWfYsbEDGmNoGTb~QQhagJmsfpW-B8HT4OKZjAs1WzWyHyL0YLV95b8xfeMw9bJZSDReNsr3aL9HfNoTeytIHuCCg5TCBELLZtsU7ZxYhXyq5d8uoZxRy8q6jWSBE0KRxV8rafiOHWgXW9V2RAQ6bJsCdVuhqr9jE2r-oOm9vJv8IJfcbruy-1yissN9G5oYn9EIqA3Nu1HZDvTRZXSGOB8wQ__",
    "кремовый замок",
    "Кремовый замок",
    "Нежный крем любого цвета на выбор, вафельная основа",
    150,
    ".products__wrapper"
  ).render();
});
