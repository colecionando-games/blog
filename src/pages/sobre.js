import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Comments from "../components/Comments"

import * as S from "../components/Post/styled"


const AboutPage = () => (
  <Layout>
    <S.PostWrapper>
      <S.PostHeader>
        <S.PostTitle>Sobre o colecionando.games</S.PostTitle>
        <S.PostDescription>O colecionando.games é um projeto independente focado no colecionismo e na preservação de jogos eletrônicos.</S.PostDescription>
      </S.PostHeader>

      <S.MainContent>
        <p>
          Nossa missão é reunir e preservar o máximo de informações possíveis sobre o 
          fascinante universo de colecionar videogames.
        </p>

        <p>
          Atualmente o projeto conta com este site, que oferece uma variedade de listas, 
          artigos e notícias sobre a história dos games e a cultura do colecionismo. 
          Nosso perfil no <a href="https://www.instagram.com/colecionando.games">Instagram</a> é 
          dedicado às versões brasileiras de jogos — valorizamos e celebramos tudo 
          o que é lançado por aqui. Também temos um canal 
          no <a href="https://www.youtube.com/@colecionandogames">YouTube</a> com unboxings 
          detalhados, onde registramos o conteúdo original de cada item como referência. 
          E, por fim, mantemos um acervo no <a href="https://archive.org/details/@felipebbarbosa">Internet Archive</a> com 
          imagens (ISOs) de versões nacionais de jogos, principalmente em CD-ROMs da década de 1990 e 2000.
        </p>

        <p>Ainda estamos só no começo. Em breve, muitas novidades!</p>

        <h2>Quem faz?</h2>

        <h4>Felipe B. Barbosa</h4>

        <p>
          Desenvolvedor de software metido a colecionador, historiador e arquivista de jogos eletrônicos. 
          Além de ter criado este site, também escreve para o <a href="https://www.vgscomcerveja.com.br" target="_blank" rel="noopener noreferrer">Videogames com Cerveja</a>.
        </p>
        
      </S.MainContent>    

      <Comments url="/sobre" title="Sobre" />

    </S.PostWrapper>
  </Layout>
)

export const Head = () => (
  <Seo 
    title="Sobre"
    description="Sobre o colecionando.games! Projeto independente focado no colecionismo e na preservação de jogos eletrônicos." />
)

export default AboutPage
