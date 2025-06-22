// Surah data - List of all 114 Surah in Al-Quran
const surahData = [
    { number: 1, name: "Al-Fatihah", arabic: "الفاتحة", meaning: "Pembuka", ayat: 7, juz: 1, revelation: "Makkiyah" },
    { number: 2, name: "Al-Baqarah", arabic: "البقرة", meaning: "Sapi Betina", ayat: 286, juz: 1, revelation: "Madaniyah" },
    { number: 3, name: "Ali Imran", arabic: "آل عمران", meaning: "Keluarga Imran", ayat: 200, juz: 3, revelation: "Madaniyah" },
    { number: 4, name: "An-Nisa", arabic: "النساء", meaning: "Wanita", ayat: 176, juz: 4, revelation: "Madaniyah" },
    { number: 5, name: "Al-Maidah", arabic: "المائدة", meaning: "Hidangan", ayat: 120, juz: 6, revelation: "Madaniyah" },
    { number: 6, name: "Al-An'am", arabic: "الأنعام", meaning: "Binatang Ternak", ayat: 165, juz: 7, revelation: "Makkiyah" },
    { number: 7, name: "Al-A'raf", arabic: "الأعراف", meaning: "Tempat Tinggi", ayat: 206, juz: 8, revelation: "Makkiyah" },
    { number: 8, name: "Al-Anfal", arabic: "الأنفال", meaning: "Harta Rampasan", ayat: 75, juz: 9, revelation: "Madaniyah" },
    { number: 9, name: "At-Taubah", arabic: "التوبة", meaning: "Pengampunan", ayat: 129, juz: 10, revelation: "Madaniyah" },
    { number: 10, name: "Yunus", arabic: "يونس", meaning: "Nabi Yunus", ayat: 109, juz: 11, revelation: "Makkiyah" },
    { number: 11, name: "Hud", arabic: "هود", meaning: "Nabi Hud", ayat: 123, juz: 11, revelation: "Makkiyah" },
    { number: 12, name: "Yusuf", arabic: "يوسف", meaning: "Nabi Yusuf", ayat: 111, juz: 12, revelation: "Makkiyah" },
    { number: 13, name: "Ar-Ra'd", arabic: "الرعد", meaning: "Guruh", ayat: 43, juz: 13, revelation: "Madaniyah" },
    { number: 14, name: "Ibrahim", arabic: "ابراهيم", meaning: "Nabi Ibrahim", ayat: 52, juz: 13, revelation: "Makkiyah" },
    { number: 15, name: "Al-Hijr", arabic: "الحجر", meaning: "Hijr", ayat: 99, juz: 14, revelation: "Makkiyah" },
    { number: 16, name: "An-Nahl", arabic: "النحل", meaning: "Lebah", ayat: 128, juz: 14, revelation: "Makkiyah" },
    { number: 17, name: "Al-Isra", arabic: "الإسراء", meaning: "Perjalanan Malam", ayat: 111, juz: 15, revelation: "Makkiyah" },
    { number: 18, name: "Al-Kahf", arabic: "الكهف", meaning: "Gua", ayat: 110, juz: 15, revelation: "Makkiyah" },
    { number: 19, name: "Maryam", arabic: "مريم", meaning: "Maryam", ayat: 98, juz: 16, revelation: "Makkiyah" },
    { number: 20, name: "Ta Ha", arabic: "طه", meaning: "Ta Ha", ayat: 135, juz: 16, revelation: "Makkiyah" },
    { number: 21, name: "Al-Anbiya", arabic: "الأنبياء", meaning: "Para Nabi", ayat: 112, juz: 17, revelation: "Makkiyah" },
    { number: 22, name: "Al-Hajj", arabic: "الحج", meaning: "Haji", ayat: 78, juz: 17, revelation: "Madaniyah" },
    { number: 23, name: "Al-Mu'minun", arabic: "المؤمنون", meaning: "Orang Beriman", ayat: 118, juz: 18, revelation: "Makkiyah" },
    { number: 24, name: "An-Nur", arabic: "النور", meaning: "Cahaya", ayat: 64, juz: 18, revelation: "Madaniyah" },
    { number: 25, name: "Al-Furqan", arabic: "الفرقان", meaning: "Pembeda", ayat: 77, juz: 18, revelation: "Makkiyah" },
    { number: 26, name: "Ash-Shu'ara", arabic: "الشعراء", meaning: "Para Penyair", ayat: 227, juz: 19, revelation: "Makkiyah" },
    { number: 27, name: "An-Naml", arabic: "النمل", meaning: "Semut", ayat: 93, juz: 19, revelation: "Makkiyah" },
    { number: 28, name: "Al-Qasas", arabic: "القصص", meaning: "Cerita", ayat: 88, juz: 20, revelation: "Makkiyah" },
    { number: 29, name: "Al-Ankabut", arabic: "العنكبوت", meaning: "Laba-laba", ayat: 69, juz: 20, revelation: "Makkiyah" },
    { number: 30, name: "Ar-Rum", arabic: "الروم", meaning: "Bangsa Romawi", ayat: 60, juz: 21, revelation: "Makkiyah" },
    { number: 31, name: "Luqman", arabic: "لقمان", meaning: "Luqman", ayat: 34, juz: 21, revelation: "Makkiyah" },
    { number: 32, name: "As-Sajdah", arabic: "السجدة", meaning: "Sujud", ayat: 30, juz: 21, revelation: "Makkiyah" },
    { number: 33, name: "Al-Ahzab", arabic: "الأحزاب", meaning: "Golongan Bersekutu", ayat: 73, juz: 21, revelation: "Madaniyah" },
    { number: 34, name: "Saba", arabic: "سبأ", meaning: "Kaum Saba", ayat: 54, juz: 22, revelation: "Makkiyah" },
    { number: 35, name: "Fatir", arabic: "فاطر", meaning: "Pencipta", ayat: 45, juz: 22, revelation: "Makkiyah" },
    { number: 36, name: "Ya Sin", arabic: "يس", meaning: "Ya Sin", ayat: 83, juz: 22, revelation: "Makkiyah" },
    { number: 37, name: "As-Saffat", arabic: "الصافات", meaning: "Yang Bershaf-shaf", ayat: 182, juz: 23, revelation: "Makkiyah" },
    { number: 38, name: "Sad", arabic: "ص", meaning: "Sad", ayat: 88, juz: 23, revelation: "Makkiyah" },
    { number: 39, name: "Az-Zumar", arabic: "الزمر", meaning: "Rombongan", ayat: 75, juz: 23, revelation: "Makkiyah" },
    { number: 40, name: "Ghafir", arabic: "غافر", meaning: "Yang Mengampuni", ayat: 85, juz: 24, revelation: "Makkiyah" },
    { number: 41, name: "Fussilat", arabic: "فصلت", meaning: "Yang Dijelaskan", ayat: 54, juz: 24, revelation: "Makkiyah" },
    { number: 42, name: "Ash-Shura", arabic: "الشورى", meaning: "Musyawarah", ayat: 53, juz: 25, revelation: "Makkiyah" },
    { number: 43, name: "Az-Zukhruf", arabic: "الزخرف", meaning: "Perhiasan", ayat: 89, juz: 25, revelation: "Makkiyah" },
    { number: 44, name: "Ad-Dukhan", arabic: "الدخان", meaning: "Kabut", ayat: 59, juz: 25, revelation: "Makkiyah" },
    { number: 45, name: "Al-Jathiyah", arabic: "الجاثية", meaning: "Yang Bertekuk Lutut", ayat: 37, juz: 25, revelation: "Makkiyah" },
    { number: 46, name: "Al-Ahqaf", arabic: "الأحقاف", meaning: "Bukit Pasir", ayat: 35, juz: 26, revelation: "Makkiyah" },
    { number: 47, name: "Muhammad", arabic: "محمد", meaning: "Muhammad", ayat: 38, juz: 26, revelation: "Madaniyah" },
    { number: 48, name: "Al-Fath", arabic: "الفتح", meaning: "Kemenangan", ayat: 29, juz: 26, revelation: "Madaniyah" },
    { number: 49, name: "Al-Hujurat", arabic: "الحجرات", meaning: "Kamar-kamar", ayat: 18, juz: 26, revelation: "Madaniyah" },
    { number: 50, name: "Qaf", arabic: "ق", meaning: "Qaf", ayat: 45, juz: 26, revelation: "Makkiyah" },
    { number: 51, name: "Adh-Dhariyat", arabic: "الذاريات", meaning: "Yang Menerbangkan", ayat: 60, juz: 26, revelation: "Makkiyah" },
    { number: 52, name: "At-Tur", arabic: "الطور", meaning: "Bukit Tursina", ayat: 49, juz: 27, revelation: "Makkiyah" },
    { number: 53, name: "An-Najm", arabic: "النجم", meaning: "Bintang", ayat: 62, juz: 27, revelation: "Makkiyah" },
    { number: 54, name: "Al-Qamar", arabic: "القمر", meaning: "Bulan", ayat: 55, juz: 27, revelation: "Makkiyah" },
    { number: 55, name: "Ar-Rahman", arabic: "الرحمن", meaning: "Yang Maha Pengasih", ayat: 78, juz: 27, revelation: "Madaniyah" },
    { number: 56, name: "Al-Waqi'ah", arabic: "الواقعة", meaning: "Hari Kiamat", ayat: 96, juz: 27, revelation: "Makkiyah" },
    { number: 57, name: "Al-Hadid", arabic: "الحديد", meaning: "Besi", ayat: 29, juz: 27, revelation: "Madaniyah" },
    { number: 58, name: "Al-Mujadilah", arabic: "المجادلة", meaning: "Wanita Yang Berdebat", ayat: 22, juz: 28, revelation: "Madaniyah" },
    { number: 59, name: "Al-Hashr", arabic: "الحشر", meaning: "Pengusiran", ayat: 24, juz: 28, revelation: "Madaniyah" },
    { number: 60, name: "Al-Mumtahanah", arabic: "الممتحنة", meaning: "Wanita Yang Diuji", ayat: 13, juz: 28, revelation: "Madaniyah" },
    { number: 61, name: "As-Saff", arabic: "الصف", meaning: "Barisan", ayat: 14, juz: 28, revelation: "Madaniyah" },
    { number: 62, name: "Al-Jumu'ah", arabic: "الجمعة", meaning: "Hari Jumat", ayat: 11, juz: 28, revelation: "Madaniyah" },
    { number: 63, name: "Al-Munafiqun", arabic: "المنافقون", meaning: "Orang Munafik", ayat: 11, juz: 28, revelation: "Madaniyah" },
    { number: 64, name: "At-Taghabun", arabic: "التغابن", meaning: "Hari Dinampakkan Kesalahan", ayat: 18, juz: 28, revelation: "Madaniyah" },
    { number: 65, name: "At-Talaq", arabic: "الطلاق", meaning: "Talak", ayat: 12, juz: 28, revelation: "Madaniyah" },
    { number: 66, name: "At-Tahrim", arabic: "التحريم", meaning: "Pengharaman", ayat: 12, juz: 28, revelation: "Madaniyah" },
    { number: 67, name: "Al-Mulk", arabic: "الملك", meaning: "Kerajaan", ayat: 30, juz: 29, revelation: "Makkiyah" },
    { number: 68, name: "Al-Qalam", arabic: "القلم", meaning: "Pena", ayat: 52, juz: 29, revelation: "Makkiyah" },
    { number: 69, name: "Al-Haqqah", arabic: "الحاقة", meaning: "Hari Kiamat", ayat: 52, juz: 29, revelation: "Makkiyah" },
    { number: 70, name: "Al-Ma'arij", arabic: "المعارج", meaning: "Tempat Naik", ayat: 44, juz: 29, revelation: "Makkiyah" },
    { number: 71, name: "Nuh", arabic: "نوح", meaning: "Nabi Nuh", ayat: 28, juz: 29, revelation: "Makkiyah" },
    { number: 72, name: "Al-Jinn", arabic: "الجن", meaning: "Jin", ayat: 28, juz: 29, revelation: "Makkiyah" },
    { number: 73, name: "Al-Muzzammil", arabic: "المزمل", meaning: "Orang Yang Berselimut", ayat: 20, juz: 29, revelation: "Makkiyah" },
    { number: 74, name: "Al-Muddaththir", arabic: "المدثر", meaning: "Orang Yang Berkemul", ayat: 56, juz: 29, revelation: "Makkiyah" },
    { number: 75, name: "Al-Qiyamah", arabic: "القيامة", meaning: "Kiamat", ayat: 40, juz: 29, revelation: "Makkiyah" },
    { number: 76, name: "Al-Insan", arabic: "الإنسان", meaning: "Manusia", ayat: 31, juz: 29, revelation: "Madaniyah" },
    { number: 77, name: "Al-Mursalat", arabic: "المرسلات", meaning: "Malaikat Yang Diutus", ayat: 50, juz: 29, revelation: "Makkiyah" },
    { number: 78, name: "An-Naba", arabic: "النبأ", meaning: "Berita Besar", ayat: 40, juz: 30, revelation: "Makkiyah" },
    { number: 79, name: "An-Nazi'at", arabic: "النازعات", meaning: "Yang Mencabut", ayat: 46, juz: 30, revelation: "Makkiyah" },
    { number: 80, name: "Abasa", arabic: "عبس", meaning: "Bermuka Masam", ayat: 42, juz: 30, revelation: "Makkiyah" },
    { number: 81, name: "At-Takwir", arabic: "التكوير", meaning: "Menggulung", ayat: 29, juz: 30, revelation: "Makkiyah" },
    { number: 82, name: "Al-Infitar", arabic: "الإنفطار", meaning: "Terbelah", ayat: 19, juz: 30, revelation: "Makkiyah" },
    { number: 83, name: "Al-Mutaffifin", arabic: "المطففين", meaning: "Orang Curang", ayat: 36, juz: 30, revelation: "Makkiyah" },
    { number: 84, name: "Al-Inshiqaq", arabic: "الإنشقاق", meaning: "Terbelah", ayat: 25, juz: 30, revelation: "Makkiyah" },
    { number: 85, name: "Al-Buruj", arabic: "البروج", meaning: "Gugusan Bintang", ayat: 22, juz: 30, revelation: "Makkiyah" },
    { number: 86, name: "At-Tariq", arabic: "الطارق", meaning: "Yang Datang Malam", ayat: 17, juz: 30, revelation: "Makkiyah" },
    { number: 87, name: "Al-A'la", arabic: "الأعلى", meaning: "Yang Maha Tinggi", ayat: 19, juz: 30, revelation: "Makkiyah" },
    { number: 88, name: "Al-Ghashiyah", arabic: "الغاشية", meaning: "Hari Pembalasan", ayat: 26, juz: 30, revelation: "Makkiyah" },
    { number: 89, name: "Al-Fajr", arabic: "الفجر", meaning: "Fajar", ayat: 30, juz: 30, revelation: "Makkiyah" },
    { number: 90, name: "Al-Balad", arabic: "البلد", meaning: "Negeri", ayat: 20, juz: 30, revelation: "Makkiyah" },
    { number: 91, name: "Ash-Shams", arabic: "الشمس", meaning: "Matahari", ayat: 15, juz: 30, revelation: "Makkiyah" },
    { number: 92, name: "Al-Lail", arabic: "الليل", meaning: "Malam", ayat: 21, juz: 30, revelation: "Makkiyah" },
    { number: 93, name: "Ad-Duha", arabic: "الضحى", meaning: "Duha", ayat: 11, juz: 30, revelation: "Makkiyah" },
    { number: 94, name: "Ash-Sharh", arabic: "الشرح", meaning: "Lapang", ayat: 8, juz: 30, revelation: "Makkiyah" },
    { number: 95, name: "At-Tin", arabic: "التين", meaning: "Buah Tin", ayat: 8, juz: 30, revelation: "Makkiyah" },
    { number: 96, name: "Al-Alaq", arabic: "العلق", meaning: "Segumpal Darah", ayat: 19, juz: 30, revelation: "Makkiyah" },
    { number: 97, name: "Al-Qadr", arabic: "القدر", meaning: "Kemuliaan", ayat: 5, juz: 30, revelation: "Makkiyah" },
    { number: 98, name: "Al-Bayyinah", arabic: "البينة", meaning: "Bukti Yang Nyata", ayat: 8, juz: 30, revelation: "Madaniyah" },
    { number: 99, name: "Az-Zalzalah", arabic: "الزلزلة", meaning: "Kegoncangan", ayat: 8, juz: 30, revelation: "Madaniyah" },
    { number: 100, name: "Al-Adiyat", arabic: "العاديات", meaning: "Kuda Perang", ayat: 11, juz: 30, revelation: "Makkiyah" },
    { number: 101, name: "Al-Qari'ah", arabic: "القارعة", meaning: "Hari Kiamat", ayat: 11, juz: 30, revelation: "Makkiyah" },
    { number: 102, name: "At-Takathur", arabic: "التكاثر", meaning: "Bermegah-megahan", ayat: 8, juz: 30, revelation: "Makkiyah" },
    { number: 103, name: "Al-Asr", arabic: "العصر", meaning: "Masa", ayat: 3, juz: 30, revelation: "Makkiyah" },
    { number: 104, name: "Al-Humazah", arabic: "الهمزة", meaning: "Pengumpat", ayat: 9, juz: 30, revelation: "Makkiyah" },
    { number: 105, name: "Al-Fil", arabic: "الفيل", meaning: "Gajah", ayat: 5, juz: 30, revelation: "Makkiyah" },
    { number: 106, name: "Quraish", arabic: "قريش", meaning: "Suku Quraisy", ayat: 4, juz: 30, revelation: "Makkiyah" },
    { number: 107, name: "Al-Ma'un", arabic: "الماعون", meaning: "Barang Berguna", ayat: 7, juz: 30, revelation: "Makkiyah" },
    { number: 108, name: "Al-Kautsar", arabic: "الكوثر", meaning: "Nikmat Yang Berlimpah", ayat: 3, juz: 30, revelation: "Makkiyah" },
    { number: 109, name: "Al-Kafirun", arabic: "الكافرون", meaning: "Orang Kafir", ayat: 6, juz: 30, revelation: "Makkiyah" },
    { number: 110, name: "An-Nasr", arabic: "النصر", meaning: "Pertolongan", ayat: 3, juz: 30, revelation: "Madaniyah" },
    { number: 111, name: "Al-Masad", arabic: "المسد", meaning: "Sabut", ayat: 5, juz: 30, revelation: "Makkiyah" },
    { number: 112, name: "Al-Ikhlas", arabic: "الإخلاص", meaning: "Ikhlas", ayat: 4, juz: 30, revelation: "Makkiyah" },
    { number: 113, name: "Al-Falaq", arabic: "الفلق", meaning: "Waktu Subuh", ayat: 5, juz: 30, revelation: "Makkiyah" },
    { number: 114, name: "An-Nas", arabic: "الناس", meaning: "Manusia", ayat: 6, juz: 30, revelation: "Makkiyah" }
];

