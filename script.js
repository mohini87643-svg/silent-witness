document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animations
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;

            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 2. Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Hero Section Animation on Load
    const hero = document.querySelector('.hero');
    setTimeout(() => {
        if (hero) hero.classList.add('active');
        document.querySelectorAll('#hero .reveal').forEach(el => el.classList.add('active'));
    }, 300);

    // 4. Parallax Effect for Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });

    // 5. Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Evidence Showcase Modal
    const showcaseItems = document.querySelectorAll('.showcase-item');
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalImg = document.createElement('img');
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    showcaseItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            modalImg.src = img.src;
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 600);
    });
});
