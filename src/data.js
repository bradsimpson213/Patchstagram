
const user1 = 
    {
        id: 1,
        username: "Patchenator",
        fullName: "Patch",
        email: "patch_the_cat@gmail.com",
        passwod: "ILuvFud",
        profilePic: "https://res.cloudinary.com/app-academy4/image/upload/v1647912257/Patchstagram/IMG_3074_ubqe1e.jpg",
        bio: "I love naps and food",
        age: 5,
    }
const user2 = 
    {
        id: 2,
        username: "Blueberry44",
        fullName: "Blue",
        email: "blue@aol.com",
        passwod: "meowmeow",
        profilePic: "https://res.cloudinary.com/app-academy4/image/upload/v1647912128/Patchstagram/66346842095__0566A55A-DF10-4E86-A59A-F5694436FA4E_wmoi1w.jpg",
        bio: "I am a ninja! 🥷🏻",
        age: 5,
    }

const users = [user1, user2];


const posts = [
    {
        id: 1,
        title: "Napping Outside is always fun...",
        author: user1,
        date: "3/17/22",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912033/Patchstagram/IMG_3394_fktg48.jpg",
        likes: 6,
    },
    {
        id: 2,
        title: "Napping inside is pretty awesome too...",
        author: user1,
        date: "3/20/22",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912403/Patchstagram/64865942444__2B7B1A74-ECAF-4798-BEAB-D4890B7164C4_hnmowy.jpg",
        likes: 9,
    },
    {
        id: 3,
        title: "I like my fish",
        author: user2,
        date: "3/12/22",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912006/Patchstagram/IMG_3437_u2frrk.jpg",
        likes: 14,
    }
];

export { users, posts };