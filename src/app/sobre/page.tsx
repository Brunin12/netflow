"use client";

import { Column, Text, Row, RevealFx, Button } from "@once-ui-system/core";

export default function SobrePage() {
  return (
    <main style={{ width: "100%", maxWidth: 1000, margin: "0 auto", padding: "40px 16px" }}>
      <RevealFx translateY="16" delay={0.3}>
        <Text
          variant="display-default-l"
          onBackground="neutral-strong"
          style={{ textAlign: "center", width: "100%", marginBottom: "30px" }}
        >
          Sobre a NetFlow
        </Text>
      </RevealFx>

      <Column gap="20">
        <Text variant="body-default-l" onBackground="neutral-medium">
          Fundada com o propósito de transformar ideias em soluções digitais que geram impacto, a
          NetFlow atua como um verdadeiro parceiro de inovação para organizações que querem ir além
          do óbvio. Nossa arquitetura interna foi concebida para entregar excelência sem burocracia:
          uma combinação eficiente entre visão estratégica, engenharia sólida e design centrado no
          usuário.
        </Text>

        <Text variant="body-default-l" onBackground="neutral-medium">
          Nosso funcionamento se dá em três eixos principais:
          <br />
          <br />
          <strong>1. Diagnóstico estratégico:</strong> Mapeamos o cenário do cliente, os desafios, o
          mercado e as oportunidades. Esse entendimento embasa todo o projeto desde o começo.
          <br />
          <br />
          <strong>2. Execução ágil e modular:</strong> Utilizamos metodologias modernas (como Scrum
          ou Scrumban), ciclos incrementais e deploys contínuos, garantindo que você veja valor
          entregue de forma rápida e contínua.
          <br />
          <br />
          <strong>3. Otimização e crescimento:</strong> Após o lançamento, continuamos monitorando,
          coletando métricas, refinando UX e performance. Para nós, o projeto não termina com o
          deploy — ele é apenas um marco de mais ciclos de melhoria.
        </Text>

        <Text variant="body-default-l" onBackground="neutral-medium">
          Por trás da NetFlow está uma equipe especializada: desenvolvedores full-stack, engenheiros
          de dados, especialistas em inteligência artificial, designers de interface e estrategistas
          de produto. Cada colaborador traz não apenas competência técnica, mas uma mentalidade de
          solução: somos motivados por impacto, não por horas trabalhadas.
          <br />
          <br />
          Trabalhamos de forma colaborativa, transparente e com forte comunicação — você sabe o que
          vai acontecer, quando vai acontecer e qual será o resultado. Nossa cultura se baseia em
          três valores:
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li>
              <strong>Inovação contínua</strong> — nunca nos acomodamos; cada entrega é oportunidade
              de melhorar.
            </li>
            <li>
              <strong>Transparência radical</strong> — nossos processos, custos e prazos são claros
              desde o início.
            </li>
            <li>
              <strong>Foco em valor real</strong> — medimos sucesso não só com funcionalidades, mas
              com a diferença que geramos para o negócio.
            </li>
          </ul>
        </Text>

        <Text variant="body-default-l" onBackground="neutral-medium">
          Em mais de 5 anos de atuação, já entregamos mais de 50 projetos para clientes que variam
          de startups disruptivas a empresas consolidadas. Nossa trajetória passou por desafios como
          redefinir plataformas legadas, desenvolver arquiteturas cloud-native, integrar modelos de
          IA e conduzir operações globais de devops.
          <br />
          <br />
          Hoje, estamos prontos para assumir projetos de qualquer escala, com a mesma dedicação,
          agilidade e qualidade. Acreditamos que tecnologia de ponta e design humano devem andar
          juntos — e essa é a base de tudo que fazemos.
        </Text>

        <Text variant="body-default-l" onBackground="neutral-medium">
          Se você busca um parceiro que combine visão técnica, estética refinada e processo ágil,
          estamos aqui para transformar seu desafio em realidade. Clique no botão abaixo para nos
          chamar e iniciar a conversa.
        </Text>

        <Row style={{ marginTop: 32 }}>
          <Button variant="primary" size="l" onClick={() => (window.location.href = "/contato")}>
            Vamos conversar
          </Button>
        </Row>
      </Column>
    </main>
  );
}
