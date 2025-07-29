import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Comments from "../components/Comments"

import * as S from "../components/Post/styled"


const AboutPage = () => (
  <Layout>
    <Helmet title="Sobre o colecionando.games!" />
    <Seo 
        title="Sobre"
        description="Sobre o colecionando.games!" />

    <S.PostWrapper>
      <S.PostHeader>
        <S.PostTitle>Sobre o colecionando.games</S.PostTitle>
        <S.PostDescription>Um projeto independente sobre colecionismo e preservação de jogos eletrônicos.</S.PostDescription>
      </S.PostHeader>

      <S.MainContent>
        <p>
          Nosso objetivo é reunir e preservar o máximo de informações possíveis sobre 
          nosso hobby de colecionar videogames.
        </p>

        <p>
          Atualmente o projeto conta com este site que possui uma série de listas, 
          artigos e notícias sobre a história e o colecionismo de games. 
          O nosso <a href="https://www.instagram.com/colecionando.games">Instagram</a> é 
          dedicado às versões brasileiras de jogos, valorizamos muito 
          o que é lançado por aqui. Também temos um canal 
          no <a href="https://www.youtube.com/@colecionandogames">YouTube</a>, onde você 
          encontra unboxings de jogos cujo o objetivo é registrar todo o conteúdo 
          original do item para referência. 
          E por fim, nosso perfil no <a href="https://archive.org/details/@felipebbarbosa">Internet Archive</a> com 
          imagens (ISOs) de versões brasileiras de jogos, principalmente CD-ROMs da década de 90/00.
        </p>

        <p>Ainda estamos apenas começando, mais novidades em breve!</p>

        
        
        
        
      </S.MainContent>    

      <Comments url="/sobre" title="Sobre" />

    </S.PostWrapper>


  </Layout>
)

export default AboutPage
