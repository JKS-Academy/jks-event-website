
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

var submitted = false;

const handleScroll = () => {
    const navbar = document.getElementById("main-navbar");
    const logo = document.getElementById("navbar-logo");
    console.log(window.scrollY);
    if (window.scrollY > 100) { // You can adjust the scroll threshold
        navbar.style.height = "5rem"; // Decrease the height
        logo.classList.add("navbar-logo-small");
        navbar.classList.add("navbar-bg");
    } else {
        navbar.style.height = "10rem"; // Reset the height
        navbar.classList.remove("navbar-bg");
        logo.classList.remove("navbar-logo-small");
    }
}

window.addEventListener("scroll", handleScroll);

//CountDown
var Countdown = {
  
    // Backbone-like structure
    $el: $('.countdown'),
    
    // Params
    countdown_interval: null,
    total_seconds     : 0,
    
    // Initialize the countdown  
    init: function() {
      
      // DOM
      this.$ = {
        hours  : this.$el.find('.bloc-time.hours .figure'),
        minutes: this.$el.find('.bloc-time.min .figure'),
        seconds: this.$el.find('.bloc-time.sec .figure')
      };
  
      // Init countdown values
      this.values = {
          hours  : this.$.hours.parent().attr('data-init-value'),
          minutes: this.$.minutes.parent().attr('data-init-value'),
          seconds: this.$.seconds.parent().attr('data-init-value'),
      };
      
      // Initialize total seconds
      this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;
  
      // Animate countdown to the end 
      this.count();    
    },
    
    count: function() {
      
      var that    = this,
          $hour_1 = this.$.hours.eq(0),
          $hour_2 = this.$.hours.eq(1),
          $min_1  = this.$.minutes.eq(0),
          $min_2  = this.$.minutes.eq(1),
          $sec_1  = this.$.seconds.eq(0),
          $sec_2  = this.$.seconds.eq(1);
      
          this.countdown_interval = setInterval(function() {
  
          if(that.total_seconds > 0) {
  
              --that.values.seconds;              
  
              if(that.values.minutes >= 0 && that.values.seconds < 0) {
  
                  that.values.seconds = 59;
                  --that.values.minutes;
              }
  
              if(that.values.hours >= 0 && that.values.minutes < 0) {
  
                  that.values.minutes = 59;
                  --that.values.hours;
              }
  
              // Update DOM values
              // Hours
              that.checkHour(that.values.hours, $hour_1, $hour_2);
  
              // Minutes
              that.checkHour(that.values.minutes, $min_1, $min_2);
  
              // Seconds
              that.checkHour(that.values.seconds, $sec_1, $sec_2);
  
              --that.total_seconds;
          }
          else {
              clearInterval(that.countdown_interval);
          }
      }, 1000);    
    },
    
    animateFigure: function($el, value) {
      
       var that         = this,
           $top         = $el.find('.top'),
           $bottom      = $el.find('.bottom'),
           $back_top    = $el.find('.top-back'),
           $back_bottom = $el.find('.bottom-back');
  
      // Before we begin, change the back value
      $back_top.find('span').html(value);
  
      // Also change the back bottom value
      $back_bottom.find('span').html(value);
  
      // Then animate
      TweenMax.to($top, 0.8, {
          rotationX           : '-180deg',
          transformPerspective: 300,
          ease                : Quart.easeOut,
          onComplete          : function() {
  
              $top.html(value);
  
              $bottom.html(value);
  
              TweenMax.set($top, { rotationX: 0 });
          }
      });
  
      TweenMax.to($back_top, 0.8, { 
          rotationX           : 0,
          transformPerspective: 300,
          ease                : Quart.easeOut, 
          clearProps          : 'all' 
      });    
    },
    
    checkHour: function(value, $el_1, $el_2) {
      
      var val_1       = value.toString().charAt(0),
          val_2       = value.toString().charAt(1),
          fig_1_value = $el_1.find('.top').html(),
          fig_2_value = $el_2.find('.top').html();
  
      if(value >= 10) {
  
          // Animate only if the figure has changed
          if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
          if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
      }
      else {
  
          // If we are under 10, replace first figure with 0
          if(fig_1_value !== '0') this.animateFigure($el_1, 0);
          if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
      }    
    }
  };
  
  // Let's go !
  Countdown.init();