import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%'
    }
}));

const tags = [
    { id: 1, name: 'reactjs'},
    { id: 2, name: 'javaScript'},
    { id: 3, name: 'php'},
    { id: 4, name: 'python'},
    { id: 5, name: 'angular'},
    { id: 6, name: 'nodejs'},
]


export default function NavBar() {
    const style = useStyles();
    return (
        <Paper className={style.root}>
            <Button className={style.button} variant="outlined" color="secondary">Registrar Grátis</Button>
            <ListSubheader>Tags em alta</ListSubheader>
            {
                tags.map(tag => (
                    <ListItem dense button key={`item-${tag.id}-${tag.name}`}>
                        <ListItemText primary={`#${tag.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
    )
}