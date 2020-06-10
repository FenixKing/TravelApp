import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Content,
    GroupImage,
    Image,
    City,
    ContryBlock,
    Contry,
    WhiteBlock,
    Activities,
    Description
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


export const Card = ({ item, style, styleWhiteBlock, }) => {

    return (
        <Content >
            <WhiteBlock style={[styleWhiteBlock, styles.shadow]}>
                <Activities>{item.activities} activities</Activities>
                <Description>{item.description}</Description>
            </WhiteBlock>
            <GroupImage style={styles.shadow}>
                <Image style={style} source={item.image} />
                <City>{item.city}</City>
                <ContryBlock>
                    <FontAwesomeIcon style={{ top: 10 }} icon={faLocationArrow} size={10} color='#ccc' />
                    <Contry>{item.country}</Contry>
                </ContryBlock>

            </GroupImage>
        </Content>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'gray',
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 4,
        zIndex: 4,
    }
})