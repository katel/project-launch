 Meteor.publish("userData", function() {
   return Meteor.users.find({
     _id: this.userId
   }, {
     fields: {
       'services.twitter.username': 1,
       'username': 1
     }
   });
 });
 Meteor.publish("emails", function() {
   if (this.userId) {
     return Emails.find();
   }
 });
 Meteor.methods({
   insertEmail: function(doc) {
     Emails.insert(doc);
   }
 })
