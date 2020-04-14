$(document).ready(function() {
    function a(a) {
        var n = /^-{0,1}\d*\.{0,1}\d+$/;
        return n.test(a) ? !0 : !1
    }

    function n(a) {
        var n = /^([a-z0-9_]|\-|\.|\+)+@(([a-z0-9_]|\-)+\.)+[a-z]{2,6}$/i;
        return n.test(a) ? !0 : !1
    }
    $("#s_contact_form").submit(function() {
        var s = "",
            c = "",
            e = "",
            r = $('input[name="s_email(check)"]').val();
        if ($("#s_contact_form input, #s_contact_form textarea, #s_contact_form select").each(function(i) {
                var t = $(this),
                    l = t.attr("name"),
                    o = t.val(),
                    f = l.length,
                    u = f - 7,
                    m = l.substring(u, f),
                    h = l.substring(0, u);
                if ("s_tel" == h && (h = "電話番号"), "s_email" == h && (h = "メールアドレス"), "s_confirm_email" == h && (h = "メールアドレス確認"), "(check)" == m) {
                    if ("" != o) {
                        if (t.css("background", "none").removeClass("flag_check"), "電話番号" == h) {
                            if (0 != a($(this).val())) return t.css("background", "none").removeClass("flag_check"), !0;
                            $(this).css("background", "#F7E3E2").addClass("flag_check"), c = "電話番号の書式に誤りがあります。確認して下さい！", s = s + c + "\n"
                        }
                        if ("メールアドレス" == h) {
                            if (0 != n($(this).val())) return t.css("background", "none").removeClass("flag_check"), !0;
                            $(this).css("background", "#F7E3E2").addClass("flag_check"), e = "メールアドレスの書式に誤りがあります。確認して下さい！", s = s + e + "\n"
                        }
                        if ("メールアドレス確認" == h) {
                            if (0 != n($(this).val())) return t.css("background", "none"), $(this).val() == r ? (t.css("background", "none").removeClass("flag_check"), !0) : ($(this).css("background", "#F7E3E2").addClass("flag_check"), alert_mail_confirm = "確認メールのアドレスは間違えました。", s = s + alert_mail_confirm + "\n", !0);
                            $(this).css("background", "#F7E3E2").addClass("flag_check"), e = "メールアドレス確認の書式に誤りがあります。確認して下さい！", s = s + e + "\n"
                        }
                        return !0
                    }
                    t.css("background", "#F7E3E2").addClass("flag_check"), s = s + h + "が入力されていません。確認して下さい !\n"
                }
            }), "" != s) {
            alert(s);
            var i = 0;
            return $("#s_contact_form input, #s_contact_form select, #s_contact_form textarea").each(function(a) {
                return $(this).hasClass("flag_check") && ($(this).focus(), i = 1), 1 == i ? !1 : void 0
            }), !1
        }
      return confirm("送信してもよろしいですか？") ? !0 : !1
    })
});
