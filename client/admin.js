// Twitter account usernames of admin users
var ADMIN_USERS = ['katelomax'];

Template.admin.helpers({
  emails: function() {
    return Emails.find().fetch();

  }
})




Meteor.subscribe('userData');
Meteor.subscribe('emails');
