"use client";
import styled from "styled-components";
import Image from "next/image";
import qrCodeImage from "@/images/image-qr-code.png";

export default function () {
  return (
    <Container>
      <Image src={qrCodeImage} alt="Image of QR Code" />
      <Header>Improve your front-end skills by building projects</Header>
      <Text>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 320px;
  height: 497px;
  background-color: var(--color-white);
  border-radius: 16px;
  overflow: hidden;
  padding: 1rem;
  text-align: center;

  & img {
    width: 100%;
    aspect-ratio: 1 / 1;
    height: auto;
    border-radius: 12px;
  }
`;

const Header = styled.h1`
  color: var(--color-dark-blue);
  font-weight: 700;
  font-size: 22px;
  margin: 1.25rem 0;
`;

const Text = styled.p`
  color: var(--color-grayish-blue);
  font-size: 15px;
  margin: 0 1.5rem;
`;
