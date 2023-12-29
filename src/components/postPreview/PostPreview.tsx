import { useContextColorTheme } from '@m7kra/color-theme';
import { Post } from '../../posts';
import './PostPreview.css';

export default function PostPreview({ post } : { post: Post }) {
    const [theme] = useContextColorTheme();

    const date = `${post.date.getDate()}/${post.date.getMonth() + 1}/${post.date.getFullYear()}`;
    const image = theme === 'light'? post.lightThemeImage : post.darkThemeImage;
    return (
        <a href={`./?post=${post.id}`}>
            <div className='post-preview'>
                <img className='post-preview-image' src={image} alt='' />
                <div className='post-preview-content'>
                    <h3 className='post-preview-title'>{post.title}</h3>
                    <p className='post-preview-date'>{date}</p>
                    <p className='post-preview-description'>{post.description}</p>
                </div>
            </div>
        </a>
    )
}