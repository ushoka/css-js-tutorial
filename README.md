# Web フロントエンド開発 実践チュートリアル

## 学習の目標

エンジニアから納品されるコードベースの大まかな構造を理解し、緊急時に自分で小さな実装変更・修正ができるようになること

## 参考ページ

- https://cafe-owners.jp/event/2026/

## リソース

- https://developer.mozilla.org/ja/docs/Web
- https://jquery.com/

## おすすめの学習リソース

- https://developer.mozilla.org/ja/docs/Learn_web_development/Getting_started/Your_first_website

## 実践で使うサンプル

このチュートリアルの実践パートは、`example/` にある
`UCC Smile Festa 2026 開催｜UCCのカフェ開業支援.html` と
`UCC Smile Festa 2026 開催｜UCCのカフェ開業支援_files/` を使って進めます。

---

## 第1章：Webページの基本構造

### 1.1 HTMLの3つの基本要素

納品されたサイトは、必ずこの3つで構成されています：

| 要素           | 役割               | 例                               |
| -------------- | ------------------ | -------------------------------- |
| **HTML**       | ページの構造・内容 | 見出し、段落、画像、リンク       |
| **CSS**        | 見た目・デザイン   | 色、サイズ、配置、アニメーション |
| **JavaScript** | 動的な動き         | クリック、スクロール、計算       |

### 1.2 ファイル構成の例

```
サイトのディレクトリ/
├── index.html              ← ページ本体
├── assets/ または _files/  ← リソース
│   ├── css/
│   │   ├── common.css     ← 共通スタイル
│   │   └── index.css      ← ページ固有スタイル
│   ├── js/
│   │   ├── jquery.min.js  ← jQueryライブラリ
│   │   ├── common.js      ← 共通処理
│   │   └── index.js       ← ページ固有処理
│   └── images/            ← 画像
```

### 1.3 HTMLの基本構造

```html
<!DOCTYPE html>
<html>
  <head>
    <title>ページタイトル</title>
    <!-- CSSを先に読み込む -->
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- ページの内容 -->

    <!-- JavaScriptは最後に読み込む -->
    <script src="js/jquery.min.js"></script>
    <!-- ライブラリが先 -->
    <script src="js/script.js"></script>
    <!-- 自分のコードは後 -->
  </body>
</html>
```

**👉 実践**: `example/UCC Smile Festa 2026 開催｜UCCのカフェ開業支援.html` を開いて、この構造を確認してみましょう

---

## 第2章：開発者ツールの使い方

### 2.1 なぜ開発者ツールが重要なのか

**緊急時の修正で一番使うツールです！** これができれば、どこを修正すればいいか自分で特定できます。

### 2.2 開発者ツールの開き方

- **Windows**: `F12` または `Ctrl + Shift + I`
- **Mac**: `Cmd + Option + I`

### 2.3 Elements（要素）タブ - 修正箇所を特定する

#### 手順：

1. 開発者ツールを開く
2. 左上の「要素を選択」アイコン（矢印）をクリック
3. ページ上で変更したい箇所をクリック
4. 右側にHTML構造とCSSが表示される

#### 確認すべき情報：

- **クラス名**: `class="button primary"` → `.button`, `.primary`
- **ID名**: `id="header"` → `#header`
- **適用されているCSS**: 右側のStylesパネル

**👉 実践**: `example/UCC Smile Festa 2026 開催｜UCCのカフェ開業支援.html` をブラウザで開いて、ヘッダーのロゴのクラス名を調べてみましょう

### 2.4 Console（コンソール）タブ - エラー確認とテスト

```javascript
// Consoleで試してみよう
console.log('Hello World');
$('.element').hide(); // 要素を隠す（jQueryが読み込まれている場合）
```

**👉 実践**: Consoleタブでエラーが出ていないか確認してみましょう

### 2.5 デバイスエミュレーション - スマホ表示を確認

1. ツールバーの「デバイスエミュレーション」ボタン（📱アイコン）
2. 画面サイズを選択（例：iPhone 12、iPad）

---

## 第3章：CSSで見た目を変更する

### 3.1 CSSの基本構造

```css
セレクタ {
  プロパティ: 値;
}
```

### 3.2 セレクタの種類（修正時に必須）

