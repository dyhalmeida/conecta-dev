import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import NavBar from '../components/NavBar';

import { makeStyles } from '@material-ui/core/styles';
// import './index.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        display: 'flex',
        width: '1200px',
        margin: '0 auto',
    }
});

export default function Home() {
    const style = useStyles();
    return (
        <div className={style.root}>
            <Header />
            <main className={style.main}>
                <NavBar />
                <Feed />
            </main>
        </div>
    )
}