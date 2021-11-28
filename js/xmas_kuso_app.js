$(function(){
  /**
   * @param object message backgroundからポストされた値
   * オブジェクトになっていてmessage.trigger = 'on'のような形になっている
   * @param sender
   * @sendResponse
   * これらは2つとも宣言してないとsendResponseが最後に返せなかったので設定した
   *
   * backgroundからメッセージが送られてきた時（ブラウザボタンをクリックされた時）に発火する
   */
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // 意図したbackground.jsからの送信でない場合は弾く
    if(message.trigger !== 'on'){
      return false;
    }

    /** ----- main ----- **/
    /**
     * 画面上の全ての要素をループで回す（ちょっと重いかも）
     * 背景色を緑にしてツリーっぽくする
     * 文字色を各種オーナメントを模して黄色、赤、白にする
     */
    $.each($("*"), function(index, element){
      $(element).css('background-color', '#0B7B48');
      if(index%3 === 0) {
        $(element).css('color', '#B51802');
      } else if(index%3 === 1){
        $(element).css('color', '#FFE33A');
      } else if(index%3 === 2){
        $(element).css('color', '#FFFFFF');
      }
    });

    sendResponse('Done');
  });
});