import Cover from '../cover/Cover';
import PostPreview from '../postPreview/PostPreview';
import posts from '../../posts';
import { nanoid } from 'nanoid';

export default function Home() {

    const p = posts.sort((a, b) => b.date.getTime() - a.date.getTime())

    return <>
        <Cover />
        <div id='posts' className='container-fluid'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-xl-6 col-lg-8 col-md-10'>
                    {p.map(post => <PostPreview post={post} key={nanoid()} />)}
                    <div className='vertical-spacer-80' />
                </div>
            </div>
        </div>
    </>
}