import React from 'react'
import {
    Content,
} from './styled'

import { CardProfile } from './CardProfile'
import { ProfileImage } from './ImageProfile'
import { FlatList } from 'react-native-gesture-handler'
import { Hotel } from '../../service/data'

export const CityProfile = () => {
    return (
        <Content style={{ flex: 1 }}>
            <FlatList
                data={[1]}
                keyExtractor={item => item}
                renderItem={({ }) => (
                    <>
                        <ProfileImage />
                        <FlatList
                            scrollEnabled
                            data={Hotel}
                            renderItem={({ item }) => <CardProfile item={item} />}
                            keyExtractor={(item) => item.id}
                            Vertical
                        />
                    </>
                )}
            />
        </Content>
    )
}