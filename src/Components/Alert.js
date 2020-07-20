import React from 'react';
import {connect} from 'react-redux';

const alert = ({alerts}) =>     alerts!== null && alerts.length>0 && alerts.map(alert=>(
        <div key={alert.id} className={`alert alert-${alert.type}`}>
            {alert.message}
        </div> ))

const mapStateToProps = state =>{
    return {
        alerts:state.alert
    }
}

export default connect(mapStateToProps)(alert);