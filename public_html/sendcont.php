<?php
    include ('clases/base.php');

    $dbobj= new DataBase();  
  
/* @var $ip type  айпишник*/
    $ip = (isset($_SERVER['REMOTE_ADDR'])) ? $_SERVER['REMOTE_ADDR'] : false;    
    $date = date("Y-m-d");
     
    $dbobj->setConnectParam('**********', '*******', '*******','********');  
                                                                 
    $dbobj->connectDbaServ();
    $res= $dbobj->addConnect(  
            $ip  ,
            $date ,
            $_POST['in_msizew'],
            $_POST['in_msizeh'],
            $_POST['in_bmsizew'],
            $_POST['in_bsizeh'],
            $_POST['in_osname'],
            $_POST['in_BrwserName'],
            $_POST['in_BrwserVers'] 
    );
    
  if  ($res){   
        $message  = "Айпишник : " . $ip ."Заходил в мое портфолио". "<br/>";
        send_mail($message);  
        echo($ip);
    }
 
  
    function send_mail($message){
    
        $mail_to = "ycfirebird@gmail.com";
        $subject = "Письмо с портфолио bcat.kiev.ua";      
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; 
        $headers .= "посетитель\r\n"; 
         
        mail($mail_to, $subject, $message, $headers);
    }

     
?>