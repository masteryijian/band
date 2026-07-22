// 从 HTML 的 data-show-date 读取演出日期，让内容和逻辑保持在同一个数据源。
const countdown = document.querySelector("#countdown");
const countdownValue = document.querySelector("#countdown-value");
const showDateParts = countdown.dataset.showDate.split("-").map(Number);
// JavaScript 的月份从 0 开始，因此这里需要将页面中的月份减 1。
const showDate = new Date(showDateParts[0], showDateParts[1] - 1, showDateParts[2]);

function updateCountdown() {
    const today = new Date();
    // 将时间归零，只比较自然日，避免当前小时造成小数天或提前跳转。
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

// 手机导航：同步按钮的无障碍状态、菜单样式和页面滚动状态。
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

// 内容首次进入视口时播放淡入动画，播放后停止观察以减少后续计算。
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

// 页脚年份自动更新，无需每年手动修改 HTML。
document.querySelector("#year").textContent = new Date().getFullYear();
