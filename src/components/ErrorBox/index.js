import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';
import { Container } from './style';

const ErrorBox = ({ error: { visible, message }, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button type="button" onClick={hideError}>
        x
  </button>
</Container>
);

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
