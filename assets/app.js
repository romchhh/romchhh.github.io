const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Initialize EmailJS with the User ID
    emailjs.init('LKXFC2hGVLQUFUeTs'); // Replace with your actual User ID

    emailjs.sendForm('service_5kbo72j', 'template_9okhmr2', this)
        .then(function(response) {
            // Notify user of successful submission
            alert('Message sent successfully!');
            console.log('Success response:', response);

            // Clear the form fields
            document.getElementById('contact-form').reset();
        }, function(error) {
            // Log the full error details to the console for debugging
            console.error('Failed to send message:', error);

            // Format the error message
            let errorMessage = 'Failed to send message: ';
            if (error && error.text) {
                errorMessage += error.text; // Display the specific error message if available
            } else {
                errorMessage += 'Unknown error'; // Fallback message
            }

            // Include the User ID in the error message
            errorMessage += '\nPublic Key (User ID): ' + 'LKXFC2hGVLQUFUeTs'; // Use actual User ID

            // Display the error message in an alert
            alert(errorMessage);
        });
});

document.getElementById('language-button').addEventListener('click', function() {
    let currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
        document.documentElement.lang = 'uk'; // Set language to Ukrainian
        translateToUkrainian(); // Function to translate content
    } else {
        document.documentElement.lang = 'en'; // Set language to English
        translateToEnglish(); // Function to translate content
    }
});

