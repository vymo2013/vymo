/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from 'tailwindcss-motion';

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,tx,tsx}', './public/index.html'],
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        objectivity: ['Objectivity'],
        plex: ['IBMPlexSans'],
      },
      colors: {
        purple: '#505ece',
        black: '#00000A',
        darkPurple: '#1c122e',
        lightPurple: '#2c233d',
        lightWhite: '#fafafa',
        primaryRed: '#ff5a5f',
        fluff: '#EFF4F9',
        borderStroke: '#EDEDED',
        lightGreen: '#42AF8F',
        lightBlue: '#18A0FB',
        lightBg2: '#F7F5F1',
        whale: '#3A405A',
        parry: '#307388',
      },
    },
    spacing: {
      0: '0px',
      0.5: '4px',
      1: '8px',
      1.5: '12px',
      2: '16px',
      2.5: '20px',
      3: '24px',
      4: '32px',
      4.5: '40px',
      5: '48px',
      6: '64px',
      7: '120px',
    },
    fontSize: {
      10: '10px',
      12: '12px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      48: '48px',
      60: '60px',
      64: '64px',
    },
  },
  plugins: [require('tailwindcss-motion')],
};
