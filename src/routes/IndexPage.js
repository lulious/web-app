import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example'
// import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div>
      123
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
