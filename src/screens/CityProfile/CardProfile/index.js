import React from 'react'
import {
    Content,
    Card,
    Image,
    Body,
    GroupTitle,
    Title,
    SubTitle,
    GroupPrice,
    Price,
    SubPrice,
    GroupStars,
    GroupHour,
    Hour,
    HourText,
} from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FlatList } from 'react-native-gesture-handler'

export const CardProfile = ({ item }) => {
    return (
        <Content>
            <Card>
                <Image source={item.image} />
                <Body>
                    <GroupTitle>
                        <Title>{`Debs e \numa viada!!!`}</Title>
                        <SubTitle>Muito Viada!</SubTitle>
                    </GroupTitle>
                    <GroupPrice>
                        <Price>${item.price}</Price>
                        <SubPrice>per pax</SubPrice>
                    </GroupPrice>
                </Body>
                <GroupStars>
                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item }) =>
                            <FontAwesomeIcon size={10} icon={faStar} color="orange" />
                        }
                        horizontal
                        keyExtractor={item => item.toString()}
                    />
                </GroupStars>
                <GroupHour>
                    <FlatList
                        data={[1, 2]}
                        renderItem={() =>
                            <Hour>
                                <HourText>9:00 am</HourText>
                            </Hour>
                        }
                        horizontal
                        keyExtractor={item => item.toString()}
                    />
                </GroupHour>
            </Card>
        </Content>
    )
}