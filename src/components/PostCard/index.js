import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardHeader, 
    Avatar, 
    CardContent, 
    CardActionArea, 
    CardActions, 
    Typography,
    IconButton
} 
from '@material-ui/core';

import { 
    Favorite as FavoriteIcon, 
    Bookmark as BookmarkIcon, 
    Message as MessageIcon 
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    subHeader: {
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        marginRight: theme.spacing(1)
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px'
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%',
    },
    content: {
        padding: 0
    },
    favorite: {
        marginLeft: 'auto'
    }

}));


export default function PostCard({post}) {
    const styles = useStyles();
    return (
        <Card className={styles.root}>
            <CardHeader 
                avatar={<Avatar src={post.author.avatar} />} 
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={styles.subHeader}>
                        <Typography className={styles.caption} variant="caption">{'Avaliado por'}</Typography>
                        <Typography className={styles.caption} variant="subtitle2">{post.author.name}</Typography>
                        <Typography className={styles.caption} variant="caption">{post.date}</Typography>
                    </div>
                }
            />
            <CardContent className={styles.content}>
                <Typography className={styles.message} variant="body1">
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                    <img className={styles.image} src={post.image} alt={post.title} />
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                    <Typography style={{cursor: 'pointer'}} color="textSecondary" variant="body2">
                        {'10'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <MessageIcon />
                    <Typography className={styles.reactions} color="textSecondary" variant="body2">
                        {'30'}
                    </Typography>
                </IconButton>
                <IconButton className={styles.favorite} aria-label="favorite">
                    <BookmarkIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}