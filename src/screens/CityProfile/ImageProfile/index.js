import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faStream, faSearch, faLocationArrow, faRoute } from '@fortawesome/free-solid-svg-icons'
import {
    GroupImage,
    Image,
    GroupIcons,
    TouchableGoBack,
    GroupTitle,
    City,
    ContryBlock,
    Contry,
    FooterImage
} from './styled'

export const ProfileImage = () => {
    const { item } = useSelector(state => state.datas)
    const navigation = useNavigation()
    return (
        <GroupImage>
            <Image source={item.image} />
            <GroupIcons>
                <TouchableGoBack onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} size={22} color={item.icon} />
                </TouchableGoBack>
                <FontAwesomeIcon icon={faSearch} size={20} color={item.icon} style={{ marginLeft: 'auto', marginRight: 20, }} />
                <FontAwesomeIcon icon={faStream} size={20} color={item.icon} style={{ marginRight: 20, }} />
            </GroupIcons>
            <FooterImage>
                <GroupTitle>
                    <City>{item.city}</City>
                    <ContryBlock>
                        <FontAwesomeIcon style={{ top: 10 }} icon={faLocationArrow} size={13} color='#ccc' />
                        <Contry>{item.country}</Contry>
                    </ContryBlock>
                </GroupTitle>
                <FontAwesomeIcon icon={faRoute} size={28} color='#ccc' style={{ marginLeft: 'auto', marginRight: 30, top: 50 }} />
            </FooterImage>
        </GroupImage>
    )
}