    'use client'
    import {Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from '@mui/material';
    import * as React from 'react';
    import MenuIcon from '@mui/icons-material/Menu';

    //icons requirement
    import HomeIcon from '@mui/icons-material/Home';
    import BookIcon from '@mui/icons-material/Book';
    import ScienceIcon from '@mui/icons-material/Science';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import RadioIcon from '@mui/icons-material/Radio';
    import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

    // drawer for mobile phones
    



    export default function MainDrawer(){

        const [open, setOpen] = React.useState(false);

            const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

        return (
            
        <div><IconButton onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large"/>
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)} anchor='top'>
                    <Box sx={{
                        alignItems:'center',
                }}>
            <List>
                

                <ListItem>
                        <ListItemButton href='/'>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'主页'}></ListItemText>

                        </ListItemButton>
                </ListItem>

                <ListItem><ListItemButton href='/blog'>
                    <ListItemIcon><BookIcon /></ListItemIcon>
                    <ListItemText primary={'博客'}></ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem><ListItemButton href='/link'>
                    <ListItemIcon><FavoriteIcon /></ListItemIcon>
                    <ListItemText primary={'友情链接'}></ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem><ListItemButton href='/want'>
                    <ListItemIcon><RadioIcon /></ListItemIcon>
                    <ListItemText primary={'碎碎念'}></ListItemText>
                </ListItemButton>
                </ListItem>

                <ListItem><ListItemButton href='/xynx'>
                    <ListItemIcon><ScienceIcon /></ListItemIcon>
                    <ListItemText primary={'XYNX_PROJECT'}></ListItemText>
                </ListItemButton>
                </ListItem>

                <Divider />

                <ListItem><ListItemButton href='https://github.com/mvocp'>
                    <ListItemIcon><GitHubIcon /></ListItemIcon>
                    <ListItemText primary={'Github'}></ListItemText>
                </ListItemButton>
                </ListItem>

                <ListItem><ListItemButton href='http://mvocp.ysepan.com/'>
                    <ListItemIcon><CloudDownloadIcon /></ListItemIcon>
                    <ListItemText primary={'资源网盘'}></ListItemText>
                    </ListItemButton>
                </ListItem>
            
                </List>
                </Box>
        </Drawer>
        </div>
    )
}