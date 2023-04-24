"use stict";

//ẩn thông tin cá nhân yê cầu người dùng nhập mail
function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function checkEmail() {
  var email = document.getElementById("basic-url").value;
  if (validateEmail(email)) {
    document.querySelector(".infos").classList.remove("hidden");
    document.querySelector(".email-input").classList.add("hidden");
  } else {
    document.getElementById("basic-addon4").innerHTML = "Email không hợp lệ";
  }
}
const btnSubmit = document.querySelector(".submit-email");
btnSubmit.addEventListener("click", checkEmail);
//ẩn thông tin nghề nghiệp
//khai báo các DOM
const boxinfos = document.querySelectorAll(".box-info");
const btnViews = document.querySelectorAll(".view-more");
const btnView = document.querySelector(".view-more");
const btnLess = document.querySelector(".view-less");
const btnLesss = document.querySelectorAll(".view-less");
//nút mở xem toàn bộ nội dung
for (let i = 0; i < btnViews.length; i++)
  btnViews[i].addEventListener("click", function () {
    boxinfos[i].classList.remove("hidden");
    btnLesss[i].classList.remove("hidden");
    btnViews[i].classList.add("hidden");
  });
//tắt toàn bộ nội dung
for (let j = 0; j < btnLesss.length; j++)
  btnLesss[j].addEventListener("click", function () {
    boxinfos[j].classList.add("hidden");
    btnLesss[j].classList.add("hidden");
    btnViews[j].classList.remove("hidden");
  });
