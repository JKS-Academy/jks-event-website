
const arabicContent = {
    jks: "يعد الاتحاد الياباني للكاراتيه شوتو أحد أكثر منظمات الكاراتيه الشوتوكان تأثيرًا في العالم. إنها أيضًا واحدة من أكثر منظمات الكاراتيه انتشارًا بما في ذلك 72 دولة وأكثر من 2 مليون عضو. تم تشغيله بنجاح تحت إشراف شيهان ماساو كاجاوا وهو دان الثامن في JKF والرئيس الفني للاتحاد العالمي للكاراتيه.",
    worldHub: "يتبع معظم لاعبي الكاراتيه شيهان كاغاوا ماساو، لذا فهم يرغبون بشدة في حضور الندوات العالمية ودورات المدربين للحصول على الدبلومات واختبار DAN في اليابان. يواجه الأعضاء من خارج أوروبا ودول غير أمريكية قيودًا على السفر إلى اليابان بسبب إجراءات التأشيرة وتكاليفها. نحن، JKS UAE نريد دعوة متابعي الكاراتيه العالميين إلى دبي من خلال إجراء الندوات الدولية والكأس الدولية ودورة دبلوم المدربين. سيكون المدربون اليابانيون متاحين في Dojo الخاص بنا لتزويدنا بكل الدعم لتطوير الكاراتيه في جميع أنحاء العالم.",
    footerContent: "يعد JKS UAE حاليًا أكبر وأنجح اتحاد شوتوكان للكاراتيه في الإمارات العربية المتحدة والهند. نحن تابعون لـ Japan Karate Shotorenmei ومقرها الرئيسي في طوكيو، اليابان.",
    jksDescription: "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في الصناعة منذ القرن السادس عشر، عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لصنع نموذج كتاب. لقد صمدت ليس فقط لخمسة قرون، بل قفزت أيضًا إلى التنضيد الإلكتروني، وبقيت دون تغيير بشكل أساسي.",
    getNotified: "الحصول على إخطار",
    getNotifiedDescription: "تواصل مع أكاديمية JKS واحصل على إشعارات بشأن الأحداث القادمة",
    playerName: "اسم اللاعب",
    dob: "(dd-mm-yyyy) تاريخ الميلاد",
    age: "عمر",
    sex: "جنس",
    belt: "حزام",
    height: "(cm) ارتفاع",
    weight: "(Kg) وزن",
    emirate: "الإمارات",
    mobile: "(max 12 digits) رقم الهاتف المحمول",
    address: "عنوان",
    events: "الأحداث",
    clubName: "اسم النادي",
    instructorName: "اسم المدرب",
    food: "طعام",
    waiver: "التنازل",
    waiverDescription: "من خلال التحقق من هذا، أوافق على "
}

const englishContent = {
    jks: "Japan Karate Shoto Federation is one of the most influential Shotokan karate organization in the world. Its also one of the most reaching karate organization including 72 countries over 2 million members. Its successfully running under the direction of Shihan Masao Kagawa who is 8th Dan of JKF and Technical chairman of World Karate Federation.",
    worldHub: "Most of the karatekas are following Shihan Kagawa Masao so they are eagerly want to attend world seminar and diploma Instructors courses and DAN Examination in Japan. The members from non Europe and non American countries are facing restriction to travel japan due to the visa procedure and cost. We , the JKS UAE wants to invite the world karate followers to Dubai by conducting International Seminars , International cup and Instructors Diploma course. Japanese instructors will be available in our Dojo to give us all the support to develop karate world wide.",
    footerContent: "JKS UAE is currently the largest and most successful Shotokan karate federation in UAE and India. We are affiliated to the Japan Karate Shotorenmei with its Headquarters based in Tokyo, Japan.",
    jksDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    getNotified: "Get Notified",
    getNotifiedDescription: "Get in touch with JKS academy, Get notified on upcoming events",
    playerName: "Player Name",
    dob: "Date of Birth (dd-mm-yyyy)",
    age: "Age",
    sex: "Sex",
    belt: "Belt",
    height: "Height (cm)",
    weight: "Weight (kg)",
    emirate: "Emirate",
    mobile: "Mobile No (max 12 digits)",
    address: "Address",
    events: "Events",
    clubName: "Club Name",
    instructorName: "Instructor Name",
    food: "Dietary Restrictions",
    waiver: "Waiver",
    waiverDescription: "By checking this, I Agree to the",
}



const getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}


const setEnglish = () => {
    const languageButton = document.getElementById('language');
    // Set the page to English
    // Add your logic here to update the page content accordingly
    document.body.classList.remove('rtl');
    if (document.getElementById('jks')) document.getElementById('jks').innerHTML = englishContent.jks;
    if (document.getElementById('worldHub')) document.getElementById('worldHub').innerHTML = englishContent.worldHub;
    if (document.getElementById('footerContent')) document.getElementById('footerContent').innerHTML = englishContent.footerContent;
    if (document.getElementById('jksDescription')) document.getElementById('jksDescription').innerHTML = englishContent.jksDescription;
    if (document.getElementById('getNotified')) document.getElementById('getNotified').innerHTML = englishContent.getNotified;
    if (document.getElementById('getNotifiedDescription')) document.getElementById('getNotifiedDescription').innerHTML = englishContent.getNotifiedDescription;
    if (document.getElementById('labelPlayerName')) document.getElementById('labelPlayerName').innerHTML = englishContent.playerName;
    if (document.getElementById('labelDob')) document.getElementById('labelDob').innerHTML = englishContent.dob;
    if (document.getElementById('labelAge')) document.getElementById('labelAge').innerHTML = englishContent.age;
    if (document.getElementById('labelSex')) document.getElementById('labelSex').innerHTML = englishContent.sex;
    if (document.getElementById('optionSex')) document.getElementById('optionSex').innerHTML = englishContent.sex;
    if (document.getElementById('labelBelt')) document.getElementById('labelBelt').innerHTML = englishContent.belt;
    if (document.getElementById('optionBelt')) document.getElementById('optionBelt').innerHTML = englishContent.belt;
    if (document.getElementById('labelHeight')) document.getElementById('labelHeight').innerHTML = englishContent.height;
    if (document.getElementById('labelWeight')) document.getElementById('labelWeight').innerHTML = englishContent.weight;
    if (document.getElementById('labelEmirate')) document.getElementById('labelEmirate').innerHTML = englishContent.emirate;
    if (document.getElementById('optionEmirate')) document.getElementById('optionEmirate').innerHTML = englishContent.emirate;
    if (document.getElementById('labelMobile')) document.getElementById('labelMobile').innerHTML = englishContent.mobile;
    if (document.getElementById('labelAddress')) document.getElementById('labelAddress').innerHTML = englishContent.address;
    if (document.getElementById('labelEvents')) document.getElementById('labelEvents').innerHTML = englishContent.events;
    if (document.getElementById('labelClubName')) document.getElementById('labelClubName').innerHTML = englishContent.clubName;
    if (document.getElementById('labelInsructorName')) document.getElementById('labelInsructorName').innerHTML = englishContent.instructorName;
    if (document.getElementById('labelFood')) document.getElementById('labelFood').innerHTML = englishContent.food;
    if (document.getElementById('optionFood')) document.getElementById('optionFood').innerHTML = englishContent.food;
    if (document.getElementById('labelWaiver')) document.getElementById('labelWaiver').innerHTML = englishContent.waiverDescription;
    if (document.getElementById('waiverButton')) document.getElementById('waiverButton').innerHTML = englishContent.waiver;

    // For example, you can change the text on the page to English
    languageButton.innerHTML = "English" // Simulate a click on the English button
}

