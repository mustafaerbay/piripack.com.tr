// let url = 'http://localhost:8080/api/v1';
// export const createSchool = async (body) => {

//     try {
//         const userRes = await fetch(`${url}/payroll/school`, {
//             method: 'POST',
//             // redirect: 'follow',
//             body: body,
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Add any other headers if needed
//             },
//         });
//         if (!userRes.ok) {
//             throw new Error('Failed to create school');
//         }

//         const userData = await userRes.json();
//         return userData;
//     } catch (error) {
//         // @ts-ignore
//         console.error('Error creating school:', error.message);
//         throw error;
//     }

// }