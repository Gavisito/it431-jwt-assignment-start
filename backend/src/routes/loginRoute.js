import { getDbConnection } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req, res) => {
        //TODO: 1. Uncomment the following lines to enable jwt authentication


         const { email, password } = req.body;
         const db = getDbConnection('react-auth-db');
         const user = await db.collection('users').findOne({ email })

         if (!user) {
             return res.sendStatus(401);
         }

         const { _id: id, isVerified, passwordHash, info } = user;
         const isCorrect = passwordHash ? await bcrypt.compare(password, passwordHash) : false;

         if (isCorrect) {
             jwt.sign({ id, isVerified, email, info }, process.env.JWT_SECRET, { expiresIn: "2d" }, (err, token) => {
                 if (err) {
                     res.status(500).json(err);
                 }
                 res.status(200).json({ token });
             })
         } else {
             res.sendStatus(401);
         }

    },
};