import type { Metadata } from "next";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, AppBar, Toolbar, Typography, Stack, Divider, Button } from '@mui/material';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "I'm LimitZ_",
  description: "限界，突破，自我。",
};

const headbarD = (
          <div>
        <AppBar position='static'>
        <Container>
          <Toolbar>
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/' 
              sx={{
              mr: 0,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >LimitZ_&apos;s SPACE</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
);

const navBarD = (
  <div>
<Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
>

<Link href="/"><Button variant="text" >主页</Button></Link>
<Link href="https://blog.limitz.top"><Button variant="text" >博客</Button></Link>
<Link href="https://github.com/mvocp"><Button variant="text" >Github</Button></Link>
<Link href="http://mvocp.ysepan.com/"><Button variant="text" >资源网盘</Button></Link>
<Link href="https://space.bilibili.com/433914243"><Button variant="text" >哔哩哔哩</Button></Link>
<Link href="http://github.com/XynxWanders-Project/"><Button variant="text" >Xynx项目</Button></Link>

</Stack>
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

        {headbarD}
        <br></br>
        <Container>
        {navBarD}
        <br></br>
        {children}
        </Container>
      </body>
    </html>
  );
}
