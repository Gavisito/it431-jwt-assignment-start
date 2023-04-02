import { ObjectId } from 'mongodb';
import { getDbConnection } from '../db';
import jwt from 'jsonwebtoken';

export const putCourseRoute = {
    path: '/api/course/:id',
    method: 'put',
    handler: async (req, res) => {
        //TODO: 5 - Uncomment below to enable authentication and update the course
        // const { authorization } = req.headers;

        // //verify header was sent
        // if (!authorization || authorization === "Bearer null") {
        //     console.log("header missing");
        //     return res.status(401).json({ message: "No authorization header sent." });

        // }

        // //verify token hasn't been altered
        // //header token format is "Bearer sdfasf;asdfsdf;asdsadf"
        // const token = authorization.split(' ')[1];
        // jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        //     if (err) {
        //         console.log(err);
        //         return res.status(401).json({ message: "Token Verification Failed." })
        //     } else {
        //         const { id } = req.params;

        //         const query = { "_id": new ObjectId(id) };
        //         const db = getDbConnection('courses');

        //         const existingCourse = await db.collection('courses').findOne(query);

        //         if (existingCourse) {
        //             const courseData = req.body;
        //             //exclude the _id field from being updated
        //             delete courseData._id;

        //             const result = await db.collection('courses').findOneAndUpdate(
        //                 { _id: new ObjectId(id) },
        //                 { $set: courseData },
        //                 { returnOriginal: false }
        //             );

        //             res.status(200).send(result.value);
        //         } else {
        //             res.status(404).send('course not found');
        //         }



        // }
        //})



    },
};