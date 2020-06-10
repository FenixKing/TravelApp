import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Container,
    Title,
    Content
} from './styled'
import { SelectedIcons } from '../../components/SelectedIcons'
import { SlideCard } from '../../components/SlideCard'
import { FlatList } from 'react-native-gesture-handler'

export const HomeScreen = () => {
    const route = 'CityProfile'

    return (
        < FlatList
            data={[1]}
            renderItem={({ item }) =>
                <Container>
                    <Content>
                        <Title>{`What you would like\nto find?`}</Title>
                        <SelectedIcons />
                        <SlideCard title='Top Destinations' route={route} />
                        <SlideCard title='Exclusive Hotels' route={route} styleWhiteBlock={styles} style={{ width: 300, height: 200 }} styleContent={{ width: 350, marginRight: -10 }} />
                    </Content>
                </Container>
            }
            keyExtractor={item => item.toString()}
        />
    )
}

const styles = StyleSheet.create({
    width: 315,
    top: 170,
    marginBottom: 50,
})