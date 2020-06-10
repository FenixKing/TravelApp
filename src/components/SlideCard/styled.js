import styled from 'styled-components'

export const Content = styled.View({
    height: 350,
})

export const TitleBlock = styled.View({
    padding: 2,
    flexDirection: 'row',
})

export const Title = styled.Text({
    fontSize: 26,
    fontWeight: 'bold',
})

export const SeeAll = styled.Text({
    fontSize: 16,
    color: '#91D5E0',
    fontWeight: 'bold',
    left: 75,
    top: 10
})

export const TouchableCard = styled.TouchableOpacity({
    top: 10,
    width: 200,
    height: 350,
    marginRight: 10,
    paddingHorizontal: 7.5
})