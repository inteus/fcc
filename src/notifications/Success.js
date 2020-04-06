import React from 'react';
import st from '../components/OrderList.module.css';

const Success = (props) => (
  <div className={st.alert__success}>
    <div className="alert alert-success" role="alert">
      {props.text}  <button type="button" class="btn btn-danger btn-sm" onClick={props.hideSuccessAlert} title="Click to hide">hide</button>
    </div>
    <div>
    </div>
  </div>
)

export default Success;