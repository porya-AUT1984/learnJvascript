let items = [
  { id: 17, name: "موهیتو", price: 250 },
  { id: 18, name: "بلک موهیتو", price: 250 },
  { id: 19, name: "لیموناد", price: 190 },
  { id: 20, name: "لیموناد برزیلی", price: 220 },
  { id: 21, name: "مارگاریتا", price: 200 },
  { id: 22, name: "بمب انرژی", price: 270 },
  { id: 23, name: "نوشیدنی بهشتی", price: 290 },
  { id: 24, name: "اسموتی توت فرنگی و موز", price: 220 },
  { id: 25, name: "اسموتی آناناس و موز", price: 230 },
  { id: 26, name: "آب پرتقال", price: 140 },
  { id: 27, name: "آب آلبالو", price: 140 },
  { id: 28, name: "معجون مخصوص سنتی", price: 300 },
  { id: 29, name: "معجون شکلاتی", price: 300 },
];

let table = document.getElementById("coffee");
let tableData = "";
let actionButton = `<td><button class="action-btn">Action</button></td>`;

function showBootstrapAlert(message) {
      const alertContainer = document.getElementById("alert-container");
    
      const alertBox = `
        <div class="alert alert-success alert-dismissible fade show mt-2" role="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
      `;
    
      alertContainer.innerHTML = alertBox;
    }
    

items.map((satr) => {
  let actionButton = `<button class="action-btn">Action</button>`;
  tableData += `<tr><td> ${satr.id} </td> <td> ${satr.name} <td/> <td> ${satr.price} <td/> ${actionButton} </tr>`;
  console.log(satr);
});

table.innerHTML += tableData;

let orderButton = document.querySelectorAll(".action-btn");

Array.from(orderButton).map((btn, index) => {
            btn.addEventListener("click", () => {
              console.log("Clicked item:", items[index]);
              showBootstrapAlert(`آیتم کلیک شد: ${items[index].name}`);
            });
});