const setArabic = () => {
    const languageButton = document.getElementById('language');
    // Set the page to Arabic
    // Add your logic here to update the page content accordingly
    document.body.classList.add('rtl');
    if (document.getElementById('jks')) document.getElementById('jks').innerHTML = arabicContent.jks;
    if (document.getElementById('worldHub')) document.getElementById('worldHub').innerHTML = arabicContent.worldHub;
    if (document.getElementById('footerContent')) document.getElementById('footerContent').innerHTML = arabicContent.footerContent;
    if (document.getElementById('jksDescription')) document.getElementById('jksDescription').innerHTML = arabicContent.jksDescription;
    if (document.getElementById('getNotified')) document.getElementById('getNotified').innerHTML = arabicContent.getNotified;
    if (document.getElementById('getNotifiedDescription')) document.getElementById('getNotifiedDescription').innerHTML = arabicContent.getNotifiedDescription;
    if (document.getElementById('labelPlayerName')) document.getElementById('labelPlayerName').innerHTML = arabicContent.playerName;
    if (document.getElementById('labelDob')) document.getElementById('labelDob').innerHTML = arabicContent.dob;
    if (document.getElementById('labelAge')) document.getElementById('labelAge').innerHTML = arabicContent.age;
    if (document.getElementById('labelSex')) document.getElementById('labelSex').innerHTML = arabicContent.sex;
    if (document.getElementById('optionSex')) document.getElementById('optionSex').innerHTML = arabicContent.sex;
    if (document.getElementById('labelBelt')) document.getElementById('labelBelt').innerHTML = arabicContent.belt;
    if (document.getElementById('optionBelt')) document.getElementById('optionBelt').innerHTML = arabicContent.belt;
    if (document.getElementById('labelHeight')) document.getElementById('labelHeight').innerHTML = arabicContent.height;
    if (document.getElementById('labelWeight')) document.getElementById('labelWeight').innerHTML = arabicContent.weight;
    if (document.getElementById('labelEmirate')) document.getElementById('labelEmirate').innerHTML = arabicContent.emirate;
    if (document.getElementById('optionEmirate')) document.getElementById('optionEmirate').innerHTML = arabicContent.emirate;
    if (document.getElementById('labelMobile')) document.getElementById('labelMobile').innerHTML = arabicContent.mobile;
    if (document.getElementById('labelAddress')) document.getElementById('labelAddress').innerHTML = arabicContent.address;
    if (document.getElementById('labelEvents')) document.getElementById('labelEvents').innerHTML = arabicContent.events;
    if (document.getElementById('labelClubName')) document.getElementById('labelClubName').innerHTML = arabicContent.clubName;
    if (document.getElementById('labelInsructorName')) document.getElementById('labelInsructorName').innerHTML = arabicContent.instructorName;
    if (document.getElementById('labelFood')) document.getElementById('labelFood').innerHTML = arabicContent.food;
    if (document.getElementById('optionFood')) document.getElementById('optionFood').innerHTML = arabicContent.food;
    if (document.getElementById('labelWaiver')) document.getElementById('labelWaiver').innerHTML = arabicContent.waiverDescription;
    if (document.getElementById('waiverButton')) document.getElementById('waiverButton').innerHTML = arabicContent.waiver;

    // For example, you can change the text on the page to Arabic
    languageButton.innerHTML = "عربي" // Simulate a click on the Arabic button
}


// set language on initial load according to cookie/location
document.addEventListener('DOMContentLoaded', () => {
    const language = getCookie("language");
    // If the language is found in the cookie, you can use it to set the initial language.
    // Here, I'm assuming you have elements with IDs 'englishButton' and 'arabicButton'
    if (language === 'eng') {
        setEnglish()
    } else if (language === 'ara') {
        setArabic()
    } else {
        // If the language is not found in the cookie, you can use the browser's language to set the initial language.
        // Here, I'm assuming you have elements with IDs 'englishButton' and 'arabicButton'
        const browserLanguage = navigator.language;
        if (browserLanguage.split('-')[0] === 'en') {
            setEnglish()
        } else if (browserLanguage === 'ar') {
            setArabic()
        }
    }
});


const changeLanguage = (language) => {
    if (language === 'eng') {
        document.cookie = "language=eng;";
        console.log(document.cookie)
        window.location.reload();
    } else if (language === 'ara') {
        document.cookie = "language=ara;";
        console.log(document.cookie)
        window.location.reload();
    }
};

var submitted = false;

const handleScroll = () => {
    const navbar = document.getElementById("main-navbar");
    const logo = document.getElementById("navbar-logo");
    if (window.scrollY > 30) { // You can adjust the scroll threshold
        navbar.style.height = "5rem"; // Decrease the height
        logo.classList.add("navbar-logo-small");
        navbar.classList.add("navbar-bg");
    } else {
        navbar.style.height = "8rem"; // Reset the height
        navbar.classList.remove("navbar-bg");
        logo.classList.remove("navbar-logo-small");
    }
}

window.addEventListener("scroll", handleScroll);

