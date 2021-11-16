/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var stompClient=null;var commentID=null;var received=null;var author=$('\x23\x61\x75\x74\x68\x6F\x72').val();var post=$('\x23\x70\x6F\x73\x74').val();var index=0;var level=0;function commentItem(_0x17A03,_0x179F4,_0x179E5,_0x17A12,commentID,level,_0x17A21){return `
            <div class="d-flex">
                <img class="avatar avatar-md rounded-circle float-start me-3"
                    src="${_0x179E5}" alt="avatar">
                <div class="main-comment w-100">
                    <div class="mb-2">
                        <h5 class="m-0 userName">${_0x17A12}</h5>
                        <span class="me-3 small">${_0x17A03}</span>
                        <a href="" class="text-body fw-normal reply">
                            ${_0x17A21!= null?'\x52\x65\x70\x6C\x79':''}
                        </a>
                        <input type="hidden" value="${commentID}"
                                                   class="comment">
                        <input type="hidden" value="${level}" class="level">
                    </div>
                    <p>${_0x179F4.replace(/</g,'\x26\x6C\x74\x3B').replace(/>/g,'\x26\x67\x74\x3B')}</p>
                </div>

            </div>
    `}function replyForm(commentID){return `
            <form id="replyForm">
                <div class="col-12">
                    <label class="form-label">Your Comment *</label>
                    <textarea class="form-control" rows="3" id="replyInput"></textarea>
                    <input type="hidden" value="${commentID}" id="replyComment">
                </div>
                <div class="col-12 mt-3">
                    <button type="submit" id="r" class="btn btn-primary">Post comment</button>
                </div>
            </form>
    `}Element.prototype.appendAfter= function(_0x1794F){_0x1794F.parentNode.insertBefore(this,_0x1794F.nextSibling)},false;$(document).on('\x63\x6C\x69\x63\x6B','\x2E\x72\x65\x70\x6C\x79',function(_0x1797C){_0x1797C.preventDefault();$('\x23\x72\x65\x70').remove();index= $(this).index('\x2E\x72\x65\x70\x6C\x79');level= document.getElementsByClassName('\x6C\x65\x76\x65\x6C')[index].value;var _0x1795E=document.getElementsByClassName('\x63\x6F\x6D\x6D\x65\x6E\x74')[index].value;var _0x1796D=document.createElement('\x64\x69\x76');_0x1796D.id= '\x72\x65\x70';_0x1796D.innerHTML= replyForm(_0x1795E);$('\x2E\x6D\x61\x69\x6E\x2D\x63\x6F\x6D\x6D\x65\x6E\x74')[index].append(_0x1796D)});$('\x23\x63\x6F\x6D\x6D\x65\x6E\x74\x46\x6F\x72\x6D').on('\x73\x75\x62\x6D\x69\x74',function(_0x1799A){var _0x1798B=$('\x23\x63\x6F\x6D\x6D\x65\x6E\x74\x49\x6E\x70\x75\x74').val();_0x1799A.preventDefault();if(_0x1798B!= ''){var _0x1795E={accountID:author,postID:post,commentContent:_0x1798B,commentLevel:1,index:index};stompClient.send('\x2F\x61\x70\x70\x2F\x62\x69\x6E\x68\x2D\x6C\x75\x61\x6E',{},JSON.stringify(_0x1795E));$('\x23\x63\x6F\x6D\x6D\x65\x6E\x74\x49\x6E\x70\x75\x74').val('')}});$(document).on('\x73\x75\x62\x6D\x69\x74','\x23\x72\x65\x70\x6C\x79\x46\x6F\x72\x6D',function(_0x1797C){_0x1797C.preventDefault();var _0x179D6=$('\x2E\x75\x73\x65\x72\x4E\x61\x6D\x65')[index].innerHTML;var _0x179C7=$('\x23\x72\x65\x70\x6C\x79\x49\x6E\x70\x75\x74').val();var _0x179B8=$('\x23\x72\x65\x70\x6C\x79\x43\x6F\x6D\x6D\x65\x6E\x74').val();if(_0x179C7!= ''){if(level> 2){level= 2};var _0x179A9={reply:_0x179B8,accountID:author,postID:post,commentContent:'\x40'+ _0x179D6+ '\x20'+ _0x179C7,commentLevel:++level,index:index};stompClient.send('\x2F\x61\x70\x70\x2F\x62\x69\x6E\x68\x2D\x6C\x75\x61\x6E',{},JSON.stringify(_0x179A9))};$(this).remove()});function connect(){var _0x17A30= new SockJS('\x2F\x62\x69\x6E\x68\x2D\x6C\x75\x61\x6E');stompClient= Stomp.over(_0x17A30);stompClient.connect({},function(){stompClient.subscribe('\x2F\x74\x6F\x70\x69\x63\x2F\x62\x69\x6E\x68\x2D\x6C\x75\x61\x6E',function(_0x17A4E){received= JSON.parse(_0x17A4E.body);var _0x17A3F=$('\x23\x6C\x5F\x6F').val();var _0x1796D=document.createElement('\x64\x69\x76');_0x1796D.addClass('\x6D\x79\x2D\x34');_0x1796D.addClass('\x63\x68\x69\x6C\x64');if(received.commentLevel== 3){_0x1796D.addClass('\x70\x73\x2D\x32');_0x1796D.addClass('\x70\x73\x2D\x6D\x64\x2D\x36');_0x1796D.innerHTML= commentItem(received.commentDate,received.commentContent,received.avatarUser,received.nameUser,received.reply,received.commentLevel,_0x17A3F);_0x1796D.appendAfter(document.getElementsByClassName('\x63\x68\x69\x6C\x64')[received.index])}else {_0x1796D.innerHTML= commentItem(received.commentDate,received.commentContent,received.avatarUser,received.nameUser,received.commentID,received.commentLevel,_0x17A3F);if(received.reply== 0){_0x1796D.appendAfter(document.getElementById('\x63\x6F\x6D\x6D\x65\x6E\x74\x41\x72\x65\x61'))}else {_0x1796D.addClass('\x70\x73\x2D\x32');_0x1796D.addClass('\x70\x73\x2D\x6D\x64\x2D\x35');_0x1796D.appendAfter(document.getElementsByClassName('\x63\x68\x69\x6C\x64')[received.index])}};document.getElementById('\x6E\x75\x6D\x62\x65\x72\x43\x6F\x6D\x6D\x65\x6E\x74\x73').innerHTML= received.numberOfComments+ '\x20\x62\xEC\x6E\x68\x20\x6C\x75\u1EAD\x6E'})})}connect()