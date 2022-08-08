import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {useAppSelector} from '../../../hooks/hooks'
import {getIsAuth} from '../../../redux/authSelectors'
import {Navigate} from 'react-router-dom'

export const NewsForRedirect = () => {
    const isAuth = useAppSelector(getIsAuth)

    if (!isAuth) return <Navigate to="/login"/>
    return (
        <div>
            News
        </div>
    )
}

export const News = withAuthRedirect(NewsForRedirect)