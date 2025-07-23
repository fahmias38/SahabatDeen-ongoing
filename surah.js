// JS untuk halaman surah, dipindahkan dari surah1.html
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
    alert(`Memutar ayat ${ayatNumber}. Fitur ini akan tersedia dalam versi lengkap.`);
}
function bookmarkAyat(ayatNumber) {
    const surahNumber = window.surahNumber || 1;
    const surahName = window.surahName || 'Al-Fatihah';
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const bookmark = {
        surah: surahNumber,
        ayat: ayatNumber,
        surahName: surahName,
        text: document.querySelector(`#ayat-${ayatNumber} .ayat-arabic`).textContent,
        translation: document.querySelector(`#ayat-${ayatNumber} .ayat-translation`).textContent,
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
        document.getElementById('personalNotes').value = noteData.notes;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    loadNotes();
    updateBookmarkButtons();
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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && !e.target.matches('textarea, input')) {
        e.preventDefault();
        toggleAudio();
    }
    if (e.code === 'ArrowLeft') {
        // Previous surah (implementasi opsional)
    }
    if (e.code === 'ArrowRight') {
        // Next surah (implementasi opsional)
    }
}); 