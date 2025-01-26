let products = {
    data : [
        {
            title: "title : SQL in Easy Steps",
            author: "author : P JAGADEESH",
            subject: "Coding",
            image: "img/easysql.jpg" ,
        },
        {
            title: "title : Learning SQL",
            author: "author : Alan Beaulieu",
            subject: "Coding",
            image: "img/sql.jpg" ,
        },
        {
            title: "title : T SQL",
            author: "author : Itzik Ben-Gan",
            subject: "Coding",
            image: "img/tsql.jpg" ,
        },
        {
            title: "title : A Briefer History of Time",
            author: "author : Stephen Hawking",
            subject: "Science",
            image: "img/sh.jpg" ,
        },
        {
            title: "title : The Philosophy and Practise of Science",
            author: "author : David B. Teplow",
            subject: "Science",
            image: "img/ps.jpg" ,
        },
        {
            title: "title : Horrowitz Horror",
            author: "author : Anthony Horowitz",
            subject: "Crime",
            image: "img/ah.jpg" ,
        },
        {
            title: "title : A Better Quality Murder",
            author: "author : Ann Granger",
            subject: "Crime",
            image: "img/abqm.jpg" ,
        },
        {
            title: "title : Holly",
            author: "author : Stephen King",
            subject: "Horror",
            image: "img/holly.jpg" ,
        },
        {
            title: "title : Harry Potter and the Deathly Hallows",
            author: "author : J.K. Rowling",
            subject: "Fantasy",
            image: "img/harry.jpg" ,
        },
        {
            title: "title : Horseman",
            author: "author : Christina Henry",
            subject: "Horror",
            image: "img/horseman.jpg" ,
        },
        {
            title: "title : Near The Bone",
            author: "author : Christina Henry",
            subject: "Horror",
            image: "img/nearthebone.jpg" ,
        },
        {
            title: "title : How to win friends and influence people",
            author: "author : LEHAN FAYAZ",
            subject: "Fantasy",
            date:  "2002-02-02",
            image: "img/htw.jpeg" ,
        },
        {
            title: "title : Beast Quest: The Fire Dragon",
            author: "author : Adam Blade",
            subject: "Fantasy",
            image: "img/beast.jpg" ,
        },
        {
            title: "title : Solo Levelling: Volume 1",
            author: "author : Chugong",
            subject: "Fantasy",
            image: "img/solo.jpg" ,
        },
        {
            title: "title : Rock Paper Killers",
            author: "author : Alexia Mason",
            subject: "Fantasy",
            image: "img/rpk.jpg" ,
        },
    ],
};

for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.subject,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("title");
    title.innerText = i.title.toUpperCase();
    container.appendChild(title);

    let author = document.createElement("h6");
    author.classList.add("author");
    author.innerText = i.author.toUpperCase();
    container.appendChild(author);

    let sub = document.createElement("h6");
    sub.classList.add("sub");
    sub.innerText = i.subject.toUpperCase();
    container.appendChild(sub);

    let date = document.createElement("h6");
    date.classList.add("date");
    date.innerText = i.date.toUpperCase();
    container.appendChild(date);

    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });

  window.onload = () => {
    filterProduct("all");
  };
