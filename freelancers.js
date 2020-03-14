const data = {
   hamburg: {
      name: "hamburg",
      freelancer: [
         {
            name: "Linus Rogge",
            title: "FE Dev / UI/UX Design",
            website: "https://linuscodes.com",
            mail: "moin@linuscodes.com"
         },
         {
            name: "Karsten Buckstegge",
            title: "Illustration & Development",
            website: "https://karstenbuckstegge.de"
         },
         {
            name: "Hannes Diercks",
            title: "JavaScript architect",
            website: "https://xiphe.net"
         }
      ]
   },
   leipzig: {
      name: "leipzig",
      freelancer: [
         {
            name: "Justin Schueler",
            title: "Digital Designer",
            website: "https://jschueler.com",
            mail: "hej@jschueler.com"
         }
      ]
   },
   berlin: {
      name: "berlin",
      freelancer: [
         {
            name: "Anna Melzer",
            title: "Software Engineer & Trainer FE",
            website: "https://stackoverflow.com/users/story/1554773",
            xing: "https://www.xing.com/profile/Anna_Melzer",
         }
      ]
   }
};

var app = new Vue({
   el: "#app",
   data() {
      return {
         data
      };
   }
});
