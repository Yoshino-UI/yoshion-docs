import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default class Index extends Component {
  render() {
    return (
      <div className='container'>
        <div id='stars'/>
        <div id='stars2'/>
        <div id='stars3'/>
        <div id='title'>
          <div className='box'>
            <h1>Yoshino</h1>
            <h2> 基于react的可定制化组件库，可根据不同业务场景输出对应的组件。</h2>
            <div className='action'>
              <div className='action-item'><Link to='/docs/components/yoshino'>快速开始</Link></div>
              <div className='action-item'>
                <a target='_blank' href='https://github.com/Yoshino-UI/yoshino-cli'>yoshino-cli</a>
              </div>
              <div className='action-item'>
                <a target='_blank' href='https://github.com/Yoshino-UI/Yoshino'>
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
