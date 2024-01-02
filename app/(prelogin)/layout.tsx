import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Stack } from '@mantine/core';

export default function PreloginLayout({ children }: { children: any }) {
  return (
    <Stack justify="space-between" h={'100%'}>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}
