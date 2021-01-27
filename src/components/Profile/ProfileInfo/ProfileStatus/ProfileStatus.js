import React, { Component } from 'react'

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode = (ev) => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    changeStatus = (ev) => {
        const status = ev.target.value;
        this.setState({
            status
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div>
                            <input autoFocus={true}
                                onBlur={this.deactiveEditMode}
                                onChange={this.changeStatus}
                                value={this.state.status} />
                        </div>
                        : <div>
                            <span
                                onClick={this.activeEditMode}
                            >{this.props.status || 'no status'}</span>
                        </div>
                }
            </div >
        )
    }

}

export default ProfileStatus