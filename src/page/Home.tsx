import React from 'react'
import { Card } from 'antd'
export default (props) => {
    React.useEffect(() => {
        console.log('children', props)
    }, [])
    return <Card>home</Card>
}
