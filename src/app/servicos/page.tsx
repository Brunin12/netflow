"use client";

import { Text, Column, Card, Accordion, Row } from "@once-ui-system/core";

export default function ServicosPage() {
  const services = [
    {
      title: "Desenvolvimento Web & Mobile",
      details: `Projetamos e construímos aplicações escaláveis com foco em performance, usabilidade e segurança.  
      Desde sites institucionais até plataformas móveis complexas, utilizamos arquitetura moderna, integração com APIs, CI/CD e monitoramento contínuo.`,
    },
    {
      title: "Design UX/UI & Branding",
      details: `Nosso time de design entrega identidades visuais fortes e experiências intuitivas.  
      Trabalhamos desde o logotipo até o protótipo navegável, sempre com testes de usabilidade e refinamento iterativo.`,
    },
    {
      title: "Inteligência Artificial & Automação",
      details: `Aplicamos IA para resolver problemas reais: predição de dados, chatbots inteligentes, automação de processos repetitivos.  
      Integramos modelos de machine learning com sistemas existentes e entregamos soluções produtivas e acessíveis.`,
    },
    {
      title: "Consultoria de Performance & Escalabilidade",
      details: `Analisamos infraestrutura, código e arquitetura; otimizamos custos, melhoramos SLAs, implementamos scaling horizontal e práticas de observabilidade.  
      Ideal para empresas que cresceram rápido ou precisam estar prontas para alto tráfego.`,
    },
    {
      title: "Manutenção, Suporte & Evolução Contínua",
      details: `Após o lançamento, permanecemos ao seu lado: corrigimos bugs críticos, adicionamos funcionalidades, evoluímos o produto conforme o mercado muda.  
      Nosso objetivo é que o sistema nunca fique “parado”, mas sempre pronto para o próximo nível.`,
    },
  ];

  return (
    <main
      style={{
        width: "100%",
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <Row center marginBottom="l">
        <Column center>
          <Text
            variant="display-default-l"
            onBackground="neutral-strong"
          >
            Nossos Serviços
          </Text>
        </Column>
      </Row>

      <Card padding="12" radius="l" shadow="m" background="page">
        <Column gap="16">
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ textAlign: "center", lineHeight: 1.7 }}
          >
            O Grupo NetFlow oferece soluções completas e integradas, unindo tecnologia, design e
            inteligência de negócios. Explore abaixo nossos principais serviços e descubra como
            podemos transformar ideias em resultados concretos.
          </Text>

          <Column fillWidth gap="12" style={{ marginTop: 24 }}>
            {services.map((svc, i) => (
              <Accordion key={i} title={svc.title} open={i === 0}>
                <Text
                  onBackground="neutral-weak"
                  variant="body-default-s"
                  style={{
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.6,
                    padding: "4px 2px",
                  }}
                >
                  {svc.details}
                </Text>
              </Accordion>
            ))}
          </Column>
        </Column>
      </Card>
    </main>
  );
}
