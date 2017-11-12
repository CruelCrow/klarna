import React from 'react';

const Loading = (props) => {
    if (props.visible) {
        return (
            <svg className="progress" width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" strokeWidth="12" />
                <circle className="progress__value" cx="60" cy="60" r="54" fill="none" stroke="#f77a52" strokeWidth="12" />
            </svg>
        )
    } else {
        return <div />
    }
};

export default Loading;