// ===================== DATA =====================
const imgs = {
    pill: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    vit: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80',
    bot: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80',
    cre: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
};

const productsData = [
    // مسكنات
    { id: 1, name: 'بانادول إكسترا', nameEn: 'Panadol Extra', price: 75, oldPrice: 90, category: 'مسكنات الألم', desc: 'باراسيتامول + كافيين — 24 قرص', image: imgs.pill, badge: 'offer', prescription: false },
    { id: 2, name: 'كتافلام 50 مجم', nameEn: 'Cataflam 50mg', price: 95, oldPrice: null, category: 'مسكنات الألم', desc: 'ديكلوفيناك بوتاسيوم — 30 قرص', image: imgs.pill, badge: null, prescription: false },
    { id: 3, name: 'بروفين 400 مجم', nameEn: 'Brufen 400mg', price: 55, oldPrice: null, category: 'مسكنات الألم', desc: 'إيبوبروفين — 20 قرص', image: imgs.pill, badge: null, prescription: false },
    { id: 4, name: 'فولتارين جل', nameEn: 'Voltaren Gel', price: 120, oldPrice: null, category: 'مسكنات الألم', desc: 'ديكلوفيناك موضعي — 100 جم', image: imgs.cre, badge: null, prescription: false },
    { id: 5, name: 'أركوكسيا 90', nameEn: 'Arcoxia 90mg', price: 165, oldPrice: null, category: 'مسكنات الألم', desc: 'إيتوريكوكسيب — 7 أقراص', image: imgs.pill, badge: null, prescription: true },
    // مضادات حيوية
    { id: 6, name: 'أوجمنتين 1 جم', nameEn: 'Augmentin 1g', price: 195, oldPrice: null, category: 'مضادات حيوية', desc: 'أموكسيسيلين + حمض كلافولانيك — 14 قرص', image: imgs.bot, badge: null, prescription: true },
    { id: 7, name: 'زيثروماكس 500', nameEn: 'Zithromax 500mg', price: 180, oldPrice: null, category: 'مضادات حيوية', desc: 'أزيثروميسين — 3 أقراص', image: imgs.pill, badge: null, prescription: true },
    { id: 8, name: 'فلاجيل 500', nameEn: 'Flagyl 500mg', price: 45, oldPrice: null, category: 'مضادات حيوية', desc: 'ميترونيدازول — 20 قرص', image: imgs.pill, badge: null, prescription: true },
    { id: 9, name: 'سيبروفلوكساسين 500', nameEn: 'Ciprofloxacin 500mg', price: 65, oldPrice: null, category: 'مضادات حيوية', desc: 'سيبروفلوكساسين — 10 أقراص', image: imgs.pill, badge: null, prescription: true },
    { id: 10, name: 'دوكسيسيكلين 100', nameEn: 'Doxycycline 100mg', price: 55, oldPrice: null, category: 'مضادات حيوية', desc: 'دوكسيسيكلين — 10 أقراص', image: imgs.pill, badge: null, prescription: true },
    // فيتامينات
    { id: 11, name: 'فيتامين C 1000', nameEn: 'Vitamin C 1000', price: 130, oldPrice: null, category: 'فيتامينات', desc: 'حمض الأسكوربيك فوار — 20 كيس', image: imgs.vit, badge: 'new', prescription: false },
    { id: 12, name: 'برفيكتيل', nameEn: 'Perfectil', price: 225, oldPrice: 270, category: 'فيتامينات', desc: 'فيتامينات كاملة للبشرة والشعر — 30 قرص', image: imgs.vit, badge: 'offer', prescription: false },
    { id: 13, name: 'أوميجا 3', nameEn: 'Omega 3', price: 110, oldPrice: null, category: 'فيتامينات', desc: 'أحماض دهنية لصحة القلب — 30 كبسولة', image: imgs.bot, badge: null, prescription: false },
    { id: 14, name: 'فيتامين د 1000', nameEn: 'Vitamin D 1000', price: 95, oldPrice: null, category: 'فيتامينات', desc: 'كوليكالسيفيرول — 30 كبسولة', image: imgs.vit, badge: null, prescription: false },
    { id: 15, name: 'مولتي فيتامين سنتروم', nameEn: 'Centrum', price: 195, oldPrice: 220, category: 'فيتامينات', desc: 'مولتي فيتامين متكامل — 30 قرص', image: imgs.vit, badge: 'offer', prescription: false },
    { id: 16, name: 'سلينيوم إيس', nameEn: 'Selenium Ace', price: 155, oldPrice: 185, category: 'فيتامينات', desc: 'مضادات أكسدة + سيلينيوم — 30 قرص', image: imgs.vit, badge: 'offer', prescription: false },
    { id: 17, name: 'زنك 50 مجم', nameEn: 'Zinc 50mg', price: 65, oldPrice: null, category: 'فيتامينات', desc: 'أقراص زنك لتقوية المناعة — 30 قرص', image: imgs.vit, badge: null, prescription: false },
    // نزلات البرد
    { id: 18, name: 'كونجستال', nameEn: 'Congestal', price: 45, oldPrice: null, category: 'نزلات البرد', desc: 'باراسيتامول + سودوإيفيدرين — 10 أقراص', image: imgs.pill, badge: null, prescription: false },
    { id: 19, name: 'أكتيفيد', nameEn: 'Actifed', price: 52, oldPrice: null, category: 'نزلات البرد', desc: 'ترييبروليدين + سودوإيفيدرين — 10 أقراص', image: imgs.pill, badge: null, prescription: false },
    { id: 20, name: 'ديكونجستال', nameEn: 'Decongestal', price: 38, oldPrice: null, category: 'نزلات البرد', desc: 'مزيل احتقان — 10 أقراص', image: imgs.pill, badge: null, prescription: false },
    // أدوية مزمنة
    { id: 21, name: 'ميتفورمين 1000', nameEn: 'Metformin 1000', price: 35, oldPrice: null, category: 'أدوية مزمنة', desc: 'لضبط سكر الدم — 30 قرص', image: imgs.pill, badge: null, prescription: true },
    { id: 22, name: 'أتورفاستاتين 40', nameEn: 'Atorvastatin 40mg', price: 55, oldPrice: null, category: 'أدوية مزمنة', desc: 'لخفض الكوليسترول — 30 قرص', image: imgs.pill, badge: null, prescription: true },
    { id: 23, name: 'أملوديبين 5 مجم', nameEn: 'Amlodipine 5mg', price: 42, oldPrice: null, category: 'أدوية مزمنة', desc: 'لضغط الدم — 30 قرص', image: imgs.pill, badge: null, prescription: true },
    { id: 24, name: 'أوميبرازول 20 مجم', nameEn: 'Omeprazole 20mg', price: 48, oldPrice: null, category: 'أدوية مزمنة', desc: 'لحموضة المعدة — 14 كبسولة', image: imgs.bot, badge: null, prescription: false },
    { id: 25, name: 'بانتوبرازول 40', nameEn: 'Pantoprazole 40mg', price: 75, oldPrice: null, category: 'أدوية مزمنة', desc: 'لقرحة المعدة — 14 قرص', image: imgs.pill, badge: null, prescription: true },
    // العناية بالبشرة
    { id: 26, name: 'نيفياكير كريم', nameEn: 'Nivea Cream', price: 75, oldPrice: null, category: 'العناية بالبشرة', desc: 'كريم مرطب للبشرة — 200 مل', image: imgs.cre, badge: null, prescription: false },
    { id: 27, name: 'درماكول كريم', nameEn: 'Dermacool', price: 95, oldPrice: null, category: 'العناية بالبشرة', desc: 'كريم مضاد للالتهابات — 30 جم', image: imgs.cre, badge: null, prescription: false },
    { id: 28, name: 'يوسيرين لوشن', nameEn: 'Eucerin Lotion', price: 185, oldPrice: 220, category: 'العناية بالبشرة', desc: 'لوشن مرطب للبشرة الجافة — 250 مل', image: imgs.cre, badge: 'offer', prescription: false },
    { id: 29, name: 'فيتامين هـ كريم', nameEn: 'Vitamin E Cream', price: 85, oldPrice: null, category: 'العناية بالبشرة', desc: 'كريم فيتامين E مغذي — 100 جم', image: imgs.cre, badge: null, prescription: false },
    // العناية بالشعر
    { id: 30, name: 'هير تون', nameEn: 'Hair Tone', price: 195, oldPrice: null, category: 'العناية بالشعر', desc: 'كبسولات لتقوية الشعر — 30 كبسولة', image: imgs.cre, badge: 'new', prescription: false },
    { id: 31, name: 'مينوكسيديل 5%', nameEn: 'Minoxidil 5%', price: 280, oldPrice: null, category: 'العناية بالشعر', desc: 'محلول موضعي لتساقط الشعر — 60 مل', image: imgs.bot, badge: null, prescription: false },
    { id: 32, name: 'فينيسيا كبسولات', nameEn: 'Venezia', price: 165, oldPrice: 195, category: 'العناية بالشعر', desc: 'مكمل غذائي لتقوية الشعر — 30 كبسولة', image: imgs.vit, badge: 'offer', prescription: false },
    // أدوية الأطفال
    { id: 33, name: 'بانادول أطفال شراب', nameEn: 'Panadol Baby Syrup', price: 65, oldPrice: null, category: 'أدوية الأطفال', desc: 'باراسيتامول للأطفال — 100 مل', image: imgs.bot, badge: null, prescription: false },
    { id: 34, name: 'إنشور بودرة', nameEn: 'Ensure Powder', price: 345, oldPrice: 395, category: 'أدوية الأطفال', desc: 'مكمل غذائي متكامل للأطفال — فانيليا', image: imgs.vit, badge: 'offer', prescription: false },
    { id: 35, name: 'نوفالوف قطرات', nameEn: 'Novalof Drops', price: 55, oldPrice: null, category: 'أدوية الأطفال', desc: 'لمغص الرضع — 15 مل', image: imgs.bot, badge: null, prescription: false },
    // التخسيس
    { id: 36, name: 'أوريستات 120', nameEn: 'Orlistat 120mg', price: 350, oldPrice: null, category: 'التخسيس', desc: 'لتقليل امتصاص الدهون — 30 كبسولة', image: imgs.bot, badge: null, prescription: true },
    { id: 37, name: 'جارسينيا كامبوجيا', nameEn: 'Garcinia Cambogia', price: 195, oldPrice: 240, category: 'التخسيس', desc: 'مكمل طبيعي لفقدان الوزن — 60 كبسولة', image: imgs.vit, badge: 'offer', prescription: false },
    // مستلزمات طبية
    { id: 38, name: 'شاش طبي معقم', nameEn: 'Sterile Gauze', price: 25, oldPrice: null, category: 'مستلزمات طبية', desc: 'شاش معقم — 10 قطع', image: imgs.pill, badge: null, prescription: false },
    { id: 39, name: 'جهاز قياس السكر', nameEn: 'Glucose Meter', price: 495, oldPrice: 595, category: 'مستلزمات طبية', desc: 'جهاز قياس جلوكوز الدم + 25 شريط', image: imgs.bot, badge: 'offer', prescription: false },
    { id: 40, name: 'جهاز قياس الضغط', nameEn: 'BP Monitor', price: 895, oldPrice: null, category: 'مستلزمات طبية', desc: 'جهاز رقمي لقياس ضغط الدم', image: imgs.bot, badge: null, prescription: false },
    // أدوية مزمنة إضافية
    { id: 41, name: 'ليفوثيروكسين 100', nameEn: 'Levothyroxine 100mcg', price: 38, oldPrice: null, category: 'أدوية مزمنة', desc: 'لعلاج قصور الغدة الدرقية — 50 قرص', image: imgs.pill, badge: null, prescription: true },
    { id: 42, name: 'ريلتيجريف', nameEn: 'Raltegravir', price: 4500, oldPrice: null, category: 'أدوية مزمنة', desc: 'مضاد فيروسي — 60 قرص', image: imgs.pill, badge: null, prescription: true },
    { id: 43, name: 'إزوميبرازول 40', nameEn: 'Esomeprazole 40mg', price: 85, oldPrice: null, category: 'أدوية مزمنة', desc: 'لارتجاع المريء — 14 قرص', image: imgs.pill, badge: null, prescription: false },
    { id: 44, name: 'فاستوم جيل', nameEn: 'Fastum Gel', price: 110, oldPrice: null, category: 'مسكنات الألم', desc: 'كيتوبروفين موضعي — 100 جم', image: imgs.cre, badge: null, prescription: false },
    { id: 45, name: 'بيكاربونات صوديوم', nameEn: 'Sodium Bicarbonate', price: 15, oldPrice: null, category: 'أدوية مزمنة', desc: 'لحموضة المعدة — 50 قرص', image: imgs.pill, badge: null, prescription: false },
];

