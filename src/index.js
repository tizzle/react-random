import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    if (tag === undefined) {
      html = <span>{fakeData}</span>;
    } else {
      switch (tag) {
        case 'a':
          html = <a href={fakeData}>{children}</a>;
          break;
        case 'img':
          html = <img src={fakeData} />;
          break;
        default:
          const CustomTag = tag;
          html = <CustomTag>{fakeData}</CustomTag>;
      }
    }

    return html;
  }
};

Random.propTypes = {
  value: PropTypes.string.isRequired,
  tag: PropTypes.string,
  locale: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default Random;
