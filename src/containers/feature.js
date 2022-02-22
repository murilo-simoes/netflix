import React from 'react';
import { Feature } from '../components';
import { OptForm } from '../components';

export const FeatureComponent = () => {
    return ( 
        <Feature>
            <Feature.Title>Filmes, séries e muito mais. Sem limites.</Feature.Title>
            <Feature.SubTitle>Assista de qualquer lugar. Cancele a qualquer momento.</Feature.SubTitle>
            <OptForm>
                        <OptForm.Input placeholder="Email"></OptForm.Input>
                        <OptForm.Button>Vamos lá</OptForm.Button>
                        <OptForm.Break/>
                        <OptForm.Text>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
                        </OptForm.Text>
                     </OptForm>
        </Feature>
     );
}
 
