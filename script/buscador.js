const nameInput = document.getElementById('nombreUrl');
const urlInput = document.getElementById('urlInput');
const addLinkButton = document.getElementById('btnAñadir');
const linksContainer = document.getElementById('link-añadido');


let savedLinks = JSON.parse(localStorage.getItem('links')) || [];


function renderLinks() {
    linksContainer.innerHTML = "";

    savedLinks.forEach(link => {
        const linkItem = createLinkItem(link);
        linksContainer.appendChild(linkItem);
    });
}

function createLinkItem({ name, url }) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const deleteButton = document.createElement('button');

    a.href = url;
    a.target = "_blank";
    a.textContent = name;

    deleteButton.textContent = "X";
    deleteButton.addEventListener('click', () => deleteLink(name, url));

    li.appendChild(a);
    li.appendChild(deleteButton);

    return li;
}

function deleteLink(name, url) {
    savedLinks = savedLinks.filter(link => link.name !== name || link.url !== url);
    localStorage.setItem('links', JSON.stringify(savedLinks));
    renderLinks();
}

function addLink() {
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();

    if (!name || !url) return;

    savedLinks.push({ name, url });
    localStorage.setItem('links', JSON.stringify(savedLinks));

    nameInput.value = "";
    urlInput.value = "";

    renderLinks();
}

addLinkButton.addEventListener('click', addLink);

renderLinks();
(function () {
    const params = new URLSearchParams(location.search);
    const target = params.get('view') || 'buscadorSec';
    // Oculta todos y muestra el solicitado
    document.querySelectorAll('.view').forEach(el => el.classList.remove('show'));
    const el = document.getElementById(target);
    if (el) el.classList.add('show');
    if (!location.hash) {
        document.querySelectorAll('.view').forEach(el => {
            el.style.display = 'block';
        });
    }
})();
document.getElementById('btn-regresar').addEventListener('click', () => {
    window.location.href = '/project-break-Marco/index.html';
});