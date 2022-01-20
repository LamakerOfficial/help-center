function openMenu_apps() {
    setTimeout(() => {
        document.getElementById('apps').style.display = 'grid';
    }, 0001);
}
function openMenu_support() {
    setTimeout(() => {
        document.getElementById('support').style.display = 'grid';
    }, 0001);
}

function closeMenu_apps() {
    document.getElementById('apps').style.display = 'none';
}
function closeMenu_support() {
    document.getElementById('support').style.display = 'none';
}