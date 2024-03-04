import Accueil from './components/Accueil'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Post from './components/Post'

export default [
    {path:'/', component: Accueil},
    {path:'/page1', component: Page1},
    {path:'/page2', component: Page2},
    {path:'/blogpost/:id', component: Post}
]