const arabicContent = {
  footerContent:
    " من الإثنين إلى الجمعة<br /> تاريخ ووقت المخيم الربيعي: 18 مارس إلى 5 أبريل 2024،<br />دبي ديجيتال بارك، دي 3 ريزيدنس، واحة دبي للسيليكون",
  playerName: "اسم اللاعب",
  mobile: "(max 12 digits) رقم الهاتف المحمول",
  address: "عنوان",
  email: "البريد الإلكتروني",
  nameOfKid: "اسم الطفل",
  ageOfKid: "عمر الطفل",
};

const englishContent = {
  footerContent:
    "Dubai Digital Park, D3 Residence, Dubai Silicon Oasis <br /> Summer Camp Date & Time : 5th July to 25th August 2024,<br/> Monday to Friday <br/>",
  playerName: "Parent Name*",
  mobile: "Mobile No* (max 12 digits)",
  address: "Location/ Address",
  email: "Email",
  nameOfKid: "Name of Kid(s)",
  ageOfKid: "Age of Kid(s)",
};

const getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
};

const setEnglish = () => {
  const languageButton = document.getElementById("language");
  // Set the page to English
  // Add your logic here to update the page content accordingly
  document.body.classList.remove("rtl");
  if (document.getElementById("footerContent"))
    document.getElementById("footerContent").innerHTML =
      englishContent.footerContent;
  if (document.getElementById("labelPlayerName"))
    document.getElementById("labelPlayerName").innerHTML =
      englishContent.playerName;
  if (document.getElementById("labelMobile"))
    document.getElementById("labelMobile").innerHTML = englishContent.mobile;
  if (document.getElementById("labelAddress"))
    document.getElementById("labelAddress").innerHTML = englishContent.address;
  if (document.getElementById("labelEmail"))
    document.getElementById("labelEmail").innerHTML = englishContent.email;
  if (document.getElementById("labelKidsName"))
    document.getElementById("labelKidsName").innerHTML =
      englishContent.nameOfKid;
  if (document.getElementById("labelKidsAge"))
    document.getElementById("labelKidsAge").innerHTML = englishContent.ageOfKid;
  // For example, you can change the text on the page to English
  languageButton.innerHTML = "English"; // Simulate a click on the English button
};

const setArabic = () => {
  const languageButton = document.getElementById("language");
  // Set the page to Arabic
  // Add your logic here to update the page content accordingly
  document.body.classList.add("rtl");
  if (document.getElementById("footerContent"))
    document.getElementById("footerContent").innerHTML =
      arabicContent.footerContent;
  if (document.getElementById("labelPlayerName"))
    document.getElementById("labelPlayerName").innerHTML =
      arabicContent.playerName;
  if (document.getElementById("labelMobile"))
    document.getElementById("labelMobile").innerHTML = arabicContent.mobile;
  if (document.getElementById("labelAddress"))
    document.getElementById("labelAddress").innerHTML = arabicContent.address;
  if (document.getElementById("labelEmail"))
    document.getElementById("labelEmail").innerHTML = arabicContent.email;
  if (document.getElementById("labelKidsName"))
    document.getElementById("labelKidsName").innerHTML =
      arabicContent.nameOfKid;
  if (document.getElementById("labelKidsAge"))
    document.getElementById("labelKidsAge").innerHTML = arabicContent.ageOfKid;

  // For example, you can change the text on the page to Arabic
  languageButton.innerHTML = "عربي"; // Simulate a click on the Arabic button
};

// set language on initial load according to cookie/location
document.addEventListener("DOMContentLoaded", () => {
  const language = getCookie("language");
  // If the language is found in the cookie, you can use it to set the initial language.
  // Here, I'm assuming you have elements with IDs 'englishButton' and 'arabicButton'
  if (language === "eng") {
    setEnglish();
  } else if (language === "ara") {
    setArabic();
  } else {
    // If the language is not found in the cookie, you can use the browser's language to set the initial language.
    // Here, I'm assuming you have elements with IDs 'englishButton' and 'arabicButton'
    const browserLanguage = navigator.language;
    if (browserLanguage.split("-")[0] === "en") {
      setEnglish();
    } else if (browserLanguage === "ar") {
      setArabic();
    }
  }
});

