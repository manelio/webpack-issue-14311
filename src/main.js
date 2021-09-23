import { x } from './x';
const { y } = require('./y');

const component = () => ({x, y});

define([], component)
