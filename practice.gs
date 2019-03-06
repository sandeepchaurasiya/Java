
function getAppsScriptAsJson( text ) {
  var fileDrive = Drive.Files.get( DriveApp.getFilesByName( text ).next().getId() );
  var link = JSON.parse(fileDrive)[ 'exportLinks' ][ 'application/vnd.google-apps.script+json' ];
  var fetched = UrlFetchApp.fetch(link, {headers:{'Accept':'application/vnd.google-apps.script+json', "Authorization":'Bearer '+ScriptApp.getOAuthToken()}, method:'get'});
  return JSON.parse(fetched.getContentText());
}


function test()
{

// Send an email with two attachments: a file from Google Drive (as a PDF) and an HTML file.
// var file = 
// var blob = Utilities.newBlob('Insert any HTML content here', 'text/html', 'my_document.html');
// MailApp.sendEmail('mike@example.com', 'Attachment example', 'Two files are attached.', {
//     name: 'Automatic Emailer Script',
//     attachments: [file.getAs(MimeType.PDF), blob]
// });
// Creates a folder that anyone on the Internet can read from and write to. (Domain
// administrators can prohibit this setting for users of a G Suite domain.)
//var folder = DriveApp.createFolder('Shared Folder');
//folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);


//  var messages_url = "https://www.phptpoint.com/wp-content/uploads/2018/10/php-tutorial-pdf.pdf";
//     var data = UrlFetchApp.fetch(messages_url).getBlob().setName(sandeep);
//     Logger.log(data);
//     
//var message = GmailApp.getMessageById(messageId);
//var rawContent = message.getRawContent();
//// Regex logic for matching the subject line
//rawContent = rawContent.replace(oldSubjectLine, newSubjectLine);
//var encodedMsg = Utilities.base64EncodeWebSafe(rawContent);
//
//var message = Gmail.newMessage();
//message.raw = encodedMsg;
//
//Gmail.Users.Messages.insert(message, "me");
//     

var messageResource = Gmail.newMessage();

messageResource.raw = Utilities.base64EncodeWebSafe([messageData]);

var data = Gmail.Users.Messages.insert(messageResource, "me");
    Logger.log(data); 
//         var resp = UrlFetchApp.fetch("https://www.phptpoint.com/wp-content/uploads/2018/10/php-tutorial-pdf.pdf"); 
//      if (resp.getResponseCode() == 200){
//            var blob = Utilities.newBlob(resp.getContent());
//            Logger.log(blob.getDataAsString());
//            var pdf = blob.getAs('application/pdf'); 
//            Logger.log(pdf);
//            var options = {'attachments' : 
//                       {'fileName' : 'test',
//                        'mimeType' : 'application/pdf',
//                        'content' : blob.getBytes()
//                       }
//                      };
//                     // Logger.log(options);
//        MailApp.sendEmail("sandeep.chaurasiya@wdipl.com","Logos","inline Google Logo<img src='cid:googleLogo'> images!", options)
//    }
      
      
     
     //$pdfUrl = "...";
//var tmpFileName = tempnam(sys_get_temp_dir(), "pdf");
//file_put_contents(tmpFileName, file_get_contents(data));
//// Do your ImageMagick job
//var ddd = unlink(tmpFileName);
//Logger.log(ddd);

//  var message = 'message to sign';
//  var secret = 'mysecret';
//  var shaObj = new jsSHA("SHA-256", "TEXT");
//  shaObj.setHMACKey(secret, "B64");
//  shaObj.update(message);
//  var sig = shaObj.getHMAC("B64");
//  Logger.log(sig);

// This writes an array of bytes to the log.
//var input = Utilities.base64Decode("aW5wdXQgdG8gaGFzaA0K") // == base64encode("input to hash")
//var key = Utilities.base64Decode("a2V5"); // == base64encode("key")
//var signature = Utilities.computeHmacSha256Signature(input, key);
//Logger.log(signature);

// "Google Groups" in Katakana (Japanese)
//var input = "sandeep chaurasiya";
//
//// Writes "R29vZ2xlIOOCsOODq-ODvOODlw==" to the log
//var encoded = Utilities.base64EncodeWebSafe(input, Utilities.Charset.UTF_8);
//Logger.log(encoded);

// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
//var encoded = Utilities.base64Encode("sandeep.chaurasiya@wdipl.com");
//Logger.log(encoded);

// Instantiates a blob here for clarity
//var blob = Utilities.newBlob("sandeep.chaurasiya@wdipl.com");
// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
//var encoded = Utilities.base64Encode(blob.getBytes());
//Logger.log(encoded);

//var Label= GmailApp.getUserLabelByName("AppScriptPDF");
//     var datas = GmailApp.getInboxThreads();
//      for (i=0; i < datas.length; i++) {
//       var msges = datas[i].getMessages();
//        for (j=0; j < msges.length; j++) {
//          var msg = msges[j];
//          //Logger.log(msg);
//          subject = msg.getSubject();
//          //Logger.log(subject);
//          "To": "+1415555555",
//         var attch = msg.getAttachments()
//          Logger.log( attch );
//          for (var k = 0; k < attch.length; k++) {
//            Logger.log('Message "%s" contains the attachment "%s" ', msg.getSubject(), attch[k].getName());
//            Label.addToThread(datas); //error
//          }
//        }
//      }


// Make both a POST request with form data, and a GET request.
//var messages_url = "https://www.phptpoint.com/wp-content/uploads/2018/10/php-tutorial-pdf.pdf";
//var resumeBlob = Utilities.newBlob('Hire me!', 'application/pdf', 'https://www.phptpoint.com/wp-content/uploads/2018/10/php-tutorial-pdf.pdf');
//var data = UrlFetchApp.fetch("https://www.phptpoint.com/wp-content/uploads/2018/10/php-tutorial-pdf.pdf");
//data.getBlob().setContentTypeFromExtension(sheets[i].getName() + '.pdf');
//Logger.log(data);

// Set a property in each of the three property stores.
//var scriptProperties = PropertiesService.getScriptProperties();
//var userProperties = PropertiesService.getUserProperties();
//var documentProperties = PropertiesService.getDocumentProperties();

//scriptProperties.setProperty('SERVER_URL', 'http://www.example.com/');
//userProperties.setProperty('DISPLAY_UNITS', 'sandeep');
//documentProperties.setProperty('SOURCE_DATA_ID', '1234567890abcdefghijklmnopqrstuvwxyz');

// Sets several properties, then logs the value of each key.
//var scriptProperties = PropertiesService.getScriptProperties();
//scriptProperties.setProperties({
//  'cow': 'moo',
//  'sheep': 'baa',
//  'chicken': 'cluck'
//});
//var keys = scriptProperties.getKeys();
//Logger.log('Animals known:');
//for (var i = 0; i < keys.length; i++) {
//  Logger.log(keys[i]);
//}

// Get the value for the user property 'DISPLAY_UNITS'.
//var userProperties = PropertiesService.getUserProperties();
//var units = userProperties.getProperty('DISPLAY_UNITS');
//Logger.log(units);

// Get multiple script properties in one call, then log them all.
//var scriptProperties = PropertiesService.getScriptProperties();
//var data = scriptProperties.getProperties();
//for (var key in data) {
//  Logger.log('Key: %s, Value: %s', key, data[key]);
//}

// Delete the user property 'DISPLAY_UNITS'.
//var userProperties = PropertiesService.getUserProperties().getProperty('DISPLAY_UNITS');
//Logger.log(userProperties);

//function exportToPDF() {    
//  var url = "https://docs.google.com/spreadsheets/d/1oQ2zsbcCwuc_wdwgfFopRJn-5fGN3oY7L237ivxuxmM/export?exportFormat=pdf"; //add your options as you wish
//  var res = UrlFetchApp.fetch(url, {headers:{"Authorization":"Bearer " + ScriptApp.getOAuthToken()},muteHttpExceptions:true});
//  var newPdf = Utilities.newBlob(res.getContent(), "application/pdf", "Export.pdf")
//  DriveApp.createFile(newPdf);
//}

  
//function pdfFile()
//{
//
//var docs = DriveApp.getFilesByType(MimeType.PDF);
//while (docs.hasNext()) {
// var doc = docs.next();
// Logger.log(doc.getName())
//}

// var url = "https://docs.google.com/spreadsheets/d/1oQ2zsbcCwuc_wdwgfFopRJn-5fGN3oY7L237ivxuxmM/export?exportFormat=pdf"; //add your options as you wish
//  var res = UrlFetchApp.fetch(url, {headers:{"Authorization":"Bearer " + ScriptApp.getOAuthToken()},muteHttpExceptions:true});
//  var newPdf = Utilities.newBlob(res.getContent(), "application/pdf", "Export.pdf")
//  //var ggg =  DriveApp.createFile(newPdf);
//var section=CardService.newCardSection().setHeader("Google Services");
//   section.addWidget(CardService.newImage().setImageUrl(
//                  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png'))
//createTextOutput(newPdf);

//   var url = "https://docs.google.com/spreadsheets/d/1oQ2zsbcCwuc_wdwgfFopRJn-5fGN3oY7L237ivxuxmM/export?exportFormat=pdf"; //add your options as you wish
//  var res = UrlFetchApp.fetch(url, {headers:{"Authorization":"Bearer " + ScriptApp.getOAuthToken()},muteHttpExceptions:true});
//  var newPdf = Utilities.newBlob(res.getContent(), "application/pdf", "Export.pdf")
//  DriveApp.createFile(newPdf);


// create the document
//var doc = DocumentApp.create('Sample Document - Landscape Mode');
//var body = doc.getBody().setPageHeight(595.276).setPageWidth(841.89);
// add lots of content...
// ensure all content is added to the PDF
// see:  https://stackoverflow.com/a/44481513/1063287
//doc.saveAndClose();
// create the pdf file
//var pdf_file = doc.getAs("application/pdf");

// see:  https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object)
// GmailApp.sendEmail('user@test.com', 'Attachment example', 'Please see the attached file.', {
//     attachments: [pdf_file],
//     name: 'Test Name'
// });

    
}






