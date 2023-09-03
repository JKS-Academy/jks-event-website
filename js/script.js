
const arabicContent = {
    jks: "يعد الاتحاد الياباني للكاراتيه شوتو أحد أكثر منظمات الكاراتيه الشوتوكان تأثيرًا في العالم. إنها أيضًا واحدة من أكثر منظمات الكاراتيه انتشارًا بما في ذلك 72 دولة وأكثر من 2 مليون عضو. تم تشغيله بنجاح تحت إشراف شيهان ماساو كاجاوا وهو دان الثامن في JKF والرئيس الفني للاتحاد العالمي للكاراتيه.",
    worldHub: "يتبع معظم لاعبي الكاراتيه شيهان كاغاوا ماساو، لذا فهم يرغبون بشدة في حضور الندوات العالمية ودورات المدربين للحصول على الدبلومات واختبار DAN في اليابان. يواجه الأعضاء من خارج أوروبا ودول غير أمريكية قيودًا على السفر إلى اليابان بسبب إجراءات التأشيرة وتكاليفها. نحن، JKS UAE نريد دعوة متابعي الكاراتيه العالميين إلى دبي من خلال إجراء الندوات الدولية والكأس الدولية ودورة دبلوم المدربين. سيكون المدربون اليابانيون متاحين في Dojo الخاص بنا لتزويدنا بكل الدعم لتطوير الكاراتيه في جميع أنحاء العالم.",
    footerContent: "يعد JKS UAE حاليًا أكبر وأنجح اتحاد شوتوكان للكاراتيه في الإمارات العربية المتحدة والهند. نحن تابعون لـ Japan Karate Shotorenmei ومقرها الرئيسي في طوكيو، اليابان."
}

const englishContent = {
    jks: "Japan Karate Shoto Federation is one of the most influential Shotokan karate organization in the world. Its also one of the most reaching karate organization including 72 countries over 2 million members. Its successfully running under the direction of Shihan Masao Kagawa who is 8th Dan of JKF and Technical chairman of World Karate Federation.",
    worldHub: "Most of the karatekas are following Shihan Kagawa Masao so they are eagerly want to attend world seminar and diploma Instructors courses and DAN Examination in Japan. The members from non Europe and non American countries are facing restriction to travel japan due to the visa procedure and cost. We , the JKS UAE wants to invite the world karate followers to Dubai by conducting International Seminars , International cup and Instructors Diploma course. Japanese instructors will be available in our Dojo to give us all the support to develop karate world wide.",
    footerContent: "JKS UAE is currently the largest and most successful Shotokan karate federation in UAE and India. We are affiliated to the Japan Karate Shotorenmei with its Headquarters based in Tokyo, Japan."
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
    document.getElementById('jks').innerHTML = englishContent.jks;
    document.getElementById('worldHub').innerHTML = englishContent.worldHub;
    document.getElementById('footerContent').innerHTML = englishContent.footerContent;
    // For example, you can change the text on the page to English
    languageButton.innerHTML = "English" // Simulate a click on the English button
}

const setArabic = () => {
    const languageButton = document.getElementById('language');
    // Set the page to Arabic
    // Add your logic here to update the page content accordingly
    document.body.classList.add('rtl');
    document.getElementById('basic-addon2').style.borderRadius = "0.5rem 0 0 0.5rem";
    document.getElementById('jks').innerHTML = arabicContent.jks;
    document.getElementById('worldHub').innerHTML = arabicContent.worldHub;
    document.getElementById('footerContent').innerHTML = arabicContent.footerContent;
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