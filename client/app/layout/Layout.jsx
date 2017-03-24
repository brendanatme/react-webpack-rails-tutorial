import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import BaseComponent from 'libs/components/BaseComponent';
import Header from '../components/Header';

import './Layout.scss';

export default class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  /* eslint-disable react/no-unescaped-entities */
  render() {
    return (
      <div>
        <Header />
        <main role="main">
          {this.props.children}
        </main>
      </div>
    );
  }
}
