// JS untuk halaman surah dengan integrasi API Al-Quran
// API Configuration
const API_BASE_URL = 'https://api.alquran.cloud/v1';
const DEFAULT_EDITION = 'id.indonesian'; // Indonesian translation
const ARABIC_EDITION = 'ar.alafasy'; // Arabic edition
const AUDIO_EDITION = 'ar.alafasy'; // Audio edition

// Global variables
let currentSurahData = null;
let currentSurahNumber = 1;

// Theme Management
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}

// API Functions
async function fetchSurahData(surahNumber, edition = DEFAULT_EDITION) {
    try {
        showLoading(true);
        const response = await fetch(`${API_BASE_URL}/surah/${surahNumber}/${edition}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching surah data:', error);
        alert('Gagal memuat data surah. Silakan coba lagi.');
        return null;
    } finally {
        showLoading(false);
    }
}

async function fetchSurahInfo(surahNumber) {
    try {
        const response = await fetch(`${API_BASE_URL}/surah/${surahNumber}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching surah info:', error);
        return null;
    }
}

async function fetchMultipleEditions(surahNumber) {
    try {
        const [arabicData, translationData] = await Promise.all([
            fetchSurahData(surahNumber, ARABIC_EDITION),
            fetchSurahData(surahNumber, DEFAULT_EDITION)
        ]);
        return { arabic: arabicData, translation: translationData };
    } catch (error) {
        console.error('Error fetching multiple editions:', error);
        return null;
    }
}

// UI Functions
function showLoading(show) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = show ? 'block' : 'none';
    }
}

async function loadSurahContent(surahNumber) {
    currentSurahNumber = surahNumber;
    
    // Fetch surah info and content
    const [surahInfo, surahContent] = await Promise.all([
        fetchSurahInfo(surahNumber),
        fetchMultipleEditions(surahNumber)
    ]);

    if (!surahInfo || !surahContent) {
        return;
    }

    currentSurahData = {
        info: surahInfo,
        content: surahContent
    };

    // Update page content
    updateSurahHeader(surahInfo);
    updateSurahContent(surahContent);
    updateAudioPlayer(surahNumber);
    updateNavigation(surahNumber);
    
    // Set global variables for other functions
    window.surahNumber = surahNumber;
    window.surahName = surahInfo.englishName;
    window.totalAyat = surahInfo.numberOfAyahs;
    
    // Update bookmarks and load notes
    updateBookmarkButtons();
    loadNotes();
}

function updateSurahHeader(surahInfo) {
    // Update surah header
    document.querySelector('.surah-name-arabic').textContent = surahInfo.name;
    document.querySelector('.surah-name').textContent = surahInfo.englishName;
    document.querySelector('.surah-meaning').textContent = `"${surahInfo.englishNameTranslation}"`;
    
    // Update surah info
    document.querySelector('.info-item:nth-child(1) .info-value').textContent = surahInfo.numberOfAyahs;
    document.querySelector('.info-item:nth-child(2) .info-value').textContent = getJuzNumber(surahInfo.number);
    document.querySelector('.info-item:nth-child(3) .info-value').textContent = surahInfo.revelationType === 'Meccan' ? 'Makkah' : 'Madinah';
    document.querySelector('.info-item:nth-child(4) .info-value').textContent = surahInfo.number;
    
    // Update page title
    document.title = `Surah ${surahInfo.englishName} - QuranKu Digital`;
}

function updateSurahContent(surahContent) {
    const ayatContainer = document.querySelector('.ayat-container');
    ayatContainer.innerHTML = '';
    
    const arabicAyahs = surahContent.arabic.ayahs;
    const translationAyahs = surahContent.translation.ayahs;
    
    arabicAyahs.forEach((ayah, index) => {
        const translationAyah = translationAyahs[index];
        const ayatCard = createAyatCard(ayah, translationAyah, index + 1);
        ayatContainer.appendChild(ayatCard);
    });
}

function createAyatCard(arabicAyah, translationAyah, ayatNumber) {
    const ayatCard = document.createElement('div');
    ayatCard.className = 'ayat-card fade-in';
    ayatCard.id = `ayat-${ayatNumber}`;
    
    ayatCard.innerHTML = `
        <div class="ayat-number">${ayatNumber}</div>
        <div class="ayat-arabic">${arabicAyah.text}</div>
        <div class="ayat-transliteration">${generateTransliteration(arabicAyah.text)}</div>
        <div class="ayat-translation">${translationAyah.text}</div>
        <div class="ayat-actions">
            <button class="ayat-btn" onclick="playAyat(${ayatNumber})">🔊 Putar</button>
            <button class="ayat-btn" onclick="bookmarkAyat(${ayatNumber})">📚 Bookmark</button>
            <button class="ayat-btn" onclick="copyAyat(${ayatNumber})">📋 Salin</button>
            <button class="ayat-btn" onclick="shareAyat(${ayatNumber})">🔗 Bagikan</button>
        </div>
    `;
    
    return ayatCard;
}

