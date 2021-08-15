import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render(){
        return(
            <div>
                {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
                </div>
                : <div>
                    <input type="text" onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivatedEditMode} value={this.state.status} />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus