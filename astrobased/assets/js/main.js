class o{
  constructor(){
    this.current=0,
    this.slides=document.querySelectorAll(".carousel-slide"),
    this.dots=document.querySelectorAll(".carousel-dot"),
    this.total=this.slides.length,
    this.container=document.querySelector(".carousel-slides-container"),
    this.init()
  }
  init(){
    const t=document.querySelector(".carousel-next"),
    e=document.querySelector(".carousel-prev");
    t&&t.addEventListener("click",()=>this.next()),
    e&&e.addEventListener("click",()=>this.prev()),
    this.dots.forEach((s,i)=>{s.addEventListener("click",()=>this.goToSlide(i))})
  }
  next(){
    const t=(this.current+1)%this.total;
    this.goToSlide(t)
  }
  prev(){
    const t=(this.current-1+this.total)%this.total;
    this.goToSlide(t)
  }
  goToSlide(t){
    !this.container||t<0||t>=this.total||(
      this.container.style.transform=`translateX(-${t*100}%)`,
      this.dots[this.current]?.classList.remove("active"),
      this.dots[t]?.classList.add("active"),
      this.current=t
    )
  }
}
document.addEventListener("DOMContentLoaded",()=>{new o});

function f(t,e,n,c=2e3){
  const o=performance.now(),r=parseInt(e),a=parseInt(n),s=a-r;
  function i(d){
    const l=d-o,u=Math.min(l/c,1),m=1-Math.pow(1-u,3),g=Math.floor(r+s*m);
    t.textContent=g.toLocaleString(),u<1?requestAnimationFrame(i):t.textContent=a.toLocaleString()
  }
  requestAnimationFrame(i)
}
function b(){
  const t=document.getElementById("research-stats-section"),e=document.querySelectorAll(".stat-number");
  if(!t||e.length===0)return;
  const n=new IntersectionObserver(c=>{
    c.forEach(o=>{
      o.isIntersecting&&(o.target.classList.add("animate-stats"),e.forEach((r,a)=>{
        const s=r.getAttribute("data-target");
        s&&setTimeout(()=>{f(r,0,s,2e3)},a*200)
      }),n.unobserve(o.target))
    })
  },{threshold:.3,rootMargin:"-50px"});
  n.observe(t)
}
document.addEventListener("DOMContentLoaded",b);
document.querySelectorAll(".participation-card").forEach(t=>{
  t.addEventListener("click",()=>{
    const e=t.getAttribute("data-option");
    console.log(`Clicked on: ${e}`)
  })
});
document.querySelectorAll(".btn-primary, .btn-secondary").forEach(t=>{
  t.addEventListener("click",e=>{
    const n=e.target.textContent;
    console.log(`Button clicked: ${n}`)
  })
});

typeof window<"u"&&window.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".project-card").forEach(e=>{
    e.addEventListener("click",()=>{
      const t=e.getAttribute("data-project");
      console.log(`Clicked on project: ${t}`)
    })
  })
});
document.addEventListener("DOMContentLoaded",()=>{
  const t=document.querySelectorAll(".hero-slide"),
  o=document.querySelector(".hero-carousel-next"),
  r=document.querySelector(".hero-carousel-prev");
  let n=0;
  function c(e){
    t[n].classList.remove("active"),
    t[e].classList.add("active"),
    n=e
  }
  o.addEventListener("click",()=>{
    const e=(n+1)%t.length;
    c(e)
  }),
  r.addEventListener("click",()=>{
    const e=(n-1+t.length)%t.length;
    c(e)
  })
});
// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.council-card, .vision-card, .function-item').forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
});
class c {
  constructor() {
    this.proyectos = document.querySelectorAll(".proyecto-card");
    this.filterButtons = document.querySelectorAll(".filter-btn");
    this.setupFiltering();
  }
  setupFiltering() {
    this.filterButtons.forEach((r) => {
      r.addEventListener("click", (e) => {
        const s = e.currentTarget;
        const a = s.dataset.filter;
        this.filterButtons.forEach((t) => t.classList.remove("active"));
        s.classList.add("active");
        this.filterProjects(a);
      });
    });
  }
  filterProjects(r) {
    r &&
      this.proyectos.forEach((e) => {
        const s = e.dataset.categoria;
        const a = e.dataset.tipo;
        let t = !1;
        switch (r) {
          case "ALL":
            t = !0;
            break;
          case "ACTUALES":
            t = s === "ACTUALES";
            break;
          case "CONCLUIDOS":
            t = s === "CONCLUIDOS";
            break;
          case "FONDO EXTERNO":
            t = a === "FONDO_EXTERNO";
            break;
          case "FONDO PROPIO":
            t = a === "FONDO_PROPIO";
            break;
        }
        e.classList.toggle("hidden", !t);
      });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new c();
});
window.addEventListener("scroll", () => {
  const e = document.getElementById("navbar");
  window.scrollY > 50 ? e.classList.add("scrolled") : e.classList.remove("scrolled");
});

