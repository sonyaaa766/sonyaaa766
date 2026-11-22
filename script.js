/* ============ ДАННЫЕ ============ */
const STORAGE_KEY = 'pereplot_data';

const defaultData = {
  currentUser: {
    id: 1,
    name: 'Анна Петрова',
    bio: 'Люблю классическую литературу и фантастику',
    avatar: 'А',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    color: 'linear-gradient(135deg, #8b2635, #c9a96e)'
  },
  books: [
    { id: 1, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', genre: 'Роман', year: 1967, rating: 4.9, desc: 'Роман о визите дьявола в Москву 1930-х годов. Переплетение мистики, сатиры и вечной истории любви.', coverColor: '#1a0f0a', coverAccent: '#c9a96e', coverStyle: 'classic' },
    { id: 2, title: 'Преступление и наказание', author: 'Фёдор Достоевский', genre: 'Психологический роман', year: 1866, rating: 4.7, desc: 'История студента Раскольникова, его теории и мучительного пути к раскаянию.', coverColor: '#2d1b1b', coverAccent: '#8b0000', coverStyle: 'dramatic' },
    { id: 3, title: '1984', author: 'Джордж Оруэлл', genre: 'Антиутопия', year: 1949, rating: 4.8, desc: 'Мрачное пророчество о тоталитарном обществе, где Большой Брат следит за каждым.', coverColor: '#0a0a0a', coverAccent: '#ff0000', coverStyle: 'dystopian' },
    { id: 4, title: 'Маленький принц', author: 'Антуан де Сент-Экзюпери', genre: 'Сказка', year: 1943, rating: 4.9, desc: 'Философская сказка о любви, дружбе и ответственности за тех, кого приручили.', coverColor: '#1a2332', coverAccent: '#ffd700', coverStyle: 'whimsical' },
    { id: 5, title: 'Дюна', author: 'Фрэнк Герберт', genre: 'Фантастика', year: 1965, rating: 4.6, desc: 'Эпическая сага о пустынной планете Арракис и борьбе за самый ценный ресурс во вселенной.', coverColor: '#3d2817', coverAccent: '#d4a574', coverStyle: 'desert' },
    { id: 6, title: 'Анна Каренина', author: 'Лев Толстой', genre: 'Роман', year: 1877, rating: 4.5, desc: 'Великая история любви, семьи и трагедии на фоне русской жизни XIX века.', coverColor: '#1a0a1a', coverAccent: '#e91e63', coverStyle: 'romantic' },
    { id: 7, title: 'Гарри Поттер и философский камень', author: 'Дж. К. Роулинг', genre: 'Фэнтези', year: 1997, rating: 4.8, desc: 'Начало волшебной истории мальчика, который выжил, и его друзей в Хогвартсе.', coverColor: '#1a0a2e', coverAccent: '#9c27b0', coverStyle: 'magical' },
    { id: 8, title: 'Сто лет одиночества', author: 'Габриэль Гарсиа Маркес', genre: 'Магический реализм', year: 1967, rating: 4.7, desc: 'Сага о семи поколениях семьи Буэндиа в вымышленном городе Макондо.', coverColor: '#0a1a0a', coverAccent: '#4caf50', coverStyle: 'magical-realism' }
  ],
  reviews: [
    { id: 1, bookId: 1, userId: 1, rating: 5, text: 'Шедевр на все времена. Перечитываю каждый год.', date: '2026-11-15' },
    { id: 2, bookId: 1, userId: 2, rating: 5, text: 'Булгаков создал нечто невероятное. Каждая страница — откровение.', date: '2026-11-10' },
    { id: 3, bookId: 3, userId: 3, rating: 5, text: 'Пугающе актуально даже сегодня.', date: '2026-11-12' }
  ],
  readingList: [1, 3, 5],
  discussions: [
    { id: 1, title: 'Обсуждаем "Мастера и Маргариту"', bookId: 1, author: 'Анна Петрова', date: '2026-11-18', comments: 12, preview: 'Кто такой Мастер на самом деле? И почему Маргарита так важна для сюжета?' },
    { id: 2, title: 'Антиутопии: что актуальнее — 1984 или О дивный новый мир?', bookId: 3, author: 'Дмитрий Соколов', date: '2026-11-16', comments: 24, preview: 'Сравниваем два великих произведения и пытаемся понять, какое из них ближе к нашей реальности.' },
    { id: 3, title: 'Магический реализм Маркеса', bookId: 8, author: 'Елена Иванова', date: '2026-11-14', comments: 8, preview: 'Как понимать время в "Ста годах одиночества"? Линейно или циклично?' },
    { id: 4, title: 'Что читать этой зимой?', bookId: null, author: 'Михаил Орлов', date: '2026-11-19', comments: 31, preview: 'Делимся уютными и атмосферными книгами для холодных вечеров.' }
  ],
  meetings: [
    { id: 1, title: 'Обсуждение "Мастера и Маргариты"', date: '2026-11-25', time: '19:00', place: 'Кафе "Буквоед"', bookId: 1, attendees: 8 },
    { id: 2, title: 'Литературный вечер: антиутопии', date: '2026-11-28', time: '18:30', place: 'Библиотека им. Ленина', bookId: 3, attendees: 12 },
    { id: 3, title: 'Новогодняя встреча клуба', date: '2026-12-20', time: '17:00', place: 'Лофт "Чердак"', bookId: null, attendees: 20 },
    { id: 4, title: 'Встреча с писателем А. Смирновым', date: '2026-12-05', time: '19:30', place: 'Дом книги', bookId: null, attendees: 15 }
  ],
  members: [
    { id: 1, name: 'Анна Петрова', role: 'Основатель', photo: 'https://randomuser.me/api/portraits/women/44.jpg', avatar: 'А', color: 'linear-gradient(135deg, #8b2635, #c9a96e)', books: 42, reviews: 28 },
    { id: 2, name: 'Дмитрий Соколов', role: 'Модератор', photo: 'https://randomuser.me/api/portraits/men/32.jpg', avatar: 'Д', color: 'linear-gradient(135deg, #d46a4a, #8b2635)', books: 67, reviews: 45 },
    { id: 3, name: 'Елена Иванова', role: 'Участник', photo: 'https://randomuser.me/api/portraits/women/68.jpg', avatar: 'Е', color: 'linear-gradient(135deg, #7fb069, #c9a96e)', books: 31, reviews: 19 },
    { id: 4, name: 'Михаил Орлов', role: 'Участник', photo: 'https://randomuser.me/api/portraits/men/45.jpg', avatar: 'М', color: 'linear-gradient(135deg, #c9a96e, #d46a4a)', books: 55, reviews: 33 },
    { id: 5, name: 'Ольга Сидорова', role: 'Участник', photo: 'https://randomuser.me/api/portraits/women/22.jpg', avatar: 'О', color: 'linear-gradient(135deg, #8b2635, #7fb069)', books: 28, reviews: 15 },
    { id: 6, name: 'Павел Кузнецов', role: 'Участник', photo: 'https://randomuser.me/api/portraits/men/78.jpg', avatar: 'П', color: 'linear-gradient(135deg, #d46a4a, #c9a96e)', books: 39, reviews: 22 }
  ]
};

let data = loadData();
let currentPage = 'home';
let calendarDate = new Date(2026, 10, 1);
let profileTab = 'reading';
let currentRating = 0;

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  return JSON.parse(JSON.stringify(defaultData));
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

/* ============ НАВИГАЦИЯ ============ */
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function render() {
  const app = document.getElementById('app');
  switch(currentPage) {
    case 'home': app.innerHTML = renderHome(); break;
    case 'books': app.innerHTML = renderBooks(); break;
    case 'discussions': app.innerHTML = renderDiscussions(); break;
    case 'meetings': app.innerHTML = renderMeetings(); break;
    case 'members': app.innerHTML = renderMembers(); break;
    case 'profile': app.innerHTML = renderProfile(); break;
  }
}

/* ============ СТИЛИЗОВАННЫЕ ОБЛОЖКИ ============ */
function generateBookCover(book) {
  const styles = {
    classic: `background: linear-gradient(135deg, ${book.coverColor} 0%, #2d1810 100%);`,
    dramatic: `background: linear-gradient(180deg, ${book.coverColor} 0%, #1a0000 100%);`,
    dystopian: `background: linear-gradient(135deg, ${book.coverColor} 0%, #1a1a1a 100%);`,
    whimsical: `background: radial-gradient(circle at 30% 70%, ${book.coverAccent}22 0%, ${book.coverColor} 70%);`,
    desert: `background: linear-gradient(180deg, ${book.coverColor} 0%, #5d3a1a 100%);`,
    romantic: `background: linear-gradient(135deg, ${book.coverColor} 0%, #2d0a2d 100%);`,
    magical: `background: radial-gradient(circle at 50% 30%, ${book.coverAccent}33 0%, ${book.coverColor} 70%);`,
    'magical-realism': `background: linear-gradient(135deg, ${book.coverColor} 0%, #1a3a1a 100%);`
  };

  const decorations = {
    classic: `<div style="position:absolute; top:20px; left:20px; right:20px; bottom:20px; border:2px solid ${book.coverAccent}40; border-radius:8px;"></div>`,
    dramatic: `<div style="position:absolute; top:0; left:0; right:0; height:4px; background:${book.coverAccent};"></div><div style="position:absolute; bottom:0; left:0; right:0; height:4px; background:${book.coverAccent};"></div>`,
    dystopian: `<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:60px; height:60px; border:3px solid ${book.coverAccent}; border-radius:50%; opacity:0.3;"></div><div style="position:absolute; top:10px; left:10px; right:10px; text-align:center; font-family:'Inter',sans-serif; font-size:0.6rem; letter-spacing:3px; color:${book.coverAccent}; opacity:0.6;">БОЛЬШОЙ БРАТ СЛЕДИТ</div>`,
    whimsical: `<div style="position:absolute; top:30px; right:30px; font-size:3rem; opacity:0.5;">⭐</div><div style="position:absolute; top:70px; right:70px; font-size:1.5rem; opacity:0.4;">🌙</div>`,
    desert: `<div style="position:absolute; bottom:0; left:0; right:0; height:40%; background:linear-gradient(0deg, ${book.coverAccent}33 0%, transparent 100%);"></div><div style="position:absolute; top:20px; right:20px; font-size:2rem; opacity:0.5;">🌵</div>`,
    romantic: `<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:4rem; opacity:0.15;">❦</div>`,
    magical: `<div style="position:absolute; top:20px; left:20px; font-size:2rem; opacity:0.4;">✨</div><div style="position:absolute; bottom:30px; right:30px; font-size:1.5rem; opacity:0.4;">⚡</div>`,
    'magical-realism': `<div style="position:absolute; top:0; left:0; right:0; bottom:0; background:radial-gradient(circle at 20% 80%, ${book.coverAccent}15 0%, transparent 50%);"></div><div style="position:absolute; top:20px; right:20px; font-size:1.8rem; opacity:0.4;">🦋</div>`
  };

  return `
    <div style="position:absolute; inset:0; ${styles[book.coverStyle] || styles.classic} display:flex; align-items:center; justify-content:center; padding:2rem; text-align:center;">
      ${decorations[book.coverStyle] || ''}
      <div style="position:relative; z-index:1;">
        <div style="font-family:'Playfair Display',serif; font-size:1.6rem; font-weight:900; color:${book.coverAccent}; text-shadow:0 2px 10px rgba(0,0,0,0.5); line-height:1.2; margin-bottom:1rem;">${book.title}</div>
        <div style="font-family:'Playfair Display',serif; font-size:0.95rem; color:#f5efe6; opacity:0.8; font-style:italic;">${book.author}</div>
      </div>
    </div>
  `;
}

/* ============ СТРАНИЦЫ ============ */
function renderHome() {
  const totalBooks = data.books.length;
  const totalMembers = data.members.length;
  const totalMeetings = data.meetings.length;
  const totalReviews = data.reviews.length;

  return `
    <div class="page">
      <div class="hero">
        <h1>Читайте вместе.<br>Обсуждайте с умом.</h1>
        <p>«Книга — это сад, который можно носить в кармане» — арабская пословица</p>
        <button class="btn btn-primary" onclick="navigate('books')">Открыть библиотеку →</button>

        <div class="hero-stats">
          <div class="stat">
            <div class="stat-num">${totalBooks}</div>
            <div class="stat-label">книг в каталоге</div>
          </div>
          <div class="stat">
            <div class="stat-num">${totalMembers}</div>
            <div class="stat-label">участников клуба</div>
          </div>
          <div class="stat">
            <div class="stat-num">${totalMeetings}</div>
            <div class="stat-label">встреч запланировано</div>
          </div>
          <div class="stat">
            <div class="stat-num">${totalReviews}</div>
            <div class="stat-label">отзывов написано</div>
          </div>
        </div>
      </div>

      <h2 class="page-title" style="margin-top:3rem">Популярное сейчас</h2>
      <p class="page-subtitle">Что читают участники клуба на этой неделе</p>
      <div class="books-grid">
        ${data.books.slice(0, 4).map(bookCard).join('')}
      </div>
    </div>
  `;
}

function bookCard(book) {
  return `
    <div class="book-card" onclick="openBook(${book.id})">
      <div class="book-cover">
        ${generateBookCover(book)}
      </div>
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-meta">
          <span class="book-rating">★ ${book.rating.toFixed(1)}</span>
          <span class="book-genre">${book.genre}</span>
        </div>
      </div>
    </div>
  `;
}

function renderBooks() {
  return `
    <div class="page">
      <h1 class="page-title">Библиотека</h1>
      <p class="page-subtitle">Коллекция книг, которые мы читаем и обсуждаем</p>
      <div class="books-grid">
        ${data.books.map(bookCard).join('')}
      </div>
    </div>
  `;
}

function openBook(id) {
  const book = data.books.find(b => b.id === id);
  if (!book) return;
  const inReading = data.readingList.includes(id);
  const reviews = data.reviews.filter(r => r.bookId === id);

  document.getElementById('modalContent').innerHTML = `
    <button class="modal-close" onclick="closeModal()">×</button>
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-cover">
          ${generateBookCover(book)}
        </div>
        <div class="modal-info">
          <h2>${book.title}</h2>
          <div class="author">${book.author} · ${book.year}</div>
          <div class="desc">${book.desc}</div>
          <div style="color:var(--accent); font-size:1.2rem; margin-bottom:1rem;">
            ★ ${book.rating.toFixed(1)} · ${reviews.length} отзывов
          </div>
          <div class="modal-actions">
            <button class="btn btn-secondary ${inReading?'active':''}" onclick="toggleReading(${id})">
              ${inReading ? '✓ В списке чтения' : '+ В список чтения'}
            </button>
            <button class="btn btn-secondary" onclick="startDiscussion(${id})">💬 Обсудить</button>
          </div>
          <span class="book-genre" style="display:inline-block">${book.genre}</span>
        </div>
      </div>

      <div class="reviews-section">
        <h3>Отзывы читателей</h3>
        <div class="review-form">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem">
            <strong>Оставить отзыв</strong>
            <div class="star-rating" id="starRating">
              ${[1,2,3,4,5].map(i => `<span data-val="${i}" onclick="setRating(${i})">★</span>`).join('')}
            </div>
          </div>
          <textarea id="reviewText" placeholder="Поделитесь впечатлениями о книге..."></textarea>
          <button class="btn btn-primary" onclick="submitReview(${id})">Опубликовать</button>
        </div>
        <div id="reviewsList">
          ${reviews.length ? reviews.map(r => renderReview(r)).join('') : '<div class="empty-state"><div class="empty-state-icon">💭</div>Пока нет отзывов. Будьте первым!</div>'}
        </div>
      </div>
    </div>
  `;
  document.getElementById('modal').classList.add('active');
  currentRating = 0;
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

function setRating(val) {
  currentRating = val;
  document.querySelectorAll('#starRating span').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= val);
  });
}

