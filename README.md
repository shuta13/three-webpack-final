# three-webpack-final
- threejsでのwebgl開発テンプレートの決定版(多分)
## 参考
- https://github.com/p5aholic/project-template
- https://github.com/watab0shi/threejs-workshop
## お借りした作品
- https://qiita.com/watabo_shi/items/bf9bcd4569b6d480c608
## ディレクトリ構成
```text
├── config
│   ├── bs-config.js      // browser-syncのコンフィグ
│   └── webpack.config.js // webpackのコンフィグ
├── public                // 本番用
│   ├── XX_SomethingProduct
│   │   └── index.html
│   ├── dist
│   │   ├── css
│   │   │   └── common.css
│   │   └── js
│   │   │   ├── main.js
│   │       └── vendor.js
│   └── index.html
└── src                // 開発用
    ├── XX_SomethingProduct
    │   ├── Canvas
    │   │   └── index.js
    │   └── index.js
    └── index.js
```
### npm run start
ローカルサーバー立ち上げ・監視
### npm run serve
ローカルサーバー立ち上げ
### npm run watch
ファイルの監視
### npm run build
開発用ビルド
### npm run prod
本番用ビルド
