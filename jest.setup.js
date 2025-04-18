// filepath: e:\TAP\fetch-dogs-app\jest.setup.js
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;