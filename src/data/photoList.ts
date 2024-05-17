import Card from '../assets/imageProjects/card-css.png'
import Toms from '../assets/imageProjects/page-toms.png'
import Fake from '../assets/imageProjects/site-fake.png'
import Phone from '../assets/imageProjects/iphone.png'

import Topfilms from '../assets/imageProjects/topfilms.png'
import Portfolio from '../assets/imageProjects/portfolio.png'
import TaskList from '../assets/imageProjects/lista-tarefas-react.png'
import Galery from '../assets/imageProjects/fallout-galery.png'

import { Photo } from "../types/Photo";


export const photoList: Photo[] = [
    { id: 1, url:Card , linkVercel:'https://card-zuucas.vercel.app/', linkGithub:'https://github.com/Zuucas/Card', info:'Card feito com CSS e HTML'},
    { id: 2, url:Fake , linkVercel:'https://site-fake-zuucas.vercel.app/', linkGithub:'https://github.com/Zuucas/Template1',info:'Site feito com CSS e HTML'},
    { id: 3, url:Toms , linkVercel:'https://lading-page-site-toms.vercel.app/', linkGithub:'https://github.com/Zuucas/Lading_page_0',info:'Site feito com CSS e HTML'},
    { id: 4, url:Phone , linkVercel:'https://apple-market-test-zuucas.vercel.app/', linkGithub:'https://github.com/Zuucas/Lading_page_1',info:'Site feito com CSS e HTML e lógica com Javascript'},
 
];


export const photoList2: Photo[] = [
    { id: 1, url:Topfilms,linkVercel:'https://top-films-beta.vercel.app/',linkGithub:'https://github.com/Zuucas/top-films',info:'React + Axios + React-Router'},
    { id: 2, url:Portfolio,linkVercel:'https://zuucas-portfolio.vercel.app/',linkGithub:'https://github.com/Zuucas/my-portfolio',info:'React'},
    { id: 3, url:Galery,linkVercel:'https://galeria-de-fotos-fallout.vercel.app/',linkGithub:'https://github.com/Zuucas/Galeria-de-fotos',info:'React'},
    { id: 4, url:TaskList,linkVercel:'https://task-list-zuucas-react.vercel.app/',linkGithub:'https://github.com/Zuucas/Lista_tarefas_React',info:'React'},
]