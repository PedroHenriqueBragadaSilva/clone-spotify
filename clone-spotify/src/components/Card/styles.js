import styled from 'styled-components/native';

export const Container = styled.View`
     width: 160px; 
     padding: 15px 0px;
     marginRight: 8px;
`;

export  const Photo = styled.Image`
    width: 150px;
    height: 150px;
    backgroundColor: #888;
    borderRadius: 6px;
`;

export const ContainerSubtitle = styled.View`
    flexDirection: column;
    padding: 10px 0px;
`;

export const SubtitleTitle = styled.Text`
    color: #fff;
    fontWeight: bold;
    fontSize: 14px;
    padding: 2px 0px;

`;
export const SubtitleDescription = styled.Text`
    color: #999;
    fontSize: 12px;
`;