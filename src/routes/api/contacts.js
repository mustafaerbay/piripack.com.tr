// // src/routes/api/contact.js
// import sendMail from '$lib/mailer';

// export async function POST({ request }) {
//     const { email, subject, message } = await request.json();

//     try {
//         await sendMail(email, subject, message);
//         return new Response(JSON.stringify({ success: true }), { status: 200 });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
//     }
// }
