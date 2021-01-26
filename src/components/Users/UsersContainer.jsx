import { connect } from 'react-redux'
import { followAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../Redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (total) => {
            dispatch(setTotalUsersCountAC(total))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)