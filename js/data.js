// Destination data
var destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    continent: "Europe",
    type: "cultural",
    budget: "high",
    image: "images/paris.jpg",
    desc: "Paris: the City of Light: famed for iconic landmarks, museums, and café culture.",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Montmartre"],
    costs: [
      { item: "Hotel", low: "$80", mid: "$200", high: "$600" },
      { item: "Food per day", low: "$25", mid: "$60", high: "$150" },
      { item: "Transport/day", low: "$5", mid: "$12", high: "$30" }
    ]
  },
  {
    id: 2,
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    type: "cultural",
    budget: "high",
    image: "images/london.webp",
    desc: "London: historic and modern attractions, theatre, and world-class museums.",
    attractions: ["British Museum", "Tower of London", "West End", "Buckingham Palace"],
    costs: [
      { item: "Hotel", low: "$90", mid: "$220", high: "$650" },
      { item: "Food per day", low: "$20", mid: "$55", high: "$140" },
      { item: "Transport/day", low: "$8", mid: "$15", high: "$30" }
    ]
  },
  {
    id: 3,
    name: "New York",
    country: "USA",
    continent: "North America",
    type: "cultural",
    budget: "high",
    image: "images/newyork.jpg",
    desc: "New York City: skyscrapers, Broadway, world-class dining and vibrant neighbourhoods.",
    attractions: ["Statue of Liberty", "Central Park", "Times Square", "Metropolitan Museum"],
    costs: [
      { item: "Hotel", low: "$90", mid: "$250", high: "$700" },
      { item: "Food per day", low: "$30", mid: "$70", high: "$200" },
      { item: "Transport/day", low: "$5", mid: "$15", high: "$40" }
    ]
  },
  {
    id: 4,
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    type: "cultural",
    budget: "medium",
    image: "images/tokyo.jpg",
    desc: "Tokyo: cutting-edge city life, temples, and exceptional cuisine across many neighbourhoods.",
    attractions: ["Shibuya Crossing", "Senso-ji Temple", "Tsukiji Market", "Tokyo Skytree"],
    costs: [
      { item: "Hotel", low: "$60", mid: "$140", high: "$350" },
      { item: "Food per day", low: "$15", mid: "$40", high: "$120" },
      { item: "Transport/day", low: "$6", mid: "$12", high: "$25" }
    ]
  },
  {
    id: 5,
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    type: "cultural",
    budget: "low",
    image: "images/bangkok.webp",
    desc: "Bangkok: lively street food scene, ornate temples and bustling markets.",
    attractions: ["Grand Palace", "Wat Arun", "Chatuchak Market", "Khao San Road"],
    costs: [
      { item: "Guesthouse", low: "$15", mid: "$45", high: "$120" },
      { item: "Food per day", low: "$5", mid: "$20", high: "$60" },
      { item: "Transport/day", low: "$1", mid: "$6", high: "$20" }
    ]
  },
  {
    id: 6,
    name: "Dubai",
    country: "UAE",
    continent: "Asia",
    type: "luxury",
    budget: "high",
    image: "images/dubai.webp",
    desc: "Dubai: futuristic skyline, luxury shopping and desert experiences.",
    attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"],
    costs: [
      { item: "Hotel", low: "$80", mid: "$200", high: "$900" },
      { item: "Food per day", low: "$20", mid: "$60", high: "$180" },
      { item: "Transport/day", low: "$10", mid: "$25", high: "$60" }
    ]
  },
  {
    id: 7,
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "cultural",
    budget: "medium",
    image: "images/rome.jpg",
    desc: "Rome: ancient history, art and great food around every corner.",
    attractions: ["Colosseum", "Vatican Museums", "Pantheon", "Trevi Fountain"],
    costs: [
      { item: "Hotel", low: "$50", mid: "$140", high: "$450" },
      { item: "Food per day", low: "$15", mid: "$45", high: "$120" },
      { item: "Transport/day", low: "$3", mid: "$10", high: "$30" }
    ]
  },
  {
    id: 8,
    name: "Barcelona",
    country: "Spain",
    continent: "Europe",
    type: "relaxation",
    budget: "medium",
    image: "images/barcelona.webp",
    desc: "Barcelona: Gaudí architecture, beach life and vibrant food markets.",
    attractions: ["Sagrada Família", "Park Güell", "La Rambla", "Barceloneta Beach"],
    costs: [
      { item: "Hotel", low: "$50", mid: "$130", high: "$400" },
      { item: "Food per day", low: "$15", mid: "$40", high: "$110" },
      { item: "Transport/day", low: "$3", mid: "$8", high: "$20" }
    ]
  },
  {
    id: 9,
    name: "Istanbul",
    country: "Turkey",
    continent: "Europe",
    type: "cultural",
    budget: "low",
    image: "images/istanbul.jpg",
    desc: "Istanbul: where east meets west, with historic bazaars and stunning mosques.",
    attractions: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Bosphorus Cruise"],
    costs: [
      { item: "Hotel", low: "$25", mid: "$80", high: "$220" },
      { item: "Food per day", low: "$8", mid: "$25", high: "$70" },
      { item: "Transport/day", low: "$2", mid: "$6", high: "$15" }
    ]
  },
  {
    id: 10,
    name: "Singapore",
    country: "Singapore",
    continent: "Asia",
    type: "modern",
    budget: "high",
    image: "images/singapore.jpg",
    desc: "Singapore: clean, modern city-state with a mix of urban attractions and green spaces.",
    attractions: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa", "Chinatown"],
    costs: [
      { item: "Hotel", low: "$80", mid: "$200", high: "$600" },
      { item: "Food per day", low: "$15", mid: "$50", high: "$140" },
      { item: "Transport/day", low: "$5", mid: "$12", high: "$30" }
    ]
  },
  {
    id: 11,
    name: "Los Angeles",
    country: "USA",
    continent: "North America",

    type: "relaxation",
    budget: "high",
    image: "images/losangeles.jpg",
    desc: "Los Angeles: beaches, Hollywood, diverse neighbourhoods and a sprawling food scene.",
    attractions: ["Hollywood", "Santa Monica Pier", "Griffith Observatory", "Venice Beach"],
    costs: [
      { item: "Hotel", low: "$70", mid: "$180", high: "$500" },
      { item: "Food per day", low: "$20", mid: "$55", high: "$150" },
      { item: "Transport/day", low: "$8", mid: "$20", high: "$45" }
    ]
  },
  {
    id: 12,
    name: "Sydney",
    country: "Australia",
    continent: "Oceania",
    type: "relaxation",
    budget: "medium",
    image: "images/sydney.jpg",
    desc: "Sydney: iconic harbour, beaches, and outdoor lifestyle with rich cultural offerings.",
    attractions: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge", "Taronga Zoo"],
    costs: [
      { item: "Hotel", low: "$60", mid: "$160", high: "$420" },
      { item: "Food per day", low: "$20", mid: "$50", high: "$130" },
      { item: "Transport/day", low: "$6", mid: "$14", high: "$35" }
    ]
  }
];


