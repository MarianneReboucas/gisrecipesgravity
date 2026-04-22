// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('gisrecipes-theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('gisrecipes-theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-moon';
    } else {
        themeIcon.className = 'fas fa-sun';
    }
}

// Mobile Menu Management
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobile = document.getElementById('close-mobile');

mobileToggle.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

closeMobile.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close mobile menu on link click
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Favorites Logic (Placeholder for basic functionality)
// This is a simple implementation to demonstrate the saving behavior
let favorites = JSON.parse(localStorage.getItem('gisrecipes-favorites')) || [];

function updateFavoritesUI() {
    const favoritesList = document.getElementById('favorites-list');
    if (!favoritesList) return;

    if (favorites.length === 0) {
        favoritesList.innerHTML = 'Você ainda não salvou nenhuma receita como favorita.';
    } else {
        favoritesList.innerHTML = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">' +
            favorites.map(fav => `
                <div class="glass" style="padding: 1rem; border-radius: 12px; display: flex; flex-direction: column; gap: 0.5rem;">
                    <span style="font-weight: 700;">${fav}</span>
                    <button onclick="toggleFavorite('${fav}')" style="background: none; border: none; color: var(--secondary); cursor: pointer; text-align: left; font-size: 0.8rem;">Remover</button>
                </div>
            `).join('') +
            '</div>';
    }
}

function toggleFavorite(recipeName) {
    const index = favorites.indexOf(recipeName);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeName);
    }
    localStorage.setItem('gisrecipes-favorites', JSON.stringify(favorites));
    updateFavoritesUI();
}

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    updateFavoritesUI();
});

// Search functionality placeholder
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Pesquisando por: ${searchInput.value}`);
            searchInput.value = '';
        }
    });
}
