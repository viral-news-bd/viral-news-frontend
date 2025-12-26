const mongoose = require('mongoose');
require('dotenv').config();

// ১. .env থেকে লিঙ্কটি নেওয়া
const dbURI = process.env.MONGODB_URI;

// ২. ডাটাবেসে কানেক্ট করা
mongoose.connect(dbURI)
    .then(() => {
        console.log("------------------------------------------");
        console.log("অভিনন্দন! আপনার ক্লাউড ডাটাবেস সফলভাবে কানেক্ট হয়েছে।");
        console.log("------------------------------------------");
    })
    .catch((err) => {
        console.log("কানেকশন ফেইলড! আপনার পাসওয়ার্ড বা আইপি চেক করুন।");
        console.error(err);
    });

// ৩. একটি সাধারণ সার্ভার রানিং মেসেজ
console.log("সার্ভার চালু করার চেষ্টা করা হচ্ছে...");