function generateTransliteration(arabicText) {
    // Basic transliteration mapping - you can enhance this
    const transliterationMap = {
        'الله': 'Allah',
        'بسم': 'Bismi',
        'الرحمن': 'ar-Rahman',
        'الرحيم': 'ar-Raheem'
    };
    
    let transliteration = arabicText;
    for (const [arabic, latin] of Object.entries(transliterationMap)) {
        transliteration = transliteration.replace(new RegExp(arabic, 'g'), latin);
    }
    
    return transliteration;
}

function updateAudioPlayer(surahNumber) {
    const audio = document.getElementById('audioPlayer');
    if (audio) {
        const paddedNumber = surahNumber.toString().padStart(3, '0');
        audio.src = `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${paddedNumber}.mp3`;
        
        // Set data attributes for different qaris
        audio.dataset.surahMishary = `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${paddedNumber}.mp3`;
        audio.dataset.surahSudais = `https://download.quranicaudio.com/quran/abdul_basit_murattal/${paddedNumber}.mp3`;
        audio.dataset.surahMaher = `https://download.quranicaudio.com/quran/maher_almuaiqly/${paddedNumber}.mp3`;
        audio.dataset.surahHusary = `https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/${paddedNumber}.mp3`;
    }
}

function updateNavigation(surahNumber) {
    const prevBtn = document.querySelector('.surah-navigation .nav-btn:first-child');
    const nextBtn = document.querySelector('.surah-navigation .nav-btn:last-child');
    const navCurrent = document.querySelector('.nav-current');
    const navTotal = document.querySelector('.nav-total');
    
    if (prevBtn) {
        if (surahNumber > 1) {
            prevBtn.disabled = false;
            prevBtn.onclick = () => loadSurahContent(surahNumber - 1);
            prevBtn.innerHTML = '← Surah Sebelumnya';
        } else {
            prevBtn.disabled = true;
            prevBtn.innerHTML = '← Surah Sebelumnya';
        }
    }
    
    if (nextBtn) {
        if (surahNumber < 114) {
            nextBtn.disabled = false;
            nextBtn.onclick = () => loadSurahContent(surahNumber + 1);
            nextBtn.innerHTML = 'Surah Selanjutnya →';
        } else {
            nextBtn.disabled = true;
            nextBtn.innerHTML = 'Surah Selanjutnya →';
        }
    }
    
    if (navCurrent && currentSurahData) {
        navCurrent.textContent = `Surah ${currentSurahData.info.englishName}`;
    }
    
    if (navTotal) {
        navTotal.textContent = `Surah ${surahNumber} dari 114`;
    }
}

function getJuzNumber(surahNumber) {
    // Simplified juz mapping - you can make this more accurate
    const juzMapping = {
        1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1,
        8: 9, 9: 10, 10: 11, 11: 12, 12: 12, 13: 13
    };
    return juzMapping[surahNumber] || Math.ceil(surahNumber / 4);
}

// Audio Management
let isPlaying = false;
let currentAudio = null;

function toggleAudio() {
    const audio = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    
    if (isPlaying) {
        audio.pause();
        playIcon.innerHTML = '▶️';
        isPlaying = false;
    } else {
        audio.play().then(() => {
            playIcon.innerHTML = '<div class="loading"></div>';
            isPlaying = true;
        }).catch(error => {
            console.log('Audio play failed:', error);
            alert('Gagal memutar audio. Silakan coba lagi.');
        });
    }
}

function changeQori() {
    const select = document.getElementById('qoriSelect');
    const audio = document.getElementById('audioPlayer');
    const qoriUrls = {
        'mishary': audio.dataset.surahMishary || audio.src,
        'sudais': audio.dataset.surahSudais || audio.src,
        'maher': audio.dataset.surahMaher || audio.src,
        'husary': audio.dataset.surahHusary || audio.src
    };
    
    audio.src = qoriUrls[select.value];
    if (isPlaying) {
        audio.play();
    }
}

function updateProgress() {
    const audio = document.getElementById('audioPlayer');
    const progressFill = document.getElementById('progressFill');
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = progress + '%';
    }
}

function playAyat(ayatNumber) {
    // This would require individual ayat audio files
    alert(`Memutar ayat ${ayatNumber}. Fitur ini akan tersedia dalam versi lengkap.`);
}

