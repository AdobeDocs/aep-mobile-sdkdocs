/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React, { cloneElement } from 'react';
import { css } from '@emotion/react';
import * as Icons from '@adobe/gatsby-theme-aio/src/components/Icons';
import PropTypes from 'prop-types';
import '@spectrum-css/inlinealert';

const commonCss = css`
  font-size: 1rem;
  line-height: 1.3rem;
  padding-right: 30px;
`;

const getIconName = (variant) => {
  let icon = variant;

  if (variant === 'error') {
    icon = 'alert';
  }

  return `${icon.charAt(0).toUpperCase()}${icon.slice(1)}Medium`;
};

  const InlineAlertTexts = ({ texts }) => {
    const textKeys = Object.keys(texts).filter((key) => key.startsWith('text'));
    return textKeys.map((textKey, index) =>
      index === 0
        ? cloneElement(texts[textKey], {
            className: 'spectrum-InLineAlert-content',
            css: css`
              margin-top: 0;
              margin-left: var(--spectrum-global-dimension-size-300) !important;
              ${commonCss};
            `
          })
        : cloneElement(texts[textKey], {
            className: 'spectrum-InLineAlert-content',
            css: css`
              margin-top: var(--spectrum-global-dimension-size-150);
              margin-left: var(--spectrum-global-dimension-size-300) !important;
              ${commonCss};
            `
          })
    );
  };

  const InlineAlert = ({ variant = 'info', header, ...props }) => {
    const Icon = Icons[getIconName(variant)] ? Icons[getIconName(variant)] : Icons.NeutralMedium;
    variant = variant === 'warning' ? 'negative' : variant;
  
    return (
        <div
          role="alert"
          className={`spectrum-InLineAlert spectrum-InLineAlert--${variant}`}
          css={css`
            display: block !important;
            min-width: 0 !important;
            width: 100%;
            margin-top: var(--spectrum-global-dimension-size-300);
            svg {
                left: 0;
                margin-left: var(--spectrum-global-dimension-size-175) !important;
            }
          `}>
        <Icon 
        className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon"
        css={css`
        display: inline-block !important;
        `} />
        <div>
          {header &&
            cloneElement(header, {
              className: 'spectrum-InLineAlert-header',
              css: css`
                margin-top: 0;
                margin-left: var(--spectrum-global-dimension-size-300);
                margin-bottom: 0.5rem;
                font-size: 1rem;
                line-height: 1.3rem;
              `
            })}
        </div>
        <InlineAlertTexts texts={props} />
      </div>
    );
  };


InlineAlert.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.element
};

export { InlineAlert };