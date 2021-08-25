import { create } from '@storybook/theming/create';
import * as elements from '@compassion-gds/elements';

export default create({
  base: 'light',

  colorPrimary: elements.color.primary.base,
  colorSecondary: '#e7eeee',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: elements.color.gray.plus2,
  appBorderRadius: 3,

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode: '"IBM Plex Mono", monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#585a51',
  barSelectedColor: '#3b3c36',
  barBg: '#e7eeee',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 0,

  brandTitle: 'Compassion International’s Global Design System',
  brandUrl: '/',
  brandImage: `data:image/svg+xml,%3Csvg viewBox='0 0 512 184' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M511.72 106.58a6.4 6.4 0 10-12.82 0 6.4 6.4 0 0012.82 0zm-1.79 0v.02a4.63 4.63 0 110-.02' fill='%230948AA'/%3E%3Cpath d='M504.22 104.31v1.73h.48c1.03 0 1.55-.3 1.55-.9 0-.33-.17-.57-.5-.7a3.01 3.01 0 00-1.05-.13h-.48zm-1.47 5.41v-6.42h1.59c1.12 0 1.89.07 2.3.2.76.24 1.14.75 1.14 1.53 0 .4-.14.72-.41 1-.27.28-.64.44-1.1.5v.02c.32.02.58.24.78.66l1.17 2.52h-1.63l-.88-2.01a1.22 1.22 0 00-.36-.51c-.15-.1-.37-.16-.66-.16h-.47v2.67h-1.47zM19.45 93.07c5.67-6.27 13.32-9.43 22.88-9.43 6.27 0 11.74 1.65 16.42 4.88a26.15 26.15 0 019.96 13.05h2.24L69.9 84.76h-1.72c-.33.46-1.06.66-2.1.73-.34-.07-2.98-.8-8.12-2.31a54.35 54.35 0 00-16.29-2.38c-12.13 0-22.09 3.63-29.87 10.95C3.96 98.93 0 108.17 0 119.44c0 10.8 3.82 19.64 11.47 26.63C19.06 153 28.68 156.5 40.5 156.5c4.55 0 9.23-.6 14.1-1.65 4.88-1.12 8.05-1.65 9.63-1.58.8 0 1.65 0 2.44.06a57.89 57.89 0 003.76-6.91 74.09 74.09 0 003.63-9.96h-2.18c-.46.85-.92 1.64-1.45 2.5-6.4 9.76-15.3 14.64-26.83 14.64-8.9 0-16.62-3.43-23.02-10.42-6.4-6.92-9.63-15.62-9.63-25.97 0-9.9 2.84-17.94 8.51-24.13M217.13 115.88c2.1.6 3.1 1.84 3.1 3.82v51.1c0 .85 0 1.64-.07 2.3h.07v2.3h-.07c-.26 2.12-.79 3.64-1.65 4.5-1.05 1.18-3.03 1.7-6 1.7h-1.18V184h27.3v-2.38h-2.84c-2.44 0-4.29-.46-5.6-1.52-1.26-1.12-1.92-2.7-2.12-4.68v-4.61h-.06v-17.74l2.17.8a30.26 30.26 0 008.38 1.57c3.16-.06 6.06-.6 8.83-1.7 3.04-1.33 5.8-3.3 8.38-6 4.88-5.28 7.31-11.35 7.31-18.34 0-5.73-1.7-10.74-5.14-15.03-3.49-4.42-7.51-6.53-12-6.53-4.61 0-10.62 2.84-17.93 8.44V105.4h-2.64l-12.06 7.38v2.17l3.82.93zm23.14-2.38c3.63 0 6.93 1.59 9.76 4.75 3.5 3.9 5.28 9.36 5.28 16.35 0 4.75-1.25 8.84-3.9 12.13-2.63 3.36-5.86 5.01-9.69 5.01-4.48 0-9.03-2.04-13.7-6.13v-26.5c4.4-3.76 8.5-5.6 12.25-5.6' fill='%230948AA'/%3E%3Cpath d='M207.63 124.91c0-11.6-3.82-17.47-11.6-17.4-3.76 0-10.62 3.1-20.44 9.29-1.25-6.2-4.94-9.3-11.01-9.3a13.8 13.8 0 00-4.49.6c-4.41 1.18-9.82 4.08-16.15 8.7v-9.3h-1.71l-13.98 4.82v1.97l4.55.54c1.51.25 2.57.91 3.03 1.97.26.73.4 1.98.4 4.02v22.68c0 3.1-.6 5.47-1.72 6.86-1.19 1.38-3.43 2.04-6.6 2.04v2.24h24.14v-2.24c-3.17 0-5.2-.33-6.2-1.05-1.32-.99-1.9-2.97-1.9-6.13v-26.44c6.78-4.49 11.92-6.66 15.48-6.66h.66c2.05.13 3.83.86 5.21 2.17 1.85 1.85 2.77 4.42 2.77 7.72v21.5c-.06 3.29-.72 5.6-2.04 6.91-1.19 1.19-3.16 1.85-5.94 1.98h-.92v2.24h23.87v-2.24c-2.84 0-4.75-.46-5.74-1.45-.99-.92-1.51-2.9-1.51-5.73v-26.64c6.6-4.35 11.73-6.46 15.43-6.46 5.8-.07 8.63 4.35 8.63 13.19v9.03c0 9.75-.52 15.16-1.65 16.35-1.18 1.12-3.22 1.71-6.06 1.71h-1.06v2.24h26.05v-2.24h-3.76c-4.22 0-6.2-1.78-6.07-5.2.27-6.33.33-13.79.33-22.29zM120.2 114.5c-4.81-4.76-10.68-7.06-17.67-7a24.81 24.81 0 00-17.14 6.27c-5.28 4.6-7.91 10.68-7.91 18.26a22.49 22.49 0 007.25 17.14c4.81 4.55 10.88 6.86 18.13 6.86 6.86 0 12.6-2.3 17.41-7a23.63 23.63 0 007.19-17.2c-.07-6.98-2.44-12.72-7.26-17.34zm-6.8 2.96c3.5 4.81 5.28 10.55 5.35 17.28 0 5.46-1.65 10.01-4.75 13.64-2.83 3.23-6.13 4.88-9.88 4.88-5.01 0-9.3-2.37-12.73-7.19-3.5-4.94-5.28-10.94-5.21-18-.07-4.88 1.39-9.1 4.42-12.59 2.9-3.56 6.4-5.27 10.28-5.27 4.82 0 9.04 2.44 12.53 7.25M507.12 154.65v-2.25h-2.51c-4.42 0-6.6-1.52-6.46-4.61.13-2.44.33-4.94.46-7.32.33-4.22.46-9.36.46-15.56 0-11.54-4.09-17.28-12.4-17.28-2.57 0-5.6.93-9.1 2.71-2.04.92-5.66 2.96-10.87 6.26v-8.97h-1.78l-13.39 4.82v1.91l4.02.8c1.65.25 2.64.92 3.1 1.97.2.46.33 1.71.33 3.7v24.32c0 4.88-2.57 7.25-7.71 7.25v2.25h23.2v-2.25c-3.16 0-5.2-.52-6.2-1.58-1.04-.99-1.57-3.1-1.57-6.33V119.5c7.18-4.94 12.33-7.38 15.5-7.38 6.06 0 9.1 4.02 9.1 12.13 0 15.7-.74 24.27-2.25 25.84-1.52 1.52-3.76 2.25-6.8 2.31v2.25h24.87zM444.35 115.09l-.6-.6c-4.81-4.75-10.75-7.05-17.73-6.99-6.66-.06-12.33 2.05-17.08 6.27-5.34 4.61-8.05 10.68-8.05 18.26 0 6.8 2.44 12.46 7.39 17.14a25.37 25.37 0 006.66 4.55 28.04 28.04 0 0011.4 2.31c1.32 0 2.5-.07 3.7-.2a24.07 24.07 0 0013.71-6.79c.2-.27.4-.46.6-.66 4.35-4.61 6.46-10.09 6.46-16.55.06-6.66-2.11-12.2-6.46-16.74zm-19.98-4.88c4.81 0 8.96 2.44 12.53 7.25 3.49 4.82 5.2 10.55 5.27 17.27-.07 5.48-1.59 10.02-4.75 13.65-2.9 3.23-6.2 4.88-9.82 4.88-5.01 0-9.3-2.38-12.73-7.19-3.5-4.94-5.21-10.94-5.21-18 0-4.88 1.45-9.1 4.48-12.59 2.9-3.56 6.4-5.27 10.23-5.27M392.85 106.91h-1.78l-14.97 5.2v1.79l5.4 1.05c1.72.33 2.84.93 3.3 1.85.2.6.27 1.91.27 3.89v23.28c0 3.09-.73 5.27-2.11 6.52-1.45 1.32-3.9 1.91-7.38 1.91v2.25h25.65v-2.25c-5.61 0-8.38-2.24-8.38-6.59v-38.9zM368.58 119.9l-.26-10.62a24.58 24.58 0 00-9.3-1.78c-4.41-.06-7.97 1.13-10.61 3.56-2.84 2.31-4.22 5.48-4.22 9.37.06 2.83.92 5.27 2.7 7.25 1.12 1.19 3.3 2.9 6.73 5.14a49.42 49.42 0 017.98 6.33c2.43 2.44 3.69 4.81 3.69 6.99 0 2.17-.8 3.96-2.38 5.47a8.3 8.3 0 01-3.95 2.1c-.6.08-1.19.15-1.85.15-.66 0-1.32-.07-1.85-.14a10.16 10.16 0 01-5.07-2.77c-2.05-1.91-3.43-4.61-4.09-8.04h-1.91l1.38 13.12h1.65c.66-1.06 1.25-1.58 1.91-1.52.8 0 2.05.26 3.83.73 1.78.52 3.23.79 4.48.79 3.23 0 5.93-.8 8.44-2.31.6-.46 1.19-.92 1.78-1.45a12.44 12.44 0 004.16-9.5c0-3.95-1.85-7.58-5.55-10.74-3.42-2.44-6.98-4.81-10.48-7.25-3.62-2.5-5.47-5.2-5.47-7.98 0-1.91.66-3.5 2.11-4.68a6.87 6.87 0 014.95-1.92c2.3 0 4.28.86 6 2.58a13.23 13.23 0 013.23 7.12h1.97zM335.81 119.9l-.33-10.62a24 24 0 00-9.23-1.78c-4.35-.06-7.9 1.13-10.68 3.56-2.7 2.31-4.09 5.48-4.09 9.37 0 2.83.86 5.27 2.64 7.25 1.06 1.19 3.3 2.9 6.8 5.14 3.35 2.24 6 4.35 7.9 6.33 2.51 2.44 3.76 4.81 3.76 6.99 0 2.17-.8 3.96-2.37 5.47a8.2 8.2 0 01-4.02 2.1c-.6.08-1.19.15-1.92.15-.59 0-1.18-.07-1.78-.14a9.9 9.9 0 01-5.07-2.77c-2.05-1.91-3.37-4.61-4.02-8.04h-1.92l1.25 13.12h1.65c.66-1.06 1.39-1.58 2.05-1.52.72 0 1.97.26 3.82.73 1.72.52 3.23.79 4.49.79 3.16 0 5.93-.8 8.37-2.31.66-.46 1.32-.92 1.85-1.45a12.61 12.61 0 004.09-9.5c0-3.95-1.85-7.58-5.55-10.74-3.49-2.44-6.98-4.81-10.48-7.25-3.7-2.5-5.47-5.2-5.47-7.98 0-1.91.66-3.5 2.05-4.68a6.91 6.91 0 015-1.92c2.31 0 4.29.86 6 2.58 1.72 1.78 2.77 4.16 3.17 7.12h2.05zM301.92 150.49c-1.38 0-2.24-.72-2.57-2.11-.27-1.25-.4-4.28-.4-9.23v-15.56c0-5.01-.59-8.38-1.7-10.02a14.07 14.07 0 00-12.2-6.07c-3.57-.06-7.33 1.59-11.28 4.95-3.9 3.36-5.8 6.2-5.8 8.5 0 .4.06.86.32 1.58l7.91-3.82a5.2 5.2 0 01-.65-2.17c0-1.39.72-2.64 2.17-3.96a7.36 7.36 0 015.01-1.78c2.5-.06 4.62 1.06 6.46 3.3 1.26 1.58 1.98 4.08 1.98 7.45v9.23a39 39 0 01-10.21 4.41c-4.49 1.06-7.65 2.31-9.7 3.7a8.73 8.73 0 00-4.02 7.58c0 2.9.99 5.2 2.83 6.99.14.06.27.13.33.26 1.92 1.52 4.42 2.3 7.52 2.3 1.84 0 3.5-.39 4.94-1.05.73-.32 1.46-.79 2.31-1.25a107.1 107.1 0 006.2-4.75c.2 1.98.53 3.57 1.19 4.75a4.57 4.57 0 004.16 2.3c1.5 0 3.56-.78 6.06-2.3a63.14 63.14 0 005.47-4.02l-.59-1.78c-2.05 1.72-3.96 2.5-5.74 2.57zm-17.47-14.24a46.38 46.38 0 006.72-3.17v13.78c-4.88 3.43-8.04 5.15-9.69 5.15a6.7 6.7 0 01-4.75-1.92 6.34 6.34 0 01-2.1-4.94c0-2.24.72-3.96 2.24-5.14 1.05-.86 3.62-2.11 7.58-3.76M105.62 43.48a44.72 44.72 0 00-7.22 5.08 41.29 41.29 0 00-9.82 12.96c-2.6 4.74-4.6 10.69-6.21 17.84a57.9 57.9 0 00-1.34 9.68l1.74-2.4c-.54 3.2-.87 6.74-.94 10.55.8-1.4 1.34-2.34 1.74-2.87l-.2 9.21 3.8-9.21c.27.8.47 1.67.74 2.67a244.7 244.7 0 016.15-13.43A96.86 96.86 0 01105.4 65.2c1.94-2.4 4.41-5.27 7.41-8.41.54-.74 3.68-2.14 3.88-2.21 1.33-.46 3-1 5.14-1.53 1-.27 3.4-.8 7.09-1.74 3.2-.73 5.8-1.47 7.81-1.94 6.21-1.73 10.95-3.6 14.36-5.6 4.34-2.68 6.88-5.76 7.49-9.36a82.06 82.06 0 01-12.77 1.8c-2.33.14-5.8.2-10.55.2-4.14 0-7.35.07-9.62.34-3.47.4-6.88 1.06-10.15 2.27a53.7 53.7 0 00-9.88 4.47zM86.9 50.03l-1.94 2.87c1.47-1.26 4.2-2.94 8.09-5 2.6-1.41 8.95-4.75 19.03-9.9 7.61-3.94 13.9-9.81 18.78-17.63a52.2 52.2 0 005.67-12.02c.14-.47.2-1.34.2-2.4.07-1.2 0-2.4-.13-3.35-.14-1.2-.34-2-.67-2.4-.4-.4-.87-.2-1.34.6a78.75 78.75 0 01-12.69 13.7 93.23 93.23 0 01-17.5 11.48c-8.01 3.94-14.56 8.08-19.7 12.36a78.43 78.43 0 00-14.1 15.37c-.54.8-1 1.87-1.4 3.33.66-.46 1.47-.6 2.47-.46l-1.54 3.07 2.47-2a6.32 6.32 0 012.27-1.34l-.6 2.14c1.6-1.6 3.74-3.14 6.21-4.74l-.86 2.13a27.58 27.58 0 013.4-2.94l3.88-2.87zm.73-44.22a10.95 10.95 0 00-1.93 4.21 8.94 8.94 0 00-.07 4.8c.33 1.6 1.07 3.08 2 4.42 1 1.34 2.2 2.34 3.75 3.27 1.46.87 3 1.4 4.74 1.8 1.8.34 3.54.34 5.4.07 1.74-.4 3.41-.93 4.95-1.87 1.4-.87 2.67-1.93 3.67-3.27 1-1.27 1.61-2.74 1.94-4.21.4-1.54.47-3.14.07-4.75a10.9 10.9 0 00-2-4.47 14.74 14.74 0 00-8.49-5.14c-1.8-.34-3.6-.34-5.41 0-1.8.26-3.4.93-4.94 1.8-1.47.87-2.67 2-3.68 3.34' fill='%230948AA'/%3E%3C/svg%3E`,
});