```css
/* クラスセレクタ（ドットで始まる） - 最もよく使う */
.button {
  background-color: #00a35e;
}

/* IDセレクタ（#で始まる） */
#header {
  height: 80px;
}

/* 要素セレクタ */
h1 {
  font-size: 32px;
}

/* 子孫セレクタ（特定の中にある要素） */
#header .logo {
  width: 200px;
}
```

### 3.3 よく修正するCSSプロパティ

#### 色の変更

```css
.button {
  background-color: #00a35e; /* 背景色 */
  color: #ffffff; /* 文字色 */
}
```

#### サイズの変更

```css
.header {
  width: 100%; /* 幅 */
  height: 80px; /* 高さ */
  padding: 20px; /* 内側の余白 */
  margin: 10px 0; /* 外側の余白 */
}
```

#### 表示/非表示

```css
.element {
  display: none; /* 非表示 */
  display: block; /* 表示 */
  opacity: 0; /* 透明（場所は確保） */
  opacity: 1; /* 不透明 */
}
```

#### フォント

```css
.text {
  font-size: 16px; /* サイズ */
  font-weight: bold; /* 太さ */
  text-align: center; /* 配置 */
}
```

### 3.4 レスポンシブデザイン（PC/スマホ切り替え）

```css
/* PC表示（デフォルト） */
.element {
  font-size: 20px;
}

/* スマホ表示（768px以下） */
@media screen and (max-width: 768px) {
  .element {
    font-size: 14px;
  }
}
```

**👉 実践演習**:

1. `example/UCC Smile Festa 2026 開催｜UCCのカフェ開業支援_files/app.css` を開く
2. `#00A35E` を検索して、該当する要素を見つける
3. 別の色に変更（例：`#FF6B6B`）
4. ブラウザで確認（`Ctrl + F5` で強制リロード）

---

## 第4章：JavaScript の基本

### 4.1 JavaScript とは

JavaScript は Web ページに動きやインタラクションを追加するためのプログラミング言語です。ボタンのクリック処理、アニメーション、フォームの検証など、ユーザーの操作に応じた動作を実現します。

### 4.2 JavaScript の基本的な書き方

```javascript
// 変数の宣言
const message = 'こんにちは';
let count = 0;

// 関数の定義
function sayHello() {
  alert('Hello!');
}

// コンソールに出力（デバッグ用）
console.log('デバッグメッセージ');
```

### 4.3 素の JavaScript による DOM 操作（参考）

JavaScript で HTML 要素を操作することを「DOM 操作」と呼びます。素の JavaScript（Vanilla JavaScript）でも DOM 操作は可能ですが、コードが長くなりがちです。

```javascript
// 素のJavaScript - コードが長い
const button = document.querySelector('.button');
button.addEventListener('click', function () {
  alert('クリックされました');
});
```

次章で紹介する jQuery を使うと、同じ処理がより簡潔に書けます。

**👉 実践**:

1. `example/UCC Smile Festa 2026 開催｜UCCのカフェ開業支援.html` をブラウザで開く
2. 開発者ツールのConsoleで試してみる：

```javascript
alert('JavaScriptが動いています！');
```

---

## 第5章：jQuery の基本

### 5.1 なぜ jQuery が生まれたのか

#### 昔の JavaScript の問題点

2000年代、Web 開発には大きな問題がありました：

1. **ブラウザ間の互換性問題**
   - Internet Explorer、Firefox、Safari など、各ブラウザで JavaScript の動作が異なっていた
   - 同じ処理を実現するために、ブラウザごとに違うコードを書く必要があった

2. **冗長なコード**
   - 単純な操作でも長いコードが必要だった
   - 例：要素を取得してクリックイベントを設定するだけでも複数行必要

#### jQuery が解決したこと

```javascript
// Vanilla JavaScript（冗長）
const buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    this.classList.add('active');
  });
});

// jQuery（シンプル）
$('.button').on('click', function () {
  $(this).addClass('active');
});
```

jQuery は「Write Less, Do More（より少ないコードで、より多くのことを）」をスローガンに、これらの問題を解決しました。

#### 現在の状況

- 現代のブラウザは標準化が進み、互換性問題は大幅に減少
- 新規プロジェクトでは Vanilla JavaScript や React/Vue などのフレームワークが主流
- **しかし、既存サイトの多くは今でも jQuery を使用している**
- 納品されるサイトでは jQuery がまだよく使われているため、理解しておくことが重要

