const dropdownMonth = document.querySelectorAll(".dropdownMenu");
const monthBtn = document.querySelectorAll(".monthBtn");
let months = document.querySelectorAll(".month");

function openDropDownMonth(e) {
    e.stopPropagation();
    if (!dropdownMonth) return;

    const btn = e.currentTarget;
    const menu = btn.parentElement.querySelector(".dropdownMenu");

    dropdownMonth.forEach((item) => {
        if (item !== menu) {
            item.classList.add("hidden");
        }
    });

    if (menu) {
        menu.classList.toggle("hidden");
    }
}
function closeDropDownMonth() {
    dropdownMonth.forEach((ul) => {
        ul.classList.add("hidden");
    });
}
monthBtn.forEach((btn) => {
    btn.addEventListener("click", openDropDownMonth);
});
months.forEach((month) => {
    month.addEventListener("click", changeTextContent);
});

function changeTextContent(e) {
    e.stopPropagation();

    let selectedMonth = e.currentTarget.textContent;
    let parent = e.currentTarget.closest(".title");
    let text = parent.querySelector(".monthText");
    text.textContent = selectedMonth;
    closeDropDownMonth();
}

document.addEventListener("click", function (e) {
    dropdownMonth.forEach((ul) => {
        if (!ul.classList.contains("hidden")) {
            monthBtn.forEach((btn) => {
                if (!ul.contains(e.target) && !btn.contains(e.target)) {
                    closeDropDownMonth();
                }
            });
        }
    });
});

window.addEventListener("load", closeDropDownMonth);