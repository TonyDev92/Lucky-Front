import React from 'react'

const ProgressBar = ({ bgcolor, progress, height , width }) => {

    const Parentdiv = {
        height: height, 
        width: `${width}%`,
        backgroundColor: '#FEDDD9',
        borderRadius: 40,
        margin: 15  
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
            </div>
        </div>
    )
}

export default ProgressBar
