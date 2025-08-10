// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu functionality
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Typing effect for hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            setTimeout(type, 1000);
        }

        // Initialize typing effect when page loads
        window.addEventListener('load', function() {
            const heroTitle = document.querySelector('.hero h1');
            if (heroTitle) {
                typeWriter(heroTitle, 'Vibhaw Kumar Verma', 100);
            }
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });

        // Dynamic skill bar animation
        function animateSkillBars() {
            const skillCategories = document.querySelectorAll('.skill-category');
            
            skillCategories.forEach((category, index) => {
                const tags = category.querySelectorAll('.skill-tag');
                tags.forEach((tag, tagIndex) => {
                    tag.style.animationDelay = `${(index * 0.1) + (tagIndex * 0.05)}s`;
                    tag.style.animation = 'fadeInUp 0.6s ease forwards';
                });
            });
        }

        // Stats counter animation
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = parseFloat(counter.innerText);
                const increment = target / 100;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.innerText = target + (target < 10 ? (target === 7.75 ? '' : '%+') : '+');
                        clearInterval(timer);
                    } else {
                        counter.innerText = current.toFixed(target < 10 ? 2 : 0);
                    }
                }, 20);
            });
        }

        // Trigger animations when elements come into view
        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('stats')) {
                        animateCounters();
                    }
                    if (entry.target.classList.contains('skills-grid')) {
                        animateSkillBars();
                    }
                }
            });
        });

        document.querySelector('.stats')?.let(el => animateOnScroll.observe(el));
        document.querySelector('.skills-grid')?.let(el => animateOnScroll.observe(el));

        // Project card hover effects
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.overflow = 'hidden';
            
            const loader = document.createElement('div');
            loader.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.5s ease;
            `;
            
            const loaderText = document.createElement('div');
            loaderText.innerHTML = 'VKV';
            loaderText.style.cssText = `
                color: white;
                font-size: 3rem;
                font-weight: bold;
                animation: pulse 1s infinite;
            `;
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `;
            document.head.appendChild(style);
            
            loader.appendChild(loaderText);
            document.body.appendChild(loader);
            
            setTimeout(() => {
                loader.style.opacity = '0';
                document.body.style.overflow = 'auto';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 2000);
        });

        // Add custom cursor effect
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            width: 20px;
            height: 20px;
            background: rgba(37, 99, 235, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Enlarge cursor on interactive elements
        document.querySelectorAll('a, button, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });

        // Add scroll progress indicator
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrollProgress + '%';
        });

        // Add particles background to hero section
        function createParticles() {
            const hero = document.querySelector('.hero');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 2}s;
                `;
                
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                hero.appendChild(particle);
            }
            
            const particleStyle = document.createElement('style');
            particleStyle.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(120deg); }
                    66% { transform: translateY(5px) rotate(240deg); }
                }
            `;
            document.head.appendChild(particleStyle);
        }

        createParticles();