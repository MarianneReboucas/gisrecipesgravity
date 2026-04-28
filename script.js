// --- Data: Recipes Database ---
const RECIPES = [
    {
        id: 'strogonoff',
        name: 'Strogonoff de Carne Especial',
        category: 'Clássicos da Cozinha',
        description: 'Um clássico brasileiro com carne macia e molho cremoso.',
        image: 'hero-recipe.png',
        video: 'https://www.youtube.com/embed/uTDuchZ7XPE',
        ingredients: [
            '500g de filé mignon ou alcatra em tiras',
            '1 cebola picada',
            '2 dentes de alho amassados',
            '3 colheres (sopa) de ketchup',
            '1 colher (sopa) de mostarda',
            '1 xícara de champignon fatiado',
            '1 lata de creme de leite sem soro',
            'Sal e pimenta a gosto'
        ],
        instructions: '1. Em uma panela, doure o alho e a cebola no azeite.\n2. Adicione a carne e frite até dourar.\n3. Junte o champignon, o ketchup e a mostarda.\n4. Desligue o fogo e misture o creme de leite suavemente.\n5. Sirva com arroz branco e batata palha.'
    },
    {
        id: 'bolonhesa',
        name: 'Macarrão à Bolonhesa',
        category: 'Massas',
        description: 'Molho rico de carne moída com tomates frescos e ervas.',
        image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/VhQU8yNFa-4',
        ingredients: [
            '500g de espaguete',
            '400g de carne moída',
            '1 cebola picada',
            '2 latas de tomate pelado',
            'Folhas de manjericão fresco',
            'Queijo parmesão ralado'
        ],
        instructions: '1. Cozinhe o macarrão em água com sal até ficar "al dente".\n2. Em outra panela, refogue a carne moída até que não haja mais líquido.\n3. Adicione a cebola e o alho e refogue.\n4. Junte os tomates pelados e deixe cozinhar em fogo baixo por 20 minutos.\n5. Misture com a massa e finalize com manjericão e queijo.'
    },
    {
        id: 'bolo-chocolate',
        name: 'Bolo de Chocolate Gourmet',
        category: 'Sobremesas',
        description: 'Massa fofinha com cobertura de brigadeiro belga.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/Is1ON-2gzuQ',
        time: '60 min',
        difficulty: 'Médio',
        servings: '12 fatias',
        ingredients: [
            '3 ovos',
            '1 xícara de chocolate em pó 50%',
            '2 xícaras de farinha de trigo',
            '1 xícara de açúcar',
            '1 xícara de leite',
            '1 colher (sopa) de fermento'
        ],
        instructions: '1. Bata os ovos, o leite e o óleo no liquidificador.\n2. Em uma tigela, misture a farinha, o chocolate e o açúcar.\n3. Junte as duas misturas e mexa bem.\n4. Adicione o fermento e leve ao forno médio por 40 minutos.'
    },
    {
        id: 'pudim',
        name: 'Pudim de Leite Tradicional',
        category: 'Sobremesas',
        description: 'O clássico pudim com textura sedosa e muita calda.',
        image: 'img/pudim.png',
        video: 'https://www.youtube.com/embed/8817VZCSMGI',
        time: '90 min',
        difficulty: 'Fácil',
        servings: '8 pessoas',
        ingredients: [
            '1 lata de leite condensado',
            '1 lata de leite (mesma medida)',
            '3 ovos grandes',
            '1 xícara de açúcar para a calda'
        ],
        instructions: '1. Prepare a calda derretendo o açúcar na forma.\n2. Bata os outros ingredientes no liquidificador.\n3. Despeje na forma caramelizada.\n4. Cozinhe em banho-maria (no forno ou no fogão) por 1 hora.'
    },
    {
        id: 'feijoada',
        name: 'Feijoada Completa',
        category: 'Clássicos da Cozinha',
        description: 'Receita tradicional brasileira com todas as carnes.',
        image: 'img/feijoada.png',
        video: 'https://www.youtube.com/embed/_w89YmCV0gU',
        time: '180 min',
        difficulty: 'Difícil',
        servings: '10 pessoas',
        ingredients: [
            '500g de feijão preto',
            '200g de carne seca',
            '200g de paio',
            '200g de lombo suíno',
            'Bacon e couve para acompanhar'
        ],
        instructions: '1. Deixe o feijão e a carne seca de molho na véspera.\n2. Cozinhe o feijão com as carnes duras primeiro.\n3. Depois de 40 minutos, junte as carnes macias.\n4. Refogue o alho e o bacon para dar o tempero final.'
    },
    {
        id: 'parmegiana',
        name: 'Filé à Parmegiana',
        category: 'Clássicos da Cozinha',
        description: 'Bife empanado com molho de tomate e muito queijo.',
        image: 'img/parmegiana.png',
        video: 'https://www.youtube.com/embed/w8cIuDcJf_I',
        time: '45 min',
        difficulty: 'Médio',
        servings: '4 pessoas',
        ingredients: [
            '4 bifes de filé mignon ou coxão mole',
            '2 ovos batidos',
            '1 xícara de farinha de rosca',
            '300g de muçarela fatiada',
            '1 sachê de molho de tomate'
        ],
        instructions: '1. Tempere os bifes e empane-os passando no ovo e na farinha.\n2. Frite até dourar e coloque em um refratário.\n3. Cubra com molho de tomate e presunto/queijo.\n4. Leve ao forno para gratinar.'
    },
    {
        id: 'pave',
        name: 'Pavê de Sonho de Valsa',
        category: 'Sobremesas',
        description: 'Camadas de creme branco, bombons e chocolate.',
        image: 'img/pave.png',
        video: 'https://www.youtube.com/embed/NORI0HgDSzM',
        time: '50 min',
        difficulty: 'Fácil',
        servings: '10 pessoas',
        ingredients: [
            '1 lata de leite condensado',
            '1 lata de leite de vaca',
            '2 gemas',
            '10 bombons picados',
            '1 lata de creme de leite'
        ],
        instructions: '1. Faça um creme com o leite condensado, o leite e as gemas em fogo baixo.\n2. Em um refratário, faça camadas de creme e bombons picados.\n3. Finalize com o creme de leite misturado com chocolate em pó.\n4. Deixe na geladeira por no mínimo 4 horas.'
    },
    {
        id: 'bolo-laranja',
        name: 'Bolo Simples de Laranja',
        category: 'Sobremesas',
        description: 'Bolo caseiro perfeito para o café da tarde.',
        image: 'img/laranja.png',
        video: 'https://www.youtube.com/embed/1pW8gB8wgzY',
        time: '45 min',
        difficulty: 'Fácil',
        servings: '12 fatias',
        ingredients: [
            '2 laranjas inteiras (sem casca e sem semente)',
            '3 ovos',
            '1/2 xícara de óleo',
            '2 xícaras de açúcar',
            '2 xícaras de farinha de trigo',
            '1 colher (sopa) de fermento'
        ],
        instructions: '1. Bata as laranjas, o óleo, o açúcar e os ovos no liquidificador.\n2. Misture com a farinha em uma tigela.\n3. Adicione o fermento e asse por 35 minutos em forno pré-aquecido.'
    },
    {
        id: 'coxinha',
        name: 'Coxinha de Frango Crocante',
        category: 'Clássicos da Cozinha',
        description: 'Massa leve e recheio suculento com catupiry.',
        image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/K5Gmr51W97E',
        time: '120 min',
        difficulty: 'Difícil',
        servings: '20 unidades',
        ingredients: [
            '1kg de farinha de trigo',
            '1 litro de caldo de frango',
            '500g de peito de frango desfiado',
            '200g de catupiry',
            'Farinha de rosca para empanar'
        ],
        instructions: '1. Cozinhe o frango e reserve o caldo.\n2. Com o caldo fervendo, junte a farinha de uma vez e mexa até desgrudar.\n3. Sove a massa ainda quente.\n4. Recheie, molde as coxinhas, passe no ovo e farinha de rosca e frite.'
    },
    {
        id: 'torta-limao',
        name: 'Torta de Limão Refrescante',
        category: 'Sobremesas',
        description: 'Massa crocante com mousse azedinho e merengue.',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/OKnMws1oYk4',
        time: '60 min',
        difficulty: 'Médio',
        servings: '8 pessoas',
        ingredients: [
            '200g de biscoito maizena',
            '100g de manteiga',
            '2 latas de leite condensado',
            'Suco de 4 limões',
            'Chantilly para decorar'
        ],
        instructions: '1. Triture os biscoitos e misture com manteiga para fazer a massa.\n2. Forre a forma e asse por 10 minutos.\n3. Misture o leite condensado com o suco de limão.\n4. Despeje na massa, leve à geladeira e decore com chantilly.'
    },
    {
        id: 'torta-salgada',
        name: 'Torta Salgada de Frango',
        category: 'Salgados',
        description: 'Torta de liquidificador fácil e recheio super cremoso.',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/Pj1yWq4wSg0',
        time: '50 min',
        difficulty: 'Fácil',
        servings: '10 pedaços',
        ingredients: [
            '3 ovos',
            '1 xícara de óleo',
            '2 xícaras de leite',
            '2 xícaras de farinha de trigo',
            '1 colher de fermento em pó',
            '500g de frango desfiado e temperado',
            '1 lata de milho e ervilha'
        ],
        instructions: '1. Bata os líquidos no liquidificador, adicione a farinha e o fermento.\n2. Em uma forma untada, coloque metade da massa.\n3. Distribua o recheio de frango e cubra com o restante da massa.\n4. Asse em forno pré-aquecido a 180°C por cerca de 40 minutos.'
    },
    {
        id: 'lasanha',
        name: 'Lasanha Tradicional',
        category: 'Massas',
        description: 'Lasanha clássica com molho bolonhesa e muito queijo.',
        image: 'https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/zH38LMBi9Gg',
        time: '60 min',
        difficulty: 'Médio',
        servings: '8 pessoas',
        ingredients: [
            '1 pacote de massa para lasanha',
            '500g de carne moída',
            '2 sachês de molho de tomate',
            '400g de presunto',
            '400g de muçarela',
            'Queijo parmesão ralado para gratinar'
        ],
        instructions: '1. Prepare o molho à bolonhesa com a carne moída e o molho de tomate.\n2. Em um refratário, intercale camadas de molho, massa, presunto e muçarela.\n3. Finalize com muçarela e parmesão ralado.\n4. Cubra com papel alumínio e asse por 30 minutos. Retire o papel e doure por mais 10 minutos.'
    },
    {
        id: 'nhoque',
        name: 'Nhoque de Batata',
        category: 'Massas',
        description: 'Nhoque macio que desmancha na boca com molho rústico.',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/9BwY2oQ2qO8',
        time: '90 min',
        difficulty: 'Médio',
        servings: '6 pessoas',
        ingredients: [
            '1kg de batata asterix (casca rosada)',
            '1 ovo',
            '1 xícara de farinha de trigo (aproximadamente)',
            'Sal a gosto',
            'Molho de tomate de sua preferência'
        ],
        instructions: '1. Cozinhe as batatas com casca. Descasque e amasse ainda quentes.\n2. Espere esfriar um pouco, junte o ovo, o sal e aos poucos a farinha até dar ponto.\n3. Faça rolinhos e corte os nhoques.\n4. Cozinhe em água fervente até boiarem. Sirva com molho quente.'
    },
    {
        id: 'bife-acebolado',
        name: 'Bife Acebolado Suculento',
        category: 'Clássicos da Cozinha',
        description: 'O tradicional bife acebolado perfeito para o dia a dia.',
        image: 'https://images.unsplash.com/photo-1544025162-83110996c449?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/2M-pGjP0L8E',
        time: '20 min',
        difficulty: 'Fácil',
        servings: '4 pessoas',
        ingredients: [
            '4 bifes de contrafilé ou alcatra',
            '2 cebolas fatiadas em rodelas',
            '2 dentes de alho amassados',
            'Óleo ou manteiga para fritar',
            'Sal e pimenta-do-reino a gosto'
        ],
        instructions: '1. Tempere os bifes com alho, sal e pimenta.\n2. Em uma frigideira bem quente, adicione óleo e doure os bifes de ambos os lados. Reserve.\n3. Na mesma frigideira, coloque a cebola e um pouquinho de água para soltar o fundo.\n4. Refogue até murchar e sirva por cima dos bifes.'
    },
    {
        id: 'pizza-caseira',
        name: 'Pizza Caseira Rápida',
        category: 'Salgados',
        description: 'Massa super fácil e recheio de muçarela e calabresa.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/1-SJGQ2HLp8',
        time: '40 min',
        difficulty: 'Fácil',
        servings: '8 pedaços',
        ingredients: [
            '2 e 1/2 xícaras de farinha de trigo',
            '1 colher (sopa) de fermento químico',
            '1 colher (sopa) de manteiga',
            '1 xícara de leite',
            'Sal a gosto',
            'Molho de tomate, queijo e calabresa para o recheio'
        ],
        instructions: '1. Misture todos os ingredientes da massa até soltar das mãos.\n2. Abra a massa com um rolo e coloque em uma forma untada.\n3. Faça furinhos com o garfo e pré-asse por 10 minutos.\n4. Recheie com molho, queijo e calabresa, e asse até o queijo derreter.'
    },
    {
        id: 'pao-de-queijo',
        name: 'Pão de Queijo Mineiro',
        category: 'Salgados',
        description: 'O verdadeiro pão de queijo com casquinha crocante.',
        image: 'https://images.unsplash.com/photo-1596644093845-a74fcba1729c?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/embed/oK27mH4b27w',
        time: '45 min',
        difficulty: 'Fácil',
        servings: '20 unidades',
        ingredients: [
            '500g de polvilho azedo',
            '1 copo (americano) de água',
            '1 copo (americano) de leite',
            '1/2 xícara de óleo',
            '2 ovos',
            '100g de queijo parmesão ralado',
            'Sal a gosto'
        ],
        instructions: '1. Ferva a água, o leite, o óleo e o sal, e escalde o polvilho.\n2. Espere esfriar um pouco e amasse bem.\n3. Adicione os ovos e o queijo, misturando até ficar homogêneo.\n4. Faça bolinhas e asse em forno pré-aquecido a 180°C até dourarem.'
    }
];

