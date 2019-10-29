# React Native

![react](img/react-native.png)

## Apresentação

React Native é semelhante ao React, mas o uso dos componentes nativos instanciados para componentes lógicos web o diferencia do React.
Além disso, o native trabalha com blocos de inicialização. Então para compreender a estrutura básica do do React Native app você precisa conpreender algo básico de conceitos de React, como JSX, componentesm estados e proposições.

## Tutorial

Para começar sua aplicação React Native você instala o `expo-cli`, ferramenta para rodar uma aplicação em um dispoditivo móvel.

Para instalar-lo, faça

```sh
npm i -g expo-cli
```

Para criar um projeto devemos digitar o comando no terminal:

```sh
npm create-react-app myapp
cd myapp
```
Agora, no arquivo App.js, coloque o código:
```js
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HelloWorldApp extends Component {
    render(){
        return (
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text>Hello, World</Text>
            </View>
        )
    }
}
```

Você teria o seguinte resultado:

![hello](img/hello.jpg)

Há algumas informações importantes a respeito da estrutura no App.js, que está no formato do ES06.

import, form, class e extends são exemplos de de feaures do ES2015.

As tags <View> e <Text> são a sintaxe do JSX. A utilização dessas tags fazem parte do framework do React Native.

Por fim, a função render retorna uma funçao do JSX que contem os elementos necessários para renderizar a página.

## Referências

* [facebook.github.io](https://facebook.github.io/react-native/docs/tutorial)