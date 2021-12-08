import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
// import Mail = require("nodemailer/lib/mailer");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();
require('dotenv').config();

const {SENDER_EMAIL, SENDER_PASWWORD} = process.env;

exports.sendEmailNotification = functions.firestore.document('users/{docId}')
    .onCreate((snap, ctx) => {
      const data = snap.data();

        const authData = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: SENDER_EMAIL,
                pass: SENDER_PASWWORD
            }
        });

        authData.sendMail({
            from: 'levelupcluster@gmail.com',
            to: 'ggournay.css@Mail.com',
            subject: 'Test envoi mail',
            text: 'Ceci est un test',
            html: data
        }).then (
            res => console.log('Successfully sent that mail')
        ).catch (
            err => console.log(err)
        );

    });
