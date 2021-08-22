import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import style from './SettingAccount.module.scss'
import SettingPrivacy from './SettingsPrivacy/SettingPrivacy'
import SettingProfile from './SettingsProfile/SettingProfile'

const AccountSettings = (props) => {
    return(
        <section className={style.settingsWrapper}>
            <div className={style.settings}>
                <div className={style.settingsNav}>
                    <ul className={style.settingsNavItems}>
                        <NavLink to={'/settings/profile'} activeClassName={style.settingActive}>
                            <li>Профиль</li>
                        </NavLink>
                        <NavLink to={'/settings/privacy'} activeClassName={style.settingActive}>
                            <li>Конфеденциальность</li>
                        </NavLink>
                        <NavLink to={'/settings/any'} activeClassName={style.settingActive}>
                            <li>Прочее</li>
                        </NavLink>
                    </ul>
                </div>
                <Route path='/settings/profile' render={() => <SettingProfile profile={props.profile} updateProfile={props.updateProfile} errors={props.errors} />} />
                <Route path='/settings/privacy' render={() => <SettingPrivacy />} />
            </div>
        </section>
    )
}

export default AccountSettings