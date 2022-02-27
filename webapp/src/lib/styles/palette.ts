const palette = {
  gray0: '#F1F1F1',
  gray1: '#DDDDDD',
  gray2: '#C8C8C8',
  gray3: '#A9ABB1',
  gray4: '#8F919B',
  gray5: '#737481',
  gray6: '#656775',
  gray7: '#454555',
  gray8: '#262837',
  gray9: '#151724',

  green0: '#DCFFF7',
  green1: '#BDFAEC',
  green2: '#96F4DF',
  green3: '#78E4CC',
  green4: '#51CEB2',
  green5: '#21BB99',
  green6: '#0CA784',
  green7: '#009B78',
  green8: '#037E63',
  green9: '#005945',

  red0: '#FFDCDC',
  red1: '#FABDBD',
  red2: '#F49696',
  red3: '#E47878',
  red4: '#CE5151',
  red5: '#BB2121',
  red6: '#A70C0C',
  red7: '#9B0000',
  red8: '#7E0303',
  red9: '#590000',
};

export const buttonPaletteMap: {
  [color: string]: {
    background: string;
    hoverBackground: string;
  };
} = {
  green: {
    background: palette.green6,
    hoverBackground: palette.green7,
  },
  gray: {
    background: palette.gray6,
    hoverBackground: palette.gray5,
  },
  red: {
    background: palette.red4,
    hoverBackground: palette.red5,
  },
};

export default palette;
