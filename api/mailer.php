
<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

use DevCoder\DotEnv;

require 'DevCoder.php';

(new DotEnv(false))->load();

//Load Composer's autoloader
require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);
if(!$obj['tel'] || !$obj['fullName']){
    echo json_encode("Error");
} else {
    $body = "
  <table style='width: 100%;'>
      <tr style='background-color: #f8f8f8;'>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Ім`я</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>". $obj['fullName'] ."</td>
      </tr>

      <tr>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>". $obj['tel'] ."</td>
      </tr>
      
      <tr>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Продукт</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>". $obj['product'] ."</td>
      </tr>
      </table>";
}



try {
    //Server settings
    $mail->SMTPDebug=0;
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = getenv('EMAIL_HOST');                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = getenv('EMAIL_ADDRESS');                     //SMTP username
    $mail->Password   = getenv('EMAIL_PASSWORD');                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = getenv('EMAIL_PORT');                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom(getenv('EMAIL_ADDRESS'));
    $mail->FromName = "EcoMebli";
    $mail->addAddress(getenv('EMAIL_TO'));     //Add a recipient


    //Attachments


    //Content
    $mail->Subject = 'Phone';
    $mail->Body    = $body;
    $mail->isHTML(true);   //Set email format to HTML

    $mail->send();
    echo json_encode(array('status' => true));
} catch (Exception $e) {
    echo json_encode(array('status' => false, 'error' => $mail->ErrorInfo));
}
