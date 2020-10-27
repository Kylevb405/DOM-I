const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "middle-img-src": "img/mid-page-accent.jpg",
    
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"]);



let navA = document.querySelectorAll("nav a");
  navA.forEach((item, i) => {item.text = siteContent.nav[`nav-item-${i + 1}`]});


let codeSnip = document.getElementById("logo-img");
  codeSnip.setAttribute("src", siteContent["nav"]["img-src"]);

// CTA -----------------------------------------------------------------------------------------------------------------

let ctaText = document.querySelector('.cta-text h1');
  ctaText.innerText = siteContent.cta.h1.split(' ').join('\n');


let ctaButton = document.querySelector('.cta-text button');
  ctaButton.textContent = siteContent.cta.button;


let ctaImg = document.getElementById('cta-img');
  ctaImg.setAttribute("src" , siteContent['cta']['img-src']);

// Main Content----------------------------------------------------------------------------------------------------------

//Features
let featuresHeader = document.querySelector('.top-content .text-content h4');
  featuresHeader.textContent = siteContent['main-content']['features-h4'];

let featuresParagraph = document.querySelector('.top-content .text-content p');
  featuresParagraph.textContent = siteContent['main-content']['features-content'];

//About
let aboutHeader = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
  aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutParagraph = document.querySelector('.top-content .text-content:nth-of-type(2) p');
  aboutParagraph.textContent = siteContent['main-content']['about-content'];

//Middle Image
let middleImage = document.getElementById('middle-img')
  middleImage.setAttribute('src' , siteContent['main-content']['middle-img-src'])

//Services
let servicesHeader = document.querySelector('.bottom-content .text-content h4');
  servicesHeader.textContent = siteContent['main-content']['services-h4'];

let servicesParagraph = document.querySelector('.bottom-content .text-content p');
  servicesParagraph.textContent = siteContent['main-content']['services-content'];

//Product
let prodcutHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
  prodcutHeader.textContent = siteContent['main-content']['product-h4'];

let productParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
  productParagraph.textContent = siteContent['main-content']['product-content'];

//Vision
let visionHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
  visionHeader.textContent = siteContent['main-content']['vision-h4'];

let visionParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
  visionParagraph.textContent = siteContent['main-content']['vision-content'];

// Contact ----------------------------------------------------------------------------------------------------------------

let contactHeader = document.querySelector('.contact h4')
  contactHeader.textContent = siteContent['contact']['contact-h4']

let addressPtag = document.querySelector('.contact p')
  addressPtag.textContent = siteContent['contact']['address']

let phonePtag = document.querySelector('.contact p:nth-of-type(2)')
  phonePtag.textContent = siteContent['contact']['phone']

let emailPtag = document.querySelector('.contact p:nth-of-type(3)')
 emailPtag.textContent = siteContent['contact']['email']

// Footer ----------------------------------------------------------------------------------------------------------------

let copyrightPtag = document.querySelector('footer p')
  copyrightPtag.textContent = siteContent['footer']['copyright']