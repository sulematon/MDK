document.getElementById('more').onclick = function () {
	document.getElementById('info-briefly').scrollIntoView({ behavior: 'smooth' })
}




//check index.html
const name = document.getElementById("name");
const reviews = document.getElementById("reviews");

document.getElementById('order-action').onclick = function () {
    let hasError = false;

    [name, reviews].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [name, reviews].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за отзыв!")
    }
}