function submitReview(bookId) {
  const text = document.getElementById('reviewText').value.trim();
  if (!text) { toast('Напишите отзыв'); return; }
  if (!currentRating) { toast('Поставьте оценку'); return; }

  data.reviews.push({
    id: Date.now(),
    bookId,
    userId: data.currentUser.id,
    rating: currentRating,
    text,
    date: new Date().toISOString().split('T')[0]
  });
  saveData();
  toast('Отзыв опубликован!');
  openBook(bookId);
}

function renderReview(r) {
  const user = data.members.find(m => m.id === r.userId) || data.currentUser;
  return `
    <div class="review-item">
      <div class="review-head">
        <div class="review-user">
          <div class="review-avatar" style="background:${user.color}">
            ${user.photo ? `<img src="${user.photo}" alt="${user.name}" onerror="this.remove(); this.parentElement.innerHTML='${user.avatar}';">` : user.avatar}
          </div>
          <div>
            <div class="review-name">${user.name}</div>
            <div class="review-date">${formatDate(r.date)}</div>
          </div>
        </div>
        <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>
  `;
}

function toggleReading(bookId) {
  const idx = data.readingList.indexOf(bookId);
  if (idx >= 0) {
    data.readingList.splice(idx, 1);
    toast('Убрано из списка чтения');
  } else {
    data.readingList.push(bookId);
    toast('Добавлено в список чтения!');
  }
  saveData();
  openBook(bookId);
}

