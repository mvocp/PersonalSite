import * as React from 'react';
import Divider from '@mui/material/Divider';
import Link from 'next/link';

const mainCard=(

<div>


      <h1>🔰Xynx-Project🔰</h1>
      <Divider />
    <p>XynxWander-Project是由Satell1te_LK发起的，和他的朋友一起实现奇奇怪怪的想法的计划。<br />
    部分项目的代码会开源在XynxWander的Github Organization中。</p>

        <p>XynxProject的Organization在<Link href={'https://github.com/XynxWanders-Project'}>https://github.com/XynxWanders-Project</Link></p>
        <p>您可以点个star支持一下。</p>

        <p>目前，上线的项目可以在xynx.limitz.top被访问，同时我们也在积极进行代码的完善工作。</p>
        <p>赞助入口也在xynx.limitz.top，每一位赞助者都会被记录。</p>
        <em>A project to wander in the code sea.</em>

</div>

)

export default function xynx(){
  return (
    <div>
    {mainCard}
    </div>
  );
}