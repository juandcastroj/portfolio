import NuestraTierraHero from '../assets/images/projects/NuestraTierra_hero.jpeg';
import InterkeyHero from '../assets/images/projects/Interkey_hero.jpeg';
import SessionForwardHero from '../assets/images/projects/SessionForward_dash.jpeg';
import SiinHero from '../assets/images/projects/Siin_hero.jpeg';
import TahsinHero from '../assets/images/projects/Tahsin_hero.jpeg';
import CoffeeStrapHero from '../assets/images/projects/CoffeeStrap.jpeg';

const CoffeeStrapUrl = 'coffeestrap.com';

export const projectsData = [
    {
      company: 'Nuestratierraco',
      role: 'Web Developer',
      imageUrl: NuestraTierraHero,
      description: 'Web application with ecommerce section full developed by me for a Colombian environmental ONG. Using React js, Firebase for autentication and customer manage, such as Ecwid for store and products manage.',
      url: 'https://nuestratierraco.netlify.app/',
      repo: '#'    
    },
    {
      company: 'Interkey',
      role: 'Designer and Frontend developer',
      imageUrl: InterkeyHero,
      description: 'Complete landing page design proposed and developed by me for a client in Arabic and English languages, using HTML, CSS, and vanilla JavaScript for the MVP. Includes a contact form and a blog section.',
      url: 'https://interkey2023.netlify.app/',
      repo: '#'    
    },
    {
      company: 'SessionForward Inc',
      role: 'Web developer',
      imageUrl: SessionForwardHero,
      description: 'ABtesting web service application that has my work on different components and some complete sections (onboarding, profile, etc), using HTML, CSS, JavaScript and my first experience with Vue js framework in the dashboard. Node js for backend and Postgresql for database.',
      url: 'https://www.sessionforward.com/',
      repo: '#'    
    },
    {
      company: 'Siin shop',
      role: 'Frontend developer',
      imageUrl: SiinHero,
      description: 'Developed some sections (all previous main landing section and actual contact form, privacy policy and terms) following mockup design guidelines and high level interactivity specifications such as advanced animations. It features Arabic and English languages.',
      url: 'https://siin.shop/en',
      repo: '#'
    },
    {
      company: 'Tahsin Alwajiha',
      role: 'Frontend developer',
      imageUrl: TahsinHero,
      description: 'Designed and developed a demo website landing for a promising arabic company on 2022. Fully responsive and has light and dark colours theme. It was developed using HTML, CSS, and JavaScript.',
      url: 'https://tahsinalwajiha.com/',
      repo: '#'
    },
    {
      company: 'CoffeeStrap',
      role: 'Mobile developer',
      imageUrl: CoffeeStrapHero,
      description: 'Mobile version cross platform (Android and IOS) for the languages web platform: ' + CoffeeStrapUrl + ' published on Google Play Appstore, built with Flutter framework and Node js.',
      url: 'https://play.google.com/store/apps/details?id=com.coffeestrap.coffeestrap&hl=en&gl=US',
      repo: '#'
    },
]