// Travel quotes used on the home page
var travelQuotes = [
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "The world is a book, and those who do not travel read only one page.", author: "Saint Augustine" },
  { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "Take only memories, leave only footprints.", author: "Chief Seattle" },
  { text: "Travel brings power and love back into your life.", author: "Rumi" },
  { text: "Wherever you go becomes a part of you.", author: "Anita Desai" },
  { text: "To travel is to discover.", author: "Hans Christian Andersen" },
  { text: "Travel far enough, you meet yourself.", author: "David Mitchell" },
  { text: "Adventure is worthwhile in itself.", author: "Amelia Earhart" }
];


// page initialization
function initPage(activePage) {
  buildNavbar(activePage);
  buildFooter();
  initHamburger();
  initScrollReveal();
}

// navigation
function buildNavbar(activePage) {
  var navItems = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'destinations.html', label: 'Explore', id: 'destinations' },
    { href: 'budget.html', label: 'Budget', id: 'budget' },
    { href: 'generator.html', label: 'Generator', id: 'generator' },
    { href: 'mood.html', label: 'Mood', id: 'mood' },
    { href: 'feedback.html', label: 'Support', id: 'feedback' }
  ];
  
  var links = navItems.map(function(item) {
    var active = item.id === activePage ? ' class="active"' : '';
    return '<li><a href="' + item.href + '"' + active + '>' + item.label + '</a></li>';
  }).join('');
  
  var html = '<nav class="navbar" id="navbar"><div class="nav-inner">' +
    '<a href="index.html" class="nav-logo">Travel<span>Nest</span></a>' +
    '<ul class="nav-links" id="navLinks">' + links + '</ul>' +
    '<button class="hamburger" id="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>' +
    '</div></nav>';
  document.getElementById('nav-slot').innerHTML = html;
}


// footer
function buildFooter() {
  var html = `
    <footer>
      <div class="container">
        <div class="footer-grid">

          <!-- Brand column -->
          <div>
            <span class="footer-logo">Travel<span>Nest</span></span>
            <p class="footer-desc">Your companion for discovering the world's most extraordinary destinations. Plan, dream, and explore.</p>
            <!-- Newsletter subscription form -->
            <div class="newsletter-form" style="margin-top:16px;">
              <input type="email" id="footerEmail" placeholder="your@email.com" aria-label="Email for newsletter">
              <button onclick="subscribeNewsletter()">Subscribe</button>
            </div>
            <p id="newsletter-msg"></p>
          </div>

          <!-- Quick links -->
          <div class="footer-col">
            <h5>Explore</h5>
            <ul>
              <li><a href="destinations.html">Destinations</a></li>
              <li><a href="generator.html">Trip Generator</a></li>
              <li><a href="mood.html">Travel Mood</a></li>
            </ul>
          </div>

          <!-- More links -->
          <div class="footer-col">
            <h5>Tools</h5>
            <ul>
              <li><a href="budget.html">Budget Planner</a></li>
              <li><a href="feedback.html">Support & FAQ</a></li>
            </ul>
          </div>

        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 TravelNest</p>
        </div>
      </div>
    </footer>`;
  document.getElementById('footer-slot').innerHTML = html;
}


// mobile menu
function initHamburger() {
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');

  if (!hamburger) return;

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}


// reveal elements on scroll
function initScrollReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (item) {
    observer.observe(item);
  });
}

// newsletter signup
function subscribeNewsletter() {
  var emailInput = document.getElementById('footerEmail');
  var msgEl = document.getElementById('newsletter-msg');
  var email = emailInput.value.trim();
  if (!email || !email.includes('@') || !email.includes('.')) {
    msgEl.textContent = 'Please enter a valid email.';
    msgEl.style.color = '#e53935';
    return;
  }
  var list = JSON.parse(localStorage.getItem('tn_subscribers') || '[]');
  if (!list.includes(email)) {
    list.push(email);
    localStorage.setItem('tn_subscribers', JSON.stringify(list));
  }
  msgEl.textContent = '✅ Subscribed! Thank you.';
  msgEl.style.color = '#3fa87e';
  emailInput.value = '';
}

// localStorage helpers
function loadFromStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (e) {
    return [];
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
}