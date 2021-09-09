
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.querySelector('input');

    const task = input.value;

    if (task) {
        const list = document.createElement('li');

        list.innerHTML = `<i class="far fa-square"></i>`;

        list.appendChild(document.createTextNode(task));

        const ul = document.querySelector('ul');

        ul.appendChild(list);

        input.value = '';
    }

});

const ulEl = document.querySelector('ul');

ulEl.addEventListener('click', function(element) {
    if (element.target.tagName === 'I') {
        changeDisplay(element.target);
    }
})

const changeDisplay = (el) => {
    el.classList.toggle("fa-square");
    el.classList.toggle('fa-check-square');
    el.parentElement.classList.toggle('text-muted')
}