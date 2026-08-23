/**
 * Namangan Shashlik - Interactive Menu & Pricing Management Engine
 * Instagram: @namangan.shashlik
 */

// Default Dataset
const DEFAULT_MENU = [
    // Shashliklar
    { id: 'gosht', name: "Go'sht shashlik", category: 'shashlik', price: 18000, desc: "Tansiq qo'y va mol go'shtidan shirali shashlik", img: 'images/mol_gosht_shashlik.png', badge: "Xushxo'r" },
    { id: 'yogsiz_gosht', name: "Yog'siz go'sht", category: 'shashlik', price: 18000, desc: "Sof va yog'siz saralangan lahm go'sht shashlik", img: 'images/yogsiz_gosht_shashlik.png', badge: "Dieta" },
    { id: 'oddiy_qiyma', name: "Oddiy qiyma", category: 'shashlik', price: 15000, desc: "An'anaviy uslubda tayyorlangan qiyma shashlik", img: 'images/oddiy_qiyma_shashlik.png', badge: "Klassik" },
    { id: 'achchiq_qiyma', name: "Achchiq qiyma", category: 'shashlik', price: 15000, desc: "Achchiq murch va ziravorlar bilan to'yintirilgan qiyma", img: 'images/achchiq_qiyma_shashlik.jpg', badge: "Achchiq 🔥" },
    { id: 'zakas_qiyma', name: "Zakas qiyma", category: 'shashlik', price: 17000, desc: "Maxsus retsept bo'yicha tayyorlangan yumshoq qiyma", img: 'images/zakas_qiyma_shashlik.png', badge: "Maxsus" },
    { id: 'rulet', name: "Rulet shashlik", category: 'shashlik', price: 20000, desc: "Yupqa tilim go'sht va pishloqli rulet shashlik", img: 'images/rulet_shashlik.png', badge: "Hit" },
    { id: 'biqin', name: "Biqin shashlik", category: 'shashlik', price: 22000, desc: "Qapurg'a va biqin go'shtidan xushbo'y shashlik", img: 'images/biqin_shashlik.png', badge: "Tansiq" },
    { id: 'qanot', name: "Qanot shashlik", category: 'shashlik', price: 14000, desc: "Qarsillama tovuq qanotlaridan pishirilgan shashlik", img: 'images/qanot_shashlik.png', badge: "Tovuq" },
    { id: 'qoy_goshti', name: "Qo'y go'shti shashlik", category: 'shashlik', price: 18000, desc: "Maza va siri o'zgacha yumshoq qo'y go'shti shashlik", img: 'images/qoy_goshti_shashlik.png', badge: "Tansiq 🐑" },

    // Suvlar va Ichimliklar
    { id: 'fanta', name: "Fanta (1.5 L)", category: 'drink', price: 12000, desc: "Muzdek salqin va gazlangan apelsinli Fanta", img: 'images/drinks_mix_1786725713620.jpg', badge: "Salqin" },
    { id: 'cola', name: "Coca Cola (1.5 L)", category: 'drink', price: 12000, desc: "Klassik Coca Cola muzdek idishda", img: 'images/drinks_mix_1786725713620.jpg', badge: "Top" },
    { id: 'pepsi', name: "Pepsi (1.5 L)", category: 'drink', price: 12000, desc: "Tazelik baxsh etuvchi salqin Pepsi", img: 'images/drinks_mix_1786725713620.jpg', badge: "Salqin" },
    { id: 'sprite', name: "Sprite (1.5 L)", category: 'drink', price: 12000, desc: "Limon va laym ta'mli tetiklantiruvchi Sprite", img: 'images/drinks_mix_1786725713620.jpg', badge: "Salqin" },
    { id: 'win_suv', name: "Bezgaz suv Win (1 L)", category: 'drink', price: 4000, desc: "Sof va toza tabiiy bezgaz mineral suv", img: 'images/drinks_mix_1786725713620.jpg', badge: "Tabiiy" },
    { id: 'kompot', name: "Uy kompoti (1 L)", category: 'drink', price: 10000, desc: "Tabiiy mevalardan tayyorlangan shirin uy kompoti", img: 'images/drinks_mix_1786725713620.jpg', badge: "Uy uslubi" },
    { id: 'sovuq_choy', name: "Sovuq choy (Ice Tea)", category: 'drink', price: 8000, desc: "Limonli va muzli tetiklantiruvchi sovuq choy", img: 'images/drinks_mix_1786725713620.jpg', badge: "Tetik" },
    { id: 'qora_choy', name: "Qora choy (Choynak)", category: 'drink', price: 3000, desc: "Xushbo'y damlangan issiq qora choy", img: 'images/drinks_mix_1786725713620.jpg', badge: "Issiq" },
    { id: 'kok_choy', name: "Ko'k choy (Choynak)", category: 'drink', price: 3000, desc: "Namangan uslubidagi an'anaviy 95-ko'k choy", img: 'images/drinks_mix_1786725713620.jpg', badge: "Milliy" },

    // Salatlar va Qo'shimchalar
    { id: 'svejiy_salat', name: "Svejiy salat (Achichuk)", category: 'side', price: 10000, desc: "Yangi pomidor, bodring va toza murchli salat", img: 'images/svejiy_salat.jpg', badge: "Yangi" },
    { id: 'suzma', name: "Suzma", category: 'side', price: 8000, desc: "Ko'katlar va osh tuzlangan mazali uzbek suzmasi", img: 'images/suzma.jpg', badge: "Milliy" },
    { id: 'piyoz', name: "Sirka piyoz", category: 'side', price: 3000, desc: "Sirka va ziravorlar bilan marinovka qilingan piyoz", img: 'images/piyoz.jpg', badge: "Qo'shimcha" },
    { id: 'mumtoz_non', name: "Mumtoz non", category: 'side', price: 5000, desc: "Chekichida M harfi tushirilgan issiq va qarsillama tandir noni", img: 'images/mumtoz_non.jpg', badge: "Tandir non 🍞" }
];

