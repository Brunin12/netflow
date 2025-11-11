import {
  Home,
  Person,
  Social,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  name: `Netflow`,
  role: "Agencia de Software, Marketing e IA",
  avatar: "/logo.png",
  email: "contato@netflowbr.com",
  location: "America/Bahia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Brunin12",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/netflowbr/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@netflowbr",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/logo.png",
  label: "Início",
  title: `${person.name} | Estúdio Digital`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Domine o digital com tecnologia e inovação.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Estúdio Digital</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Quero mais Resultados!
        </Text>
      </Row>
    ),
    href: "/servicos",
  },
  subline: (
    <>
      Na <strong className="ml-4">NetFlow</strong>
      , criamos experiências digitais que conectam tecnologia,
      criatividade e inteligência para impulsionar marcas.
    </>
  ),
};

export { person, social, home};
