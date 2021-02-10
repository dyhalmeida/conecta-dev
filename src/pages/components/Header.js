import React from 'react'

import { useSelector } from 'react-redux';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    logo: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1
    }, 
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }
})

export default function Header(props) {
    const style = useStyles();
    const user = useSelector(({ user }) => user)
    return (
        <AppBar position='fixed' color='inherit' className={style.appBar}>
            <Toolbar>

                <img className={style.logo} src="/images/logo.png" alt="Conecta Dev"></img>
                <div className={style.grow}></div>
                <div className={style.userSection}>
                    <Button variant="contained" color="primary" className={style.button}>
                        New Post
                    </Button>
                    <SvgIcon className={style.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Diego Almeida" src={user && user.avatar} />
                </div>

                {/* <div className="">
                    <a href="/">Conecta-dev</a>
                    <input></input>
                </div>
                <div className="">
                   
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}