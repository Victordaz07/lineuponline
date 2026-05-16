"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tts = void 0;
const https_1 = require("firebase-functions/v2/https");
const params_1 = require("firebase-functions/params");
const openai_1 = __importDefault(require("openai"));
const openaiKey = (0, params_1.defineSecret)('OPENAI_API_KEY');
/** Orígenes del front SPA (Hosting + desarrollo local). */
const ALLOWED_ORIGINS = [
    'https://lineuponline-a7eda.web.app',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];
exports.tts = (0, https_1.onRequest)({
    secrets: [openaiKey],
    cors: ALLOWED_ORIGINS,
    // Importante: sin invoker público, Cloud Run/dev puede responder 403 al OPTIONS antes del handler → error CORS en el navegador.
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
}, async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.status(204).send('');
        return;
    }
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    const { text, voice = 'nova' } = req.body;
    if (!text?.trim()) {
        res.status(400).json({ error: 'text is required' });
        return;
    }
    const validVoices = ['alloy', 'echo', 'fable', 'nova', 'onyx', 'shimmer'];
    const safeVoice = validVoices.includes(voice) ? voice : 'nova';
    try {
        const openai = new openai_1.default({ apiKey: openaiKey.value() });
        const mp3 = await openai.audio.speech.create({
            model: 'tts-1-hd',
            voice: safeVoice,
            input: text.slice(0, 4096),
            speed: 0.95,
        });
        const buffer = Buffer.from(await mp3.arrayBuffer());
        res.set('Content-Type', 'audio/mpeg');
        res.set('Cache-Control', 'public, max-age=86400');
        res.send(buffer);
    }
    catch (err) {
        console.error('TTS error:', err);
        res.status(500).json({ error: 'TTS generation failed' });
    }
});
//# sourceMappingURL=index.js.map