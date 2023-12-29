import Header from './components/header/Header';
import Home from './components/home/Home';
import Post from './components/post/Post';
import posts from './posts';
import logo from './m7kra-logo.png';
import { useContextColorTheme } from '@m7kra/color-theme';
import './css/spacers.scss';
import './css/theme.css';
import './App.css';

function App() {
    const query = new URLSearchParams(window.location.search);
    const postId = query.get('post');

    const content = postId? <Post post={posts[Number(postId)]} /> : <Home />;

    const [theme] = useContextColorTheme();

    return (
        <div id='app' className={`${theme}-theme`}>
            <Header
                title="M7kra's Blog"
                github='https://github.com/m7kra/blog'
                logoLight={<img src={logo} height={24} alt='' />}
                logoDark={<img src={logo} height={24} alt='' />}
            />
            {content}
        </div>
    );
}

export default App;
