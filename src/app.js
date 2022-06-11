// Take data from database
import data from '../db.json' assert {type: 'json'}
// Check data existed
console.log(data)
// Lấy địa chỉ kho hàng cần hiện thị
const bookListElement = document.querySelector('#book-list')
let _content = ""

data.forEach(function(book) {
    _content = _content + /*html*/`
    <div class = "container m-auto mt-10">
    <a href="./detail/index.html?id=${book.id}">
        <img class="max-h-[200px] w-auto" src="${book.images[0].base_url}" alt="">
       <div class="mt-1"> 
       <p>  <img src="images/Rectangle3.png" alt=""></p>
       <p class="text-yellow-500">Giao hàng hỏa tốc</p>
       <p>${book.name}</p>
       <p>${book.rating_average}</p>
       <p>${book.quantity_sold?.text}</p>
       <p class="text-red-500 font-bold hover:text-red-800">Giá :${book.list_price}</p>
       </div>
       </a>
    </div>
    `
})

bookListElement.innerHTML = _content