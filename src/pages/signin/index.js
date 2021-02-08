import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
    },
    left: {
        backgroundColor: 'red',
        flexBasis: '58%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    right: {
        backgroundColor: 'blue',
        flexBasis: '42%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center',
    }
}))

export default function Signin() {

    const styles = useStyles();

    return (
        // Flex Container
        <div className={styles.root}>
            
            {/* Flex item */}
            <div className={styles.left}>
                <Typography style={{color: '#fff', fontSize: 25, lineHeight: '45px'}}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant="body2" style={{color: 'rgb(255,255,255,0.7)', marginTop: 30, fontsize: 15, lineHeight: '30px'}}>
                    Compartilhe seus conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
            </div>

            {/* Flex item */}
            <div className={styles.right}>
                <form className={styles.form}>
                    <h4>Acesso</h4>
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>

        </div>
    );
}