function translateToUkrainian() {
    const translations = {
        nav_logo: 'TeleBotsRoman',
        nav_home_link: 'Головна',
        nav_home: 'Головна',
        nav_about_link: 'Про нас',
        nav_about: 'Про нас',
        nav_skills_link: 'Навички',
        nav_skills: 'Навички',
        nav_portfolio_link: 'Проекти',
        nav_portfolio: 'Проекти',
        nav_contact_link: 'Контакти',
        nav_contact: 'Контакти',
        home_title: 'Привіт, TeleBotsRoman вітає вас.',
        home_subtitle: 'Телеграм-боти, скрипти, веб-сайти та інше від професійної команди розробників.',
        home_description: 'Ми пропонуємо найкращі Telegram боти, кастомні скрипти та повністю адаптивні веб-сайти. В TeleBotsRoman ми пишаємося нашою професійною командою розробників, яка прагне втілити ваші цифрові проекти в життя з точністю та творчістю.',
        contact_button: 'Зв\'яжіться зі мною',
        about_title: 'Про нас',
        about_subtitle: 'Професійна команда розробників',
        about_description: 'В TeleBotsRoman ми спеціалізуємося на створенні Telegram ботів, кастомних скриптів та повністю адаптивних веб-сайтів. Наша професійна команда розробників надає найкращі рішення ваших потреб. Якщо вам потрібен бот для автоматизації, скрипт для спрощення процесів або веб-сайт, який виділяється, ми готові вам допомогти.',
        projects_count: '20+',
        projects_label: 'Проектів <br />Доставлено',
        clients_count: '12+',
        clients_label: 'Задоволених <br />Клієнтів',
        experience_count: '2+',
        experience_label: 'Років <br />Досвіду',
        instagram_button: 'Instagram',
        telegram_button: 'Telegram',
        twitter_button: 'Twitter',
        skills_title: 'Навички',
        skills_subtitle: 'Мій технічний рівень',
        programming_languages_title: 'Мови програмування',
        skill_go: 'Go',
        skill_java: 'Java',
        skill_javascript: 'JavaScript',
        skill_python: 'Python',
        skill_typescript: 'TypeScript',
        it_constructs_title: 'ІТ Конструкції',
        skill_dbms: 'СУБД',
        skill_ds_algorithms: 'DS та Алгоритми',
        skill_oop: 'ОПП',
        technologies_title: 'Технології',
        skill_github: 'GitHub',
        skill_mysql: 'MySQL',
        skill_fastapi: 'FastAPI',
        skill_nodejs: 'NodeJs',
        skill_docker: 'Docker',
        skill_sqlalchemy: 'SQLAlchemy',
        skill_web_scraping: 'Веб-Скрапінг',
        section_title_projects: "Проєкти",
        subtitle_resent_work: "Актуальні проєкти",
        section_title_projects_uk: "Проєкти",
        subtitle_resent_work_uk: "Актуальні проєкти",
        project_description_sushi_bot: "Ласкаво просимо до Телеграм-бота для суші, вашого найкращого місця для замовлення смачних суші через Telegram!",
        project_description_email_spammer: "Email-Spammer - це скрипт на Python, який полегшує масове надсилання електронних листів кільком одержувачам з файлу Excel. Скрипт використовує бібліотеку PyQt для створення зручного інтерфейсу, де користувачі можуть ввести свої облікові дані електронної пошти, скласти повідомлення, вставити базу даних електронних адрес Excel та надіслати електронні листи.",
        project_title_traffic_arbitrage: "Телеграм-бот для арбітражу трафіку",
        project_description_traffic_arbitrage: "Телеграм-бот для арбітражу трафіку - це платформа, розроблена для полегшення купівлі та продажу трафіку між майстрами трафіку та адміністраторами каналів Telegram. Цей бот виступає як посередник, надаючи пропозиції (замовлення) та забезпечуючи комфортний робочий процес для обох сторін. Користувачі можуть отримувати виплати за залучення підписників до різних каналів Telegram.",
        project_title_stock_exchange_monitor: "Телеграм-бот для моніторингу фондових бірж",
        project_description_stock_exchange_monitor: "Бот збирає та моніторить дані про майбутні та найближчі проєкти з різних фондових бірж, надаючи своєчасні оновлення та детальну інформацію для інвесторів і аналітиків.",
        project_title_residential_complex: "Телеграм-бот для житлового комплексу",
        project_description_residential_complex: "Ласкаво просимо до TeleBot-Residential-Complex! Цей Телеграм-бот дозволяє мешканцям надсилати різні запити, пов'язані з контролем доступу та безпекою в межах житлового комплексу.",
        contact_me_title: 'Зв\'яжіться зі мною',
        contact_me_subtitle: 'Зв\'язатися',
        contact_phone_title: 'Телефон',
        contact_phone_number: '+380960908006',
        contact_email_title: 'Email',
        contact_email: 'roman.fedoniuk@gmail.com',
        contact_location_title: 'Місцезнаходження',
        contact_location: 'Київ, Україна',
        contact_form_name_label: 'Ім\'я',
        contact_form_number_label: 'Номер',
        contact_form_message_label: 'Повідомлення',
        contact_form_button: 'Надіслати повідомлення',

        // Add more translations as needed
    };

    applyTranslations(translations);
}

