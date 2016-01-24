<?php
   /*
   * Collect all Details from Angular HTTP Request.
   */
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
	
	$name = $request->name;  
	$phone = $request->phone;
    $email = $request->email;
    $message = $request->message;

    
    /* Set e-mail recipient */
$myemail  = "ranjithprabhu.k@gmail.com";


$subject="Message From your Dashboard";
/* Let's prepare the message for the e-mail */
$message = "Hello Boss,

You got a message from your Dashboard Site...

Name: $name

Phone: $phone

E-mail: $email

Message: $message



Thank you,
Have a nice day Boss...


End of message
";

/* Send the message using mail() function */
mail($myemail, $subject, $message);


    echo 'success';
 //this will go back under "data" of angular call.
    /*
     * You can use $email and $pass for further work. Such as Database calls.
    */    
?>