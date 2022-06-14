let users = [
   // { id: 1, name: "Hannan", email: "hannan@gmail.com" },
   // { id: 2, name: "Reza", email: "reza@gmail.com" },
];

module.exports = {
   getusers: (req, res) => {
      res.render("pages/user/index", { users });
   },
   post: (req, res) => {
      users.push(req.body);
      res.send({
         status: true,
         message: "Data berhasil di input",
         data: users,
         method: req.method,
         url: req.url,
      });
   },
   update: (req, res) => {
      const id = req.params.id;
      users.filter((user) => {
         if (user.id == id) {
            user.id = id;
            user.name = req.body.name;
            user.email = req.body.email;

            return user;
         }
      });
      res.json({
         status: true,
         message: "Data berhasil di Update",
         data: users,
         method: req.method,
         url: req.url,
      });
   },
   delete: (req, res) => {
      let id = req.params.id;
      users = users.filter((user) => user.id != id);
      res.send({
         status: true,
         message: "Data berhasil di Delete",
         data: users,
         method: req.method,
         url: req.url,
      });
   },
};