// countDown
// const targetDate = new Date("2023-12-31T23:59:59").getTime(); // Replace with your target date and time

// // Update the countdown every second
// const interval = setInterval(function () {
//     const currentDate = new Date().getTime();
//     const timeRemaining = targetDate - currentDate;

//     if (timeRemaining <= 0) {
//         // If the target time has passed, clear the interval and display a message
//         clearInterval(interval);
//         document.getElementById("clock-c").innerHTML = "Countdown expired!";
//     } else {
//         // Calculate days, hours, minutes, and seconds remaining
//         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//         // Update the countdown elements with the calculated values
//         document.getElementById("days").innerHTML = String(days).padStart(2, "0");
//         document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
//         document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
//         document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");
//     }
// }, 1000);
const openAccordion = () => {
    document.getElementById("accordion-button").click();
}

document.addEventListener('DOMContentLoaded', () => {
    const modalButton = document.getElementById('modalButton');
    modalButton.click();

    setTimeout(() => {
        modalButton.click();
        setTimeout(() => {
            document.getElementById('exampleModal').style.zIndex = -1;
        }, 500);
    }, 2000);

    const name = document.getElementById('entry.2092238618');
    const waiverName = document.getElementById('waiverName');
    name.addEventListener('input', () => {
        waiverName.innerHTML = name.value;
    });

    const dob = document.getElementById('entry.1503997084');
    dob.addEventListener('input', calculateAge);

    const kataCheck = document.getElementById('kataCheck');
    const kumiteCheck = document.getElementById('kumiteCheck');
    kataCheck.addEventListener('change', () => {
        if (kataCheck.checked && !kumiteCheck.checked) {
            kumiteCheck.removeAttribute('required')
        } else if (!kataCheck.checked && kumiteCheck.checked) {
            kataCheck.removeAttribute('required')
        } else {
            kataCheck.setAttribute('required', true)
            kumiteCheck.setAttribute('required', true)
        }
    });

    kumiteCheck.addEventListener('change', () => {
        if (kataCheck.checked && !kumiteCheck.checked) {
            kumiteCheck.removeAttribute('required')
        } else if (!kataCheck.checked && kumiteCheck.checked) {
            kataCheck.removeAttribute('required')
        } else {
            kataCheck.setAttribute('required', true)
            kumiteCheck.setAttribute('required', true)
        }
    });

    const labelSex = document.getElementById('labelSex');
    const selectSex = document.getElementById('entry.1597875817');
    selectSex.addEventListener('change', () => {
        selectSex.value !== '' ? labelSex.style.display = 'block' : labelSex.style.display = 'none'
    });

    const labelBelt = document.getElementById('labelBelt');
    const selectBelt = document.getElementById('entry.2099544009');
    selectBelt.addEventListener('change', () => {
        selectBelt.value !== '' ? labelBelt.style.display = 'block' : labelBelt.style.display = 'none'
    });

    const labelEmirate = document.getElementById('labelEmirate');
    const selectEmirate = document.getElementById('entry.1515663701');
    selectEmirate.addEventListener('change', () => {
        selectEmirate.value !== '' ? labelEmirate.style.display = 'block' : labelEmirate.style.display = 'none'
    });

    const labelFood = document.getElementById('labelFood');
    const selectFood = document.getElementById('entry.202302837');
    selectFood.addEventListener('change', () => {
        selectFood.value !== '' ? labelFood.style.display = 'block' : labelFood.style.display = 'none'
    });
});


const calculateAge = () => {
    // Get the selected birthdate from the input field
    const birthdateInput = document.getElementById("entry.1503997084");
    const birthdate = new Date(birthdateInput.value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    var age = currentDate.getFullYear() - birthdate.getFullYear();

    // Check if the birthday has already occurred this year
    if (
        currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() &&
            currentDate.getDate() < birthdate.getDate())
    ) {
        // Subtract 1 from age if the birthday hasn't occurred yet this year
        age--;
    }

    // Display the calculated age
    const ageField = document.getElementById("entry.342131157");
    ageField.value = age;
}

const registration = () => {
    if (submitted) {
        const ok = Swal.fire({
            title: 'Registration Successful',
            text: 'Your registration has been submitted successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location = 'https://jkskarate.com/';
        });
    }
}