// Mobile Navigation Toggle
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('mobile-active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('mobile-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking on nav links
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('mobile-active');
    document.body.style.overflow = 'auto';
}

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // If the clicked item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Contact Form Validation and Handling
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formMessage = document.getElementById('formMessage');
    const nama = form.nama.value.trim();
    const email = form.email.value.trim();
    const subjek = form.subjek.value.trim();
    const pesan = form.pesan.value.trim();
    
    // Reset message
    formMessage.className = '';
    formMessage.textContent = '';
    
    // Basic validation
    if (!nama || !email || !subjek || !pesan) {
        showFormMessage('error', 'Mohon lengkapi semua field yang wajib diisi (*)');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('error', 'Format email tidak valid. Contoh: nama@email.com');
        return;
    }
    
    // Minimum length validation
    if (nama.length < 2) {
        showFormMessage('error', 'Nama harus minimal 2 karakter');
        return;
    }
    
    if (subjek.length < 5) {
        showFormMessage('error', 'Subjek harus minimal 5 karakter');
        return;
    }
    
    if (pesan.length < 10) {
        showFormMessage('error', 'Pesan harus minimal 10 karakter');
        return;
    }
    
    // Simulate form submission (since no actual backend)
    showFormMessage('success', 'Terima kasih! Pesan Anda telah berhasil dikirim. Tim kami akan merespons dalam 1x24 jam.');
    
    // Reset form after successful submission
    setTimeout(() => {
        form.reset();
        formMessage.className = '';
        formMessage.textContent = '';
    }, 5000);
}

