Template.main.helpers({
  showAdmin: function() {
    return Session.get("showAdmin");
  }
});





Template.footer.events({
  'click .login': function(evt, tmpl) {
    Meteor.loginWithTwitter();
    return false;
  },
  'click .admin': function(evt, tmpl) {
    Session.set("showAdmin", !Session.get("showAdmin"));
  }
})
