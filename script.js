const countdown = document.querySelector("#countdown");
const countdownValue = document.querySelector("#countdown-value");
const showDateParts = countdown.dataset.showDate.split("-").map(Number);
const showDate = new Date(showDateParts[0], showDateParts[1] - 1, showDateParts[2]);

function updateCountdown() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const differenceInDays = Math.round((showDate - today) / 86_400_000);

    if (differenceInDays > 0) {
        countdownValue.textContent = `${differenceInDays} 天`;
        return;
    }

    if (differenceInDays === 0) {
        countdownValue.textContent = "今晚见";
        return;
    }

    countdown.querySelector(".countdown__label").textContent = "台北现场";
    countdownValue.textContent = "感谢相遇";
}

updateCountdown();

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav");

function closeNavigation() {
    navToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    document.body.style.overflow = "";
}

navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
    document.body.style.overflow = isOpen ? "" : "hidden";
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNavigation();
    }
});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

document.querySelector("#year").textContent = new Date().getFullYear();
