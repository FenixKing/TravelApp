import styled from 'styled-components'


export const GroupImage = styled.View({
    flex: 1,
    marginBottom: 210
})

export const Image = styled.Image({
    width: 360,
    height: 360,
    borderRadius: 30,
    position: 'absolute',
})

export const GroupIcons = styled.View({
    paddingLeft: 20,
    paddingTop: 30,
    flexDirection: 'row'
})

export const TouchableGoBack = styled.TouchableOpacity({
})

export const FooterImage = styled.View({
    top: 200,
    flexDirection: 'row'
})
export const GroupTitle = styled.View({
})

export const City = styled.Text({
    fontSize: 32,
    fontWeight: '700',
    left: 20,
    color: '#eee',
    zIndex: 1,
})

export const ContryBlock = styled.View({
    flexDirection: 'row',
    bottom: 15,
    left: 20,
    paddingVertical: 20,
    zIndex: 1,
})

export const Contry = styled.Text({
    fontSize: 24,
    fontWeight: 'normal',
    color: '#ccc',
    left: 8,
    zIndex: 1,
})
