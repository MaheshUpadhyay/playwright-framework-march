import {defineConfig} from '@playwright/test';

export default defineConfig({
    testDir: './tests/knowledgeware',
    timeout: 30000,
    retries: 0,
    reporter: 'html',
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        baseURL: 'https://www.knowledgeware.in',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
    projects: [
        {
            name: 'Chromium',
            use: {
                browserName: 'chromium'
            }
        }
    ]
});