### 5.2 jQuery とは

jQuery は JavaScript ライブラリで、以下の特徴があります：

- **簡潔な記法**: 少ないコードで多くのことができる
- **クロスブラウザ対応**: ブラウザの違いを気にせず書ける
- **豊富なプラグイン**: アニメーションやUIコンポーネントが簡単に追加できる

### 5.3 jQuery の基本パターン

```javascript
// 要素の選択（CSSセレクタと同じ）
$('.button'); // クラスで選択
$('#header'); // IDで選択
$('h1'); // タグで選択
```

### 5.4 よく使う操作

#### テキストの変更

```javascript
$('.title').text('新しいタイトル');
$('.content').html('<p>新しい内容</p>');
```

#### クラスの追加・削除

```javascript
$('.menu').addClass('active'); // activeクラスを追加
$('.menu').removeClass('active'); // activeクラスを削除
$('.menu').toggleClass('active'); // activeクラスを切り替え
```

#### 表示・非表示

```javascript
$('.element').show(); // 表示
$('.element').hide(); // 非表示
$('.element').fadeIn(); // フェードイン
$('.element').fadeOut(); // フェードアウト
```

#### クリックイベント

```javascript
$('.button').on('click', function () {
  alert('ボタンがクリックされました！');
});
```

### 5.5 example の実例

```javascript
// exampleの例 - ポップアップを閉じる
$('#pop-up .close').on('click', function () {
  $('#pop-up').fadeOut();
});
```

**👉 実践**:

1. `example/UCC Smile Festa 2026 開催｜UCCのカフェ開業支援.html` をブラウザで開く
2. 開発者ツールのConsoleで試してみる：

```javascript
$('.loading').hide();
alert('jQueryが動いています！');
```

---

## 第6章：よくある修正パターン

### 6.1 修正作業の基本フロー

```
1. 該当箇所を特定（開発者ツール）
   ↓
2. ファイルをバックアップ
   ↓
3. 修正を実施
   ↓
4. ローカルで確認
   ↓
5. 問題なければ本番反映
```

### 6.2 パターン1：テキストの修正【簡単 ★☆☆】

#### 手順：

1. 開発者ツールで該当箇所を探す
2. HTMLファイルを開く
3. テキストを検索（`Ctrl + F`）
4. 変更して保存
5. ブラウザで確認

#### 例：

```html
<!-- 変更前 -->
<h1 class="title">古いタイトル</h1>

<!-- 変更後 -->
<h1 class="title">新しいタイトル</h1>
```

### 6.3 パターン2：色の変更【簡単 ★☆☆】

#### 手順：

1. 開発者ツールで要素のクラス名を確認
2. CSSファイルを開く
3. クラス名で検索
4. 色コードを変更
5. ブラウザで確認

#### 例：

```css
/* 変更前 */
.button {
  background-color: #00a35e;
}

/* 変更後 */
.button {
  background-color: #ff6b6b;
}
```

#### よく使う色コード：

```css
#FF0000  赤
#00FF00  緑
#0000FF  青
#000000  黒
#FFFFFF  白
#FFA500  オレンジ
```

### 6.4 パターン3：画像の差し替え【簡単 ★☆☆】

#### 手順：

1. 新しい画像を `images/` フォルダにアップロード
2. HTMLファイルで画像のパスを検索
3. ファイル名を変更
4. ブラウザで確認

#### 例：

```html
<!-- 変更前 -->
<img src="images/old-photo.jpg" alt="写真" />

<!-- 変更後 -->
<img src="images/new-photo.jpg" alt="写真" />
```

**注意**: 画像サイズが違うとレイアウトが崩れる可能性があります

### 6.5 パターン4：リンク先の変更【簡単 ★☆☆】

```html
<!-- 変更前 -->
<a href="https://old-site.com">リンク</a>

<!-- 変更後 -->
<a href="https://new-site.com">リンク</a>
```

### 6.6 パターン5：要素の非表示【中級 ★★☆】

#### 方法1: CSSで非表示（推奨）

```css
.unwanted-element {
  display: none !important;
}
```

#### 方法2: HTMLで削除（注意が必要）

```html
<!-- タグの前後を確認して、慎重に削除 -->
<!-- <div class="unwanted-element">削除したい内容</div> -->
```

### 6.7 実践演習

#### 演習1: テキスト修正

