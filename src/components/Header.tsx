"use client";

import { usePathname } from "next/navigation";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import {
  routes,
  display,
} from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade
        s={{ hide: true }}
        fillWidth
        position="fixed"
        height="80"
        zIndex={9}
      />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
          style={{ alignItems: "center" }}
          s={{ hide: true }}
        >
          <img
            src="/logo.png"
            alt="Logo NetFlow"
            width={42}
            height={42}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "12px",
            }}
          />
          <strong
            className="ml-3"
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            NetFlow
          </strong>
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
            >
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/sobre"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={'Sobre'}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/projetos"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/projetos"
                      label={'Projetos'}
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/projetos"
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                </>
              )}
              {routes["/servicos"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/servicos"
                      label={'Serviços'}
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/servicos"
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                </>
              )}              
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}><a href="#projetos">Entre em Contato</a></Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
