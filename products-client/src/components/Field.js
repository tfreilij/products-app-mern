import React from 'react';


class Field extends React.Component {


    render() {

        let styleContainerDiv = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5px auto",
            width: "450px"
        
        }

        let styleInternalDiv = {
            width: "200px",
        }

        return (
            <div style={styleContainerDiv}>
                <div style={styleInternalDiv} >
                    <label>{this.props.label}</label>
                </div>
                <div style={styleInternalDiv}>
                    <input />
                </div>
            </div>
        )

    }

}

export default Field;