const a = document.getElementById("mobile-menu-btn");
const l = document.getElementById("mobile-menu");
const c = document.getElementById("menu-icon");
const o = document.getElementById("close-icon");
let t = !1;

a.addEventListener("click", () => {
  t = !t;
  t
    ? (l.classList.add("active"), (c.style.display = "none"), (o.style.display = "block"))
    : (l.classList.remove("active"), (c.style.display = "block"), (o.style.display = "none"));
});

const n = (e) => {
  const s = e.value.trim();
  s && (console.log(Búsqueda: ${s}), alert(Búsqueda: ${s}), (e.value = ""));
};

const m = document.getElementById("search-btn");
const d = document.getElementById("search-input");
m.addEventListener("click", () => n(d));
d.addEventListener("keypress", (e) => {
  e.key === "Enter" && n(d);
});

const r = document.getElementById("mobile-search-btn");
const i = document.getElementById("mobile-search-input");
r.addEventListener("click", () => n(i));
i.addEventListener("keypress", (e) => {
  e.key === "Enter" && n(i);
});

const y = document.querySelectorAll(".mobile-nav a");
y.forEach((e) => {
  e.addEventListener("click", () => {
    t = !1;
    l.classList.remove("active");
    c.style.display = "block";
    o.style.display = "none";
  });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// IntersectionObserver for animations
const animationObserverOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const animationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
        }
    });
}, animationObserverOptions);

document.querySelectorAll(".council-card, .vision-card, .function-item").forEach(el => {
    el.style.animationPlayState = "paused";
    animationObserver.observe(el);
});

// Hover effects for council cards
document.querySelectorAll(".council-card").forEach(card => {
    card.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-8px) scale(1.02)";
    });
    card.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0) scale(1)";
    });
});

// Parallax effect for hero decorations
window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    const heroSection = document.querySelector(".hero-section");
    const circle = document.querySelector(".decoration-circle");
    const dots = document.querySelector(".decoration-dots");

    if (heroSection && circle && dots) {
        const heroHeight = heroSection.offsetHeight;
        const scrollRatio = scrollY / heroHeight;

        if (scrollRatio <= 1) {
            circle.style.transform = `translate(${scrollRatio * 30}px, ${scrollRatio * 20}px) rotate(${scrollRatio * 45}deg)`;
            dots.style.transform = `translate(${scrollRatio * -20}px, ${scrollRatio * 15}px)`;
        }
    }
});

// Create and inject "Skip to content" link for accessibility
const skipLink = document.createElement("a");
skipLink.href = "#main-content";
skipLink.textContent = "Saltar al contenido principal";
skipLink.className = "skip-link"; // Styling is handled in CSS file

skipLink.addEventListener("focus", function() { this.style.top = "6px"; });
skipLink.addEventListener("blur", function() { this.style.top = "-40px"; });
document.body.insertBefore(skipLink, document.body.firstChild);

// Accessibility enhancements for council cards
document.querySelectorAll(".council-card").forEach((card, index) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "article");
    card.setAttribute("aria-label", `Miembro del consejo ${index + 1}`);

    card.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.click(); // Trigger click for interaction
        }
    });

    card.addEventListener("focus", function() {
        this.style.transform = "translateY(-4px)";
        this.style.outline = "2px solid var(--primary-color-consejo)";
        this.style.outlineOffset = "4px";
    });

    card.addEventListener("blur", function() {
        this.style.transform = "translateY(0)";
        this.style.outline = "none";
    });
});

// Hover effects for vision cards and function items
document.querySelectorAll(".vision-card, .function-item").forEach(item => {
    item.addEventListener("mouseenter", function() {
        this.style.transform = this.classList.contains("vision-card") ? "translateY(-6px) scale(1.02)" : "translateX(6px) scale(1.01)";
    });
    item.addEventListener("mouseleave", function() {
        this.style.transform = this.classList.contains("vision-card") ? "translateY(0) scale(1)" : "translateX(0) scale(1)";
    });
});

// Hover effects for function numbers
document.querySelectorAll(".function-number").forEach(num => {
    num.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.1) rotate(5deg)";
        this.style.background = "var(--gradient-secondary-consejo)";
    });
    num.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1) rotate(0deg)";
        this.style.background = "var(--gradient-primary-consejo)";
    });
});

// Animate vision card icons on intersection
const visionCards = document.querySelectorAll(".vision-card");
const iconObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const icon = entry.target.querySelector(".vision-icon");
            if (icon) {
                icon.style.animation = "bounce 1s ease-in-out";
            }
        }
    });
}, { threshold: 0.5 });

visionCards.forEach(card => {
    iconObserver.observe(card);
});