function startDiscussion(bookId) {
  const book = data.books.find(b => b.id === bookId);
  closeModal();
  navigate('discussions');
  toast(`Откройте тему обсуждения "${book.title}"`);
}

/* ============ ОБСУЖДЕНИЯ ============ */
function renderDiscussions() {
  return `
    <div class="page">
      <h1 class="page-title">Обсуждения</h1>
      <p class="page-subtitle">Делитесь мыслями, спорьте, находите единомышленников</p>
      <button class="btn btn-primary" style="margin-bottom:2rem" onclick="toast('Создание темы — скоро!')">+ Новая тема</button>
      <div class="discussions-list">
        ${data.discussions.map(d => {
          const book = d.bookId ? data.books.find(b => b.id === d.bookId) : null;
          return `
            <div class="discussion-card" onclick="openDiscussion(${d.id})">
              <div class="discussion-title">${d.title}</div>
              <div class="discussion-meta">
                <span>👤 ${d.author}</span>
                <span>📅 ${formatDate(d.date)}</span>
                <span>💬 ${d.comments} комментариев</span>
                ${book ? `<span>📖 ${book.title}</span>` : ''}
              </div>
              <div class="discussion-preview">${d.preview}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function openDiscussion(id) {
  const d = data.discussions.find(x => x.id === id);
  if (!d) return;
  const book = d.bookId ? data.books.find(b => b.id === d.bookId) : null;

  document.getElementById('modalContent').innerHTML = `
    <button class="modal-close" onclick="closeModal()">×</button>
    <div class="modal-content">
      <h2 style="margin-bottom:0.5rem">${d.title}</h2>
      <div style="color:var(--text-dim); margin-bottom:1.5rem; font-style:italic; font-family:'Playfair Display',serif">
        ${d.author} · ${formatDate(d.date)} ${book ? '· 📖 '+book.title : ''}
      </div>
      <p style="line-height:1.7; margin-bottom:2rem; color:var(--text-dim)">${d.preview}</p>
      <div class="review-form">
        <strong>Присоединиться к обсуждению</strong>
        <textarea id="commentText" placeholder="Ваш комментарий..."></textarea>
        <button class="btn btn-primary" onclick="toast('Комментарий добавлен!'); closeModal();">Отправить</button>
      </div>
    </div>
  `;
  document.getElementById('modal').classList.add('active');
}

/* ============ ВСТРЕЧИ / КАЛЕНДАРЬ ============ */
function renderMeetings() {
  return `
    <div class="page">
      <h1 class="page-title">Встречи</h1>
      <p class="page-subtitle">Календарь событий и живые обсуждения</p>

      <div class="calendar">
        <div class="calendar-header">
          <div class="calendar-title">${calendarDate.toLocaleString('ru', {month:'long', year:'numeric'})}</div>
          <div class="calendar-nav">
            <button onclick="changeMonth(-1)">‹</button>
            <button onclick="changeMonth(1)">›</button>
          </div>
        </div>
        <div class="calendar-grid">
          ${['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map(d => `<div class="calendar-day-name">${d}</div>`).join('')}
          ${renderCalendarDays()}
        </div>
      </div>

      <h2 style="font-family:'Playfair Display',serif; font-size:1.8rem; margin-bottom:1rem">Ближайшие встречи</h2>
      <div class="meetings-list">
        ${data.meetings.sort((a,b) => new Date(a.date) - new Date(b.date)).map(m => {
          const d = new Date(m.date);
          const book = m.bookId ? data.books.find(b => b.id === m.bookId) : null;
          return `
            <div class="meeting-card">
              <div class="meeting-date">
                <div class="meeting-day">${d.getDate()}</div>
                <div class="meeting-month">${d.toLocaleString('ru', {month:'short'})}</div>
              </div>
              <div class="meeting-info">
                <div class="meeting-title">${m.title}</div>
                <div class="meeting-details">
                  🕐 ${m.time} · 📍 ${m.place}
                  ${book ? '<br>📖 '+book.title : ''}
                  <br>👥 ${m.attendees} участников
                </div>
              </div>
              <button class="btn btn-primary" onclick="toast('Вы записались на встречу!')">Записаться</button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderCalendarDays() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const today = new Date();

  const meetingDays = data.meetings.map(m => new Date(m.date).toDateString());

  let html = '';
  for (let i = 0; i < startDay; i++) {
    const d = daysInPrev - startDay + i + 1;
    html += `<div class="calendar-day other-month">${d}</div>`;
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const isToday = date.toDateString() === today.toDateString();
    const hasEvent = meetingDays.includes(date.toDateString());
    html += `<div class="calendar-day ${isToday?'today':''} ${hasEvent?'has-event':''}">${d}</div>`;
  }
  const remaining = 7 - ((startDay + daysInMonth) % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      html += `<div class="calendar-day other-month">${i}</div>`;
    }
  }
  return html;
}

