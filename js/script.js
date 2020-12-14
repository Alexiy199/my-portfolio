let tlgImg = document.querySelector('.img_contact_tlg');
let tlgHidden = document.querySelector('.tlg_cont');

tlgImg.addEventListener('mouseenter', function (e) {
	e.preventDefault()
	tlgHidden.classList.toggle('tlg_cont_hover');
});

let numberHidden = document.querySelector('.number');
let mobile = document.querySelector('.mobile');

mobile.addEventListener('click', function () {
	numberHidden.classList.toggle('number_active');
})