## Start Project

`npx create-next-app -e with-tailwindcss chatgpt-messenger`

`npm run dev`

## 使用技術

- Authentication

  - [NextAuth.js](https://next-auth.js.org/getting-started/example)

- UI

  - Tailwind CSS
  - Heroicons

- Firebase
  - Authentication
  - Firestore

## メモ

### Next.js 13

- app directory を使用。default の index.tsx は不要のため削除。app directory を追加して`npm run dev`を実行すると、head, layout が作成される

### tailwindCSS カスタム CSS

- カスタム CSS を styles/global.css に作成

### ログイン

id と secret は、Firebase の Authentication の「ウェブ SDK 構成」を使用する

GCP でログイン時のリダイレクト先を設定する必要あり。

### Firebase

`npm install firebase`

`npm i react-firebase-hooks`
[Doc](https://www.npmjs.com/package/react-firebase-hooks)
