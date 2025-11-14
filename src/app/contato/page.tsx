"use client";

import { Text, Column, Row, Card, Input, Textarea } from "@once-ui-system/core";
import { useState } from "react";

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! 🚀 (a integração vem depois)");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <Column
        style={{
          width: "100%",
          maxWidth: 1000,
        }}
        gap="48"
      >
        {/* Cabeçalho */}
          <Text
            variant="display-default-l"
            onBackground="neutral-strong"
            style={{ textAlign: "center", width: "100%" }}
          >
            Fale Conosco
          </Text>

        <Text
          variant="body-default-l"
          onBackground="neutral-medium"
          style={{
            textAlign: "center",
            marginBottom: 20,
            lineHeight: 1.6,
          }}
        >
          Entre em contato com a equipe <strong>NetFlow</strong>. Estamos prontos para discutir seu
          projeto, tirar dúvidas e construir algo incrível juntos.
        </Text>

        {/* Contato rápido */}
        <Row
          gap="20"
          style={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {[
            { icon: "📧", label: "E-mail", value: "contato@netflow.dev" },
            { icon: "💬", label: "WhatsApp", value: "+55 (71) 99999-9999" },
            { icon: "📍", label: "Localização", value: "Salvador — Bahia, Brasil" },
          ].map((item, i) => (
            <Card
              key={i}
              padding="12"
              radius="l"
              shadow="s"
              background="page"
              style={{
                flex: "1 1 300px",
                minWidth: 280,
                textAlign: "center",
              }}
            >
              <Column align="center" gap="8">
                <Text variant="body-default-l" onBackground="neutral-strong">
                  {item.icon} {item.label}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {item.value}
                </Text>
              </Column>
            </Card>
          ))}
        </Row>

        {/* Formulário */}
        <Card
          padding="16"
          radius="l"
          shadow="m"
          background="page"
          style={{
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Column gap="16" style={{ width: "100%" }}>
              <Input
                name="nome"
                label="Seu nome"
                placeholder="Digite seu nome completo"
                value={form.nome}
                onChange={handleChange}
                required
                id="nome"
              />
              <Input
                name="email"
                label="Seu e-mail"
                placeholder="seuemail@exemplo.com"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                id="email"
              />
              <Textarea
                name="mensagem"
                label="Mensagem"
                placeholder="Descreva seu projeto ou dúvida..."
                value={form.mensagem}
                onChange={handleChange}
                required
                rows={5}
                id="mensagem"
              />

              <button
                type="submit"
                style={{
                  padding: "12px 28px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  background: "var(--brand-strong)",
                  color: "#fff",
                  alignSelf: "center",
                  marginTop: 8,
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--brand-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--brand-strong)")
                }
              >
                Enviar Mensagem
              </button>
            </Column>
          </form>
        </Card>
      </Column>
    </main>
  );
}
