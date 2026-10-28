
document.addEventListener("DOMContentLoaded", () => {

    // ===================================
    // LANGUAGE BUTTONS
    // ===================================

    const languageButtons = document.querySelectorAll(
        ".language-switch .lang-btn"
    );

    // ===================================
    // TRANSLATIONS
    // ===================================

    const translations = {
        id: {
            // NAVBAR
            "nav.home": "Beranda",
            "nav.education": "Pendidikan",
            "nav.hardSkills": "Hard Skills",
            "nav.softSkills": "Soft Skills",
            "nav.experience": "Pengalaman",
            "nav.projects": "Proyek",
            "nav.contact": "Kontak",

            // HOME & PROFILE
            "hero.label": "LULUSAN TEKNIK INFORMATIKA",
            "hero.greeting": "Halo, saya",
            "hero.role": "Software Developer & Data Analyst",
            "hero.description":
                "Lulusan S1 Teknik Informatika yang memiliki ketertarikan pada pengembangan aplikasi Android, pengembangan website, dan analisis data. Berpengalaman mengerjakan berbagai proyek teknologi dengan fokus pada solusi yang bermanfaat dan mudah digunakan.",
            "hero.projects": "Lihat Proyek",
            "hero.contact": "Hubungi Saya",

            // EDUCATION
            "education.title": "Riwayat Pendidikan",
            "education.subtitle":
                "Latar belakang akademik dan pengembangan kompetensi saya.",
            "education.degree": "S1 Teknik Informatika",
            "education.gpa": "IPK 3,81 / 4,00",
            "education.description":
                "Selama menempuh pendidikan, saya mempelajari pemrograman, pengembangan perangkat lunak, pengelolaan basis data, dan analisis data. Pengetahuan tersebut saya terapkan melalui pengembangan aplikasi Android, website, dan berbagai proyek berbasis teknologi.",

            // HARD SKILLS
            "skills.title": "Keahlian Teknis",
            "skills.subtitle":
                "Keterampilan teknis yang saya gunakan dalam pengolahan data, administrasi digital, dan pengembangan perangkat lunak.",
            "skills.programming": "Pemrograman",
            
            // SOFT SKILLS
            "softSkills.subtitle":
                "Kemampuan interpersonal dan profesional yang saya kembangkan melalui pengalaman akademik, kolaborasi, dan proyek.",

            "softSkills.communication.title": "Komunikasi",
            "softSkills.communication.description":
                "Mampu menyampaikan informasi dan ide secara jelas, baik secara lisan maupun tertulis.",

            "softSkills.teamwork.title": "Kerja Tim",
            "softSkills.teamwork.description":
                "Terbiasa berkolaborasi, berbagi tanggung jawab, dan bekerja bersama untuk mencapai tujuan proyek.",

            "softSkills.problemSolving.title": "Pemecahan Masalah",
            "softSkills.problemSolving.description":
                "Mampu mengidentifikasi permasalahan, menganalisis penyebab, dan mencari solusi yang efektif.",

            "softSkills.timeManagement.title": "Manajemen Waktu",
            "softSkills.timeManagement.description":
                "Mampu mengatur prioritas pekerjaan dan menyelesaikan tugas sesuai tenggat waktu.",

            "softSkills.adaptability.title": "Adaptabilitas",
            "softSkills.adaptability.description":
                "Cepat mempelajari teknologi baru dan menyesuaikan diri dengan kebutuhan pekerjaan.",

            "softSkills.attention.title": "Ketelitian",
            "softSkills.attention.description":
                "Memperhatikan detail dalam pengolahan data, penulisan kode, dan penyelesaian tugas.",
            
            
            // EXPERIENCE
            "experience.title": "Pengalaman",
            "experience.subtitle":
                "Pengalaman dalam pengembangan teknologi, komunikasi digital, dan kegiatan organisasi.",

            // BANGKIT ACADEMY
            "experience.bangkit.date": "SEP – DES 2024",
            "experience.bangkit.category":
                "PROGRAM PENGEMBANGAN KOMPETENSI",
            "experience.bangkit.description":
                "Mengembangkan backend aplikasi, mengelola database, dan melakukan deployment aplikasi berbasis cloud dalam proyek kolaboratif.",

            // ORGANIZATION
            "experience.organization.category":
                "PENGALAMAN ORGANISASI",

            // IKATAN MAHASISWA ACEH TAMIANG
            "experience.imat.role":
                "Divisi Informasi dan Komunikasi",
            "experience.imat.description":
                "Mengelola media sosial organisasi, membuat materi publikasi menggunakan Canva, dan mempublikasikan informasi kegiatan organisasi.",

            // KKN
            "experience.kkn.date": "JANUARI 2026",
            "experience.kkn.category":
                "PENGABDIAN MASYARAKAT / KKN",
            "experience.kkn.title": "Pengembangan Website Desa",
            "experience.kkn.description":
                "Mengembangkan website desa menggunakan Laravel untuk mendukung penyajian informasi digital dalam kegiatan pengabdian masyarakat.",

            // HIMPUNAN MAHASISWA
            "experience.himatif.name":
                "Himpunan Mahasiswa Teknik Informatika",
            "experience.himatif.role": "Anggota",
            "experience.himatif.description":
                "Berpartisipasi dalam kegiatan organisasi kemahasiswaan serta mengembangkan kemampuan komunikasi, koordinasi, dan kerja sama tim.",

            // TAGS
            "experience.tag.social": "Media Sosial",
            "experience.tag.communication": "Komunikasi",
            "experience.tag.organization": "Organisasi",
            "experience.tag.teamwork": "Kerja Tim",
            "experience.tag.collaboration": "Kolaborasi",

            
            // CERTIFICATIONS
            "certifications.title": "Sertifikasi & Pencapaian",
            "certifications.subtitle":
                "Dokumentasi pencapaian dan pengembangan kompetensi profesional saya.",

            "certifications.bangkit.description":
                "Berhasil menyelesaikan program Bangkit Academy dengan spesialisasi Cloud Computing, mencakup Google Cloud, backend development, DevOps, dan capstone project.",

            "certifications.bangkit.period":
                "6 September – 31 Desember 2024",

            "certifications.viewCertificate":
                "Lihat Sertifikat Lengkap",

            // DICODING
            "certifications.dicoding.title":
                "Sertifikat Pelatihan lainnya",

            "certifications.dicoding.subtitle":
                "Sertifikasi pembelajaran dalam bidang pengembangan aplikasi, cloud computing, web development, dan data science.",

            "certifications.dicoding.hint":
                "Geser untuk melihat sertifikat lainnya",
            
            
            // PROJECTS
            "projects.title": "Featured Projects",
            "projects.subtitle":
                "Beberapa proyek pilihan yang saya kembangkan untuk menerapkan keterampilan dalam pengembangan aplikasi dan teknologi.",

            // MONEYNEST
            "projects.moneynest.subtitle":
                "Aplikasi Android Pengelolaan Keuangan Pribadi",

            "projects.moneynest.description":
                "MoneyNest adalah aplikasi Android untuk membantu pengguna mengelola keuangan pribadi melalui pencatatan pemasukan dan pengeluaran, pemantauan saldo, riwayat transaksi, serta pemindaian struk belanja menggunakan teknologi Optical Character Recognition (OCR).",

            // LEAFAI
            "projects.leafai.subtitle":
                "Aplikasi Deteksi Penyakit Daun Cabai",

            "projects.leafai.description":
                "LeafAI adalah aplikasi Android yang memanfaatkan teknologi machine learning untuk membantu mengidentifikasi penyakit pada daun cabai. Aplikasi ini menyediakan fitur deteksi secara real-time, menampilkan hasil prediksi beserta tingkat keyakinan model, informasi penyakit, serta rekomendasi penanganan tanaman.",

            // WEBSITE DESA
            "projects.webdesa.title": "Website Desa",

            "projects.webdesa.subtitle":
                "Sistem Informasi Gampong Kumbang Punteuet",

            "projects.webdesa.description":
                "Website sistem informasi Gampong Kumbang Punteuet yang dikembangkan menggunakan Laravel dalam kegiatan Kuliah Kerja Nyata (KKN). Website ini menyediakan informasi profil gampong, galeri, sejarah, peta desa, berita, dan halaman kontak untuk mempermudah akses informasi masyarakat.",

            // BUTTONS
            "projects.viewGithub": "Lihat di GitHub",
            "projects.visitWebsite": "Kunjungi Website",

    
            // CONTACT
            "contact.label": "MARI TERHUBUNG",
            "contact.title": "Mari Berkolaborasi!",
            "contact.description":
                "Saya terbuka untuk peluang kerja, kolaborasi, dan pengembangan proyek baru. Mari terhubung dan ciptakan sesuatu yang bermanfaat bersama.",

            "contact.downloadCV": "Unduh CV",
            "contact.viewCV": "Lihat CV",
            "contact.emailLabel": "Kirim Email",

            "contact.copyright":
                "© 2026 Ayu Suningsih. Hak cipta dilindungi."


        },

        en: {
            // NAVBAR
            "nav.home": "Home",
            "nav.education": "Education",
            "nav.hardSkills": "Hard Skills",
            "nav.softSkills": "Soft Skills",
            "nav.experience": "Experience",
            "nav.projects": "Projects",
            "nav.contact": "Contact",

            // HOME & PROFILE
            "hero.label": "INFORMATICS ENGINEERING GRADUATE",
            "hero.greeting": "Hello, I'm",
            "hero.role": "Software Developer & Data Analyst",
            "hero.description":
                "An Informatics Engineering graduate with a strong interest in Android application development, web development, and data analysis. Experienced in developing technology projects focused on delivering practical and user-friendly solutions.",
            "hero.projects": "View Projects",
            "hero.contact": "Contact Me",

            // EDUCATION
            "education.title": "Education",
            "education.subtitle":
                "My academic background and professional skill development.",
            "education.degree":
                "Bachelor's Degree in Informatics Engineering",
            "education.gpa": "GPA 3.81 / 4.00",
            "education.description":
                "During my studies, I gained knowledge in programming, software development, database management, and data analysis. I applied these skills through the development of Android applications, websites, and various technology-based projects.",

            // HARD SKILLS
            "skills.title": "Technical Skills",
            "skills.subtitle":
                "Technical skills I use in data processing, digital administration, and software development.",
            "skills.programming": "Programming",
            
            // SOFT SKILLS
            "softSkills.subtitle":
                "Interpersonal and professional skills I have developed through academic experiences, collaboration, and projects.",

            "softSkills.communication.title": "Communication",
            "softSkills.communication.description":
                "Able to communicate information and ideas clearly, both verbally and in writing.",

            "softSkills.teamwork.title": "Teamwork",
            "softSkills.teamwork.description":
                "Experienced in collaborating, sharing responsibilities, and working together to achieve project goals.",

            "softSkills.problemSolving.title": "Problem Solving",
            "softSkills.problemSolving.description":
                "Able to identify problems, analyze their causes, and develop effective solutions.",

            "softSkills.timeManagement.title": "Time Management",
            "softSkills.timeManagement.description":
                "Able to prioritize work and complete tasks within deadlines.",

            "softSkills.adaptability.title": "Adaptability",
            "softSkills.adaptability.description":
                "Quick to learn new technologies and adapt to changing work requirements.",

            "softSkills.attention.title": "Attention to Detail",
            "softSkills.attention.description":
                "Pay close attention to details in data processing, coding, and task completion.",

            // EXPERIENCE
            "experience.title": "Experience",
            "experience.subtitle":
                "Experience in technology development, digital communication, and organizational activities.",

            // BANGKIT ACADEMY
            "experience.bangkit.date": "SEP – DEC 2024",
            "experience.bangkit.category":
                "PROFESSIONAL DEVELOPMENT PROGRAM",
            "experience.bangkit.description":
                "Developed application backends, managed databases, and deployed cloud-based applications through collaborative projects.",

            // ORGANIZATION
            "experience.organization.category":
                "ORGANIZATIONAL EXPERIENCE",

            // IKATAN MAHASISWA ACEH TAMIANG
            "experience.imat.role":
                "Information and Communication Division",
            "experience.imat.description":
                "Managed the organization's social media, created publication materials using Canva, and shared information about organizational activities.",

            // KKN
            "experience.kkn.date": "JANUARY 2026",
            "experience.kkn.category":
                "COMMUNITY SERVICE / KKN",
            "experience.kkn.title": "Village Website Development",
            "experience.kkn.description":
                "Developed a village website using Laravel to support digital information delivery as part of a community service program.",

            // HIMPUNAN MAHASISWA
            "experience.himatif.name":
                "Informatics Engineering Student Association",
            "experience.himatif.role": "Member",
            "experience.himatif.description":
                "Participated in student organization activities while developing communication, coordination, and teamwork skills.",

            // TAGS
            "experience.tag.social": "Social Media",
            "experience.tag.communication": "Communication",
            "experience.tag.organization": "Organization",
            "experience.tag.teamwork": "Teamwork",
            "experience.tag.collaboration": "Collaboration",

            
            // CERTIFICATIONS
            "certifications.title": "Certifications & Achievements",
            "certifications.subtitle":
                "A showcase of my achievements and ongoing professional development.",

            "certifications.bangkit.description":
                "Successfully completed the Bangkit Academy program specializing in Cloud Computing, covering Google Cloud, backend development, DevOps, and a capstone project.",

            "certifications.bangkit.period":
                "September 6 – December 31, 2024",

            "certifications.viewCertificate":
                "View Full Certificate",

            // DICODING
            "certifications.dicoding.title":
                "Additional Training Certificates",

            "certifications.dicoding.subtitle":
                "Learning certifications in application development, cloud computing, web development, and data science.",

            "certifications.dicoding.hint":
                "Swipe to explore more certificates",

            
            // PROJECTS
            "projects.title": "Featured Projects",
            "projects.subtitle":
                "A selection of projects I have developed to apply my skills in application development and technology.",

            // MONEYNEST
            "projects.moneynest.subtitle":
                "Personal Finance Android Application",

            "projects.moneynest.description":
                "MoneyNest is an Android application designed to help users manage their personal finances by tracking income and expenses, monitoring balances, viewing transaction history, and scanning shopping receipts using Optical Character Recognition (OCR) technology.",

            // LEAFAI
            "projects.leafai.subtitle":
                "Chili Leaf Disease Detection Application",

            "projects.leafai.description":
                "LeafAI is an Android application that uses machine learning to help identify diseases in chili plant leaves. It provides real-time detection, prediction results with model confidence scores, disease information, and recommended plant treatments.",

            // WEBSITE DESA
            "projects.webdesa.title": "Village Website",

            "projects.webdesa.subtitle":
                "Gampong Kumbang Punteuet Information System",

            "projects.webdesa.description":
                "An information website for Gampong Kumbang Punteuet developed using Laravel as part of a Community Service Program (KKN). The website provides village profiles, photo galleries, history, village maps, news, and contact information to improve public access to information.",

            // BUTTONS
            "projects.viewGithub": "View on GitHub",
            "projects.visitWebsite": "Visit Website",
            
            // CONTACT
            "contact.label": "LET'S CONNECT",
            "contact.title": "Let's Collaborate!",
            "contact.description":
                "I am open to job opportunities, collaborations, and new project development. Let's connect and create something meaningful together.",

            "contact.downloadCV": "Download CV",
            "contact.viewCV": "View CV",
            "contact.emailLabel": "Send Email",

            "contact.copyright":
                "© 2026 Ayu Suningsih. All rights reserved."

        }
    };

    // ===================================
    // SAVED LANGUAGE
    // ===================================

    const savedLanguage = localStorage.getItem(
        "portfolio-language"
    );

    // ===================================
    // CHANGE LANGUAGE
    // ===================================

    function changeLanguage(language) {

        const selectedLanguage =
            translations[language] ? language : "id";

        // Save language
        localStorage.setItem(
            "portfolio-language",
            selectedLanguage
        );

        

        // Update HTML language
        document.documentElement.lang = selectedLanguage;

        // ===================================
        // TRANSLATE CONTENT
        // ===================================

        document.querySelectorAll("[data-i18n]").forEach(
            (element) => {

                const key = element.dataset.i18n;

                const translatedText =
                    translations[selectedLanguage][key];

                if (translatedText !== undefined) {
                    element.textContent = translatedText;
                }
            }
        );

        
        // TRANSLATE ACCESSIBILITY LABELS
        document.querySelectorAll("[data-i18n-aria-label]")
            .forEach((element) => {

                const key = element.getAttribute(
                    "data-i18n-aria-label"
                );

                const translatedText =
                    translations[selectedLanguage][key];

                if (translatedText !== undefined) {
                    element.setAttribute(
                        "aria-label",
                        translatedText
                    );
                }
            });


        // ===================================
        // TRANSLATE SKILL PROGRESS LABELS
        // ===================================

        const progressBars = document.querySelectorAll(
            ".skill-card .skill-progress[role='progressbar']"
        );

        progressBars.forEach((progressBar) => {

            const skillCard = progressBar.closest(
                ".skill-card"
            );

            if (!skillCard) return;

            const skillTitle = skillCard.querySelector("h4");

            if (!skillTitle) return;

            const skillName = skillTitle.textContent.trim();

            const label = selectedLanguage === "en"
                ? "Proficiency in " + skillName
                : "Kemampuan " + skillName;

            progressBar.setAttribute(
                "aria-label",
                label
            );
        });

        
        // CERTIFICATE ACCESSIBILITY
        const certificateLabels = {
            id: {
                previous: "Sertifikat sebelumnya",
                next: "Sertifikat berikutnya",
                gallery: "Galeri sertifikat Dicoding",
                bangkitAlt:
                    "Sertifikat kelulusan Bangkit Academy 2024 spesialisasi Cloud Computing"
            },
            en: {
                previous: "Previous certificate",
                next: "Next certificate",
                gallery: "Dicoding certificate gallery",
                bangkitAlt:
                    "Bangkit Academy 2024 Cloud Computing graduation certificate"
            }
        };

        const labels = certificateLabels[selectedLanguage];

        const previousButton = document.getElementById("dicoding-prev");
        const nextButton = document.getElementById("dicoding-next");
        const gallery = document.getElementById("dicoding-slider");

        if (previousButton) {
            previousButton.setAttribute("aria-label", labels.previous);
        }

        if (nextButton) {
            nextButton.setAttribute("aria-label", labels.next);
        }

        if (gallery) {
            gallery.setAttribute("aria-label", labels.gallery);
        }

        const bangkitImage = document.querySelector(
            ".certificate-preview img"
        );

        if (bangkitImage) {
            bangkitImage.setAttribute("alt", labels.bangkitAlt);
        }


        // ===================================
        // UPDATE ACTIVE LANGUAGE BUTTON
        // ===================================

        languageButtons.forEach((button) => {

            const isActive =
                button.dataset.lang === selectedLanguage;

            button.classList.toggle(
                "active",
                isActive
            );

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );
        });
    }

    // ===================================
    // BUTTON CLICK EVENTS
    // ===================================

    languageButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedLanguage = button.dataset.lang;

            changeLanguage(selectedLanguage);
        });
    });

    // ===================================
    // INITIALIZE LANGUAGE
    // ===================================

    changeLanguage(
        savedLanguage === "en" ? "en" : "id"
    );

});
