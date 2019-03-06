function redirect()
{
var action = CardService.newAction().setFunctionName('sendEmailWithAttachments');
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
//Logger.log(imgHtml.getContentText());

        
section.addWidget(CardService.newImageButton()
    .setAltText("An image button with an airplane icon.")
    .setIcon(CardService.Icon.AIRPLANE).setOnClickAction(action))

section.addWidget(CardService.newTextButton()
                  .setText("This button opens a link in an overlay window")
                  .setOpenLink(CardService.newOpenLink()
                  .setUrl("http://localhost/sandeep/gmail_addon?email="+encoded)
                  .setOpenAs(CardService.OpenAs.FULL_SIZE)
                  .setOnClose(CardService.OnClose.NOTHING)))
                  section.addWidget(CardService.newImage().setImageUrl(
                  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png'))
                 
exampleCard.addSection(section);
return [exampleCard.build()];
}








function sendEmailWithAttachments() {

  var attachments = ["0B0xXxOsTJ2Mfc3RhcnRlcl9maWxlX2Rhc2hlclYw", "1SiHZXFUpQG9ZD8JEf33dxeTjqbMg0alK"];

  var message = {
    to: {
      name: "Google Scripts",
      email: "sandeep.chaurasiya@wdipl.com"
    },
    from: {
      name: "Amit Agarwal",
      email: "sandeep.chaurasiya@wdipl.com"
    },
    body: {
      text: "Mr hänn is schon lang nümme g'she.",
      html: "Mr hänn is schon <b>lang nümme</b> g'she."
    },
    subject: "ctrlq, tech à la carte",
    files: getAttachments_(attachments)
  };

  // Compose Gmail message and send immediately
  callGmailAPI_(message);

}


function callGmailAPI_(message) {

  var payload = createMimeMessage_(message);

  var response = UrlFetchApp.fetch(
    "https://www.googleapis.com/upload/gmail/v1/users/sandeep.chaurasiya@wdipl.com/messages/send?uploadType=media", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + ScriptApp.getOAuthToken(),
        "Content-Type": "message/rfc822",
      },
      muteHttpExceptions: true,
      payload: payload
    });

  Logger.log(response.getResponseCode());
  Logger.log(response.getContentText());

}

// UTF-8 characters in names and subject
function encode_(subject) {
  var enc_subject = Utilities.base64Encode(subject, Utilities.Charset.UTF_8);
  return '=?utf-8?B?' + enc_subject + '?=';
}

// Insert file attachments from Google Drive
function getAttachments_(ids) {
  var att = [];
  for (var i in ids) {
    var file = DriveApp.getFileById(ids[i]);
    att.push({
      mimeType: file.getMimeType(),
      fileName: file.getName(),
      bytes: Utilities.base64Encode(file.getBlob().getBytes())
    });
  }
  return att;
}

// Create a MIME message that complies with RFC 2822
function createMimeMessage_(msg) {

  var nl = "\n";
  var boundary = "__ctrlq_dot_org__";

  var mimeBody = [

    "MIME-Version: 1.0",
    "To: "      + encode_(msg.to.name) + "<" + msg.to.email + ">",
    "From: "    + encode_(msg.from.name) + "<" + msg.from.email + ">",
    "Subject: " + encode_(msg.subject), // takes care of accented characters

    "Content-Type: multipart/alternative; boundary=" + boundary + nl,
    "--" + boundary,

    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64" + nl,
    Utilities.base64Encode(msg.body.text, Utilities.Charset.UTF_8) + nl,
    "--" + boundary,

    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: base64" + nl,
    Utilities.base64Encode(msg.body.html, Utilities.Charset.UTF_8) + nl

  ];

  for (var i = 0; i < msg.files.length; i++) {

    var attachment = [
      "--" + boundary,
      "Content-Type: " + msg.files[i].mimeType + '; name="' + msg.files[i].fileName + '"',
      'Content-Disposition: attachment; filename="' + msg.files[i].fileName + '"',
      "Content-Transfer-Encoding: base64" + nl,
      msg.files[i].bytes
    ];

    mimeBody.push(attachment.join(nl));

  }

  mimeBody.push("--" + boundary + "--");

  return mimeBody.join(nl);

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




