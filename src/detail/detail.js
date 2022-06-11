import data from "../../db.json" assert { type: "json" };

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const book = data.filter((book) => book.id == id);
console.log(book);
const bookListElement = document.querySelector("#book-list");
let _content = "";

book.forEach(function (id) {
  _content =
    _content +
    /*html*/ `
  <div class="max-w-sm mx-auto md:max-w-screen-xl">
  <div class=" md:flex mt-5">
  <div class="mt-1"> 
  <img class="w-full md:w-[490px]" src="${id.images[0].base_url}" alt="">
  <div class="hidden  md:flex md:justify-center">
  <img class="w-20" src="${id.images[0]?.small_url}" alt="">
  <img class="w-20" src="${id.images[1]?.small_url}" alt="">
  <img class="w-20" src="${id.images[2]?.small_url}" alt="">
  <img class="w-20" src="${id.images[3]?.small_url}" alt="">
  </div>
  
  <div class=" hidden md:block"> 
  <div class="flex items-center mt-20"> 
  <h3 class="text-xl">Chia sẻ:</h3>
   <div class="flex ml-2 ">
  <img class="mr-2" src="images/Frame-14.png" alt="">
  <img class="mr-2" src="images/Frame-15.png" alt="">
  <img class="mr-2" src="images/Frame-16.png" alt="">
  <img class="mr-2" src="images/Frame-15.png" alt="">
  <img class="mr-2 "src="images/Frame-16.png" alt="">
</div>
</div>

  </div>
  </div>
  <div class="w-full md:w-[450px]">
  <div class="flex grow">
  <p class="hidden md:block">Tác Giả :${id.authors[0].name}</p>
  <p class="ml-5 hidden md:block">${id.categories?.name}</p>
  </div>

  <p class="text-2xl md:text-3xl text-left">${id.name} </p>
  <div class="flex">
  <p class="flex mr-4 mt-3">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
           <path
             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
           <path
             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
           <path
             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
           <path
             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
           <path
             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
         </svg>
       <p class="mt-2">Xem các đánh giá | ${id.quantity_sold?.text} </p>
   </p>
   </div>
   <div class="md:bg-primary-2-1 mt-5 rounded-md md:w-[400px] h-[103px]">
   <div class="flex">
    <p class="text-4xl text-red-700 font-normal mt-3 ml-4">${id.list_price}đ
   </p>
   <p class="mt-7 ml-2 text-base text-gray-500 font-normal hidden md:block">${id.original_price}đ</p>
 <div class="hidden md:block"> 
 <div class="w-10 h-5 flex items-center justify-center mt-7 ml-2 bg-gray-300 rounded-sm border-2 border-red-600"> 
 <p class=" text-red-600 text-base ">-0%</p>
 </div>
 </div>
    </div>
    <div class="w-[281px] h-[29px] md:border rounded-sm mt-3 m-4 border-blue-400 text-center md:bg-blue-100">
    <p class="text-blue-800 text-base font-normal">Thưởng lên đến 7,31 ASA ≈ 3.969 Xu </p>
     </div>
    </div>
   <hr class="mt-4 hidden md:block">

   <div class="flex md:flex-col"> 
   <p class="mt-4 text-base md:text-xl font-normal">
   15 Mã Giảm Giá
   </p>
   <div class="mt-3 flex grow items-center ml-16 md:ml-0 md:mt-2md:"> 
   <button class="px-2 md:px-3 py-1 border-2 rounded text-blue-600 border-blue-600 mr-2">
   Giảm 10k
    </button>
    <button class="px-2 md:px-3 py-1 border-2 rounded text-blue-600 border-blue-600 mr-2">
    Giảm 20k
     </button>
     <button class="px-3 py-1 border-2 rounded text-blue-600 border-blue-600 mr-2 hidden md:block">
     Giảm 30k
      </button>
      <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
   </div>
   </div>
   <div>
   <input class="mt-4 block md:hidden" type="text" placeholder="Nhập địa chỉ giao hàng">
   </div>
   <hr class="mt-4 mb-4">
     <div class="hidden md:block"> 
     <div class="flex"> 
     <p>Giao đến
     Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
     - </p>
     </button>
     <button class="= text-blue-600 ml-2">
     Đổi địa chỉ
      </button>
     </div>
     </div>
      <hr class="mt-4 mb-4 hidden md:block">

     <div class="hidden md:block">  
     <div class="flex">
     <div class="w-[228px] h-[88px] border-2 border-gray-200 rounded-md mr-3">
     <div class="flex items-center ml-3">
       <img class="mr-2 h-4" src="images/Rectangle3.png" alt=""> -
       <p class="text-yellow-500 text-sm ">Trước 18:00 hôm nay</p>
     </div>
     <p class="ml-3">19.000đ</p>
     <div class="w-[204px] h-[25px] border rounded-md mt-1 m-4 text-center bg-blue-50 ml-2">
       <p class="text-blue-800 text-sm font-normal">Freeship 100% chỉ với 34 ASA</p>
        </div>
   </div>
   <div class="w-[228px] h-[88px] border-2 border-gray-200 rounded-md">
     <div class="flex items-center ml-3">
       <img class="mr-2 h-4" src="images/Rectangle3.png" alt=""> -
       <p class="text-yellow-500 text-sm ">Trước 18:00 hôm nay</p>
     </div>
     <p class="ml-3">19.000đ</p>
     <div class="w-[204px] h-[25px] border rounded-md mt-1 m-4 text-center bg-blue-50 ml-2">
       <p class="text-blue-800 text-sm font-normal">Freeship 100% chỉ với 34 ASA</p>
        </div>
   </div>
     </div>
     </div>
      <hr class="mt-4 mb-4 hidden md:block">
      <div class="hidden md:block"> 
        <p class="text-xl">Số Lượng</p>
        <input type="number" class="border-2 mt-1 border-gray-200 w-[125px]" placeholder="Nhập số lượng">
        <button class="w-[300px] h-[48px] flex items-center justify-center bg-red-500 text-white text-lg  rounded mt-4">Chọn mua</button>
      </div>
  </div>
  <div class="mt-24 pl-10 hidden md:block">
  <div class="flex">
  <img class="mr-2 w-12" src="../../src/detail/images/tiki.png" alt="">
  <div>
    <p class="font-medium">Tiki Trading</p>
    <img class="mb-2" src="images/tiki2.png" alt="">
  </div>
</div>
     <div class="flex"> 
     <div> 
     <p class="font-medium text-lg ml-10 mt-3">${id.rating_average}/5</p>
     <p class="text-sm text-gray-400 ml-11">4.7tr+</p>

     <button class="px-3 py-1 border-2 rounded text-blue-600 border-blue-600 mr-2 ml-4 mt-2">
     Xem Shop
      </button>
     </div>
     <div> 
     <p class="font-medium text-lg ml-8 mt-3">${id.current_seller.id}</p>
     <p class="text-sm text-gray-400 ml-8">Theo Dõi</p>

     <button class="px-3 py-1 border-2 rounded text-blue-600 border-blue-600 mr-2 ml-4 mt-2">
     Theo Dõi
      </button>
     </div>
     </div>
     <hr class="mt-4 mb-4">
     <div class="grid grid-cols-3 gap-1"> 
     <div class="text-center"> 
     <img class="ml-7" src="images/icon1.png" alt="">
     <p>Hoàn tiền <br>
     111%
     nếu <br> hàng giả</p>
    </div>
    <div class="text-center"> 
    <img class="ml-7" src="images/icon2.png" alt="">
    <p>Mở hộp <br>
    kiểm tra <br>
    nhận hàng</p>
   </div>
   <div class="text-center"> 
   <img class="ml-7" src="images/icon3.png" alt="">
   <p>Đổi trả trong <br>
   30 ngày <br>
   nếu sp lỗi</p>
  </div>
     </div> 
     <div class="flex w-[250px] h-[75px] border-2 border-gray-200 rounded-md ml-3 mt-6"> 
     <div class="mt-2 ml-3">  <p class="font-medium text-lg">8 nhà bán khác</p>
     <p class="text-sm text-gray-400 ml-8 mt-2"> ${id.original_price}đ</p></div>
    <div>
    <button class="px-3 py-1 border-2 rounded text-blue-600 border-blue-600 mr-2 ml-4 mt-4">
    So Sánh
     </button>
    </div>
     </div>
  </div>
  </div>
  </div>
  <div class="mt-10 hidden md:block"> 
  <p class="text-2xl font-normal">Sản Phẩm Tương Tự </p> 
  <div class="grid grid-cols-5 gap-10"> 
  <div class = "container m-auto mt-10">

     <img class="max-h-[200px] w-auto" src="${id.images[0].base_url}" alt="">
    <div class="mt-1"> 
    <p>  <img src="images/Rectangle3.png" alt=""></p>
    <p class="text-yellow-500">Giao hàng hỏa tốc</p>
    <p>${id.name}</p>
    <p>${id.rating_average}</p>
    <p>${id.quantity_sold?.text}</p>
    <p class="text-red-500 font-bold hover:text-red-800">Giá :${id.list_price}</p>
    </div>
   
 </div>
 <div class = "container m-auto mt-10 ">

     <img class="max-h-[200px] w-auto" src="${id.images[0].base_url}" alt="">
    <div class="mt-1"> 
    <p>  <img src="images/Rectangle3.png" alt=""></p>
    <p class="text-yellow-500">Giao hàng hỏa tốc</p>
    <p>${id.name}</p>
    <p>${id.rating_average}</p>
    <p>${id.quantity_sold?.text}</p>
    <p class="text-red-500 font-bold hover:text-red-800">Giá :${id.list_price}</p>
    </div>
 </div>
 <div class = "container m-auto mt-10">

     <img class="max-h-[200px] w-auto" src="${id.images[0].base_url}" alt="">
    <div class="mt-1"> 
    <p>  <img src="images/Rectangle3.png" alt=""></p>
    <p class="text-yellow-500">Giao hàng hỏa tốc</p>
    <p>${id.name}</p>
    <p>${id.rating_average}</p>
    <p>${id.quantity_sold?.text}</p>
    <p class="text-red-500 font-bold hover:text-red-800">Giá :${id.list_price}</p>
    </div>
   
 </div>
 <div class = "container m-auto mt-10">

     <img class="max-h-[200px] w-auto" src="${id.images[0].base_url}" alt="">
    <div class="mt-1"> 
    <p>  <img src="images/Rectangle3.png" alt=""></p>
    <p class="text-yellow-500">Giao hàng hỏa tốc</p>
    <p>${id.name}</p>
    <p>${id.rating_average}</p>
    <p>${id.quantity_sold?.text}</p>
    <p class="text-red-500 font-bold hover:text-red-800">Giá :${id.list_price}</p>
    </div>
   
 </div>
 <div class = "container m-auto mt-10">

     <img class="max-h-[200px] w-auto" src="${id.images[0].base_url}" alt="">
    <div class="mt-1"> 
    <p>  <img src="images/Rectangle3.png" alt=""></p>
    <p class="text-yellow-500">Giao hàng hỏa tốc</p>
    <p>${id.name}</p>
    <p>${id.rating_average}</p>
    <p>${id.quantity_sold?.text}</p>
    <p class="text-red-500 font-bold hover:text-red-800">Giá :${id.list_price}</p>
    </div>
   
 </div>
  </div>
  </div> 
  <div class="mt-8">
  <h2 class="text-2xl font-normal">Thông tin chi tiết</h2>
<div class="flex mt-6">
  <div>
    <div class=" md:bg-gray-200 py-3 w-[150px] md:w-[220px] h-11 items-center block md:hidden">
      <p class="ml-4 text-red-600 font-normal">Danh Mục</p>
    </div>
    <div class=" md:bg-gray-200 py-3 w-[150px] md:w-[220px] h-11 flex items-center">
      <p class="ml-4 text-red-600 font-normal">${id.specifications[0].attributes[0]?.name}</p>
    </div>
    <div class=" md:bg-gray-200 py-3 w-[150px] md:w-[220px] h-11 flex items-center">
      <p class="ml-4 text-red-600 font-normal">${id.specifications[0].attributes[1]?.name}</p>
    </div>
    <div class=" md:bg-gray-200 py-3 w-[150px] md:w-[220px] h-11 flex items-center">
      <p class="ml-4 text-red-600 font-normal">${id.specifications[0].attributes[2]?.name}</p>
    </div>
    <div class=" md:bg-gray-200 py-3 w-[150px] md:w-[220px] h-11 flex items-center">
      <p class="ml-4 text-red-600 font-normal">${id.specifications[0].attributes[3]?.name}</p>
    </div>
    <div class=" md:bg-gray-200 py-3 w-[220md:px] h-11 flex items-center">
      <p class="ml-4 text-red-600 font-normal">${id.specifications[0].attributes[4]?.name}</p>
    </div>
    <div class=" md:bg-gray-200 py-3 w-[150px] md:w-[220px] h-11 flex items-center">
      <p class="ml-4 text-red-600 font-normal">${id.specifications[0].attributes[5]?.name}</p>
    </div>
    <div class=" md:bg-gray-200 py-3 w-[150px] md:w-[220px] h-11 flex items-center">
      <p class="ml-4 text-red-600 font-normal">${id.specifications[0].attributes[6]?.name}</p>
    </div>
  </div>
 <div>
  <div class="  py-3 w-[160px] md:w-[800px] h-11 flex items-center block md:hidden">
    <p class="ml-5">${id.categories.name}</p>
  </div>
  <div class="  py-3 w-[160px] md:w-[800px] h-11 flex items-center">
    <p class="ml-4 text-black font-normal">${id.specifications[0].attributes[0].value}</p>
  </div>
  <div class=" md:bg-gray-100 py-3 w-[160px] md:w-[800px] h-11 flex items-center">
    <p class="ml-4 text-black font-normal">${id.specifications[0].attributes[1].value}</p>
  </div>
  <div class="  py-3 w-[160px] md:w-[800px] h-11 flex items-center">
    <p class="ml-4 text-black font-normal">${id.specifications[0].attributes[2]?.value}</p>
  </div>
  <div class=" md:bg-gray-100 py-3 w-[160px] md:w-[800px] h-11 flex items-center">
    <p class="ml-4 text-black font-normal">${id.specifications[0].attributes[3]?.value}</p>
  </div>
  <div class="  py-3 w-[160px] md:w-[800px] h-11 flex items-center">
    <p class="ml-4 text-black font-normal">${id.specifications[0].attributes[4]?.value}</p>
  </div>
  <div class=" md:bg-gray-100 py-3 w-[160px] md:w-[800px] h-11 flex items-center">
    <p class="ml-4 text-black font-normal">${id.specifications[0].attributes[5]?.value}</p>
  </div>
  <div class="  py-3 w-[160px] md:w-[800px] h-11 flex items-center">
  <p class="ml-4 text-black font-normal">${id.specifications[0].attributes[6]?.value}</p>
  </div>
 </div>
</div>
</div>


<div> 
<h2 class="text-2xl font-normal mt-7 mb-4">Mô Tả Sản Phẩm</h2>
<p>${id.description} </p>
</div>

  </div> 
  `;
});

bookListElement.innerHTML = _content;
