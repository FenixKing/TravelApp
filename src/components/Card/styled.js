import styled from 'styled-components'

export const Content = styled.View({
})

export const Image = styled.Image({
    width: 180,
    height: 180,
    borderRadius: 20,
    position: 'absolute',
    marginLeft: 7,
})

export const GroupImage = styled.View({
    position: 'absolute',
})

export const City = styled.Text({
    fontSize: 26,
    fontWeight: '700',
    left: 20,
    top: 110,
    color: '#eee',
    zIndex: 1,
})

export const ContryBlock = styled.View({
    flexDirection: 'row',
    left: 20,
    top: 90,
    paddingVertical: 20,
    zIndex: 1,
})

export const Contry = styled.Text({
    fontSize: 20,
    fontWeight: 'normal',
    color: '#ccc',
    left: 8,
    zIndex: 1,
})

export const WhiteBlock = styled.View({
    position: 'relative',
    width: 195,
    height: 125,
    top: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 40,
})

export const Activities = styled.Text({
    fontSize: 20,
    fontWeight: 'bold',
    left: 8,
    top: 5,
    zIndex: 1,
})

export const Description = styled.Text({
    top: 9,
    fontSize: 14,
    color: '#ccc',
    paddingHorizontal: 7,
})