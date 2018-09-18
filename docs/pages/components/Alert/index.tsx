import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import Demo from './demo/demo';
import * as DemoMd from './demo/demo.md';
const DemoCode = require('!raw-loader!./demo/demo');

export default class Page extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={DemoMd} demo={<Demo/>} code={DemoCode}/>

        <ApiBox api={Api}/>
      </div>
    );
  }
}
