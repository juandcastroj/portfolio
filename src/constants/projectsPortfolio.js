import NuestraTierraHero from '../assets/images/projects/NuestraTierra_hero.jpeg';
import InterkeyHero from '../assets/images/projects/Interkey_hero.jpeg';
import SessionForwardHero from '../assets/images/projects/SessionForward_hero.jpeg';
import SiinHero from '../assets/images/projects/Siin_hero.jpeg';
import ABtestHero from '../assets/images/projects/ABtest_hero.jpeg';
import TahsinHero from '../assets/images/projects/Tahsin_hero.jpeg';
import CoffeeStrapHero from '../assets/images/projects/CoffeeStrap.jpeg';

export const projectsData = [
    {
      company: 'NuestraTierra Co',
      role: 'Web Developer',
      imageUrl: NuestraTierraHero,
      description: 'Web application with ecommerce section full developed by me for a Colombian environmental ONG. Using React js, Firebase for autentication and customer manage, such as Ecwid for store and products manage.',
      url: 'https://nuestratierraco.netlify.app/',
      repo: 'https://github.com/juandcastroj/nuestratierraco'    
    },
    {
      company: 'Interkey',
      role: 'Designer and Frontend developer',
      imageUrl: InterkeyHero,
      description: 'Landing page partially designed and fully developed by me for an Arabic customer on both languages (Arabic/English) guided by their mockups. Using HTML, CSS, and vanilla JavaScript only in main section. Includes a contact form and a blog section.',
      url: 'https://interkey2023.netlify.app/',
      repo: 'https://bitbucket.org/maheshcasiraghi/interkey_web_2023/src/develop/'    
    },
    {
      company: 'SessionForward Inc',
      role: 'Web developer',
      imageUrl: SessionForwardHero,
      description: 'ABtesting web service application with components and some complete sections (onboarding, profile, etc) made by me. It was my first experience using Vue js framework in the dashboard and Node js for backend.',
      url: 'https://www.sessionforward.com/login',
      repo: 'https://bitbucket.org/sessionforward/sessionforward_web/src/master/'    
    },
    {
      company: 'Siin shop',
      role: 'Frontend developer',
      imageUrl: SiinHero,
      description: 'Developed some sections (all previous main landing section and actual contact form, privacy policy and terms) following mockup design guidelines and high level interactivity specifications such as advanced animations. It features Arabic and English languages.',
      url: 'https://siin.shop/en',
      repo: 'https://bitbucket.org/sf-abtest/siin_shop_web/src/master/'
    },
    {
      company: 'ABtest',
      role: 'Web developer',
      imageUrl: ABtestHero,
      description: 'Lighter version web app than (SessionForward ⬆️) for ABtesting with some onboarding and dashboard components developed by me. Using HTML, CSS, TailwindCSS and JavaScript. Node for backend and Postgresql for databases.',
      url: 'https://abte.st/login',
      repo: 'https://bitbucket.org/sf-abtest/abtest_web/src/master/'    
    },
    {
      company: 'Tahsin Alwajiha',
      role: 'Frontend developer',
      imageUrl: TahsinHero,
      description: 'Designed and developed a demo landing for a promising Arabic company on 2022. Fully responsive and has light and dark colours theme. It was developed using HTML, CSS, TailwindCSS and JavaScript.',
      url: 'https://tahsinalwajiha.com/',
      repo: 'https://bitbucket.org/tahsin-alwajiha/new_authled_web/src/master'
    },
    {
      company: 'CoffeeStrap',
      role: 'Mobile developer',
      imageUrl: CoffeeStrapHero,
      description: 'Mobile version cross platform (Android and IOS) for the languages web platform coffeestrap.com published on Google Play Appstore, built with Flutter framework and Node js.',
      url: 'https://play.google.com/store/apps/details?id=com.coffeestrap.coffeestrap&hl=en&gl=US',
      repo: '#'
    },
]