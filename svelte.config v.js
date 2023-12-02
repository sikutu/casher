svelte.config.js
import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			// 以下の 'デプロイメントの設定' セクションを参照
		})
	}
};