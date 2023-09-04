import React from "react";

export const RevealCard = () => {

    return (
        <div style={{ width: 50, height: 50, left: 70, top: 0, position: 'absolute' }}>
            <div style={{ width: 38.78, height: 43.27, left: 76.23, top: 0, position: 'absolute', transform: 'rotate(35.32deg)', transformOrigin: '0 0', background: 'white', border: '1px black solid' }}></div>
            <div style={{ width: 38.63, height: 43.43, left: 50, top: 7.06, position: 'absolute', background: 'white', border: '1px black solid' }}></div>
            <div style={{ width: 16.09, height: 19, left: 67.17, top: 28.77, position: 'absolute' }}>
                <div style={{ width: 16, height: 18.91, left: 0.09, top: 0, position: 'absolute', background: '#F24822' }}></div>
            </div>
        </div>
    );
};

export default RevealCard;
