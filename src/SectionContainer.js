import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compareObjects from './compareObjects';

export default class SectionContainer extends Component {
  static propTypes = {
    section: PropTypes.any.isRequired,
    renderSectionContainer: PropTypes.func.isRequired,
    themeProps: PropTypes.object.isRequired,
    children: PropTypes.node
  };

  shouldComponentUpdate(nextProps) {
    return compareObjects(nextProps, this.props);
  }

  render() {
    const { section, renderSectionContainer, themeProps, children } = this.props;
    const sectionContent = renderSectionContainer && renderSectionContainer(section, children);

    if (!sectionContent) {
      return (
        <div {...themeProps}>
          {children}
        </div>
      );
    }

    return (
      <div {...themeProps}>
        {sectionContent}
      </div>
    );
  }
}
