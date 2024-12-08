import React from 'react'

const ProtectedRoute = ({ condition, ifCondition, elseCondition }) => {
    if (condition) {
        return ifCondition
    }
    return elseCondition
}

export default ProtectedRoute