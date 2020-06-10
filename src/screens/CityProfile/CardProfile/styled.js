import styled from 'styled-components'

export const Content = styled.View({
    flex: 1,
    left: 30
})

export const Card = styled.View({
    width: 320,
    height: 155,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 15,
    flexDirection: 'row'
})

export const Image = styled.Image({
    width: 115,
    height: 140,
    top: 8,
    borderRadius: 15,
    left: -20,
    position: 'absolute',
})

export const Body = styled.View({
    padding: 12,
    marginBottom: 10,
    position: 'relative'
})

export const GroupTitle = styled.View({
    left: 80,
})

export const Title = styled.Text({
    fontSize: 16,
    fontWeight: 'bold',
})

export const SubTitle = styled.Text({
    fontSize: 14,
    color: '#ccc',
})

export const GroupPrice = styled.View({
    top: -60,
    left: 195,
})

export const Price = styled.Text({
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right'
})

export const SubPrice = styled.Text({
    textAlign: 'right',
    fontSize: 14,
    color: '#ccc',
})

export const GroupStars = styled.View({
    top: 75,
    left: -20
})

export const GroupHour = styled.View({
    top: 100,
    left: -70
})

export const Hour = styled.View({
    width: 70,
    height: 25,
    paddingLeft: 9,
    paddingTop: 3,
    backgroundColor: '#78CCDB50',
    borderRadius: 10,
    marginRight: 5
})

export const HourText = styled.Text({

})