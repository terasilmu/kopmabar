// JavaScript Logic untuk KOPMABAR

// Tailwind Configuration Init
tailwind.config = {
    theme: {
        extend: {
            colors: {
                kopBlue: '#0f52ba',      /* Biru Utama KOPMABAR */
                kopDarkBlue: '#003399',
                kopGreen: '#16a34a',     /* Hijau Sejahtera */
                kopGold: '#eab308',      /* Aksen Emas ALL-IN-ONE */
                kopBg: '#e5e7eb',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                script: ['Great Vibes', 'cursive'],
            }
        }
    }
};

// Pill Navbar Active Switch
function setActivePill(element) {
    document.querySelectorAll('.pill-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

// Hero Slider Logic
let currentSlide = 0;
let slides;
const labels = [
    '1 / 5: Pemberdayaan_Ekonomi',
    '2 / 5: Kemandirian_Anggota',
    '3 / 5: Jaringan_Kopmabar_Mart',
    '4 / 5: Sinergi_UMKM_Banggai',
    '5 / 5: E_Koperasi_Transparan'
];

function showSlide(index) {
    if (!slides) slides = document.querySelectorAll('.hero-slide');
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
    });
    document.getElementById('slideLabel').innerText = labels[index];
    currentSlide = index;
}

function nextSlide() {
    if (!slides) slides = document.querySelectorAll('.hero-slide');
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    if (!slides) slides = document.querySelectorAll('.hero-slide');
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

// Auto slider 5 detik
setInterval(nextSlide, 5000);

// Modal Handlers
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function openRegisterModal(category) {
    document.getElementById('regCategoryText').innerText = category;
    document.getElementById('inputJenisModal').value = category;
    openModal('modal-register');
}

function showUnitDetail(unit) {
    alert(`Menampilkan detail unit usaha: ${unit.toUpperCase()}`);
}

// Simulator Pinjaman
let currentTenor = 12;
function setTenor(tenor, btn) {
    currentTenor = tenor;
    document.querySelectorAll('.tenor-btn').forEach(b => {
        b.classList.remove('border-kopBlue', 'bg-blue-50', 'text-kopBlue');
        b.classList.add('border-gray-200', 'bg-gray-50', 'text-gray-700');
    });
    btn.classList.add('border-kopBlue', 'bg-blue-50', 'text-kopBlue');
    calculateLoan();
}

function calculateLoan() {
    const val = parseInt(document.getElementById('loanRange').value);
    document.getElementById('loanValText').innerText = `Rp ${val.toLocaleString('id-ID')}`;

    const pokok = Math.round(val / currentTenor);
    const jasa = Math.round(val * 0.008); // 0.8% flat
    const total = pokok + jasa;

    document.getElementById('resPokok').innerText = `Rp ${pokok.toLocaleString('id-ID')}`;
    document.getElementById('resJasa').innerText = `Rp ${jasa.toLocaleString('id-ID')}`;
    document.getElementById('resTotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

// Estimasi SHU
function calcSHU() {
    const simpanan = parseInt(document.getElementById('simpananInput').value) || 0;
    const belanja = parseInt(document.getElementById('belanjaInput').value) || 0;
    const estSHU = Math.round((simpanan * 0.08) + (belanja * 0.06));
    document.getElementById('resSHU').innerText = `Rp ${estSHU.toLocaleString('id-ID')}`;
}

// Live Chat Admin 24/7
function toggleChatWindow() {
    document.getElementById('chatWindow').classList.toggle('hidden');
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    if (!input.value.trim()) return;

    const chatBody = document.getElementById('chatBody');
    const userMsg = document.createElement('div');
    userMsg.className = "bg-kopBlue text-white p-3 rounded-2xl shadow-xs max-w-[85%] ml-auto text-right";
    userMsg.innerText = input.value;
    chatBody.appendChild(userMsg);

    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        const adminReply = document.createElement('div');
        adminReply.className = "bg-white p-3 rounded-2xl border border-gray-200 shadow-xs max-w-[85%]";
        adminReply.innerText = "Terima kasih atas pesan Anda. Customer service KOPMABAR akan menghubungi Anda segera.";
        chatBody.appendChild(adminReply);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

// Search Modal
function toggleSearchModal() {
    document.getElementById('searchModal').classList.toggle('hidden');
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert("Terima kasih! Pendaftaran anggota Anda telah kami terima dan sedang diproses.");
    closeModal('modal-register');
}