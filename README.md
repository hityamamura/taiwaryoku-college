# 対話力カレッジ 公式サイト

スマホだけで公開できるように、フォルダを使わない構成にしてあります。
**このZIPを解凍して、中の14ファイルをすべて GitHub にアップロードするだけ**で公開できます。

---

## スマホでの公開手順（iPhone / Android 共通）

> ⚠️ **GitHubの「アプリ」ではアップロードできません。**
> Safari や Chrome などの**ブラウザ**で github.com を開いて操作してください。

### 1. ZIPを解凍する
「ファイル」アプリでこのZIPをタップすると、同じ名前のフォルダができます。

### 2. リポジトリを作る
1. ブラウザで github.com にログイン
2. 右上の「＋」→「New repository」
3. Repository name に **`taiwaryoku-college`** と入力
   （※ この名前でサイト内のURLを設定済みです。別の名前にする場合はご連絡ください）
4. **Public** を選択
5. 「Create repository」

### 3. ファイルをアップロードする
1. 出てきた画面の「**uploading an existing file**」をタップ
2. 「choose your files」→「ファイルを選択」
3. **「写真」ではなく「ファイル」アプリ**から、解凍したフォルダを開く
4. **14個すべて**を選択（長押し→複数選択、または「すべて選択」）
5. 下までスクロールして「**Commit changes**」

### 4. 公開設定
1. リポジトリ上部の「**Settings**」（横スクロールで出てきます）
2. 左メニューの「**Pages**」
3. Source =「Deploy from a branch」
4. Branch = **main**、フォルダ = **/ (root)** →「Save」

### 5. 数分待つ
以下のURLで公開されます。

**https://hityamamura.github.io/taiwaryoku-college/**

---

## ファイル一覧（14個）

| ファイル | 中身 |
| --- | --- |
| `index.html` | ページ本文のすべて |
| `style.css` | 見た目（色・文字・レイアウト） |
| `main.js` | メニュー開閉・LINEリンク |
| `logo.png` / `logo-sm.png` | ロゴ |
| `yamamura.jpg` | 家元 ポートレート |
| `student.jpg` | 受験生イメージ |
| `scenes.jpg` | 活動風景コラージュ |
| `scene-blur.jpg` | トップ背景のテクスチャ |
| `line-qr.png` | 公式LINE QRコード |
| `favicon-32.png` / `icon-180.png` | タブ用アイコン |
| `robots.txt` / `sitemap.xml` | 検索エンジン向け |

---

## あとから直すとき

GitHubでファイル名をタップ →「鉛筆マーク」で編集できます（スマホでも可）。

| 直したいもの | ファイル | 目印 |
| --- | --- | --- |
| 公式LINEのリンク | `main.js` | 先頭の `var LINE_URL =` の行 |
| 支部の情報・支部長名 | `index.html` | `<!-- ============ 支部一覧` |
| 費用・コミュニティ会費 | `index.html` | `<!-- ============ 費用` |
| 受講生の声 | `index.html` | `<!-- ============ 受講生の声` |
| 開学祭の日程・会場 | `index.html` | `<!-- ============ 開学のお知らせ` |
| よくある質問 | `index.html` | `<!-- ============ FAQ` |
| 色（朱・金・生成り） | `style.css` | 冒頭の `:root{ }` の中 |

写真を足すときは、そのファイルをアップロードして `index.html` の中で
`<img src="ファイル名.jpg">` と書けば表示されます。

---

## メモ

- 外部サービスを一切読み込んでいないので表示が速く、cookie同意バナーも不要です。
- 独自ドメインを使う場合は「Settings → Pages → Custom domain」で設定できます。
  その際は `index.html` 内の `hityamamura.github.io/taiwaryoku-college/` を新しいURLに置き換えてください。
