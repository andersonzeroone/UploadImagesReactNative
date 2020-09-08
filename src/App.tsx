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
  ButtonClean,
  ButtonCancelText,
  ContainerImages,
  Image,
  ContainerImageButtonClean
} from "./styles";

import ImagePicker from 'react-native-image-crop-picker';

interface ImageProps{
  id:number;
  path:string;
  type:string;
}
const App: React.FC = () => {

  const [avatar, setAvatar] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [count ,setCount] = useState(1);

  function handleControl(){
    console.log(avatar);
  }
  function handleImagePickerGallery(){
      console.log('oi')
  }

  function handleImagePickerOpenCam(){
    const dataAvatar = [...avatar];
    const id = count;

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
      multiple: false,
      mediaType: 'photo',
    }).then((image) => {
      setModalVisible(false);
      setCount( count + 1 );

      const img = { 
              id:id , 
              path: image.path,
              type: image.mime,
            }
      
      dataAvatar.push(img);
      setAvatar(dataAvatar);
      handleControl()      
    }).catch(err => (
      console.log(` Error ${err}`)
    ))
  }
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
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
              onPress={handleImagePickerOpenCam}
            >
                <Buttontext>Tirar foto com a camêra</Buttontext>
            </Button>
            <Button
              onPress={handleImagePickerGallery}
            >
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
      
      <ContainerImages>
        {!avatar[0] ? (
          <Image
            source={{
              uri:'https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png',
            }}
          />
        ): (
          avatar.map( img => (
            <ContainerImageButtonClean key={img.id}>
              <Image
                source={{ uri:img.path }}
              />
              <ButtonClean>
                <ButtonCancelText>Excluir</ButtonCancelText>
              </ButtonClean>
            </ContainerImageButtonClean>
          ))
        )
      }
      </ContainerImages>
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
