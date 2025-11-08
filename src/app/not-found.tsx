import { Column, Row, Heading, Text, Button } from "@once-ui-system/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Column
      as="section"
      fill
      center
      style={{
        textAlign: "center",
      }}
    >
      <Text
        marginBottom="m"
        style={{
          fontSize: "8rem",
          fontWeight: "800",
          background: "linear-gradient(90deg, #00d4ff, #0070f3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </Text>

      <Heading
        marginBottom="m"
        variant="display-default-m"
        style={{ fontWeight: "700" }}
      >
        Página não encontrada
      </Heading>

      <Text
        marginBottom="xl"
        onBackground="neutral-weak"
        style={{
          fontSize: "1.1rem",
          maxWidth: "480px",
          lineHeight: "1.6",
          margin: "0 auto",
        }}
      >
        Parece que você se perdeu. Mas não se preocupe, a inovação sempre começa fora do caminho comum.
      </Text>
      <br/>

      <Row center>
        <Link href="/">
          <Button
            variant="primary"            
            style={{
              padding: "12px 28px",
              fontSize: "1rem",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #00d4ff, #0070f3)",
              border: "none",
              transition: "0.2s ease-in-out",
            }}
          >
            Voltar ao Início
          </Button>
        </Link>
      </Row>
    </Column>
  );
}
