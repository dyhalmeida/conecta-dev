import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import NavBar from '../components/NavBar';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
// import './index.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24
    },
    toolBar: {
        minHeight: 64
    }
});

export default function Home() {
    const style = useStyles();
    return (
        <div className={style.root}>
            <Header />
            <div className={style.toolBar}></div>
            <main className={style.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
            </main>
        </div>
    )
}