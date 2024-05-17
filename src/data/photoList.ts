import Card from '../assets/imageProjects/card-css.png'
import Toms from '../assets/imageProjects/page-toms.png'
import Fake from '../assets/imageProjects/site-fake.png'
import Phone from '../assets/imageProjects/iphone.png'

import { Photo } from "../types/Photo";


export const photoList: Photo[] = [
    { id: 1, url:Card , linkVercel:'https://card-zuucas.vercel.app/', linkGithub:'https://github.com/Zuucas/Card', info:'Card feito com CSS e HTML'},
    { id: 2, url:Fake , linkVercel:'https://site-fake-zuucas.vercel.app/', linkGithub:'https://github.com/Zuucas/Template1',info:'Site feito com CSS e HTML'},
    { id: 3, url:Toms , linkVercel:'https://lading-page-site-toms.vercel.app/', linkGithub:'https://github.com/Zuucas/Lading_page_0',info:'Site feito com CSS e HTML'},
    { id: 4, url:Phone , linkVercel:'https://apple-market-test-zuucas.vercel.app/', linkGithub:'https://github.com/Zuucas/Lading_page_1',info:'Site feito com CSS e HTML e lógica com Javascript'},
 
];''