// Application State
let menuData = [];
let cart = {}; // { itemId: quantity }
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryTabs = document.getElementById('category-tabs');
const itemCountBadge = document.getElementById('item-count-badge');

const cartBar = document.getElementById('cart-bar');
const cartBadgeCount = document.getElementById('cart-badge-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const clearCartBtn = document.getElementById('clear-cart-btn');
const viewOrderBtn = document.getElementById('view-order-btn');

// Order Modal Elements
const orderModal = document.getElementById('order-modal');
const closeOrderModal = document.getElementById('close-order-modal');
const receiptItemsList = document.getElementById('receipt-items-list');
const receiptDate = document.getElementById('receipt-date');
const modalGrandTotal = document.getElementById('modal-grand-total');
const modalClearBtn = document.getElementById('modal-clear-btn');
const shareWhatsappBtn = document.getElementById('share-whatsapp-btn');

// Admin Modal Elements
const adminToggleBtn = document.getElementById('admin-toggle-btn');
const adminModal = document.getElementById('admin-modal');
const closeAdminModal = document.getElementById('close-admin-modal');
const adminPriceGrid = document.getElementById('admin-price-grid');
const resetPricesBtn = document.getElementById('reset-prices-btn');
const savePricesBtn = document.getElementById('save-prices-btn');

// Toast Element
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const toastIcon = document.getElementById('toast-icon');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    loadPrices();
    renderMenu();
    setupEventListeners();
});

// Load Prices from LocalStorage or Fallback
function loadPrices() {
    const savedPrices = localStorage.getItem('namangan_shashlik_prices');
    if (savedPrices) {
        try {
            const priceMap = JSON.parse(savedPrices);
            menuData = DEFAULT_MENU.map(item => ({
                ...item,
                price: priceMap[item.id] !== undefined ? Number(priceMap[item.id]) : item.price
            }));
        } catch (e) {
            console.error("LocalStorage parse error", e);
            menuData = JSON.parse(JSON.stringify(DEFAULT_MENU));
        }
    } else {
        menuData = JSON.parse(JSON.stringify(DEFAULT_MENU));
    }
}