function redirect()
{

var html_from_file = HtmlService.createTemplate('<p>Hello Word</p>').evaluate().getContent();

//var html_from_file = HtmlService.createTemplateFromFile("<body onload=window.open("https:www.google.com","_blank")>' + '</body>").evaluate().getContent();
var actionss = CardService.newAuthorizationAction().setAuthorizationUrl('https://www.google.com');
var emailAddress = Session.getEffectiveUser().getEmail();
var encoded = Utilities.base64Encode(emailAddress);
//Logger.log(encoded);
var data = { email:emailAddress };
var payload = JSON.stringify(data);
var exampleCard = CardService.newCardBuilder();
var section=CardService.newCardSection().setHeader("Google Services");
var url = 'https://www.phptpoint.com/wp-content/uploads/2018/10/php-tutorial-pdf.pdf';
  var imgHtml = UrlFetchApp.fetch(url);
  //var pdfData = imgHtml.getText();

Logger.log(imgHtml.getContentText());
//while (docs.hasNext()) {
// var doc = docs.next();
// Logger.log(doc.getName())
//}

  //var tmpHtml = HtmlService.createTemplate(imgHtml);
 // var contHtml = tmpHtml.getRawContent();
 //Logger.log(docs);

section.addWidget(CardService.newImageButton()
    .setAltText("An image button with an airplane icon.")
    .setIcon(CardService.Icon.AIRPLANE)
    .setOpenLink(CardService.newOpenLink()
        .setUrl("https://www.gomarketin.com")))

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);



