'use strict';

function getRandomBooks() {
    return [
        {
            id: 1,
            img: 'https://picsum.photos/200/300?random=1'
        },
        {
            id: 55,
            img: 'https://picsum.photos/200/300?random=2'
        },
        {
            id: 9,
            img: 'https://picsum.photos/200/300?random=3'
        },
        {
            id: 27,
            img: 'https://picsum.photos/200/300?random=4'
        },
        {
            id: 5,
            img: 'https://picsum.photos/200/300?random=5'
        },
        {
            id: 20,
            img: 'https://picsum.photos/200/300?random=6'
        },
        {
            id: 37,
            img: 'https://picsum.photos/200/300?random=7'
        },
        {
            id: 31,
            img: 'https://picsum.photos/200/300?random=8'
        },
    ];
}
/*<div>
    <img src="https://picsum.photos/200/300?random=1">
    <a href="#">Читать</a>
</div>*/
function addRandomBooks(where, books){
    for (let book of books) {
        let bookDiv = document.createElement("div");
        bookDiv.innerHTML = `
            <img src="${book.img}">
            <a href="one-book.html?id=${book.id}">Читать</a>
        `;
        where.append(bookDiv);
    }
}
addRandomBooks(document.querySelector(".random"), getRandomBooks());

function getBooksByGenre() {
    return [
        {
            genreName: "Жанр 1",
            books: [
                {
                    id: 8,
                    title: "Lorem ipsum",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                        "optio quae quod quos repudiandae rerum, tempore",
                    img: "https://picsum.photos/200/300?random=8"
                },
                {
                    id: 10,
                    title: "Aliquam consequatur",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                        "ea fugit inventore laudantium natus",
                    img: "https://picsum.photos/200/300?random=5"
                },
                {
                    id: 34,
                    title: "Laudantium",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                        "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                        "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                    img: "https://picsum.photos/200/300?random=2"
                }
            ]
        },
        {
            genreName: "Жанр 2",
            books: [
                {
                    id: 4,
                    title: "Necessitatibus",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                        " nulla optio quae quod quos repudiandae rerum, tempore",
                    img: "https://picsum.photos/200/300?random=9"
                },
                {
                    id: 13,
                    title: "Nulla optio quae quod",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                        "fugit inventore laudantium natus",
                    img: "https://picsum.photos/200/300?random=10"
                },
                {
                    id: 59,
                    title: "Non nulla",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                        "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                        " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                    img: "https://picsum.photos/200/300?random=11"
                }
            ]
        }
    ]
}


function addByGenre(where, byGenre) {
    for (let genre of byGenre) {
        // создание секции
        section.classList.add("flex-row", "wrap");

        title.innerText = `Книги из жанра ${genre.genreName}`;
        // создание заголовка секции
        // добавление заголовка в секцию
        for (let book of genre.books) {
            // создание div
            // наполнение div элементами через innerHTML
        }
    }
}

