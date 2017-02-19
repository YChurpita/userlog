/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function UserLog() {
    var DSizeW = 0, DSizeH = 0, BSizeW = 0, BSizeH = 0, OsName = '', BrwserName = '', BrwserVers = '';
    var UsrAgent = navigator.userAgent;
//------------------------------------------------------------------------------//
    this.GetDisplaySize = function () {
        DSizeW = screen.width;  
        DSizeH = screen.height;  
    };
//------------------------------------------------------------------------------//
    this.GetDimBodyBrouzers = function () {
        BSizeW = document.documentElement.clientWidth;  
        BSizeH = document.documentElement.clientHeight;  
    };
//------------------------------------------------------------------------------//    
    this.GetOsName = function () {

        if (UsrAgent.indexOf('Windows') !== -1)
            OsName = 'Windows';
        if (UsrAgent.indexOf('Linux') !== -1)
            OsName = 'Linux';
        if (UsrAgent.indexOf('Mac') !== -1)
            OsName = 'Mac';
        if (UsrAgent.indexOf('FreeBSD') !== -1)
            OsName = 'FreeBSD';
    };
//------------------------------------------------------------------------------
    this.GetBrouzer = function () {
        var uAgent = UsrAgent || '';
        var Brwser = {
            version: (uAgent.match(/.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
            opera: /opera/i.test(uAgent),
            msie: (/msie/i.test(uAgent) && !/opera/i.test(uAgent)),
            msie6: (/msie 6/i.test(uAgent) && !/opera/i.test(uAgent)),
            msie7: (/msie 7/i.test(uAgent) && !/opera/i.test(uAgent)),
            msie8: (/msie 8/i.test(uAgent) && !/opera/i.test(uAgent)),
            msie9: (/msie 9/i.test(uAgent) && !/opera/i.test(uAgent)),
            msie10: (/msie 10/i.test(uAgent) && !/opera/i.test(uAgent)),
            mozilla: /firefox/i.test(uAgent),
            chrome: /chrome/i.test(uAgent),
            safari: (!(/chrome/i.test(uAgent)) && /webkit|safari|khtml/i.test(uAgent)),
            iphone: /iphone/i.test(uAgent),
            ipod: /ipod/i.test(uAgent),
            iphone4: /iphone.*OS 4/i.test(uAgent),
            ipod4: /ipod.*OS 4/i.test(uAgent),
            ipad: /ipad/i.test(uAgent),
            ios: /ipad|ipod|iphone/i.test(uAgent),
            android: /android/i.test(uAgent),
            bada: /bada/i.test(uAgent),
            mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile/i.test(uAgent),
            msie_mobile: /iemobile/i.test(uAgent),
            safari_mobile: /iphone|ipod|ipad/i.test(uAgent),
            opera_mobile: /opera mini|opera mobi/i.test(uAgent),
            opera_mini: /opera mini/i.test(uAgent),
            mac: /mac/i.test(uAgent),
            webkit: /webkit/i.test(uAgent),
            android_version: parseFloat(uAgent.slice(uAgent.indexOf("Android") + 8)) || 0
        };

        BrwserVers = Brwser.version;

        if (Brwser.opera === true)
            BrwserName = 'opera';
        if (Brwser.msie === true)
            BrwserName = 'msie';
        if (Brwser.msie6 === true)
            BrwserName = 'msie6';
        if (Brwser.msie7 === true)
            BrwserName = 'msie7';
        if (Brwser.msie8 === true)
            BrwserName = 'msie8';
        if (Brwser.msie9 === true)
            BrwserName = 'msie9';
        if (Brwser.msie10 === true)
            BrwserName = 'msie10';
        if (Brwser.mozilla === true)
            BrwserName = 'mozilla';
        if (Brwser.chrome === true)
            BrwserName = 'chrome';
        if (Brwser.safari === true)
            BrwserName = 'safari';
        if (Brwser.iphone === true)
            BrwserName = 'iphone';
        if (Brwser.ipod === true)
            BrwserName = 'ipod';
        if (Brwser.iphone4 === true)
            BrwserName = 'iphone4';
        if (Brwser.ipod4 === true)
            BrwserName = 'ipod4';
        if (Brwser.ipad === true)
            BrwserName = 'ipad';
        if (Brwser.ios === true)
            BrwserName = 'ios';
        if (Brwser.android === true)
            BrwserName = 'android';
        if (Brwser.bada === true)
            BrwserName = 'bada';
        if (Brwser.mobile === true)
            BrwserName = 'mobile';
        if (Brwser.msie_mobile === true)
            BrwserName = 'msie_mobile';
        if (Brwser.safari_mobile === true)
            BrwserName = 'safari_mobile';
        if (Brwser.opera_mobile === true)
            BrwserName = 'opera_mobile';
        if (Brwser.opera_mini === true)
            BrwserName = 'opera_mini';
        if (Brwser.mac === true)
            BrwserName = 'mac';
        if (Brwser.android_version === true)
            BrwserName = 'android_version';
    };
//------------------------------------------------------------------------------
    this.getAll = function () {
             return [DSizeW, DSizeH, BSizeW, BSizeH, OsName, BrwserName, BrwserVers];
    };
//------------------------------------------------------------------------------    
     this.init = function () {
        this.GetDisplaySize();
        this.GetDimBodyBrouzers();
        this.GetOsName();
        this.GetBrouzer();  
     }; 
};

//------------------------------------------------------------------------------
function UsrLogcontrol() {
   
    var ulog = new UserLog();
    var self=this; 
    var elm, elm2;
    this.Init = function () {
        ulog.init();
        elm= document.createElement("div");           
        elm.className = "ul-block-mod";
        elm.style.cssText="display: block;  position: fixed; border: solid 2px #000; \
                           text-align: center; vertical-align: central;  height: 25px;  width: auto; \
                           bottom:10px; left: 10px; \ ";
    
        document.getElementsByTagName('body')[0].appendChild(elm);
       
        elm2= document.createElement('p');
        elm2.className="ul-block-ip";
        elm2.style.cssText="display: block; position: relative;  font-family: Verdana, Calibri,sans-serif; \
                            font-size: 14px; color: #000; text-align: center;\
                            vertical-align: central; padding-left: 10px;\
                            padding-right: 10px;\ ";
        
        elm2.innerHTML ="000.000.000.000";
        document.getElementsByClassName("ul-block-mod")[0].appendChild(elm2);
    };

    this.SendAjax = function () {
            
        $.ajax({
            type: "POST",
            url: "sendcont.php",
            data: {in_msizew:  ulog.getAll()[0], 
                   in_msizeh:  ulog.getAll()[1],
                   in_bmsizew: ulog.getAll()[2],
                   in_bsizeh:  ulog.getAll()[3],
                   in_osname:  ulog.getAll()[4],    
                   in_BrwserName: ulog.getAll()[5],    
                   in_BrwserVers: ulog.getAll()[6]
            }
        }).done(function (result)
        {
            $(".ul-block-ip").html(result);
        });
    };
};
 var musrlog = new UsrLogcontrol();          
                 
$(document).ready(function () {
                musrlog.Init();              
                musrlog.SendAjax();
            });

