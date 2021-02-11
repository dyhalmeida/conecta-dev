import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import LockOutlined from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../actions/accountActions';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    imgBg: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backGroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    form: {
        margin: theme.spacing(2, 4)
    },
    button: {
        marginTop: theme.spacing(1)
    }
}))

const Copyright = () => (
    <Typography variant="body2" align="center">
        {'Copyright ©'}
        {' '}
        <a color="inherit" href="https://github.com/dyhalmeida">Diego Almeida</a>
        {' '}
        {new Date().getFullYear()}
    </Typography>
)

export default function Signin() {

    const history = useHistory();
    const styles = useStyles();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const dispatch = useDispatch();

    const handleSignin = async () => {
        try {
            await dispatch(signIn(email, password));
            history.push('/');
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    return (
        <Grid className={styles.root} container>
            <Grid className={styles.imgBg} item container direction="column" justify="center" alignItems="center" md={7}>
                <Typography style={{ color: '#fff', fontSize: 25, lineHeight: '45px' }}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(255,255,255,0.7)', marginTop: 30, fontsize: 15, lineHeight: '30px' }}>
                    Compartilhe seus conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
            </Grid>
            <Grid item md={5}>
                <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
                    <Avatar className={styles.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>
                    <form className={styles.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Button fullWidth
                            onClick={handleSignin}
                            variant="contained"
                            color="primary"
                            disabled={!email || !password}
                            className={styles.button}>
                            Entrar
                        </Button>
                        {
                            errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>
                        }
                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu a sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Registre-se!</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    );
}