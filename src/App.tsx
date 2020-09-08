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

const App: React.FC = () => {

  const [avatar, setAvatar] = useState<object[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [count ,setCount] = useState(1);

  function handleControl(){
    console.log(avatar);
  }
  function handleImagePickerGallery(){
    const imagens = avatar;
    
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      multiple: true,
      mediaType: 'photo',
    }).then((image) => {
        setModalVisible(false);
       
        image.map( (img, index) => { 
          const id = index+1;
          imagens.push({
                id:id , 
                path: img.path,
                type: img.mime,
          })        
        
          setCount(id);
        })

        setAvatar(imagens);
        handleControl()

    });  
  }

  function handleImagePickerOpenCam(){
    const images = [...avatar];
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
      
      images.push(img);
      setAvatar(images);
      handleControl()      
    }).catch(err => (
      console.log(` Error ${err}`)
    ))
  }

  function handleImagePickerClean(id:number){
    const imgArray =  avatar;
    const img = imgArray.filter( img => img.id !=  id);
    setAvatar(img);
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
              <ButtonClean
                onPress={() => handleImagePickerClean(img.id)}
              >
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
