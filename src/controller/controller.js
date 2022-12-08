var Todo = require("../models/schema")

var path = require("path");
var fs = require('fs');

class class1 {

    static a = async (req, res) => {

        try {

            let data = new Todo({

                username: req.body.username,
                password: req.body.password

            });

            await data.save();

            res.send('Data Uploaded')

        } catch (err) {

            console.log(err);

        }

    }

    static login = async (req, res) => {

        try {

            var a = await Todo.findOne({ username: req.body.username })
            if(a==null){
                res.send("usernot found"); 
            }else{
                if(a.password==req.body.password){
                    res.send("User Found Success");
                }else{
                    res.send("Invalid password ");
                }
            }

        } catch (err) {

            console.log(err);

        }

    }

    static user = async (req, res) => {

        try {

            var a = await Todo.find({})

            res.send(a);

        } catch (err) {

            console.log(err);

        }

    }

    static upload = async (req, res) => {

        try {

            var user = await Todo.find({username:req.params.id})
            if(user==null){
                res.send("please signup first"); 
            }else{

                var picture = user[0].pic

            for(var i=0;i<=req.files.length - 1 ;i++){

                var a = req.files[i].originalname ;
                
                var b = a.split('.')

                var fileformat = b[b.length - 1] ;

                var imageid1 = path.join(__dirname, "../../public", req.files[i].filename);
                var imageid2 = path.join(__dirname, "../../public", req.files[i].filename + "." + fileformat);

                picture.push(req.files[i].filename + "." + fileformat)

                fs.rename(imageid1, imageid2, function (err) {
                    if (err) console.log('ERROR: ' + err);
                })

            }

            var updateuser = await Todo.findOneAndUpdate({ username:req.params.id }, { $set: { pic: picture } });
            await updateuser.save();

            res.send("files uploaded");

            }

        } catch (err) {
            console.log(err);
        }

    }

    static delete = async (req, res) => {

        try {

            await Todo.find({ }).deleteMany();

            res.send('Data deleted')

        } catch (err) {

            console.log(err);

        }

    }

}

module.exports = { class1 };
