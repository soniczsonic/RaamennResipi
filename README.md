# 要件
ラーメンの店主が切磋琢磨するためのレシピ共有SNS
SNSというところがキモ。クックパッドのように料理人が自らのレシピを公開するのが目的。
要するにラーメン専用クックパッド。ただし、レシピを公開するにはラーメン店の店主である必要がある。
ラーメン店の店主だけが参加できるという点は必ず守ること。

UIはクックパッドをそのままパクる。
クックパッドアプリのホーム、タイムライン、投稿するの三つのタブを使う。
特に、ホームの上部のデザイン、タイムラインのデザインは必須。
ドロワーも必要だが、あとで実装する。

使用技術ReactNative + Relay + node.js
バックエンドにfirebaseを使いサーバレスにするため、Relayはいらない。


# todo
- [x] firebaseにdatabase作成 :+1:
- [x] firebaseのデータの読み出し、書き込みを実装 :+1:
- [x] react-native-brobでなくreact-native-storageの機能のみを使う。
- [ ] androidでfirebase storeに対応
- [ ] androidでfirebase storageに対応
- [ ] デザインrecipe details
- [ ] デザインホーム
- [ ] デザインpost
