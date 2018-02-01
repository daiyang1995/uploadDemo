/**
 * http://usejsdoc.org/

 */
'use strict';
function wxConf(){};

//  获取token grant_type
wxConf.getTokenGrantType="client_credential";
//  获取openid grant_type
wxConf.userInfoGrantType="authorization_code";
//  appId
wxConf.appId="";
//  secret
wxConf.secret="";

module.exports = wxConf;