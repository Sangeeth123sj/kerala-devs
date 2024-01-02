import { logo } from '@/constant/image/logo';
import { Box, Group, Image, Title } from '@mantine/core';

export default function AuthLayout({ children }: { children: any }) {
  return (
    <Group>
      <Box
        miw={300}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Image src={logo.defaultLogo} w={250} />
        <Title>Kerala Devs</Title>
      </Box>
      <Box style={{ flex: 1 }} miw={300}>{children}</Box>
    </Group>
  );
}
