import * as React from 'react';
import { Card, CardContent} from '@mui/material';

const mainCard=(

<div>

  <Card>
    <CardContent>
      <h1>🎉YOU Discovered There!🎉</h1>
      <p>你好，我是LimitZ_！</p>
      <p>这里——limitz.top，是有关我的部分网站导航页，同时也作为个人自我介绍所用的单页网站。
        <br />
        网站使用next.js构建，本网站将随着我对Typescript和React的学习而更新……算是某种意义上的“电子宠物”对吧？
      </p>
      <hr />
      <h3>关于我 ：</h3>
      <p>我是一名中国的高中生，一名理科生。目前我正在学习Typescript和React（Next.js），已经掌握的语言有PHP。
        <br />
        关于我的nickname——"Limitz"，发音/&apos;lɪmɪts/，显然是由"Limits"变化而来。使用这个网名的原因则是我有想突破自我的进步欲望……打破过去的记录，很有意义不是吗？
        <br />
        我的曾用名：VanllaOcap（早期），ZeroSKY / Satell1te_LK / Mon3tr（UTC+8 2025/9之前使用），希望觉得我很熟悉但又说不上来的你，可以想起我是谁。
        <br />
        我用了两年255650.xyz，于2025年改启用limitz.top，这两个域名都会一直续费，直到我失去做网站的兴趣。
        <br></br>
        想说的也就这么多了，希望你可以去我的博客看看。
        THANK YOU.

      </p>
              <br />
        <h3>Contact :</h3>
        <p>你可以通过Email/QQ的方式直接联系我。</p>
        <p>邮箱：i@limitz.top</p>
        <p>QQ：66870019</p>
        <br />
      <small> © 2020-2025 LimitZ_'s Space.建站五年纪念(2025)</small>
    </CardContent>
  </Card>

</div>

)

export default function index(){
  return (
    <div>
    {mainCard}
    </div>
  );
}