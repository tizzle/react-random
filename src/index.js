import React, { Component } from 'react';
import faker from 'faker';

class Random extends Component {
  render () {
    const { value, tag, locale, children } = this.props;
    const [ category, property ] = value.split('.');
    let html;

    if (locale) {
      faker.locale = locale;
    }

    const fakeData = property
      ? faker[category][property]()
      : faker[category]();

    switch (tag) {
      case 'a':
        html = <a href={fakeData}>{children}</a>;
        break;
      case 'img':
        html = <img src={fakeData} />;
        break;
      default:
        html = <span>{fakeData}</span>;
    }

    return html;
  }
};

Random.propTypes = {
  value: React.PropTypes.string.isRequired,
  tag: React.PropTypes.string,
  locale: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
};

export default Random;
