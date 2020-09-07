import React, { useState } from "react";
import { Alert, Modal } from "react-native";

import {
  Container,
  CenteredView,
  ModalView,
  ModalContainerText,
  ModalText,
  Button,
  Buttontext,
  ButtonCancel,
  ButtonCancelText
} from "./styles";

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert(
            "Atencao!",
            "Deseja cancelar a seleção de imagem?",
            [
              {
                text: "Sim",
                onPress: () => setModalVisible(false),
                style: "cancel",
              },
              { text: "Não", onPress: () => setModalVisible(true) },
            ],
            { cancelable: false }
          );
        }}
      >
        <CenteredView>
          <ModalView>
            <ModalContainerText>
              <ModalText>Selecionar uma imagem</ModalText>
            </ModalContainerText>

            <Button
 
            >
                <Buttontext>Tirar foto com a camêra</Buttontext>
            </Button>
            <Button>
                <Buttontext>Selecionar foto da galeria</Buttontext>
            </Button>

            <ButtonCancel
              onPress={()=> setModalVisible(false)}
            >
                <ButtonCancelText>Cancelar</ButtonCancelText>
            </ButtonCancel>

          </ModalView>
        </CenteredView>
      </Modal>              
      <Button>
        <Buttontext
          onPress={()=> setModalVisible(true)}                 
        >Escolher uma Imagem
        </Buttontext>
      </Button>

      <Button>
        <Buttontext
          onPress={()=>{}}                 
        >Enviar
        </Buttontext>
      </Button>
    </Container>
  );
};

export default App;
