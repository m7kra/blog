export type Post = {
    id: number,
    title: string,
    date: Date,
    file: string,
    description: string,
    darkThemeImage: string,
    lightThemeImage: string
};

const posts: Post[] = [
    {
        id: 0,
        title: 'Color theme hook',
        date: new Date(2023, 11, 24),
        file: './posts/0_colorTheme.md',  
        description: 'When designing websites, I like to adapt the color theme to the system theme. On the other hand, the user should be able to switch between light and dark mode. I wound up writing a custom React hook to handle this.',
        darkThemeImage: './images/colorTheme.jpg',
        lightThemeImage: './images/colorTheme.jpg'
    }, {
        id: 1,
        title: 'Musicly\'s "Couldn\'t play track" warning',
        date: new Date(2023, 11, 29),
        file: './posts/1_musiclyCouldntPlay.md',
        description: 'A brief explanation',  
        darkThemeImage: './images/musiclyDark.jpg',
        lightThemeImage: './images/musiclyLight.jpg'
    }
];

export default posts;