// Show form message function
function showFormMessage(type, message) {
    const formMessage = document.getElementById('formMessage');
    formMessage.className = type;
    formMessage.textContent = message;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Surah filtering and search function
function filterSurah() {
    const searchTerm = document.getElementById('searchSurah').value.toLowerCase();
    const filterJuz = document.getElementById('filterJuz').value;
    const filterRevelation = document.getElementById('filterRevelation').value;
    
    const filteredSurah = surahData.filter(surah => {
        const matchesSearch = surah.name.toLowerCase().includes(searchTerm) || 
                             surah.arabic.includes(searchTerm) || 
                             surah.meaning.toLowerCase().includes(searchTerm);
        const matchesJuz = !filterJuz || surah.juz.toString() === filterJuz;
        const matchesRevelation = !filterRevelation || surah.revelation === filterRevelation;
        
        return matchesSearch && matchesJuz && matchesRevelation;
    });
    
    displaySurah(filteredSurah);
}

// Display surah cards
function displaySurah(surahList) {
    const surahGrid = document.getElementById('surahGrid');
    const noResults = document.getElementById('noResults');
    
    if (surahList.length === 0) {
        surahGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    surahGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    surahGrid.innerHTML = surahList.map(surah => `
        <div class="surah-card">
            <div class="surah-header">
                <div class="surah-number">${surah.number}</div>
                <div class="surah-info">
                    <h3 class="surah-name">${surah.name}</h3>
                    <div class="surah-arabic">${surah.arabic}</div>
                </div>
            </div>
            
            <div class="surah-details">
                <div class="detail-item">
                    <span class="icon">📄</span>
                    <span>${surah.ayat} Ayat</span>
                </div>
                <div class="detail-item">
                    <span class="icon">📖</span>
                    <span>Juz ${surah.juz}</span>
                </div>
                <div class="detail-item">
                    <span class="icon">🕌</span>
                    <span>${surah.revelation}</span>
                </div>
            </div>
            
            <p class="surah-meaning">"${surah.meaning}"</p>
            
            <div class="surah-actions">
                <a href="#" class="btn btn-small btn-read" onclick="readSurah(${surah.number})">Baca</a>
                <a href="#" class="btn btn-small btn-listen" onclick="listenSurah(${surah.number})">Dengar</a>
            </div>
        </div>
    `).join('');
    
    // Re-initialize scroll animations for new cards
    initScrollAnimations();
}

// Placeholder functions for surah actions
function readSurah(surahNumber) {
    alert(`Membuka surah nomor ${surahNumber} untuk dibaca.\n\nFitur ini akan tersedia dalam versi lengkap aplikasi.`);
}

function listenSurah(surahNumber) {
    alert(`Memulai audio murotal surah nomor ${surahNumber}.\n\nFitur ini akan tersedia dalam versi lengkap aplikasi.`);
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(27, 43, 42, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--bg-dark-primary)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation
    document.querySelectorAll('.pricing-card, .faq-item, .contact-form-container, .contact-info-container, .surah-card, .stat-card, .about-intro-image, .about-intro-content, .vision-item, .mission-item, .team-member, .value-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Add event listeners
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Contact form event listener
    const contactForm = document.getElementById('mainContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Add click listeners to nav links for mobile
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize header scroll effect
    initHeaderScrollEffect();
    
    // Initialize surah display
    if (document.getElementById('surahGrid')) {
        displaySurah(surahData);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        if (navMenu.classList.contains('mobile-active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});

// Initialize scroll animations after page load
window.addEventListener('load', initScrollAnimations);