# Node.js 16をベースイメージとして使用
FROM node:16

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# ソースコードをコンテナにコピー
COPY . .

# 開発サーバーを起動
CMD ["npm", "run", "serve"]