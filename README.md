﻿# Automatic-Mail-Sender
An automatic RESTful API for sending mails using @send-grid/mail package, with the help of node.js.
Designed this API for our Job-O-Mania project which basically needs an automatic mail sending mechanism to our user's and send them information about company new job role matching to user's skill. 
You have to make a http POST request to https://mailsender2427.herokuapp.com with following parameters variables whose descrription are wriiten below:
<br>
cName="string" : Denotes Company Name
url="string" : Denotes url of compan career page for the job id.
role="string" : Denotes position of job
mail="string" : Denotes user's mail address.