function bookmarkAyat(ayatNumber) {
    const surahNumber = window.surahNumber || 1;
    const surahName = window.surahName || 'Al-Fatihah';
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    
    const ayatCard = document.querySelector(`#ayat-${ayatNumber}`);
    const bookmark = {
        surah: surahNumber,
        ayat: ayatNumber,
        surahName: surahName,
        text: ayatCard.querySelector('.ayat-arabic').textContent,
        translation: ayatCard.querySelector('.ayat-translation').textContent,
        timestamp: new Date().toISOString()
    };
    
    const existingIndex = bookmarks.findIndex(b => b.surah === surahNumber && b.ayat === ayatNumber);
    if (existingIndex > -1) {
        bookmarks.splice(existingIndex, 1);
        alert(`Bookmark ayat ${ayatNumber} dihapus.`);
    } else {
        bookmarks.push(bookmark);
        alert(`Ayat ${ayatNumber} ditambahkan ke bookmark.`);
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkButtons();
}

function copyAyat(ayatNumber) {
    const surahName = window.surahName || 'Al-Fatihah';
    const ayatCard = document.querySelector(`#ayat-${ayatNumber}`);
    const arabic = ayatCard.querySelector('.ayat-arabic').textContent;
    const transliteration = ayatCard.querySelector('.ayat-transliteration').textContent;
    const translation = ayatCard.querySelector('.ayat-translation').textContent;
    
    const textToCopy = `${surahName} ayat ${ayatNumber}:\n\n${arabic}\n\n${transliteration}\n\n${translation}\n\n📱 Dibaca dari QuranKu Digital`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Ayat berhasil disalin ke clipboard!');
    }).catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Ayat berhasil disalin ke clipboard!');
    });
}

function shareAyat(ayatNumber) {
    const surahName = window.surahName || 'Al-Fatihah';
    const ayatCard = document.querySelector(`#ayat-${ayatNumber}`);
    const arabic = ayatCard.querySelector('.ayat-arabic').textContent;
    const translation = ayatCard.querySelector('.ayat-translation').textContent;
    
    const shareText = `${surahName} ayat ${ayatNumber}:\n\n${arabic}\n\n"${translation}"\n\n📱 Baca lengkap di QuranKu Digital`;
    
    if (navigator.share) {
        navigator.share({
            title: `${surahName} ayat ${ayatNumber}`,
            text: shareText
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Ayat berhasil disalin untuk dibagikan!');
        });
    }
}

function updateBookmarkButtons() {
    const surahNumber = window.surahNumber || 1;
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const totalAyat = window.totalAyat || 7;
    
    for (let i = 1; i <= totalAyat; i++) {
        const button = document.querySelector(`#ayat-${i} .ayat-btn[onclick="bookmarkAyat(${i})"]`);
        const isBookmarked = bookmarks.some(b => b.surah === surahNumber && b.ayat === i);
        if (button) {
            if (isBookmarked) {
                button.classList.add('active');
                button.innerHTML = '📌 Bookmarked';
            } else {
                button.classList.remove('active');
                button.innerHTML = '📚 Bookmark';
            }
        }
    }
}

function saveNotes() {
    const surahNumber = window.surahNumber || 1;
    const surahName = window.surahName || 'Al-Fatihah';
    const notes = document.getElementById('personalNotes').value;
    
    const noteData = {
        surah: surahNumber,
        surahName: surahName,
        notes: notes,
        lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(`notes-surah-${surahNumber}`, JSON.stringify(noteData));
    alert('Catatan berhasil disimpan!');
}

function loadNotes() {
    const surahNumber = window.surahNumber || 1;
    const savedNotes = localStorage.getItem(`notes-surah-${surahNumber}`);
    if (savedNotes) {
        const noteData = JSON.parse(savedNotes);
        const notesTextarea = document.getElementById('personalNotes');
        if (notesTextarea) {
            notesTextarea.value = noteData.notes;
        }
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    
    // Get surah number from URL or default to 1
    const urlParams = new URLSearchParams(window.location.search);
    const surahNumber = parseInt(urlParams.get('surah')) || 1;
    
    // Load surah content
    loadSurahContent(surahNumber);
    
    // Setup audio player
    const audio = document.getElementById('audioPlayer');
    const playIcon = document.getElementById('playIcon');
    if (audio) {
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', () => {
            playIcon.innerHTML = '▶️';
            isPlaying = false;
            document.getElementById('progressFill').style.width = '0%';
        });
        audio.addEventListener('loadstart', () => {
            playIcon.innerHTML = '<div class="loading"></div>';
        });
        audio.addEventListener('canplay', () => {
            if (!isPlaying) {
                playIcon.innerHTML = '▶️';
            }
        });
    }
    
    // Setup intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Observe elements when they're added
    const observeElements = () => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };
    
    // Initial observation
    observeElements();
    
    // Re-observe when content changes
    const contentObserver = new MutationObserver(observeElements);
    contentObserver.observe(document.querySelector('.ayat-container'), {
        childList: true,
        subtree: true
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && !e.target.matches('textarea, input')) {
        e.preventDefault();
        toggleAudio();
    }
    if (e.code === 'ArrowLeft') {
        if (currentSurahNumber > 1) {
            loadSurahContent(currentSurahNumber - 1);
        }
    }
    if (e.code === 'ArrowRight') {
        if (currentSurahNumber < 114) {
            loadSurahContent(currentSurahNumber + 1);
        }
    }
});