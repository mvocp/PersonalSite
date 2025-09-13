import type { Metadata } from "next";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, AppBar, Toolbar, Typography, Stack, Divider, Button, Card, CardContent, Box, ThemeProvider, createTheme} from '@mui/material';
import Link from 'next/link';
import './main.css';
import MainDrawer from  '@/components/drawerMain'

// Icon requirement

export const metadata: Metadata = {
  title: "I'm LimitZ_",
  description: "限界，突破，自我。",
  
};

// dark theme set up
// test failed so i delete this block...


// navbar component
const headbarD = (
          <div>
        <AppBar position="static">
          <Toolbar>
                      <Typography
              variant='h5'
              noWrap
              component='a'
              href='/' 
              sx={{
              mr: 0,
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >LimitZ_&apos;s SPACE </Typography>
            {/* flexible navbar test */}
                      <Box sx={{display: {xs: 'none', md: 'flex'},}}>
                                <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: 'wrap'}}
          >
            <Divider orientation="vertical"/>
          <Link href="/"><Button variant="contained">主页</Button></Link>
          <Link href="/blog/"><Button variant="contained">博客</Button></Link>
          <Link href="/link/"><Button variant="contained">友情链接</Button></Link>
          <Link href="/want/"><Button variant="contained">碎碎念</Button></Link>
          <Link href="/xynx/"><Button variant="contained">Xynx项目</Button></Link>
          <Link href="https://github.com/mvocp"><Button variant="contained">Github</Button></Link>
          <Link href="http://mvocp.ysepan.com/"><Button variant="contained">资源网盘</Button></Link>
          </Stack>
          </Box>

              <Box sx={{
                display: {xs: 'flex', md: 'none'}
              }}>
                <MainDrawer></MainDrawer>
                
              </Box>
          </Toolbar>
      </AppBar>

              


      </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
          <link
    rel="stylesheet"
    href="https://unpkg.com/@waline/client@v3/dist/waline.css"
  />
      <script defer src="https://umami.imxb.de/script.js" data-website-id="48f86595-15d4-4cb8-9ab7-86b6a8483e0b"></script>
      <div>
        
        {headbarD}
        <br></br>
        <Container>

        <br></br>
          <div>
          <Card>
            <CardContent>
              <Container>
            {children}
                    <small> © 2020-2025 LimitZ_'s Space.建站五年纪念(2025) <a href="https://github.com/mvocp/PersonalSite">站点已在Github开源.</a></small>
              </Container>
            </CardContent>
          </Card>
          </div>
        </Container>
        </div>
      </body>
    </html>
  );
}