// Save Prices to LocalStorage
function savePrices(priceMap) {
    localStorage.setItem('namangan_shashlik_prices', JSON.stringify(priceMap));
    loadPrices();
    renderMenu();
    updateCartUI();
    showToast("Narxlar muvaffaqiyatli saqlandi!", "success");
}

// SVG Fallback graphics if images folder is missing or offline
const FALLBACK_FOOD_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Cpath d='M80 150 L320 150' stroke='%23f97316' stroke-width='6' stroke-linecap='round'/%3E%3Ccircle cx='130' cy='150' r='20' fill='%23ef4444'/%3E%3Ccircle cx='200' cy='150' r='20' fill='%23eab308'/%3E%3Ccircle cx='270' cy='150' r='20' fill='%23ef4444'/%3E%3Ctext x='50%25' y='230' dominant-baseline='middle' text-anchor='middle' fill='%23f8fafc' font-family='sans-serif' font-size='20' font-weight='bold'%3ENamangan Shashlik%3C/text%3E%3C/svg%3E";

// Format Price to So'm
function formatPrice(amount) {
    return amount.toLocaleString('uz-UZ') + " so'm";
}

// Render Menu Items
function renderMenu() {
    menuGrid.innerHTML = '';

    const filtered = menuData.filter(item => {
        const matchesCat = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    itemCountBadge.textContent = `${filtered.length} ta mahsulot`;

    if (filtered.length === 0) {
        menuGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-utensils" style="font-size: 48px; margin-bottom: 12px; color: var(--text-dim);"></i>
                <p style="font-size: 16px;">Biror bir mos keluvchi taom topilmadi.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const qty = cart[item.id] || 0;
        
        const card = document.createElement('div');
        card.className = 'food-card';
        card.dataset.id = item.id;
        card.innerHTML = `
            <div class="food-card-img-wrapper">
                <img src="${item.img}" alt="${item.name}" class="food-card-img" onerror="this.onerror=null; this.src='${FALLBACK_FOOD_IMG}';">
                <span class="food-card-badge">${item.badge}</span>
            </div>
            <div class="food-card-body">
                <div>
                    <h4 class="food-title">${item.name}</h4>
                    <p class="food-desc">${item.desc}</p>
                </div>
                <div class="food-card-footer">
                    <div class="food-price-box">
                        <span class="food-price-label">Narxi</span>
                        <span class="food-price">${formatPrice(item.price)}</span>
                    </div>

                    <div class="quantity-control" onclick="event.stopPropagation();">
                        <button class="qty-btn minus-btn" data-id="${item.id}">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="qty-val">${qty}</span>
                        <button class="qty-btn plus-btn" data-id="${item.id}">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });

    // Make entire food card click add +1 to cart
    document.querySelectorAll('.food-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.quantity-control')) {
                const id = card.dataset.id;
                updateItemQty(id, 1);
            }
        });
    });

    // Attach quantity button click events
    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = e.currentTarget.dataset.id;
            updateItemQty(id, -1);
        });
    });

    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = e.currentTarget.dataset.id;
            updateItemQty(id, 1);
        });
    });
}

// Update Cart Item Quantity
function updateItemQty(id, delta) {
    const currentQty = cart[id] || 0;
    const newQty = Math.max(0, currentQty + delta);

    if (newQty === 0) {
        delete cart[id];
    } else {
        cart[id] = newQty;
    }

    renderMenu();
    updateCartUI();
}

// Update Cart Summary Floating Bar
function updateCartUI() {
    let totalItems = 0;
    let grandTotal = 0;

    Object.keys(cart).forEach(id => {
        const item = menuData.find(m => m.id === id);
        if (item) {
            const qty = cart[id];
            totalItems += qty;
            grandTotal += item.price * qty;
        }
    });

    cartBadgeCount.textContent = totalItems;
    cartTotalPrice.textContent = formatPrice(grandTotal);

    if (totalItems > 0) {
        cartBar.classList.add('active');
    } else {
        cartBar.classList.remove('active');
    }
}

// Event Listeners
function setupEventListeners() {
    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            clearSearchBtn.hidden = searchQuery === '';
            renderMenu();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.hidden = true;
            renderMenu();
        });
    }

    // Category Tabs
    if (categoryTabs) {
        categoryTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (btn) {
                categoryTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category;
                renderMenu();
            }
        });
    }

    // Clear Cart
    clearCartBtn.addEventListener('click', () => {
        cart = {};
        renderMenu();
        updateCartUI();
        showToast("Buyurtma tozalandi", "info");
    });

    // View Order Modal
    viewOrderBtn.addEventListener('click', openOrderSummary);
    closeOrderModal.addEventListener('click', () => orderModal.classList.remove('active'));
    modalClearBtn.addEventListener('click', () => {
        cart = {};
        renderMenu();
        updateCartUI();
        orderModal.classList.remove('active');
        showToast("Buyurtma tozalandi", "info");
    });

    // Share via Telegram
    shareWhatsappBtn.addEventListener('click', shareViaTelegram);

    // Admin Price Modal
    adminToggleBtn.addEventListener('click', openAdminModal);
    closeAdminModal.addEventListener('click', () => adminModal.classList.remove('active'));
    savePricesBtn.addEventListener('click', handleSavePricesFromAdmin);
    resetPricesBtn.addEventListener('click', handleResetPrices);

    // QR Code Modal & Generator
    const qrCodeBtn = document.getElementById('qr-code-btn');
    const qrModal = document.getElementById('qr-modal');
    const closeQrModal = document.getElementById('close-qr-modal');
    const closeQrFooterBtn = document.getElementById('close-qr-footer-btn');
    const printQrBtn = document.getElementById('print-qr-btn');
    const qrUrlInput = document.getElementById('qr-url-input');
    const qrImg = document.getElementById('qr-image');
    const qrDisplayUrl = document.getElementById('qr-display-url');

    function updateQrCode(url) {
        if (!url || url.trim() === '') {
            url = window.location.href;
        }
        if (qrUrlInput && qrUrlInput !== document.activeElement) {
            qrUrlInput.value = url;
        }
        if (qrDisplayUrl) {
            qrDisplayUrl.textContent = url;
        }
        if (qrImg) {
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}&color=0f172a&bgcolor=ffffff`;
        }
        localStorage.setItem('namangan_shashlik_qr_url', url);
    }

    if (qrUrlInput) {
        qrUrlInput.addEventListener('input', (e) => {
            updateQrCode(e.target.value);
        });
    }

    if (qrCodeBtn) {
        qrCodeBtn.addEventListener('click', () => {
            const savedUrl = localStorage.getItem('namangan_shashlik_qr_url') || window.location.href;
            updateQrCode(savedUrl);
            qrModal.classList.add('active');
        });
    }
    if (closeQrModal) {
        closeQrModal.addEventListener('click', () => qrModal.classList.remove('active'));
    }
    if (closeQrFooterBtn) {
        closeQrFooterBtn.addEventListener('click', () => {
            showToast("QR Kod havolasi saqlandi!", "success");
            qrModal.classList.remove('active');
        });
    }
    if (printQrBtn) {
        printQrBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Close modals on clicking outside overlay
    [orderModal, adminModal, qrModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }
    });
}

