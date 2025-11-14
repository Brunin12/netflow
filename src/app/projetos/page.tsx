"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, Row, Column, Media, Text, Line, Icon, Button } from "@once-ui-system/core";

import { Projects } from "@/components/Projects";

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Column fillWidth padding="40" align="center" gap="32">
      <Text variant="display-default-l" onBackground="neutral-strong">
        Projetos Recentes
      </Text>

      {/* GRID RESPONSIVO */}
      <Projects />
    </Column>
  );
}
