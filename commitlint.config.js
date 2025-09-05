module.exports = {
	extends: [ '@commitlint/config-conventional' ],
	rules: {
		// WordPressテーマ開発向けのカスタムルール
		'type-enum': [
			2,
			'always',
			[
				'feat', // 新機能
				'fix', // バグ修正
				'docs', // ドキュメント
				'style', // スタイル変更（コードの動作に影響しない変更）
				'refactor', // リファクタリング
				'perf', // パフォーマンス改善
				'test', // テスト追加・修正
				'chore', // その他の変更（ビルドプロセス、ツール等）
				'ci', // CI設定
				'build', // ビルド関連
			],
		],
		'scope-enum': [
			2,
			'always',
			[
				'ui', // UI/UX関連
				'blocks', // ブロックエディター関連
				'functions', // functions.php関連
				'assets', // アセットファイル（CSS/JS/画像）
				'build', // ビルド設定（Webpack等）
				'theme', // テーマ設定（theme.json等）
				'deps', // 依存関係
				'config', // 設定ファイル
				'templates', // テンプレートファイル
				'parts', // テーマパーツ
				'styles', // スタイル関連
				'scripts', // JavaScript関連
				'php', // PHP関連
				'webpack', // Webpack設定
			],
		],
		'subject-case': [ 0 ], // 大文字小文字を制限しない
		'subject-empty': [ 2, 'never' ],
		'subject-full-stop': [ 2, 'never', '.' ],
		'header-max-length': [ 2, 'always', 72 ],
		'body-leading-blank': [ 2, 'always' ],
		'footer-leading-blank': [ 2, 'always' ],
	},
};
