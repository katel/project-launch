// Twitter account usernames of admin users
var ADMIN_USERS = ['your twitter user name goes here'];

Template.admin.helpers({
  emails: function() {
    return Emails.find().fetch();

  }
})




Meteor.subscribe('userData');
Meteor.subscribe('emails');