function changeMonth(delta) {
  calendarDate.setMonth(calendarDate.getMonth() + delta);
  render();
}

/* ============ УЧАСТНИКИ ============ */
function renderMembers() {
  return `
    <div class="page">
      <h1 class="page-title">Участники клуба</h1>
      <p class="page-subtitle">Люди, которые делают наш клуб живым</p>
      <div class="members-grid">
        ${data.members.map(m => `
          <div class="member-card">
            <div class="member-avatar" style="background:${m.color}">
              ${m.photo ? `<img src="${m.photo}" alt="${m.name}" onerror="this.remove(); this.parentElement.innerHTML='${m.avatar}';">` : m.avatar}
            </div>
            <div class="member-name">${m.name}</div>
            <div class="member-role">${m.role}</div>
            <div class="member-stats">
              <div>
                <div class="member-stat-num">${m.books}</div>
                <div class="member-stat-label">книг</div>
              </div>
              <div>
                <div class="member-stat-num">${m.reviews}</div>
                <div class="member-stat-label">отзывов</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ============ ПРОФИЛЬ ============ */
function renderProfile() {
  const u = data.currentUser;
  const myReviews = data.reviews.filter(r => r.userId === u.id);
  const readingBooks = data.readingList.map(id => data.books.find(b => b.id === id)).filter(Boolean);

  return `
    <div class="page">
      <div class="profile-header">
        <div class="profile-avatar" style="background:${u.color}">
          ${u.photo ? `<img src="${u.photo}" alt="${u.name}" onerror="this.remove(); this.parentElement.innerHTML='${u.avatar}';">` : u.avatar}
        </div>
        <div class="profile-info">
          <h1 class="profile-name">${u.name}</h1>
          <div class="profile-bio">${u.bio}</div>
          <div class="profile-stats">
            <div class="stat">
              <div class="stat-num">${readingBooks.length}</div>
              <div class="stat-label">в списке чтения</div>
            </div>
            <div class="stat">
              <div class="stat-num">${myReviews.length}</div>
              <div class="stat-label">отзывов</div>
            </div>
            <div class="stat">
              <div class="stat-num">12</div>
              <div class="stat-label">встреч посещено</div>
            </div>
          </div>
        </div>
      </div>

      <div class="tabs">
        <button class="tab ${profileTab==='reading'?'active':''}" onclick="setProfileTab('reading')">📚 Список чтения</button>
        <button class="tab ${profileTab==='reviews'?'active':''}" onclick="setProfileTab('reviews')">✍️ Мои отзывы</button>
        <button class="tab ${profileTab==='settings'?'active':''}" onclick="setProfileTab('settings')">⚙️ Настройки</button>
      </div>

      ${profileTab === 'reading' ? `
        ${readingBooks.length ? `
          <div class="reading-list">
            ${readingBooks.map(b => `
              <div class="reading-item" onclick="openBook(${b.id})">
                <div class="reading-cover">
                  ${generateBookCover(b)}
                </div>
                <div class="reading-title">${b.title}</div>
                <div class="reading-author">${b.author}</div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="empty-state">
            <div class="empty-state-icon">📖</div>
            <p>Ваш список чтения пуст</p>
            <button class="btn btn-primary" style="margin-top:1rem" onclick="navigate('books')">Перейти в библиотеку</button>
          </div>
        `}
      ` : ''}

      ${profileTab === 'reviews' ? `
        ${myReviews.length ? myReviews.map(r => {
          const book = data.books.find(b => b.id === r.bookId);
          return `
            <div class="review-item" style="margin-bottom:1rem">
              <div class="review-head">
                <strong style="color:var(--accent)">${book ? book.title : 'Книга'}</strong>
                <span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
              </div>
              <div class="review-text">${r.text}</div>
              <div class="review-date" style="margin-top:0.5rem">${formatDate(r.date)}</div>
            </div>
          `;
        }).join('') : `
          <div class="empty-state">
            <div class="empty-state-icon">✍️</div>
            <p>Вы пока не оставили ни одного отзыва</p>
          </div>
        `}
      ` : ''}

      ${profileTab === 'settings' ? `
        <div class="review-form" style="max-width:600px">
          <h3 style="margin-bottom:1rem">Редактировать профиль</h3>
          <label style="color:var(--text-dim); font-size:0.9rem">Имя</label>
          <input type="text" id="userName" value="${u.name}" style="width:100%; padding:0.8rem; background:var(--bg); border:1px solid var(--border); border-radius:12px; color:var(--text); margin:0.3rem 0 1rem; font-family:inherit">
          <label style="color:var(--text-dim); font-size:0.9rem">О себе</label>
          <textarea id="userBio" style="width:100%; min-height:80px; background:var(--bg); border:1px solid var(--border); border-radius:12px; padding:0.8rem; color:var(--text); font-family:inherit; margin:0.3rem 0 1rem">${u.bio}</textarea>
          <label style="color:var(--text-dim); font-size:0.9rem">Ссылка на фото (необязательно)</label>
          <input type="text" id="userPhoto" value="${u.photo || ''}" placeholder="https://..." style="width:100%; padding:0.8rem; background:var(--bg); border:1px solid var(--border); border-radius:12px; color:var(--text); margin:0.3rem 0 1rem; font-family:inherit">
          <div style="display:flex; gap:0.8rem; flex-wrap:wrap">
            <button class="btn btn-primary" onclick="saveProfile()">Сохранить</button>
            <button class="btn btn-secondary" onclick="resetData()">🔄 Сбросить все данные</button>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function setProfileTab(tab) {
  profileTab = tab;
  render();
}

function saveProfile() {
  data.currentUser.name = document.getElementById('userName').value.trim() || data.currentUser.name;
  data.currentUser.bio = document.getElementById('userBio').value.trim();
  data.currentUser.photo = document.getElementById('userPhoto').value.trim();
  data.currentUser.avatar = data.currentUser.name[0].toUpperCase();
  saveData();
  toast('Профиль обновлён!');
  render();
}

function resetData() {
  if (confirm('Сбросить все данные? Это действие нельзя отменить.')) {
    localStorage.removeItem(STORAGE_KEY);
    data = loadData();
    toast('Данные сброшены');
    render();
  }
}

/* ============ УТИЛИТЫ ============ */
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ============ СТАРТ ============ */
navigate('home');