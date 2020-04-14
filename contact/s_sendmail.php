<!doctype html><html lang="ja"><head><meta charset="utf-8"><title>Send</title><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> </head><body>
<?php if(isset($_POST['check_spam']) && $_POST['check_spam'] == "hsspammail_CV9ma2QkEQD886bLXp" ) {$data = $_POST; $link_contact = 'index.php';$link_thanks = 'index.php';$adminmail =  $_POST['adminmail'];
if (isset($_POST['s_email(check)'])){ $s_email  = $_POST['s_email(check)']; }else {$s_email = '顧客'; }
if(isset($data['s_confirm_email(check)'])) { unset($data['s_confirm_email(check)']); }if(isset($data['check_spam'])) { unset($data['check_spam']); }
if(isset($data['id_confirm'])) { unset($data['id_confirm']); }if(isset($data['adminmail'])) { unset($data['adminmail']); }if(isset($data['url_thanks'])) { unset($data['url_thanks']); }if(isset($data['url_contact'])) { unset($data['url_contact']); }
mb_language("ja");$_headers = "From: <".$s_email.">\r\n"; $_headers .= "Content-Type: text/html;charset=utf-8\n";
$_headers_user = "From:  <".$adminmail.">\r\n"; $_headers_user .= "Content-Type: text/html;charset=utf-8\n";$_to = $adminmail; 
$_subject_user = "お問い合わせありがとうございます.";$_body_user = "お問い合わせは正常に送信されました。<br/>回答をお待ち下さい。";
$_subject = "お問い合わせ.";$_body = "";foreach($data as $key=>$value) {
$key_cut = substr($key,-7); if($key_cut =='(check)') {$count_string_key = strlen($key);$normal_key = $count_string_key - 7;$key_finish = substr($key, 0, $normal_key ); }else { $key_finish = $key;}
if($key_finish == 's_email') {$key_finish ='メールアドレス';}if($key_finish == 's_tel') {$key_finish ='電話番号';}
$_body .= mb_convert_encoding($key_finish, "utf-8","AUTO")." : ".mb_convert_encoding($value, "utf-8","AUTO")."<br/>"; } 
if(mail($_to,$_subject,$_body,$_headers) && mail($s_email,$_subject_user,$_body_user,$_headers_user)) { ?>
<script type="text/javascript">$(document).ready(function() { location.href="<?php echo $link_thanks; ?>";});</script>
<?php } else { ?><script type="text/javascript">$(document).ready(function() { location.href="<?php echo $link_contact; ?>";});</script><?php }?>
<?php } else { ?><script type="text/javascript">$(document).ready(function() { location.href="<?php echo $link_contact; ?>";});</script><?php } ?>
