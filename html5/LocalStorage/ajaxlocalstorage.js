/*! AjaxLocalStorage v1.0 | (c) 2015, 2015 billsquall@sina.com */
var AjaxUrl = "controller/action/?ajaxPic";
var LocalAttr = "src";
function AjaxLocalStorage(ajaxUrl) {
    AjaxUrl = ajaxUrl;
    if ($()) {

        if (window.localStorage) {
            var storage = window.localStorage;
            var result;
            $.get(AjaxUrl, function (obj) {
                result = eval(obj);
                $('body').children('.localStorage').each(function () {
                    var thidImg = $(this);
                    var localattr = LocalAttr;
                    if (thidImg.attr('localAttr') != undefined) {
                        localattr = thidImg.attr('localAttr');
                    }
                    if (thidImg.attr('localKey') != undefined) {
                        var localItem = thidImg.attr('localKey');
                        if (storage[localItem] == undefined) {
                            for (var i in result) {
                                if (result[i].key == localItem) {
                                    thidImg.attr(localattr, result[i].value);
                                    storage[localItem] = result[i].value;
                                }
                            }
                        } else {
                            $(this).attr(localattr, storage[localItem]);
                        }
                    }
                });
            });
        } else {
            alert('This browser does NOT support localStorage');
        }

    }
    else {
        alert('no jquery no localstorage.js');
    }
}