const changeLanguage = (language) => {
  if (language === "eng") {
    document.cookie = "language=eng;";
    console.log(document.cookie);
    window.location.reload();
  } else if (language === "ara") {
    document.cookie = "language=ara;";
    console.log(document.cookie);
    window.location.reload();
  }
};

var submitted = false;

const handleScroll = () => {
  const navbar = document.getElementById("main-navbar");
  const logo = document.getElementById("navbar-logo");
  if (window.scrollY > 30) {
    // You can adjust the scroll threshold
    navbar.style.height = "5rem"; // Decrease the height
    logo.classList.add("navbar-logo-small");
    navbar.classList.add("navbar-bg");
  } else {
    navbar.style.height = "8rem"; // Reset the height
    navbar.classList.remove("navbar-bg");
    logo.classList.remove("navbar-logo-small");
  }
};

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
};

document.addEventListener("DOMContentLoaded", () => {
  // const modalButton = document.getElementById('modalButton');
  // modalButton.click();
  // setTimeout(() => {
  //     modalButton.click();
  //     setTimeout(() => {
  //         document.getElementById('exampleModal').style.zIndex = -1;
  //     }, 500);
  // }, 2000);
  // const name = document.getElementById('entry.2092238618');
  // const waiverName = document.getElementById('waiverName');
  // name.addEventListener('input', () => {
  //     waiverName.innerHTML = name.value;
  // });
  // const dob = document.getElementById('entry.1503997084');
  // dob.addEventListener('input', calculateAge);
  // const kataCheck = document.getElementById('kataCheck');
  // const kumiteCheck = document.getElementById('kumiteCheck');
  // kataCheck.addEventListener('change', () => {
  //     if (kataCheck.checked && !kumiteCheck.checked) {
  //         kumiteCheck.removeAttribute('required')
  //     } else if (!kataCheck.checked && kumiteCheck.checked) {
  //         kataCheck.removeAttribute('required')
  //     } else {
  //         kataCheck.setAttribute('required', true)
  //         kumiteCheck.setAttribute('required', true)
  //     }
  // });
  // kumiteCheck.addEventListener('change', () => {
  //     if (kataCheck.checked && !kumiteCheck.checked) {
  //         kumiteCheck.removeAttribute('required')
  //     } else if (!kataCheck.checked && kumiteCheck.checked) {
  //         kataCheck.removeAttribute('required')
  //     } else {
  //         kataCheck.setAttribute('required', true)
  //         kumiteCheck.setAttribute('required', true)
  //     }
  // });
  // const labelSex = document.getElementById('labelSex');
  // const selectSex = document.getElementById('entry.1597875817');
  // selectSex.addEventListener('change', () => {
  //     selectSex.value !== '' ? labelSex.style.display = 'block' : labelSex.style.display = 'none'
  // });
  // const labelBelt = document.getElementById('labelBelt');
  // const selectBelt = document.getElementById('entry.2099544009');
  // selectBelt.addEventListener('change', () => {
  //     selectBelt.value !== '' ? labelBelt.style.display = 'block' : labelBelt.style.display = 'none'
  // });
  // const labelFood = document.getElementById('labelFood');
  // const selectFood = document.getElementById('entry.202302837');
  // if(selectFood) selectFood.addEventListener('change', () => {
  //     selectFood.value !== '' ? labelFood.style.display = 'block' : labelFood.style.display = 'none'
  // });
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
};

const registration = () => {
  if (submitted) {
    const ok = Swal.fire({
      title: "Registration Successful",
      text: "Your registration has been submitted successfully, Our team will contact you soon.",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
};
