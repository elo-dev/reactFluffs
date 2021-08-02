import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activatedEditMode(){
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode(){
        this.setState({
            editMode: false
        })
    }

    render(){
        return(
            <div>
                {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                </div>
                : <div>
                    <input type="text" autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status} />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus