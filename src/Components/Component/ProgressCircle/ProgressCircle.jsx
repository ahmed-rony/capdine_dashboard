import React from 'react';

const ProgressCircle = ({ progress = '0.75'}) => {
    const angle = progress * 360;

    return (
        <div
            style={{
                background: `radial-gradient(#fff 30%, transparent 40%),
            conic-gradient(transparent 0deg ${angle}deg, #7EB874 ${angle}deg 360deg),
            rgba(0, 0, 0, 0.8)`,
                borderRadius: "50%",
                width: `35px`,
                height: `35px`,
            }}
        >

        </div>
    );
};

export default ProgressCircle;