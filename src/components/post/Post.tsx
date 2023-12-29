import { ReactNode } from 'react';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState, useEffect } from 'react';
import { Post as PostType } from '../../posts';
import { useContextColorTheme } from '@m7kra/color-theme';
import './Post.css';

export default function Post({ post } : { post: PostType }) {
    const [content, setContent] = useState('');
    const [theme] = useContextColorTheme();

    useEffect(() => {
        fetch(post.file).then((data) => data.text()).then(setContent)
    }, [post.file, setContent]);

    const date = `${post.date.getDate()}/${post.date.getMonth() + 1}/${post.date.getFullYear()}`;
    const image = theme === 'light'? post.lightThemeImage : post.darkThemeImage;

    return <div id='post' className='container-fluid'>
        <div className='row align-items-center justify-content-center'>
            <div className='col-xl-6 col-lg-7 col-md-9'>
                <div className='vertical-spacer-100' />
                <img id='post-image' src={image} alt='' />
                <h1 id='post-title'>{post.title}</h1>
                <p id='post-date'>{date}</p>
                <div className='vertical-spacer-40' />
                <Markdown
                    components={{
                        code: Code
                    }}
                >
                    {content}
                </Markdown>
                <div className='vertical-spacer-200' />
            </div>
        </div>
    </div>
}

function Code({ children, className } : { children?: ReactNode, className?: string }) {
    const [theme] = useContextColorTheme();
    const style = theme === 'light'? atomOneLight : atomOneDark;
    const match = /language-(\w+)/.exec(className || '')
    if (!match) return <code>{children}</code>
    return (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={style}
        />
    )
}