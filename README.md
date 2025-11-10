# WordPress Project Template

WordPressブロックテーマ開発用のプレーンなテンプレートプロジェクトです。最小限の設定で、すぐに開発を始められるように設計されています。

## 必要な環境

- Node.js 18.x 以上
- PHP 8.0 以上
- Composer
- npm または pnpm

## セットアップ

### 1. リポジトリの作成

GitHubのこのリポジトリページで **Use this template** ボタンをクリックして、 `Create a new repository` をクリックします。

Owner、Repository nameを入力し、Choose visibilityの設定もPublicかPrivateに設定して **Create repository** をクリックします。

リポジトリが作成できたらクローンします。

```bash
git clone <your-repository-url>
cd <your-repository-name>
```

### 2. 依存関係のインストール

```bash
# Node.js の依存関係をインストール
npm install

# PHP の依存関係をインストール
composer install
```

### 3. プロジェクト名の変更

以下のファイルとディレクトリの `project-name` を実際のプロジェクト名に置き換えてください：

- `package.json` の `workspaces`
- `composer.json` の `name`
- `wp-content/themes/project-name/` ディレクトリ名
- テーマディレクトリ内の `style.css` と `readme.txt`

## 開発

### 開発環境の起動

#### wp-now を使用する場合（推奨）

```bash
npm run wp-now
```

ブラウザで http://localhost:8881 にアクセスしてください。

#### wp-env を使用する場合

```bash
npm run wp-env start
```

ブラウザで http://localhost:8888 にアクセスしてください。

### 開発モード

```bash
npm run dev
```

テーマの開発モードを起動します（ファイル監視、自動ビルド）。

### ビルド

```bash
npm run build
```

本番用にテーマをビルドします。

## コマンド一覧

### 開発環境

| コマンド | 説明 |
|---------|------|
| `npm run wp-now` | wp-now で開発環境を起動 |
| `npm run wp-env` | wp-env コマンドを実行 |
| `npm run dev` | 開発モードでテーマをビルド |
| `npm run build` | 本番用にテーマをビルド |

### リント・フォーマット

| コマンド | 説明 |
|---------|------|
| `npm run format` | コードフォーマット（Prettier） |
| `npm run lint-css` | CSS/SCSS のリント |
| `npm run lint-css:fix` | CSS/SCSS のリント（自動修正） |
| `npm run lint-js` | JavaScript のリント |
| `npm run lint-js:fix` | JavaScript のリント（自動修正） |
| `npm run lint-php` | PHP のリント（WPCS） |
| `npm run lint-php:fix` | PHP のフォーマット（PHPCBF） |

## コミット規約

このプロジェクトは [Conventional Commits](https://www.conventionalcommits.org/) に従っています。

### コミットメッセージの形式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type（必須）

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント
- `style`: スタイル変更（コードの動作に影響しない変更）
- `refactor`: リファクタリング
- `perf`: パフォーマンス改善
- `test`: テスト追加・修正
- `chore`: その他の変更（ビルドプロセス、ツール等）
- `ci`: CI設定
- `build`: ビルド関連

### Scope（任意）

- `ui`: UI/UX関連
- `blocks`: ブロックエディター関連
- `functions`: functions.php関連
- `assets`: アセットファイル（CSS/JS/画像）
- `theme`: テーマ設定（theme.json等）
- `deps`: 依存関係
- `config`: 設定ファイル
- `templates`: テンプレートファイル
- `parts`: テーマパーツ
- `styles`: スタイル関連
- `scripts`: JavaScript関連
- `php`: PHP関連

### 例

```bash
git commit -m "feat(blocks): カスタムブロックを追加"
git commit -m "fix(styles): ヘッダーのレイアウト崩れを修正"
git commit -m "docs: READMEにセットアップ手順を追加"
```

## プロジェクト構成

```
.
├── wp-content/
│   ├── mu-plugins/          # Must-Use プラグイン
│   │   ├── autoload.php     # Composer autoloader
│   │   └── vendor/          # Composer 依存関係
│   └── themes/
│       └── project-name/    # ブロックテーマ
│           ├── parts/       # テーマパーツ
│           ├── templates/   # テンプレート
│           ├── theme.json   # テーマ設定
│           └── style.css    # メインスタイルシート
├── package.json             # Node.js 依存関係
├── composer.json            # PHP 依存関係
├── phpcs.xml.dist          # PHP コーディング規約
├── tsconfig.json           # TypeScript 設定
└── commitlint.config.js    # コミット規約
```

## 含まれる依存ライブラリ

### PHP（Composer）

- [hamworks/wp-post-type](https://github.com/HAMWORKS/wp-post-type): カスタム投稿タイプ管理
- [hamworks/wp-taxonomy](https://github.com/HAMWORKS/wp-taxonomy): カスタムタクソノミー管理

### 開発ツール

- WordPress Scripts: 公式の開発ツール
- WPCS: WordPress コーディング規約
- ESLint: JavaScript リント
- Prettier: コードフォーマッター
- Husky: Git Hooks 管理
- lint-staged: ステージングファイルの自動チェック
