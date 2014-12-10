Template.signup.events({
  'submit form': function(evt, tmpl) {
    var email = tmpl.find('input').value,
      doc = {
        email: email,
        referrer: document.referrer,
        timestamp: new Date()
      }
    if (EMAIL_REGEX.test(email)) {
      Session.set("showBadEmail", false);
      Meteor.call("insertEmail", doc);
      Session.set("emailSubmitted", true);
    } else {
      Session.set("showBadEmail", true);
    }
    return false;
  }
});

Template.signup.helpers({
  showBadEmail: function() {
    return Session.get("showBadEmail");
  },
  emailSubmitted: function() {
    return Session.get("emailSubmitted");

  }

});

//
// Template.signup.showBadEmail = function() {
//   return Session.get("showBadEmail");
// };
// Template.signup.emailSubmitted = function() {
//   return Session.get("emailSubmitted");
// };
