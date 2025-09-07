import * as React from 'react';
import {Container, Avatar, Card, CardHeader, Stack} from '@mui/material';
import Link from 'next/link';
import Divider from '@mui/material/Divider';

// 在服务器端获取数据
    function getLinksData() {
    const fs = require('fs');
    const path = require('path');
    const yaml = require('yaml');
    
    try {
        const filePath = path.join(process.cwd(), 'app', 'link', 'links.yml');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return yaml.parse(fileContent);
    } catch (error) {
        console.error('读取数据文件失败:', error);
        return { items: [] };
    }
    }

    function LinksOutput({ items }) {
    if (!items || !Array.isArray(items)) {
        return <div>暂无数据</div>;
    }

    return items.map(item => (
        <div key={item.name || item.url}>
            <Link href={item.url} target='_blank'>
            <Card>
        <CardHeader
            avatar={
            <Avatar src={item.avatar}></Avatar>
            }
            title={item.name}
            subheader={item.des}
        />
        </Card>
        </Link>

        </div>
    ));
    }

export default function blog(){
    const linksData = getLinksData();

    return (
    <div>

        <h1>友情链接，我的朋友们</h1>
        <Divider />
                        
                            <Stack
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: 'wrap' }}
                    spacing={1}
                    >
                <LinksOutput items={linksData.items || []} />
                </Stack>
                        

                <p>
                    以上便是我的所有友链。本站欢迎各位大佬建立友情链接！
                    <br />
        要求如下，也是保证用户访问您的站点起码有“体验”的最低要求：</p>
        <Container>
            <li>站点不包含违反中国大陆法规的内容，尤其是黑灰产</li>
            <li>站点灌水的无意义、低价值内容不得太多</li>
            <li>站点必须要有SSL</li>
        </Container>
                <p>请确保您的站点符合以上要求。</p>
            我的站点信息：
        <Container>
            <li>网站名称：Limitz_'s SPACE</li>
            <li>URL: https://limitz.top【注意，blog.limitz.top是无效的】</li>
            <li>介绍: 记得给我的世界加上故事与咖啡.</li>
            <li>Avatar: https://q1.qlogo.cn/g?b=qq&nk=66870019&s=100</li>
        </Container>
            联系方式：发送邮件至<em>i@limitz.top</em>，或者联系QQ：<em>66870019</em>
            <br />
            更新：您现在可以在本页下面留言了。
        <Divider />
        {/* waline here */}
        <div id="waline"></div>
        <script type="module">{`
        import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
        init({
        el: '#waline',
        serverURL: 'https://comment.api.limitz.top',
        });

        `}</script>
        {/* waline end */}
    </div>
  );
}