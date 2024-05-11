import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import DevIcon from "./icons/devicon";
import Link from "next/link";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  padding: 10px;

  &:hover svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <DevIcon />
        <Text fontFamily="'JetBrains Mono'" fontWeight="bold" ml={4}>
          Patrick Serrano
        </Text>
      </LogoBox>
    </Link>
  );
};
export default Logo;