// Open Order Summary Receipt Modal
function openOrderSummary() {
    receiptItemsList.innerHTML = '';
    let grandTotal = 0;
    const now = new Date();
    receiptDate.textContent = now.toLocaleDateString('uz-UZ') + ' | ' + now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });

    const itemKeys = Object.keys(cart);
    if (itemKeys.length === 0) {
        receiptItemsList.innerHTML = `<p style="text-align: center; color: var(--text-muted);">Savat bo'sh</p>`;
        modalGrandTotal.textContent = formatPrice(0);
    } else {
        itemKeys.forEach(id => {
            const item = menuData.find(m => m.id === id);
            if (item) {
                const qty = cart[id];
                const lineTotal = item.price * qty;
                grandTotal += lineTotal;

                const row = document.createElement('div');
                row.className = 'receipt-item-row';
                row.innerHTML = `
                    <span class="receipt-item-name">${item.name}</span>
                    <span class="receipt-item-qty">x${qty}</span>
                    <span class="receipt-item-price">${formatPrice(lineTotal)}</span>
                `;
                receiptItemsList.appendChild(row);
            }
        });

        modalGrandTotal.textContent = formatPrice(grandTotal);
    }

    orderModal.classList.add('active');
}

// Share Receipt to Telegram
function shareViaTelegram() {
    const itemKeys = Object.keys(cart);
    if (itemKeys.length === 0) {
        showToast("Buyurtma berish uchun mahsulot tanlang!", "error");
        return;
    }

    let text = `🍢 *Namangan Shashlik Buyurtmasi*\n\n`;
    let grandTotal = 0;

    itemKeys.forEach(id => {
        const item = menuData.find(m => m.id === id);
        if (item) {
            const qty = cart[id];
            const lineTotal = item.price * qty;
            grandTotal += lineTotal;
            text += `• ${item.name} x${qty} - ${formatPrice(lineTotal)}\n`;
        }
    });

    text += `\n💰 *Jami to'lov:* ${formatPrice(grandTotal)}\n`;
    text += `\n📍 *Instagram:* @namangan.shashlik`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://t.me/share/url?url=${encodedText}`, '_blank');
}

