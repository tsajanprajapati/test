// app.js
 
// 「myAppというAngularJSのアプリケーションを作ります」宣言だと思ってください
 
angular.module('myApp', [])

    .controller('AppController', function($scope) {
 
　　　// 入力されたユーザー名を保持
 
　　　$scope.username = '';
 
　　　// ユーザー一覧（空の配列で初期化）
 
　　　$scope.users = [];
 
　　　// 登録を押されたときの関数
 
　　　$scope.submit = function() {
 
　　　　　// 新しいユーザーをユーザー一覧に登録する
 
　　　　　$scope.users.push({
 
　　　　　　username: $scope.username,
 
　　　　　　url: '//twitter.com/' + $scope.username
 
　　　　　});
 
　　　};
 
　　});