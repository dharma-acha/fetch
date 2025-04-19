import { TextEncoder, TextDecoder } from "util";

// Polyfill for TextEncoder and TextDecoder in the testing environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
