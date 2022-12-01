import { globalCss } from './stitches.config';

export const global = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    outline: 0
  },
  html: {
    fontSize: '1rem'
  },
  'body, html, #root': {
    minHeight: '100vh'
  },
  body: {
    background: '#303134',
    backgroundSize: 'cover',
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'optimizeLegibility',
    fontWeight: 400,
    fontFamily: '$default',
    fontSize: '1rem'
  },
  'body, input, button': {
    fontFamily: '$default',
    fontSize: '1rem'
  },
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  'input[type=number]': {
    '-moz-appearance': 'textfield'
  },
  strong: {
    fontWeight: 'bold'
  },
  p: {
    marginTop: 0
  },
  hr: {
    border: '1px solid #e5e5e5',
    margin: '20px 0'
  },
  img: {
    maxWidth: '100%'
  },
  'h1,h2,h3,h4,h5,h6,strong': {
    fontFamily: '$default',
    fontWeight: '500'
  },
  button: {
    cursor: 'pointer'
  },
  '[type=button], [type=reset], [type=submit], button': {
    '-webkitAppearance': 'button'
  },
  'button, input[type="submit"], input[type="reset"]': {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit'
  },
  'button, select': {
    textTransform: 'none'
  },
  'buton, input': {
    overflow: 'visible'
  },
  a: {
    textDecoration: 'none'
  }
});
