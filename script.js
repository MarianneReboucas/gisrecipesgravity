document.addEventListener('DOMContentLoaded', () => {
    // --- Recipe Database ---
    const recipes = [
        {
            id: 1,
            name: "Strogonoff de Carne de Família",
            category: "salgado",
            rating: 4.9,
            reviews: "12k",
            img: "https://images.unsplash.com/photo-1534938665420-4193efe2746b?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            name: "Bolonhesa Clássica Italiana",
            category: "salgado",
            rating: 4.8,
            reviews: "8.5k",
            img: "https://images.unsplash.com/photo-1622973531818-667746122dca?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            name: "Feijoada Completa Tradicional",
            category: "salgado",
            rating: 5.0,
            reviews: "15k",
            img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 4,
            name: "Frango à Parmegiana Crocante",
            category: "salgado",
            rating: 4.7,
            reviews: "5.2k",
            img: "https://images.unsplash.com/photo-1632778149975-400460ca414c?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 5,
            name: "Bolo de Cenoura com Cobertura de Chocolate",
            category: "doce",
            rating: 4.9,
            reviews: "20k",
            img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 6,
            name: "Pavê de Chocolate Cremoso",
            category: "sobremesa",
            rating: 4.8,
            reviews: "3.1k",
            img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 7,
            name: "Pudim de Leite Condensado",
            category: "sobremesa",
            rating: 5.0,
            reviews: "10k",
            img: "https://images.unsplash.com/photo-1528975615570-ccf45d75836a?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 8,
            name: "Massa de Panqueca Caseira",
            category: "lanche",
            rating: 4.6,
            reviews: "12k",
            img: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 9,
            name: "Torta de Frango de Liquidificador",
            category: "lanche",
            rating: 4.7,
            reviews: "7.8k",
            img: "https://images.unsplash.com/photo-1604467732941-df24285df1e5?auto=format&fit=crop&q=80&w=800"
        }
    ];

    // --- State Management ---
    let favorites = JSON.parse(localStorage.getItem('gis_favorites')) || [];

    // --- DOM Elements ---
    const recipesGrid = document.getElementById('recipes-grid');
    const categoriesGrid = document.getElementById('category-results');
    const favoritesGrid = document.getElementById('favorites-grid');
    const emptyFavorites = document.getElementById('empty-favorites');
    const catButtons = document.querySelectorAll('.cat-btn');
    const internalSearch = document.getElementById('internal-search');
    const searchForm = document.getElementById('search-form');
    const searchInput = searchForm.querySelector('input');
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // --- Theme Logic ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Rendering Engine ---
    const createRecipeCard = (recipe) => {
        const isFav = favorites.includes(recipe.id);
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${recipe.id}" aria-label="Favoritar">
                <i data-lucide="heart"></i>
            </button>
            <img src="${recipe.img}" alt="${recipe.name}" class="recipe-img">
            <div class="recipe-info">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-rating">
                    <div class="stars">
                        ${'<i data-lucide="star"></i>'.repeat(Math.floor(recipe.rating))}
                        ${recipe.rating % 1 !== 0 ? '<i data-lucide="star-half"></i>' : ''}
                    </div>
                    <span class="reviews-count">(${recipe.reviews} avaliações)</span>
                </div>
            </div>
        `;

        // Handle Favorite Toggle
        const favBtn = card.querySelector('.fav-btn');
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(recipe.id);
            favBtn.classList.toggle('active');
        });

        return card;
    };

    const renderRecipes = (container, data) => {
        if (!container) return;
        container.innerHTML = '';
        data.forEach(recipe => {
            container.appendChild(createRecipeCard(recipe));
        });
        lucide.createIcons();
    };

    // --- Favorites Logic ---
    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            favorites = favorites.filter(favId => favId !== id);
        } else {
            favorites.push(id);
        }
        localStorage.setItem('gis_favorites', JSON.stringify(favorites));
        updateFavoritesUI();
    };

    const updateFavoritesUI = () => {
        const favRecipes = recipes.filter(r => favorites.includes(r.id));
        if (favRecipes.length === 0) {
            favoritesGrid.style.display = 'none';
            emptyFavorites.style.display = 'block';
        } else {
            favoritesGrid.style.display = 'grid';
            emptyFavorites.style.display = 'none';
            renderRecipes(favoritesGrid, favRecipes);
        }
    };

    // --- Initial Render ---
    renderRecipes(recipesGrid, recipes);
    renderRecipes(categoriesGrid, recipes);
    updateFavoritesUI();

    // --- Category Filtering ---
    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Clear search when switching categories
            if (internalSearch) internalSearch.value = '';
            
            const filtered = category === 'all' ? recipes : recipes.filter(r => r.category === category);
            renderRecipes(categoriesGrid, filtered);
        });
    });

    // --- Internal Search Logic ---
    internalSearch?.addEventListener('input', () => {
        const query = internalSearch.value.toLowerCase().trim();
        const activeCategory = document.querySelector('.cat-btn.active').dataset.category;
        
        let filtered = activeCategory === 'all' ? recipes : recipes.filter(r => r.category === activeCategory);
        
        if (query) {
            filtered = filtered.filter(r => r.name.toLowerCase().includes(query));
        }
        
        renderRecipes(categoriesGrid, filtered);
    });

    // --- Navigation & View Switching ---
    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

    const switchView = (targetHash) => {
        const viewId = targetHash.replace('#', '') || 'home';
        const targetView = document.getElementById(viewId);

        if (targetView) {
            // Hide all views
            views.forEach(v => v.classList.remove('active-view'));
            // Show target view
            targetView.classList.add('active-view');

            // Update Breadcrumbs
            const breadcrumbEl = targetView.querySelector('.breadcrumb');
            if (breadcrumbEl) {
                const viewName = targetView.querySelector('h2')?.textContent || viewId;
                breadcrumbEl.innerHTML = `Home / <span>${viewName}</span>`;
            }

            // Update Navigation Active State
            navLinks.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === `#${viewId}`);
            });

            // Scroll to top of the new view
            window.scrollTo(0, 0);
        }
    };

    // Listen for hash changes (back button, clicks, direct links)
    window.addEventListener('hashchange', () => {
        switchView(window.location.hash);
    });

    // Handle initial load
    if (window.location.hash) {
        switchView(window.location.hash);
    } else {
        switchView('#home');
    }

    // --- Search Functionality (Updated for Views) ---
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        
        if (query) {
            const results = recipes.filter(r => 
                r.name.toLowerCase().includes(query) || 
                r.category.toLowerCase().includes(query)
            );
            
            renderRecipes(categoriesGrid, results);
            window.location.hash = '#categorias';
            
            // Visual feedback on category button
            catButtons.forEach(b => b.classList.remove('active'));
        }
    });

    // --- Hero Update Section ---
    const updateDailyRecipe = () => {
        const day = new Date().getDay();
        const recipe = recipes[day % recipes.length];
        const banner = document.querySelector('.hero-banner');
        const title = document.getElementById('daily-recipe-title');
        
        if (banner && recipe) {
            banner.style.backgroundImage = `url('${recipe.img}')`;
            title.textContent = recipe.name;
        }
    };
    updateDailyRecipe();

    // --- Mobile Menu ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    const toggleMenu = (show) => {
        mobileOverlay.classList.toggle('active', show);
        document.body.style.overflow = show ? 'hidden' : '';
    };

    mobileMenuBtn?.addEventListener('click', () => toggleMenu(true));
    closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
});
