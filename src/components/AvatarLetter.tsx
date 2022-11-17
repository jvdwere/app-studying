import { Box, Text, Image } from '@chakra-ui/react';

const sizes: any = {
  sm: { s: '50px', f: 'xl' },
  md: { s: '70px', f: '3xl' },
  lg: { s: '100px', f: '5xl' },
  xl: { s: '150px', f: '7xl' },
};

type AvatarProps = {
  name?: string;
  size?: string;
  bg?: string;
  imgUrl?: string;
};

function AvatarLetter(props: AvatarProps) {
  const { name = 'J', size = 'sm', bg = '#78ACA5', imgUrl = null } = props;

  return imgUrl ? (
    <Image
      border="1px solid #ddd"
      rounded="md"
      h={sizes[size].s}
      w={sizes[size].s}
      src={imgUrl}
      objectFit="cover"
      alt="Usuário"
    />
  ) : (
    <Box
      justifyContent="center"
      alignItems="center"
      color="#fff"
      w={sizes[size].s}
      h={sizes[size].s}
      rounded="md"
      bg={bg}
      textTransform="uppercase"
    >
      <Text
        lineHeight={sizes[size].s}
        textAlign="center"
        fontSize={sizes[size].f}
      >
        {name.split('')[0]}
      </Text>
    </Box>
  );
}

export default AvatarLetter;