section.addWidget(CardService.newTextButton()
                  .setText("This button opens a link in an overlay window")
                  .setOpenLink(CardService.newOpenLink()
                  .setUrl("http://localhost/sandeep/gmail_addon?email="+encoded)
                  .setOpenAs(CardService.OpenAs.FULL_SIZE)
                  .setOnClose(CardService.OnClose.NOTHING)))
                  section.addWidget(CardService.newImage().setImageUrl(
                  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png'))
//section.addWidget(CardService.getAs("application/pdf").setContent(url));
//section.addWidget(CardService.newTextButton()
//                  .setText('Authorize')
//                  .setAuthorizationAction(actionss))
//section.addWidget(CardService.newKeyValue().setContent(html_from_file))                  
exampleCard.addSection(section);
return [exampleCard.build()];
}




function notificationCallback() {
return CardService.newUniversalActionResponseBuilder()
        .setOpenLink(CardService.newOpenLink()
        .setUrl("https://www.wdipl.com"))
        .build();
}

function notificationCallback1() {
return CardService.newActionResponseBuilder()
    .setOpenLink(CardService.newOpenLink()
        .setUrl("https://www.youtube.com/"))
    .build();
}

function notificationCallback2() {
return CardService.newUniversalActionResponseBuilder()
    .setOpenLink(CardService.newOpenLink()
        .setUrl("https://www.wdipl.com"))
        .build();

}

function notificationCallback3() { 
  return CardService.newUniversalActionResponseBuilder()
    .setOpenLink(CardService.newOpenLink()
        .setUrl("https://mail.google.com/"))
        .build();

}


.setOnClickAction(action);

https://drive.google.com/open?id=0B0xXxOsTJ2Mfc3RhcnRlcl9maWxlX2Rhc2hlclYw
https://drive.google.com/open?id=1SiHZXFUpQG9ZD8JEf33dxeTjqbMg0alK