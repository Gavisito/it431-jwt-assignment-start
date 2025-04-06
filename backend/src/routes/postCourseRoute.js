import { getDbConnection } from "../db";
import jwt from 'jsonwebtoken';

export const postCourseRoute = {
    path: '/api/course',
    method: 'post',
    handler: async (req, res) => {
        //TODO: 4 - Comment logic below to add authentication and save new course

         const { authorization } = req.headers;

         //verify header was sent
         if (!authorization || authorization === "Bearer null") {
             console.log("header missing");
             return res.status(401).json({ message: "No authorization header sent." });
         }

         //verify token hasn't been altered
         //header token format is "Bearer sdfasf;asdfsdf;asdsadf"
         const token = authorization.split(' ')[1];
         jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
             if (err) {
                 console.log(err);
                 return res.status(401).json({ message: "Token Verification Failed." })
             } else {

         //Basic course creation without JWT verification
        const db = getDbConnection('courses');
        const result = await db.collection('courses').insertOne(req.body);
        const insertedCourse = await db.collection('courses').findOne({ _id: result.insertedId });
        res.status(201).json({
            message: 'Course created successfully',
            course: insertedCourse,
        });
             }
         })
    },
};