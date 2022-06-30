import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 5px 20px;
`;

export const Title = styled.Text`
    color: #fff;
    fontSize: 24px;
    fontWeight: bold;
`;

export const SlideScroll = styled.ScrollView.attrs({
    showHorizontalScrollIndicator: false,
    horizontal: true,

})``;