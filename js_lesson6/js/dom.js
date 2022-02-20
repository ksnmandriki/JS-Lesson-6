console.log("Javascript - лучший язык программирования!");
//<!--1. Поменяйте приветствие с "Привет Всем!" на "Привет Виталий Валентинович!".-->
window.addEventListener("load", function () {
  //function getNewText() {
  document.getElementById("greeting").innerHTML =
    "Привет Виталий Валентинович!";
  //};
  //getNewText();

  //<!--2.  Установите фоновый цвет для каждого `<li>` на `yellow`. -->

  // function colorForLi() {
  let paragraphs = document.querySelectorAll("li");
  for (let i = 0, length = paragraphs.length; i < length; i++) {
    paragraphs[i].style.backgroundColor = "yellow";
  }
  // };
  // colorForLi();

  //<!-- 3. Создайте тег изображения, установите его атрибут `src` на`http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, и вложите в div с идентификатором `#greeting`.-->

  // createTegImg = () => {
  let img = document.createElement("img");
  img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  img.id = "picture";
  img.style.height = "100px";
  document.getElementById("greeting").appendChild(img);
  // };
  //<!--// 7 Добавьте класс selected к <li> при щелчке по нём. Удалите его из любых других li.-->

  //<!--8 Измените изображение, чтобы оно было последним выбранным продуктом питания.-->

  let objectImg = [
    "images/milk.jpg",
    "images/honey.jpg",
    "images/water.jpg",
    "images/wine.jpg",
    "images/beer.jpg",
  ];
  function lightForLi() {
    let list = document.querySelectorAll("li");
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        if ((active = this.parentNode.querySelector(".selected"))) {
          active.classList.remove("selected");
          this.classList.add("selected");
          document
            .querySelector("#addImg")
            .setAttribute("src", `${objectImg[i]}`);
        } else {
          this.classList.add("selected");
          document
            .querySelector("#addImg")
            .setAttribute("src", `${objectImg[i]}`);
        }
      };
    }
  }
  lightForLi();

  //<!-- 9 Когда на серый div наводится указатель мыши, он удаляется из DOM. -->

  deleteDiv = () => {
    const myNode = document.getElementById("ghosting");
    myNode.remove();
  };
  /**<!-- 10 Когда на оранжевый div наводится указатель мыши, его ширина удваивается.
    Когда мы уходим за пределы div, ширина возвращается к своему первоначальному размеру. -->*/
  addWidth = () => {
    const myNode = document.getElementById("resize");
    myNode.style.width = "400px";
  };

  returnWidth = () => {
    const myNode = document.getElementById("resize");
    myNode.style.width = "200px";
  };

  //<!--  11 Когда  кнопка Reset нажата - удалите класс `selected` из каждого `<li>` и измените изображение на `panic.jpg`.   -->
  delClassName = () => {
    document.querySelector(".selected").classList.remove("selected");
    //elem.className = "";
    //elem.removeAttribute('class');
    document.querySelector("#addImg").setAttribute("src", "images/panic.jpg");
  };

  // <!-- 4. Создайте и добавьте ul элемент в конец  body с классом "todo-items"-->

  function createTegUl() {
    let ul = document.createElement("ul");
    ul.id = "todo-items";
    ul.style.height = "100px";
    //ul.textContent = "sfsf";
    document.body.appendChild(ul);
  }
  createTegUl();

  /**<!-- 5 Пройдитесь по массиву `['приготовить кофе','съесть салатик','поменять подгузник ребёнку',
      'поехать на работу']` и создайте тег li для каждого элемента, например: `<li>приготовить кофе</li>`
    Добавьте каждый созданный ранее тег li в вашу конструкцию ul с классом "todo-items" -->
  <!-- 6. Добавьте каждый созданный ранее тег li в вашу конструкцию ul с классом "todo-items".-->*/

  let arrLi = [
    "приготовить кофе",
    "съесть салатик",
    "поменять подгузник ребёнку",
    "поехать на работу",
  ];
  let list = document.getElementById("todo-items");
  for (let i = 0; i < arrLi.length; i++) {
    let li = document.createElement("li");
    li.textContent = arrLi[i];
    list.append(li);
  }

  //<!-- 12 При нажатии клавиши 1, 2, 3, 4, 5, 6, 7, 8, 9 или 0 на странице появляется сообщение-->
  function addRect() {
    function moveRect(e) {
      switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          alert("Я НЕНАВИЖУ ЧИСЛААААА!");
          break;
      }
    }
    addEventListener("keydown", moveRect);
  }

  addRect();
});