- `example/UCC Smile Festa 2026 開催｜UCCのカフェ開業支援.html` のページタイトルを変更してみる

#### 演習2: 色の変更

- ボタンやリンクの色を変更してみる

#### 演習3: 要素の非表示

- 開発者ツールで要素を特定
- CSSで非表示にしてみる

---

## 第7章：トラブルシューティング

### 7.1 問題：修正したのに反映されない

#### 原因と解決策：

1. **ブラウザのキャッシュ**
   - 解決：`Ctrl + F5`（強制リロード）

2. **ファイルの保存忘れ**
   - 解決：保存してから再読み込み

3. **別のCSSで上書きされている**
   - 解決：`!important` を追加
   ```css
   .element {
     color: red !important;
   }
   ```

### 7.2 問題：レイアウトが崩れた

#### 原因と解決策：

1. **タグの閉じ忘れ**

   ```html
   <!-- ❌ 間違い -->
   <div class="box">
     <p>テキスト</p>
   </div>

   <!-- ✅ 正しい -->
   <div class="box">
     <p>テキスト</p>
   </div>
   ```

2. **CSSのスペルミス**
   - 開発者ツールで取り消し線が入っていないか確認

3. **クラス名の間違い**
   - HTMLとCSSでクラス名が一致しているか確認

### 7.3 問題：JavaScriptが動かない

#### 確認手順：

1. 開発者ツールのConsoleでエラーを確認
2. jQueryが読み込まれているか確認
3. スペルミスがないかチェック

### 7.4 緊急時の対処法

```
1. バックアップから復元
2. エラーメッセージをGoogleで検索
3. エンジニアに相談（明確な情報とともに）
```

---

## 第8章：エンジニアとのコミュニケーション

### 8.1 修正依頼の書き方

#### ✅ 良い例：

```
【修正箇所】
トップページのヒーロー画像

【現状】
spring-sale.jpg が表示されている

【希望】
summer-sale.jpg に差し替えたい

【対象】
PC・スマホ両方

【期限】
6月1日まで

【添付】
新しい画像ファイル
```

#### ❌ 悪い例：

```
「トップの画像を変えてください」
「なんか変です」
「前みたいにしてください」
```

### 8.2 バグ報告の書き方

#### テンプレート：

```
【発生箇所】
〇〇ページの△△ボタン

【再現手順】
1. 〇〇ページを開く
2. △△ボタンをクリック
3. 何も起こらない

【環境】
- デバイス: iPhone 14
- OS: iOS 17
- ブラウザ: Safari

【期待する動作】
ボタンをクリックするとメニューが開く

【スクリーンショット】
添付参照
```

---

## まとめとチェックリスト

### できるようになったこと ✓

- [ ] HTMLの基本構造を理解した
- [ ] 開発者ツールで要素を特定できる
- [ ] CSSで色やサイズを変更できる
- [ ] jQueryの基本的な使い方を理解した
- [ ] テキストや画像を修正できる
- [ ] 問題が起きたときの対処法を知っている
- [ ] エンジニアに的確に依頼できる

### 困ったときは

```
1. 開発者ツールでエラー確認
2. エラーメッセージで Google 検索または AI に聞く
3. バックアップから復元
4. エンジニアに相談
```

---

## クイックリファレンス（保存版）

### 頻出CSSプロパティ

```css
color: #000000; /* 文字色 */
background-color: #ffffff; /* 背景色 */
font-size: 16px; /* 文字サイズ */
padding: 20px; /* 内側の余白 */
margin: 10px; /* 外側の余白 */
display: none; /* 非表示 */
width: 100%; /* 幅 */
height: 200px; /* 高さ */
```

### 頻出jQueryメソッド

```javascript
$('.class'); // クラスで選択
$('#id') // IDで選択
  .text('テキスト') // テキスト設定
  .html('<p>HTML</p>') // HTML設定
  .addClass('class') // クラス追加
  .removeClass('class') // クラス削除
  .show() // 表示
  .hide() // 非表示
  .fadeIn() // フェードイン
  .fadeOut() // フェードアウト
  .on('click', fn); // クリックイベント
```

### ショートカット

```
Ctrl + F (Cmd + F)           ファイル内検索
Ctrl + Shift + F             プロジェクト全体検索
F12                          開発者ツール
Ctrl + F5 (Cmd + Shift + R)  強制リロード
```
