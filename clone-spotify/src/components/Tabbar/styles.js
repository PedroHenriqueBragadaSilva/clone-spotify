import styled from 'styled-components/native';

export const Container = styled.View`
    height: 80px;
    backgroundColor: #222;
    borderTopColor: #000;
    borderWidth: 2px;
`;

export const SubContainer = styled.View`
    height: 70px;
    flexDirection: row;
`;

export const GroupAction = styled.View`
    justifyContent: center;
    alignItems: center;
    flex: 1;
`;
export const ActionName = styled.Text`
    color: #fff;
    fontSize: 11px;
    padding: 5px;
`;