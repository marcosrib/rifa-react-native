import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import {
  Container,
  Title,
  DateSortition,
  ImageContent,
  Description,
  ScrollView,
  Image,
  Text,
  NumberContent,
  NumberArea,
  TextNumber
} from './styles';

import StompWS from 'react-native-stomp-websocket';

const d = {
  texto: " 1° LUGAR UMA  OVELHA  ST INÊS sorteio será dia 5 de Junio /ln O VALOR DO PONTO E $ 12 Reais A PARTIR DE DOIS PONTOS SAI A 10 REAIS O GANHANDO SERÁ QUEM ACERTA OS ÚLTIMOS 2 NÚMEROS DO SORTEIO DO JOGO DO BICHO A OVELHA SE ENCONTRA NA  LOCALIDADE: CANAVIHEIRA, MUNICÍPIO DE SÃO JOÃO DO PIAUÍ "
}
const numeros = ["01", "02", "03", "04", "05", "06", "07", "07", "01", "02", "03", "04", "05", "06", "07", "07", "01", "02", "03", "04", "05", "06", "07", "07"]

const { height } = Dimensions.get('window');
const numberHeight = height * 0.07;

const RifaDetail: React.FC = () => {
 
  useEffect(() => {
    const client = StompWS.client('ws://192.168.0.3:8080/ws');
    client.connect({}, () => {
      client.subscribe(
        '/topic/messages', function (message: any) {
          console.log(message.body);
        }
      );
    });
  }, [])



  return (
    <Container>
      <ScrollView>
        <Title>Urso</Title>
        <DateSortition>Sorteio:  10/02/2020</DateSortition>
        <ImageContent>
          <Image source={require('../../images/mel1.jpeg')} />
        </ImageContent>
        <Description>{d.texto}</Description>
        <Text>Reserve já o seu ponto:</Text>
        <NumberArea>
          {numeros.map(n => {
            return (
              <NumberContent height={numberHeight}>
                <TextNumber>{n}</TextNumber>
              </NumberContent>
            )
          }
          )}
        </NumberArea>
      </ScrollView>
    </Container>

  );
}

export default RifaDetail;