// --- State management ---
let state = {
    view: 'home',
    recipeId: null,
    favorites: JSON.parse(localStorage.getItem('gisrecipes-favorites')) || [],
    theme: localStorage.getItem('gisrecipes-theme') || 'light',
    isLoading: false
};

// --- Core Logic ---
function init() {
    window.addEventListener('hashchange', handleRouting);
    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
    initSearch();
    handleRouting();
    initThemeUI();
    initMobileMenu();
}

function handleRouting() {
    const hash = window.location.hash.replace('#', '');
    
    state.isLoading = true;
    render(); // Render loading state if implemented

    setTimeout(() => {
        if (hash.startsWith('recipe/')) {
            state.view = 'detail';
            state.recipeId = hash.split('/')[1];
        } else if (hash === 'favoritos') {
            state.view = 'favorites';
        } else if (hash === 'sobre') {
            state.view = 'about';
        } else if (hash.startsWith('categoria/')) {
            state.view = 'category';
            state.currentCategory = decodeURIComponent(hash.substring(10));
        } else {
            state.view = 'home';
        }
        state.isLoading = false;
        render();
    }, 300);
}

function render() {
    const container = document.getElementById('app-content');
    if (!container) return;

    if (state.isLoading) {
        container.innerHTML = `<div class="container" style="padding: 10rem; text-align: center;"><i class="fas fa-circle-notch fa-spin" style="font-size: 3rem; color: var(--primary);"></i></div>`;
        return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (state.view) {
        case 'home':
            renderHome(container);
            break;
        case 'detail':
            renderDetail(container, state.recipeId);
            break;
        case 'favorites':
            renderFavorites(container);
            break;
        case 'about':
            renderAbout(container);
            break;
        case 'category':
            renderCategory(container, state.currentCategory);
            break;
    }
}

// --- Views ---
function renderHome(container) {
    container.innerHTML = `
        <section class="hero slide-up">
            <img src="hero-recipe.png" alt="Destaque" class="hero-image">
            <div class="hero-overlay glass">
                <span class="badge">Receita do Dia</span>
                <h1 class="hero-title">Strogonoff de Carne Especial</h1>
                <p>Descubra o segredo do strogonoff mais cremoso que você já provou.</p>
                <a href="#recipe/strogonoff" class="hero-btn">
                    <i class="fas fa-play-circle"></i> Ver Passo a Passo
                </a>
            </div>
        </section>

        <section class="container" style="padding: 6rem 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem;">
                <h2 class="section-title" style="margin-bottom: 0;">Últimas Receitas</h2>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="badge" style="background: var(--primary); cursor: pointer;" onclick="window.location.hash = 'categoria/Salgados'">Salgados</button>
                    <button class="badge" style="background: var(--secondary); cursor: pointer;" onclick="window.location.hash = 'categoria/Sobremesas'">Sobremesas</button>
                    <button class="badge" style="background: #e67e22; cursor: pointer; color: white;" onclick="window.location.hash = 'categoria/Massas'">Massas</button>
                    <button class="badge" style="background: #27ae60; cursor: pointer; color: white;" onclick="window.location.hash = 'categoria/Clássicos da Cozinha'">Clássicos da Cozinha</button>
                </div>
            </div>
            <div class="recipe-grid">
                ${RECIPES.slice(0, 6).map(r => createRecipeCard(r)).join('')}
            </div>
        </section>
        
        <section class="container" style="padding-bottom: 8rem;">
            <h2 class="section-title">Sobremesas Irresistíveis</h2>
            <div class="recipe-grid">
                ${RECIPES.filter(r => r.category === 'Sobremesas').slice(0, 3).map(r => createRecipeCard(r)).join('')}
            </div>
        </section>
    `;
}

function createRecipeCard(recipe) {
    const isFav = state.favorites.includes(recipe.id);
    return `
        <div class="recipe-card slide-up" onclick="window.location.hash = 'recipe/${recipe.id}'">
            <div class="card-img-container">
                <img src="${recipe.image}" alt="${recipe.name}">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${recipe.id}')">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="card-body">
                <span class="card-category">${recipe.category}</span>
                <h3 class="card-title">${recipe.name}</h3>
                <div style="display: flex; gap: 1rem; color: var(--text-muted); font-size: 0.8rem; margin-bottom: 1rem;">
                    <span><i class="far fa-clock"></i> ${recipe.time || '30 min'}</span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty || 'Fácil'}</span>
                </div>
                <p class="card-desc">${recipe.description}</p>
            </div>
        </div>
    `;
}

function renderDetail(container, id) {
    const r = RECIPES.find(recipe => recipe.id === id);
    if (!r) {
        container.innerHTML = `<div class="container" style="padding: 10rem; text-align:center;"><h2>Ops! Receita não encontrada.</h2><a href="#" class="hero-btn">Voltar ao Início</a></div>`;
        return;
    }

    const isFav = state.favorites.includes(r.id);

    container.innerHTML = `
        <div class="recipe-detail container slide-up">
            <div class="detail-header">
                <div>
                    <span class="badge" style="margin-bottom: 1rem;">${r.category}</span>
                    <h1 class="detail-title">${r.name}</h1>
                    <div style="display: flex; gap: 2rem; margin-top: 1.5rem; color: var(--text-muted); font-weight: 600;">
                        <span><i class="far fa-clock" style="color: var(--primary);"></i> ${r.time || '30 min'}</span>
                        <span><i class="fas fa-signal" style="color: var(--primary);"></i> ${r.difficulty || 'Fácil'}</span>
                        <span><i class="fas fa-utensils" style="color: var(--primary);"></i> ${r.servings || '4 pessoas'}</span>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button class="hero-btn" onclick="window.print()" style="background: var(--gray-100); color: var(--primary); box-shadow: none; border: 1px solid var(--gray-200);">
                        <i class="fas fa-print"></i> Imprimir
                    </button>
                    <button class="hero-btn" onclick="toggleFavorite('${r.id}')" style="background: ${isFav ? 'var(--gray-900)' : 'var(--secondary)'};">
                        <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                        ${isFav ? 'Salvo' : 'Salvar'}
                    </button>
                </div>
            </div>

            <div class="detail-layout">
                <main class="detail-main">
                    <div class="video-container">
                        <iframe src="${r.video}" frameborder="0" allowfullscreen></iframe>
                    </div>

                    <div class="instructions-section">
                        <h2><i class="fas fa-list-ol" style="color: var(--primary);"></i> Modo de Preparo</h2>
                        <div class="instructions-content glass" style="padding: 2.5rem; border-radius: 20px;">
                            ${r.instructions.replace(/\n/g, '<br><br>')}
                        </div>
                    </div>
                </main>

                <aside class="detail-sidebar glass">
                    <h2><i class="fas fa-mortar-pestle" style="color: var(--primary);"></i> Ingredientes</h2>
                    <ul>
                        ${r.ingredients.map(ing => `<li><i class="fas fa-check-circle"></i> <span>${ing}</span></li>`).join('')}
                    </ul>
                    
                    <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-200); text-align: center;">
                        <p style="font-weight: 900; color: var(--primary); font-size: 1.2rem; margin-bottom: 0.5rem;">Cozinhe com Amor!</p>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">Compartilhe suas fotos com a tag #Gisrecipes</p>
                        <div class="social-links" style="justify-content: center; margin-top: 1.5rem;">
                            <a href="#" class="btn-icon" style="background: var(--primary); color: white;"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="btn-icon" style="background: var(--primary); color: white;"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    `;
}

function renderFavorites(container) {
    const favs = RECIPES.filter(r => state.favorites.includes(r.id));
    container.innerHTML = `
        <div class="container slide-up" style="padding: 6rem 1.5rem;">
            <h1 class="section-title">Minhas Receitas Favoritas</h1>
            ${favs.length === 0 ? 
                `<div class="glass" style="padding: 8rem 4rem; text-align: center; border-radius: 30px;">
                    <i class="fas fa-heart-broken" style="font-size: 5rem; color: var(--gray-200); margin-bottom: 2rem;"></i>
                    <h2 style="margin-bottom: 1rem;">Sua lista está vazia</h2>
                    <p style="color: var(--text-muted); margin-bottom: 2rem;">Explore nossas receitas e salve as suas favoritas aqui.</p>
                    <a href="#" class="hero-btn">Descobrir Receitas</a>
                </div>` : 
                `<div class="recipe-grid">${favs.map(r => createRecipeCard(r)).join('')}</div>`
            }
        </div>
    `;
}

function renderCategory(container, category) {
    const filtered = RECIPES.filter(r => r.category.toLowerCase() === category.toLowerCase());
    container.innerHTML = `
        <div class="container slide-up" style="padding: 6rem 1.5rem;">
             <h1 class="section-title">Categoria: ${category}</h1>
             <div class="recipe-grid">
                ${filtered.map(r => createRecipeCard(r)).join('')}
             </div>
        </div>
    `;
}

function renderAbout(container) {
    container.innerHTML = `
        <div class="container slide-up" style="padding: 8rem 1.5rem; text-align: center;">
            <div style="background: var(--primary); width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 3rem; color: white; font-size: 3rem;">
                <i class="fas fa-mortar-pestle"></i>
            </div>
            <h1 style="font-size: 4rem; margin-bottom: 2rem;">Nossa Missão</h1>
            <div style="max-width: 900px; margin: 0 auto; line-height: 2.2; font-size: 1.3rem; color: var(--text-muted);" class="glass" style="padding: 4rem; border-radius: 30px;">
                <p>O <strong>Gisrecipes</strong> nasceu da paixão por transformar a cozinha em um lugar de alegria e criatividade. Acreditamos que cozinhar não é apenas seguir passos, mas criar conexões e memórias.</p>
                <p style="margin-top: 2rem;">Nossa plataforma oferece curadoria de receitas testadas e aprovadas, com vídeos dinâmicos e guias passo a passo pensados para facilitar sua vida, seja você um chef experiente ou alguém que acabou de comprar sua primeira panela.</p>
            </div>
        </div>
    `;
}

// --- Utilities ---
function toggleFavorite(id) {
    const index = state.favorites.indexOf(id);
    if (index > -1) {
        state.favorites.splice(index, 1);
    } else {
        state.favorites.push(id);
    }
    localStorage.setItem('gisrecipes-favorites', JSON.stringify(state.favorites));
    render();
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('gisrecipes-theme', state.theme);
    initThemeUI();
}

function initThemeUI() {
    document.body.setAttribute('data-theme', state.theme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.className = state.theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

function initSearch() {
    const input = document.querySelector('.search-input');
    input?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 1) {
            const results = RECIPES.filter(r => r.name.toLowerCase().includes(query) || r.category.toLowerCase().includes(query));
            displaySearchResults(results, query);
        } else if (query.length === 0) {
            handleRouting();
        }
    });
}

function displaySearchResults(results, query) {
    const container = document.getElementById('app-content');
    container.innerHTML = `
        <div class="container slide-up" style="padding: 6rem 1.5rem;">
            <h1 class="section-title">Resultados para "${query}"</h1>
            ${results.length === 0 ? 
                `<div style="padding: 4rem; text-align: center;">
                    <i class="fas fa-search-minus" style="font-size: 4rem; color: var(--gray-200); margin-bottom: 1rem;"></i>
                    <p>Nenhuma receita encontrada para sua busca.</p>
                </div>` : 
                `<div class="recipe-grid">${results.map(r => createRecipeCard(r)).join('')}</div>`}
        </div>
    `;
}

function initMobileMenu() {
    const mt = document.getElementById('mobile-toggle');
    const mm = document.getElementById('mobile-menu');
    const cb = document.getElementById('close-mobile');
    
    mt?.addEventListener('click', () => { mm.style.display = 'flex'; });
    cb?.addEventListener('click', () => { mm.style.display = 'none'; });
    mm?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mm.style.display = 'none'; }));
}

// Start
init();

