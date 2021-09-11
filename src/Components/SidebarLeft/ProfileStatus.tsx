import React, { ChangeEvent, useState } from 'react'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activatedEditMode = () => {
        setEditMode(true)
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return(
        <div>
            {!editMode
            ? <div>
                <span onDoubleClick={activatedEditMode}>{props.status || 'Ваш статус'}</span>
            </div>
            : <div>
                <input type="text" onChange={onChangeStatus} autoFocus={true} onBlur={deactivatedEditMode} value={status} placeholder={'Введите статус'} />
            </div>
            }
        </div>
    )
}

export default ProfileStatus