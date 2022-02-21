import React from 'react';
import {Accordion} from '../components';
import OptForm from '../components/optform';
import faqsData from '../fixtures/faqs.json'

export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Perguntas frequentes</Accordion.Title>
            <Accordion.Frame>

            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item/>
            </Accordion.Frame>
            
            <OptForm>
                <OptForm.Text>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
                </OptForm.Text>
                <OptForm.Input placeholder="Email"></OptForm.Input>
                <OptForm.Button>Vamos lá</OptForm.Button>
                <OptForm.Break/>
            </OptForm>
            
        </Accordion>
    )
}