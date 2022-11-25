import { Box } from '@chakra-ui/react';
import Header from './Header';
import React from 'react';

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

      <Box w={{ base: '100%', sm: '100%', xl: '1280px' }}  margin="auto">
        <Box w="100%" mt="100px">
          {children}
        </Box>
      </Box>
    </>
  );
}

export default Layout;