function translateToEnglish() {
    const translations = {
        nav_logo: 'TeleBotsRoman',
        nav_home_link: 'Home',
        nav_home: 'Home',
        nav_about_link: 'About',
        nav_about: 'About',
        nav_skills_link: 'Skills',
        nav_skills: 'Skills',
        nav_portfolio_link: 'Projects',
        nav_portfolio: 'Projects',
        nav_contact_link: 'Contact-Me',
        nav_contact: 'Contact-Me',
        home_title: 'Hi, TeleBotsRoman welcome you.',
        home_subtitle: 'Telegram bots, scripts, websites, and more from a professional team of developers.',
        home_description: 'Delivering top-notch Telegram bots, custom scripts, and fully responsive websites. At TeleBotsRoman, we pride ourselves on our professional development team, dedicated to bringing your digital projects to life with precision and creativity.',
        contact_button: 'Contact me',
        about_title: 'About Us',
        about_subtitle: 'Professional Development Team',
        about_description: 'At TeleBotsRoman, we specialize in creating Telegram bots, custom scripts, and fully responsive websites. Our professional team of developers is dedicated to delivering top-notch solutions tailored to your needs. Whether you need a bot for automation, a script to streamline processes, or a website that stands out, we\'ve got you covered.',
        projects_count: '20+',
        projects_label: 'Projects <br />Delivered',
        clients_count: '12+',
        clients_label: 'Satisfied <br />Clients',
        experience_count: '2+',
        experience_label: 'Years of <br />Experience',
        instagram_button: 'Instagram',
        telegram_button: 'Telegram',
        twitter_button: 'Twitter',
        skills_title: 'Skills',
        skills_subtitle: 'My technical level',
        programming_languages_title: 'Programming Languages',
        skill_go: 'Go',
        skill_java: 'Java',
        skill_javascript: 'JavaScript',
        skill_python: 'Python',
        skill_typescript: 'TypeScript',
        it_constructs_title: 'IT Constructs',
        skill_dbms: 'DBMS',
        skill_ds_algorithms: 'DS & Algorithms',
        skill_oop: 'OOP',
        technologies_title: 'Technologies',
        skill_github: 'GitHub',
        skill_mysql: 'MySQL',
        skill_fastapi: 'FastAPI',
        skill_nodejs: 'NodeJs',
        skill_docker: 'Docker',
        skill_sqlalchemy: 'SQLAlchemy',
        skill_web_scraping: 'Web Scraping',
        section_title_projects: "Projects",
        subtitle_resent_work: "Most recent works",
        project_title_sushi_bot: "Sushi Telegram Bot",
        project_description_sushi_bot: "Welcome to Sushi Telegram Bot, your ultimate destination for ordering delicious sushi dishes right from your Telegram app!",
        project_title_email_spammer: "Email-Spammer",
        project_description_email_spammer: "Email-Spammer is a Python script that facilitates the mass sending of emails to multiple recipients from an Excel file. The script utilizes the PyQt library to create a user-friendly interface where users can input their email login credentials, compose the message, paste the Excel email database, and send emails.",
        project_title_traffic_arbitrage: "Traffic Arbitrage Telegram Bot",
        project_description_traffic_arbitrage: "The Traffic Arbitrage Telegram Bot is a platform designed to facilitate the buying and selling of traffic between traffic masters and Telegram channel admins. This bot acts as an intermediary, providing offers (orders) and ensuring a comfortable workflow for both parties. Users can earn payments for attracting subscribers to various Telegram channels.",
        project_title_stock_exchange_monitor: "Stock Exchange Monitor Telegram Bot",
        project_description_stock_exchange_monitor: "The bot collects and monitors data on upcoming and coming soon projects from various stock exchanges, providing timely updates and detailed information for investors and analysts.",
        project_title_residential_complex: "Residential Complex Telegram Bot",
        project_description_residential_complex: "Welcome to TeleBot-Residential-Complex! This Telegram bot allows residents to submit various requests related to access control and security within the residential complex.",
        contact_me_title: 'Contact Me',
        contact_me_subtitle: 'Get in touch',
        contact_phone_title: 'Phone',
        contact_phone_number: '+380960908006',
        contact_email_title: 'Email',
        contact_email: 'roman.fedoniuk@gmail.com',
        contact_location_title: 'Location',
        contact_location: 'Kyiv, Ukraine',
        contact_form_name_label: 'Name',
        contact_form_number_label: 'Number',
        contact_form_message_label: 'Message',
        contact_form_button: 'Send Message',

    };

    applyTranslations(translations);
}



function applyTranslations(translations) {
    for (const [key, value] of Object.entries(translations)) {
        const element = document.querySelector(`[data-translate="${key}"]`);
        if (element) {
            element.innerHTML = value;
        }
    }
}









/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================= ACCORD SKILLS ======================*/

const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

/*============== Qualification Skills ===============*/

/*const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      
*/

/*======================= Services Modal ===================*/
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});

/*======================= Portfolio Swiper ===================*/
var swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme,
    );
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme,
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
