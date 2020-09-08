import styled from  'styled-components/native';

export const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const Button = styled.TouchableOpacity`
    width: 250px;
    height: 50px;
    margin-top:20px;
    border-radius: 10px;
    background-color: #7159c1;
    justify-content: center;
    align-items:center;
`;

export const Buttontext = styled.Text`
    color:#fff;
`;

export const ButtonCancel = styled.TouchableOpacity`
    margin-top:30px;
`;
export const ButtonClean = styled.TouchableOpacity`
   
`;

export const ButtonCancelText = styled.Text`
   font-size:18px;
   text-decoration: underline;
   color:#000;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    margin:10px;
  
`;

export const CenteredView = styled.View`
    flex: 1;
    height: 100px;
    justify-content: center;
    background-color:rgba(59, 82, 80, 0.80);
    
`;

export const ModalView = styled.View`
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    justify-content:center;
    align-items: center;
    padding: 35px; 
    border-color:#000;
    border-width:0.5px;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    background-color:#fff;
    /* 222224 */
    /* 30302e */
`;

export const ModalContainerText = styled.View`
    flex-direction: row;
    justify-content: center;
    align-content: center;
    border-bottom-width:2px;
    border-color: #7159c1; 
`;

export const ModalText = styled.Text`
    font-size:18px;
`;

export const ContainerImages = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`;

export const ContainerImageButtonClean = styled.View`
    align-items:center;
`;
