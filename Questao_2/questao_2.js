const $form = document.querySelector("form");
const $a = document.querySelector("#A");
const $b = document.querySelector("#B");
const $c = document.querySelector("#C");
const $x1 = document.querySelector("#x1");
const $x2 = document.querySelector("#x2");

function bhaskara() {
    const a = $a.value;
    const b = $b.value;
    const c = $c.value;

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById("Out2").value = "Delta é negativo."
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        $x1.value = x1;
        $x2.value = x2;
    
    }
}

$form.addEventListener("submit", function (event) {
    event.preventDefault();
    bhaskara();
});