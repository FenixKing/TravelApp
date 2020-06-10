import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import {
    Content,
    TitleBlock,
    Title,
    SeeAll,
    TouchableCard
} from './styled'
import { Card } from '../Card'
import { Place } from '../../service/data'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { actionData } from '../../store/ducks/data'

export const SlideCard = ({ title, style, styleContent, styleWhiteBlock, route }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const onPress = (item) => {
        let selected = item.id
        if (selected === item.id) {
            dispatch(actionData(item))
            navigation.navigate('CityProfile')
        }
    }


    return (
        <Content>
            <TitleBlock>
                <Title>{title}</Title>
                <SeeAll>See All</SeeAll>
            </TitleBlock>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Place}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableCard activeOpacity={1} onPress={() => onPress(item)} style={styleContent}>
                        <Card item={item} style={style} route={route} styleWhiteBlock={styleWhiteBlock} />
                    </TouchableCard>
                )
                }
            />
        </Content>
    )
}