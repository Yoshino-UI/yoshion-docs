import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {BackTop, Menu} from 'yoshino';
import { backTop } from 'yoshino/es6/BackTop/assist';
import './index.less';
import { RouteComponentProps } from 'react-router';
import ComponentPage from './components';
import './index.less';

export interface IProps  extends RouteComponentProps<{name: string}> {
}

export default class Components extends Component<IProps> {
  pushHistory = (url: string) => {
    this.props.history.push('/docs/' + url);
    backTop(300);
  }

  render() {
    const preCls = 'wrapper';
    return (
      <div>
        <BackTop/>
        <div className={`${preCls}-header`}/>
        <div className={`${preCls}-wrapper`}>
          <Switch>
            <Route component={ComponentPage} path='/docs/components/:name'/>
            <Route
              render={() => {
              return <Redirect to='/docs/components/yoshino'/>;
              }}
            />
          </Switch>
        </div>
        <div className={`${preCls}-footer`}/>
      </div>
    );
  }
}
