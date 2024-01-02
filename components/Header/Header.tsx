'use client';

import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Image,
  Text,
  Anchor,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { logo } from '@/constant/image/logo';
import Link from 'next/link';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <Text>Kerala Devs</Text>
            <Image src={logo.defaultLogo} h="100%" w={40} fit="contain" />
          </Group>
          <Group visibleFrom="sm">
            <Anchor component={Link} href={'/'}>
              Home
            </Anchor>
            <Anchor component={Link} href={'/about'}>
              About
            </Anchor>
            <Anchor component={Link} href={'/contact'}>
              Contact
            </Anchor>
          </Group>
          <Group>
            <Group visibleFrom="sm">
              <Button variant="default" component={Link} href={'/login'}>
                Log in
              </Button>
              <Button component={Link} href={'/signup'}>
                Sign up
              </Button>
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
            <ColorSchemeToggle />
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Stack p={'sm'}>
            <Anchor component={Link} href={'/'}>
              Home
            </Anchor>
            <Anchor component={Link} href={'/about'}>
              About
            </Anchor>
            <Anchor component={Link} href={'/contact'}>
              Contact
            </Anchor>
          </Stack>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" component={Link} href={'/login'}>
              Log in
            </Button>
            <Button component={Link} href={'/signup'}>
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
