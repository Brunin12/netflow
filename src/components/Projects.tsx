"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  Row,
  Column,
  Media,
  Text,
  Line,
  Icon,
  Button,
  Hover,
} from "@once-ui-system/core";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      name: "Portifólio Guilherme Vilela",
      description:
        "Portfólio criado para Guilherme Vilela, gestor de tráfego digital. Desenvolvido em Next.js com Once UI, focando em performance e estética clean.",
      language: ["Next.js", "Typescript", "Git", "Node", "Shadcn"],
      html_url: "https://github.com/Brunin12/portifolio_guilherme",
      homepage: "https://guilhermevilela.netlify.app/",
      image: "/projetos/guilherme.png",
    },
    {
      name: "Portifólio Vítor Miranda",
      description:
        "Sistema e landing page desenvolvidos em CodeIgniter 4 para Vitor Miranda, especialista em otimização de restaurantes. Inclui painel de gerenciamento e design responsivo.",
      language: ["Codeigniter 4", "PHP", "MySQL", "Git"],
      html_url: "https://github.com/Brunin12/vitormiranda",
      homepage: "https://github.com/Brunin12/vitormiranda",
      image: "/projetos/vitormiranda.jpg",
    },
    {
      name: "Power Fuel",
      description:
        "Landing page moderna desenvolvida em Next.js para a Power Fuel, marca de suplementos e nutrição esportiva. Layout responsivo e animações suaves.",
      language: ["Three.js", "Javascript", "Git", "Node", "Server Deploy"],
      html_url: "https://github.com/Brunin12/powerfuell",
      homepage: "https://brunin12.github.io/powerfuell/",
      image: "/projetos/powerfuel.png",
    },
    {
      name: "Easy DRE",
      description:
        "Modelo administrativo para geração e visualização de DRE com CodeIgniter. Interface limpa e exportação automatizada.",
      language: ["PHP", "JavaScript", "Git", "Codeigniter"],
      html_url: "https://github.com/Brunin12/ProjetoEasyDRE",
      homepage: "https://github.com/Brunin12/ProjetoEasyDRE",
      image: "/projetos/easydre.png",
    },
    {
      name: "Sesc Votes",
      description:
        "Plataforma digital de votação desenvolvida para a comunidade SESC. Criada com React e Material Kit 2, priorizando acessibilidade e experiência do usuário.",
      language: ["Node.js", "React", "Material Kit 2", "Git"],
      html_url: "https://github.com/Brunin12/sesc-votes",
      homepage: "https://sesc.netlify.app",
      image: "/projetos/sescvotes.png",
    },
    {
      name: "CastorFit",
      description:
        "Sistema de gerenciamento de treinos e acompanhamento físico para personal trainers, feito com Next.js e Shadcn. Interface dinâmica e moderna.",
      language: ["Next.js", "Typescript", "Git", "Node", "Shadcn"],
      html_url: "https://github.com/Brunin12/ProjetoPrivado",
      homepage: "https://castorfit.netlify.app/",
      image: "/projetos/castorfit.png",
    },
    {
      name: "Sweet Management",
      description:
        "Sistema de CRM e gerenciamento de pedidos voltado para docerias. Desenvolvido com CodeIgniter 4 e AdminLTE, com painel administrativo e fluxo de pedidos integrado.",
      language: ["Codeigniter 4", "Typescript", "Git", "Node", "AdminLTE"],
      html_url: "https://github.com/Brunin12/ProjetoPrivado",
      homepage: "https://github.com/Brunin12/ProjetoPrivado",
      image: "/projetos/sweetmanagement.png",
    },
    {
      name: "Sistema de CRM e PDV",
      description:
        "Sistema completo de CRM e ponto de venda (PDV) desenvolvido com CodeIgniter 4 e Shield. Inclui controle de estoque, caixa, vendas e relatórios financeiros.",
      language: ["Codeigniter 4", "Shield", "Git", "MySql", "Laragon"],
      html_url: "https://github.com/Brunin12/ProjetoPrivado",
      homepage: "https://github.com/Brunin12/ProjetoPrivado",
      image: "/projetos/caixa.png",
    },
  ];

  return (
    <Column fillWidth padding="40" align="center" gap="32">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          width: "100%",
        }}
      >
        {projects.map((p, i) => (
          <div key={i} style={{ width: "100%" }}>

            <Card
              radius="l-4"
              direction="column"
              border="neutral-alpha-medium"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                width: "100%",
                display: "block",
              }}
            >
              <Media
                border="neutral-alpha-weak"
                fillWidth
                aspectRatio="4 / 3"
                radius="l"
                alt={p.name}
                src={p.image}
                onClick={() => setSelectedImage(p.image)}
                style={{ cursor: "zoom-in" }}
              />

              <Column fillWidth paddingX="20" paddingY="24" gap="12">
                <Text variant="body-default-xl">{p.name}</Text>
                <Text onBackground="neutral-weak" variant="body-default-s">
                  {p.description}
                </Text>

                <Row wrap gap="8" paddingTop="8">
                  {p.language.map((tech, i) => (
                    <Text
                      key={i}
                      variant="label-default-s"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        padding: "4px 10px",
                        borderRadius: "12px",
                      }}
                    >
                      {tech}
                    </Text>
                  ))}
                </Row>
              </Column>

              <Line background="neutral-alpha-medium" />

              <Row
                paddingX="20"
                paddingY="12"
                gap="8"
                vertical="center"
                justify="space-between"
              >
                <Button
                  size="s"
                  variant="tertiary"
                  onClick={() => window.open(p.html_url, "_blank")}
                >
                  <Icon name="github" size="s" />
                  GitHub
                </Button>

                {p.homepage && (
                  <Button
                    size="s"
                    variant="tertiary"
                    onClick={() => window.open(p.homepage, "_blank")}
                  >
                    <Icon name="globe" size="s" />
                    Deploy
                  </Button>
                )}

                <Button
                  size="s"
                  variant="tertiary"
                  onClick={() => setSelectedImage(p.image)}
                >
                  <Icon name="maximize" size="s" />
                  Ver imagem
                </Button>
              </Row>
            </Card>
          </div>
        ))}
      </div>

      {/* MODAL DE IMAGEM */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "90vw",
              height: "80vh",
              maxWidth: "1200px",
            }}
          >
            <Image
              src={selectedImage}
              alt="Preview do projeto"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </Column>
  );
}
