'use client';

import { ActionIcon, MantineColorScheme, Menu, useMantineColorScheme } from '@mantine/core';
import { IconFocusAuto, IconMoon, IconSun } from '@tabler/icons-react';
import { useState } from 'react';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [icon, setIcon] = useState(chooseIcon(colorScheme));

  function handleChangeColorScheme(colorScheme: MantineColorScheme) {
    setIcon(chooseIcon(colorScheme));
    setColorScheme(colorScheme);
  }
  function chooseIcon(colorScheme: string) {
    if (colorScheme === 'light') {
      return <IconSun />;
    } else if (colorScheme === 'dark') {
      return <IconMoon />;
    } else {
      return <IconFocusAuto />;
    }
  }
  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <ActionIcon>{icon}</ActionIcon>
      </Menu.Target>
      <Menu.Dropdown p={0}>
        <ActionIcon.Group orientation="horizontal">
          <ActionIcon onClick={() => handleChangeColorScheme('light')}>
            <IconSun />
          </ActionIcon>
          <ActionIcon onClick={() => handleChangeColorScheme('dark')}>
            <IconMoon />
          </ActionIcon>
          <ActionIcon onClick={() => handleChangeColorScheme('auto')}>
            <IconFocusAuto />
          </ActionIcon>
        </ActionIcon.Group>
      </Menu.Dropdown>
    </Menu>
  );
}
