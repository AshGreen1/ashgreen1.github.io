import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://ashgreen1.dev',
    vite: {
        resolve: {
            alias: {
                '@components': '/src/components',
                '@styles': '/src/styles',
                '@assets': '/src/assets'
            }
        }
    }
});
