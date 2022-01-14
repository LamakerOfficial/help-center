function openSearch() {
    document.getElementById('search-searchbar').style.display = 'inherit';
    document.getElementById('search-hits').style.display = 'inherit';
    document.getElementById('cs').innerHTML = "'<style>#bg-art-he, #category, .help-home, .hero, .article, .post, #heroIMG, footer {display: none !important;}'";
    setTimeout(() => {
        document.getElementById('search-searchbar').style.top = '90px';
        document.getElementById('search-searchbar').style.opacity = '1';

        document.getElementById('search-hits').style.top = '180px';
        document.getElementById('search-hits').style.opacity = '1';
    }, 0050);
}