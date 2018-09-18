<h1 align='center'>Yoshino-Docs</h1>
<p align='center'>Based on Yoshino!Auto genearte component docs!</p>

## Intro
一个使用yoshino组件组件库构建的文档生成工具

[在线示例](https://yoshino-ui.github.io/#/docs/components/yoshino)

## Usage
```js
git clone https://github.com/Yoshino-UI/yoshion-docs.git your-rep

cd your-rep

npm i

// 启动开发环境
npm run dev

// 打包
npm run build
```

## Config
### docs/pages/routers.tsx
配置路由进行分块打包
```js
export default [
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-alert" */ './Alert')
    ),
    path: '/docs/components/alert',
  },
];
```
在数组里添加组件文档文件，`import`分块引入对应文件，path对应路由路径。

### docs/pages/pageMenu.tsx
```js
export default [
  {
    name: '反馈',
    keyId: 'feedback',
    children: [
      {
        name: 'Alert(提示)',
        keyId: 'alert',
      },
    ]
  }
];
```
配置左侧菜单列

## Example
添加一个新的组件的文档步骤
- 复制`pages/components/Alert`文件夹到`pages/components/`下，更名为你的组件名，例如`Button`
- 修改`docs/pages/routers.tsx`，添加`Button`配置
```js
export default [
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-alert" */ './Alert')
    ),
    path: '/docs/components/alert',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-buttom" */ './Button')
    ),
    path: '/docs/components/button',
  },
];
```
- 修改`docs/pages/pageMenu.tsx`，添加`Button`配置
```js
export default [
  {
    name: '反馈',
    keyId: 'feedback',
    children: [
      {
        name: 'Alert(提示)',
        keyId: 'alert',
      },
      {
        name: 'Button(按钮)',
        keyId: 'button',
      },
    ]
  }
];
```
如果不想添加到反馈模块下，可以自己新建一个模块，修改如下

```js
export default [
  {
    name: '反馈',
    keyId: 'feedback',
    children: [
      {
        name: 'Alert(提示)',
        keyId: 'alert',
      },
    ]
  },
  {
    name: '新模块',
    keyId: 'newModule',
    children: [
      {
        name: 'Button(按钮)',
        keyId: 'button',
      },
    ]
  }
];
```
- 修改`docs/pages/components/Button/index.md`，为`Button`组件添加相关描述
- 修改`docs/pages/components/Button/api.tsx`，为`Button`组件添加`api`文档
- 修改`docs/pages/components/Button/demo/demo.tsx`以及`docs/pages/components/Button/demo/demo.md`，为`Button`组件添加组件示例和示例描述
- 如果需要新增示例，复制`docs/pages/components/Button/demo/demo.tsx`以及`docs/pages/components/Button/demo/demo.md`并重命名，在`docs/pages/components/Button/index.tsx`进行引入
```js
import Demo from './demo/demo';
import * as DemoMd from './demo/demo.md';
const DemoCode = require('!raw-loader!./demo/demo');

<CodeBox text={DemoMd} demo={<Demo/>} code={DemoCode}/>
```
