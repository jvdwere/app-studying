import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import React from "react";

interface ItemBreadcrumb {
  isCurrentPage?: boolean;
  to?: string;
  title: string;
}

interface ILayout {
  children: React.ReactNode | string | null | undefined;
  breadcrumb?: ItemBreadcrumb[];
  background?: string;
  title?: string;
  description?: string;
  fullWidth?: boolean;
  withMarginTop?: boolean;
}

function Layout({ children }: ILayout) {
  return (
    <>
      
        <Header />
        <Box h='100%' w='100%' mt="100px">
          <Box h='100%' w='100%' mt="100px">{children}</Box>
        </Box>
      
    </>
  );
}

export default Layout;
