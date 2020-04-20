const theme = 'light';
//const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#061a44';
export const color2 = lightTheme ? 'white' : '#010e2c';
export const color3 = lightTheme ? '#1427CB' : '#42ff3a';

if (lightTheme) {
  document.body.style.background = 'white';
  document.body.style.color = '#061a44';
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;
export const blueBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : '#121d5b'}`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px ${lightTheme? '#006600' : '#5fff17'}`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;
export const blueBoxShadow = `box-shadow: 0px 0px 2px 2px #1427CB`;
export const myBoxShadow = `box-shadow: 0 3px 5px 2px #373B44`;

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';
