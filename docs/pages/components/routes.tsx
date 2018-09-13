import * as React from 'react';
import getComponentAsync from 'get-component-async';
import { Loading } from 'yoshino';

function getComponentAsyncLoading<T>(loading: () => Promise<{
  default: T
}>) {
  return getComponentAsync(loading,  <Loading text='文档加载中！！' size='large' type='c'/>);
}

export default [
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-alert" */ './Alert')
    ),
    path: '/docs/components/alert',
  },
];