const categoriesData = [
    { name: 'مسكنات الألم', icon: '💊' },
    { name: 'فيتامينات', icon: '🍊' },
    { name: 'أدوية الأطفال', icon: '🧸' },
    { name: 'العناية بالبشرة', icon: '🧴' },
    { name: 'مستلزمات طبية', icon: '🩺' },
    { name: 'أدوية مزمنة', icon: '❤️' },
    { name: 'التخسيس', icon: '⚖️' },
    { name: 'العناية بالشعر', icon: '💇' },
    { name: 'نزلات البرد', icon: '🤧' },
    { name: 'مضادات حيوية', icon: '🔬' },
    { name: 'صحة جنسية', icon: '💪' },
    { name: 'مستلزمات الأطفال', icon: '👶' },
];

const productsData = [
    { id: 1, name: 'بانادول إكسترا', nameEn: 'Panadol Extra', price: 75, oldPrice: 90, category: 'مسكنات الألم', desc: 'مسكن للألم والحرارة - 24 قرص', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', badge: 'offer', prescription: false },
    { id: 2, name: 'فيتامين C 1000', nameEn: 'Vitamin C 1000', price: 120, oldPrice: null, category: 'فيتامينات', desc: 'تقوية المناعة - 20 أكياس فوار', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80', badge: 'new', prescription: false },
    { id: 3, name: 'أوجمنتين 1 جم', nameEn: 'Augmentin 1g', price: 180, oldPrice: null, category: 'مضادات حيوية', desc: 'مضاد حيوي واسع الطيف - 14 قرص', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80', badge: null, prescription: true },
    { id: 4, name: 'كونجستال', nameEn: 'Congestal', price: 42, oldPrice: null, category: 'نزلات البرد', desc: 'لعلاج نزلات البرد والإنفلونزا - 10 أقراص', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', badge: null, prescription: false },
    { id: 5, name: 'برفيكتيل', nameEn: 'Perfectil', price: 210, oldPrice: 250, category: 'فيتامينات', desc: 'فيتامينات ومعادن متكاملة للبشرة والشعر', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80', badge: 'offer', prescription: false },
    { id: 6, name: 'هير تون', nameEn: 'Hair Tone', price: 180, oldPrice: null, category: 'العناية بالشعر', desc: 'كبسولات لتقوية الشعر ومنع التساقط', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80', badge: 'new', prescription: false },
    { id: 7, name: 'أوميجا 3', nameEn: 'Omega 3', price: 95, oldPrice: null, category: 'فيتامينات', desc: 'كبسولات أوميجا 3 لصحة القلب والمخ', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80', badge: null, prescription: false },
    { id: 8, name: 'نيفاكار كريم', nameEn: 'Niveacar Cream', price: 65, oldPrice: null, category: 'العناية بالبشرة', desc: 'كريم مرطب للبشرة - 200 مل', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', badge: null, prescription: false },
    { id: 9, name: 'إنشور باودر', nameEn: 'Ensure Powder', price: 320, oldPrice: 380, category: 'مستلزمات الأطفال', desc: 'مكمل غذائي كامل للأطفال - فانيليا', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80', badge: 'offer', prescription: false },
    { id: 10, name: 'ميتفورمين 500', nameEn: 'Metformin 500', price: 28, oldPrice: null, category: 'أدوية مزمنة', desc: 'لضبط سكر الدم - 60 قرص', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80', badge: null, prescription: true },
    { id: 11, name: 'أتورفاستاتين 40', nameEn: 'Atorvastatin 40', price: 45, oldPrice: null, category: 'أدوية مزمنة', desc: 'لخفض الكوليسترول - 30 قرص', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', badge: null, prescription: true },
    { id: 12, name: 'سلينيوم إيس', nameEn: 'Selenium Ace', price: 145, oldPrice: 170, category: 'التخسيس', desc: 'مضادات أكسدة لدعم الجهاز المناعي', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80', badge: 'offer', prescription: false },
];

// ===================== STATE =====================
let cart = JSON.parse(localStorage.getItem('pharmacy_cart') || '[]');
let activeCategory = 'الكل';

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFilterTabs();
    renderProducts('الكل');
    updateCartUI();
    setupPaymentListeners();
    setupScrollHeader();
    setupMobileMenu();
});

// ===================== CATEGORIES =====================
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categoriesData.map(c => `
    <div class="category-card" onclick="filterByCategory('${c.name}')">
      <div class="cat-icon">${c.icon}</div>
      <span>${c.name}</span>
    </div>
  `).join('');
}

// ===================== FILTER TABS =====================
function renderFilterTabs() {
    const tabs = document.getElementById('filterTabs');
    const uniqueCats = ['الكل', ...new Set(productsData.map(p => p.category))];
    tabs.innerHTML = uniqueCats.map(cat => `
    <button class="filter-tab ${cat === 'الكل' ? 'active' : ''}" onclick="filterByCategory('${cat}')">${cat}</button>
  `).join('');
}

function filterByCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.toggle('active', t.textContent === cat);
    });
    document.querySelectorAll('.category-card').forEach(c => {
        c.classList.toggle('active', c.querySelector('span').textContent === cat);
    });
    renderProducts(cat);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ===================== PRODUCTS =====================
function renderProducts(cat) {
    const grid = document.getElementById('productsGrid');
    const filtered = cat === 'الكل' ? productsData : productsData.filter(p => p.category === cat);
    if (!filtered.length) {
        grid.innerHTML = '<p style="text-align:center;color:#64748b;padding:3rem;grid-column:1/-1">لا توجد منتجات في هذا القسم حالياً</p>';
        return;
    }
    grid.innerHTML = filtered.map(p => {
        const inCart = cart.find(c => c.id === p.id);
        return `
      <div class="product-card" id="prod-${p.id}">
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'offer' ? '🔥 عرض' : p.badge === 'new' ? '✨ جديد' : '📄 روشتة'}</span>` : ''}
        ${p.prescription ? '<span class="product-badge badge-rx" style="top:.75rem;left:.75rem;right:auto">📄 يتطلب روشتة</span>' : ''}
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-body">
          <div class="product-cat">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div>
              <div class="product-price">${p.price} جنيه</div>
              ${p.oldPrice ? `<div class="product-old-price">${p.oldPrice} جنيه</div>` : ''}
            </div>
            <button class="btn-add ${inCart ? 'added' : ''}" id="btn-${p.id}" onclick="addToCart(${p.id})">
              ${inCart ? '✅ في السلة' : '+ أضف للسلة'}
            </button>
          </div>
        </div>
      </div>
    `;
    }).join('');
}

// ===================== SEARCH =====================
function doSearch() {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!q) return;
    const grid = document.getElementById('productsGrid');
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    const filtered = productsData.filter(p =>
        p.name.includes(q) || p.nameEn.toLowerCase().includes(q) || p.desc.includes(q) || p.category.includes(q)
    );
    if (!filtered.length) {
        grid.innerHTML = `<p style="text-align:center;color:#64748b;padding:3rem;grid-column:1/-1">لا توجد نتائج لـ "${q}"</p>`;
        return;
    }
    grid.innerHTML = filtered.map(p => {
        const inCart = cart.find(c => c.id === p.id);
        return `
      <div class="product-card">
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'offer' ? '🔥 عرض' : '✨ جديد'}</span>` : ''}
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-body">
          <div class="product-cat">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div>
              <div class="product-price">${p.price} جنيه</div>
              ${p.oldPrice ? `<div class="product-old-price">${p.oldPrice} جنيه</div>` : ''}
            </div>
            <button class="btn-add ${inCart ? 'added' : ''}" onclick="addToCart(${p.id})">
              ${inCart ? '✅ في السلة' : '+ أضف للسلة'}
            </button>
          </div>
        </div>
      </div>
    `;
    }).join('');
}

document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
});

// ===================== CART =====================
function addToCart(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    updateCartUI();
    const btn = document.getElementById(`btn-${id}`);
    if (btn) { btn.textContent = '✅ في السلة'; btn.classList.add('added'); }
    showToast(`✅ تمت إضافة ${product.name} للسلة`);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartUI();
    renderCartItems();
}

function updateQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else { saveCart(); updateCartUI(); renderCartItems(); }
}

function saveCart() {
    localStorage.setItem('pharmacy_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const count = cart.reduce((sum, c) => sum + c.qty, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    if (!cart.length) {
        container.innerHTML = '<div class="empty-cart"><p style="font-size:2rem">🛒</p><p>السلة فارغة</p></div>';
        footer.innerHTML = '';
        return;
    }
    container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${item.price * item.qty} جنيه</span>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})" title="حذف">🗑</button>
    </div>
  `).join('');
    const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    const delivery = total > 300 ? 0 : 25;
    footer.innerHTML = `
    <div class="cart-total"><span>الإجمالي:</span><span>${total + delivery} جنيه</span></div>
    ${delivery === 0 ? '<p style="color:var(--green);font-size:.8rem;margin-bottom:.75rem">🎉 شحن مجاني!</p>' : `<p style="color:var(--muted);font-size:.8rem;margin-bottom:.75rem">رسوم التوصيل: ${delivery} جنيه</p>`}
    <button class="btn-primary" style="width:100%" onclick="closeCart(); openCheckout()">إتمام الطلب 🛒</button>
  `;
}

function openCart() {
    renderCartItems();
    document.getElementById('cartModal').classList.add('open');
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('open');
}

document.getElementById('cartBtn').onclick = openCart;
document.getElementById('cartModal').addEventListener('click', e => {
    if (e.target === document.getElementById('cartModal')) closeCart();
});

function resetCart() {
    cart = [];
    saveCart();
    updateCartUI();
    renderProducts(activeCategory);
}

// ===================== CHECKOUT =====================
function openCheckout() {
    if (!cart.length) { showToast('⚠️ السلة فارغة!'); return; }
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
    document.getElementById('checkoutModal').classList.add('open');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('open');
}

function goToPayment() {
    const name = document.getElementById('co-name').value;
    const phone = document.getElementById('co-phone').value;
    const gov = document.getElementById('co-gov').value;
    const addr = document.getElementById('co-address').value;
    if (!name || !phone || !gov || !addr) { showToast('⚠️ يرجى ملء جميع البيانات'); return; }
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    renderOrderSummary();
}

function goToDelivery() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step1').classList.add('active');
}

function renderOrderSummary() {
    const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    const delivery = total > 300 ? 0 : 25;
    document.getElementById('orderSummary').innerHTML = `
    ${cart.map(c => `<div class="order-summary-item"><span>${c.name} × ${c.qty}</span><span>${c.price * c.qty} ج</span></div>`).join('')}
    <div class="order-summary-item"><span>رسوم التوصيل</span><span>${delivery === 0 ? 'مجاني 🎉' : delivery + ' ج'}</span></div>
    <div class="order-summary-total"><span>الإجمالي</span><span>${total + delivery} جنيه</span></div>
  `;
}

function placeOrder() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    const orderNum = 'SNP-' + Date.now().toString().slice(-6);
    document.getElementById('orderNumber').textContent = orderNum;
    showToast('🎉 تم تأكيد طلبك بنجاح!');
}

document.getElementById('checkoutModal').addEventListener('click', e => {
    if (e.target === document.getElementById('checkoutModal')) closeCheckout();
});

function setupPaymentListeners() {
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', () => {
            document.getElementById('vodafone-details').style.display = radio.value === 'vodafone' ? 'flex' : 'none';
            document.getElementById('card-details').style.display = radio.value === 'card' ? 'flex' : 'none';
        });
    });
}

// ===================== LOGIN =====================
document.getElementById('loginBtn').onclick = () => document.getElementById('loginModal').classList.add('open');

function closeLogin() {
    document.getElementById('loginModal').classList.remove('open');
}

document.getElementById('loginModal').addEventListener('click', e => {
    if (e.target === document.getElementById('loginModal')) closeLogin();
});

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', (i === 0) === (tab === 'login')));
    document.getElementById('loginForm').style.display = tab === 'login' ? 'flex' : 'none';
    document.getElementById('registerForm').style.display = tab === 'register' ? 'flex' : 'none';
}

// ===================== PRESCRIPTION =====================
function handlePrescription(input) {
    const file = input.files[0];
    if (!file) return;
    const preview = document.getElementById('prescPreview');
    const reader = new FileReader();
    reader.onload = e => {
        preview.innerHTML = `<img src="${e.target.result}" style="max-width:100%;border-radius:10px;margin-top:1rem" alt="روشتة" />`;
        document.getElementById('uploadZone').style.borderColor = 'var(--green)';
        showToast('✅ تم رفع الروشتة! سيتواصل معك الصيدلاني قريباً');
    };
    reader.readAsDataURL(file);
}

// Drag & Drop
const uploadZone = document.getElementById('uploadZone');
uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.style.background = '#f0fdf4'; });
uploadZone.addEventListener('dragleave', () => { uploadZone.style.background = ''; });
uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.style.background = '';
    const file = e.dataTransfer.files[0];
    if (file) { document.getElementById('prescFile').files = e.dataTransfer.files; handlePrescription(document.getElementById('prescFile')); }
});

// ===================== CONTACT =====================
function submitContact(e) {
    e.preventDefault();
    showToast('✅ تم إرسال رسالتك! سنتواصل معك قريباً');
    e.target.reset();
}

// ===================== HEADER SCROLL =====================
function setupScrollHeader() {
    window.addEventListener('scroll', () => {
        document.getElementById('main-header').style.boxShadow =
            window.scrollY > 50 ? '0 4px 24px rgba(0,0,0,.12)' : '0 2px 16px rgba(0,0,0,.06)';
    });
}

// ===================== MOBILE MENU =====================
function setupMobileMenu() {
    document.getElementById('menuToggle').onclick = () => {
        document.getElementById('mobileNav').classList.toggle('open');
    };
    document.querySelectorAll('.mobile-nav a').forEach(a => {
        a.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open'));
    });
}

// ===================== TOAST =====================
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}