// Open Admin Price Management Modal
function openAdminModal() {
    adminPriceGrid.innerHTML = '';

    menuData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'admin-price-item';
        card.innerHTML = `
            <span class="admin-price-title">${item.name}</span>
            <div class="admin-price-input-group">
                <input type="number" step="1000" id="admin-input-${item.id}" value="${item.price}">
                <span class="admin-price-unit">so'm</span>
            </div>
        `;
        adminPriceGrid.appendChild(card);
    });

    adminModal.classList.add('active');
}

// Save Prices from Admin Modal
function handleSavePricesFromAdmin() {
    const priceMap = {};
    menuData.forEach(item => {
        const input = document.getElementById(`admin-input-${item.id}`);
        if (input && !isNaN(input.value) && Number(input.value) >= 0) {
            priceMap[item.id] = Number(input.value);
        } else {
            priceMap[item.id] = item.price;
        }
    });

    savePrices(priceMap);
    adminModal.classList.remove('active');
}

// Reset Prices to Default Values
function handleResetPrices() {
    if (confirm("Barcha narxlarni boshlang'ich standart qiymatlarga qaytarmoqchimisiz?")) {
        localStorage.removeItem('namangan_shashlik_prices');
        loadPrices();
        renderMenu();
        updateCartUI();
        adminModal.classList.remove('active');
        showToast("Narxlar standart holatga keltirildi", "info");
    }
}

// Toast System
function showToast(msg, type = 'success') {
    toastMessage.textContent = msg;
    if (type === 'success') {
        toastIcon.className = 'fa-solid fa-circle-check toast-icon';
        toast.style.borderColor = 'var(--accent-green)';
    } else if (type === 'error') {
        toastIcon.className = 'fa-solid fa-circle-exclamation toast-icon';
        toast.style.borderColor = 'var(--accent-red)';
    } else {
        toastIcon.className = 'fa-solid fa-circle-info toast-icon';
        toast.style.borderColor = 'var(--accent-blue)';
    }

    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}
