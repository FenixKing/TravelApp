import React, { useState } from 'react'
import {
    BlockCirculo,
    Circulo
} from './styled'
import { FlatList } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlane, faBed, faWalking, faBiking } from '@fortawesome/free-solid-svg-icons'

export const SelectedIcons = () => {

    const [select, setSelect] = useState(0)

    const icon = [
        {
            id: 0,
            icon: faPlane,
        },
        {
            id: 1,
            icon: faBed,
        },
        {
            id: 2,
            icon: faWalking,
        },
        {
            id: 3,
            icon: faBiking,
        },

    ]

    const onPress = (item) => {
        setSelect(item.id)
    }

    return (

        <BlockCirculo>
            <FlatList
                data={icon}
                numColumns={icon.length}
                renderItem={({ item }) => (
                    <Circulo onPress={() => onPress(item)} style={select === item.id ? { backgroundColor: '#3EBACE50' } : { backgroundColor: '#ddd' }}>
                        <FontAwesomeIcon icon={item.icon} size={24} color={select === item.id ? '#4AB5C7' : '#999'} />
                    </Circulo>
                )}
                keyExtractor={index => index}
                extraData={select}
            />
        </BlockCirculo>
    )
}