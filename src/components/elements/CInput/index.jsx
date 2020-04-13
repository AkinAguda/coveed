/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} Validation
 * @property {boolean} error
 * @property {sting} message - message in case of errors
 */

/**
 * validation callback
 * 
 * @callback validationCallback
 * @param {string} value
 * @returns {Validation}
 */

/**
 * async validation callback
 * 
 * @callback asyncValidation
 * @param {string} value
 * @returns {Promise}
 */

/**
 * @param {{
 * validate: validationCallback
 * asyncValidate: asyncValidation
 * }}
 */
const CInput = ({validate, asyncValidate, ...props}) => (
  <>
    <input {...props} />
  </>
);

CInput.propTypes = {
    validate: PropTypes.func,
    asyncValidate:  PropTypes.func
}
CInput.defaultProps = {
    validate: () => {},
    asyncValidate: () => new Promise()
}

export default CInput;
