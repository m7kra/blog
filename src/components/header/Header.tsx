import { ReactNode } from 'react';
import { Github } from 'react-bootstrap-icons';
import { useContextColorTheme } from '@m7kra/color-theme';
import Button from '../button/Button';
import { Sun, Moon } from 'react-bootstrap-icons';
import './Header.css';

type HeaderProps = {
    title: string;
    logoLight?: ReactNode;
    logoDark?: ReactNode;
    links?: {
        label: string;
        href: string;
    }[];
    github?: string;
}

export default function Header({ title, logoLight, logoDark, links, github }: HeaderProps) {
    const [theme, setTheme] = useContextColorTheme();

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <nav id='header' className='navbar navbar-expand-md fixed-top surface' data-bs-theme={theme}>
            <div className='container-fluid'>
                <a className='navbar-brand d-flex' href='./'>
                    {theme === 'light' && logoLight && <>
                        <div id='header-logo' className='d-flex align-items-center justify-content-center'>{logoLight}</div>
                        <div className="horizontal-spacer-12" />
                    </>}
                    {theme === 'dark' && logoDark && <>
                        <div id='header-logo' className='d-flex align-items-center justify-content-center'>{logoDark}</div>
                        <div className="horizontal-spacer-12" />
                    </>}
                    {title}
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar-collapse' aria-controls='navbar-collapse' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbar-collapse'>
                    <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                        {links?.map((item, index) =>
                            <li key={index} className='nav-item'>
                                <a className='nav-link' href={item.href}>{item.label}</a>
                            </li>
                        )}
                    </ul>
                    <Button
                        onClick={toggleTheme}
                        shape='box'
                        initialColor='surface'
                        transparent
                        hoverColor='darken'
                        size={40}
                    >
                        {theme !== 'dark'? <Moon /> : <Sun size={20} />}
                    </Button>
                    <div className='horizontal-spacer-12' />
                    {github && <a className='nav-link' href={github}><Github size={28} /></a>}
                </div>
            </div>
        </nav>
    )
}/*
    return <Navbar
        data-bs-theme={theme}
        fixed="top"
        id="header"
        className="surface"
        expand="md"
    >

        <Container fluid>
            <Navbar.Brand href="./" className="d-flex">
                {theme === 'light' && logoLight && <>
                    <div id="header-logo">{logoLight}</div>
                    <div className="horizontal-spacer-12" />
                </>}
                {theme === 'dark' && logoDark && <>
                    <div id="header-logo">{logoDark}</div>
                    <div className="horizontal-spacer-12" />
                </>}
                {title}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-collapse" />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="w-100">
                    {links?.map((item, index) =>
                        <Nav.Link key={index} href={item.href}>{item.label}</Nav.Link>
                    )}
                    <div className='w-100' />
                    {github && <Nav.Link href={github}><Github size={28} /></Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}*/
